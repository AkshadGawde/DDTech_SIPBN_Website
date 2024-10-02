// pages/ticket-purchase.js

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { db } from '../lib/firebase';
import { doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// Initialize Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const TicketPurchase = () => {
    const router = useRouter();
    const { eventId } = router.query;
    const [expandedTickets, setExpandedTickets] = useState({});
    const toggleExpand = (ticketName) => {
        setExpandedTickets((prevState) => ({
            ...prevState,
            [ticketName]: !prevState[ticketName],
        }));
    };

    // State variables
    const [eventDetails, setEventDetails] = useState(null);
    const [quantities, setQuantities] = useState({});
    const [cart, setCart] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [couponCode, setCouponCode] = useState('');
    const [appliedCoupon, setAppliedCoupon] = useState(null);
    const [couponError, setCouponError] = useState('');

    // Fetch event details when eventId changes
    useEffect(() => {
        const fetchEventDetails = async () => {
            if (!eventId) return;

            console.log(`Fetching event details for eventId: ${eventId}`);

            try {
                const eventDocRef = doc(db, 'events', eventId);
                const eventDoc = await getDoc(eventDocRef);

                if (eventDoc.exists()) {
                    const eventData = eventDoc.data();
                    console.log('Event Data:', eventData);

                    // Ensure the tickets are in the correct format (as an object)
                    const ticketsMap = eventData.tickets || {};

                    // Transform the ticket data if necessary
                    for (const ticketName in ticketsMap) {
                        const ticket = ticketsMap[ticketName];
                        if (ticket) {
                            ticketsMap[ticketName] = {
                                ...ticket,
                                sold: typeof ticket.sold === 'string' ? parseInt(ticket.sold, 10) : ticket.sold,
                                available: typeof ticket.available === 'string' ? parseInt(ticket.available, 10) : ticket.available,
                                price: typeof ticket.price === 'string' ? parseFloat(ticket.price) : ticket.price,
                            };
                        } else {
                            console.warn(`Ticket "${ticketName}" is malformed or missing.`);
                        }
                    }

                    console.log('Transformed Tickets Map:', ticketsMap);

                    setEventDetails({ ...eventData, tickets: ticketsMap });

                    // Initialize quantities based on available tickets
                    const initialQuantities = Object.keys(ticketsMap).reduce((acc, ticketName) => {
                        acc[ticketName] = 0;
                        return acc;
                    }, {});

                    setQuantities(initialQuantities);
                } else {
                    console.error('Event not found');
                    setError('Event not found');
                }
            } catch (fetchError) {
                console.error('Error fetching event details:', fetchError);
                setError('Error fetching event details. Please try again later.');
            }
        };

        fetchEventDetails();
    }, [eventId]);

    // Function to add a ticket to the cart
    const addToCart = (ticket) => {
        console.log(`Adding ticket to cart: ${ticket.name}`);

        const ticketPrice = parseFloat(ticket.price);
        if (isNaN(ticketPrice)) {
            console.error(`Invalid price for ticket "${ticket.name}":`, ticket.price);
            setError(`Invalid price for ticket "${ticket.name}". Please contact support.`);
            return;
        }

        const existingTicket = cart.find(item => item.name === ticket.name);
        let updatedCart;

        if (existingTicket) {
            const newQuantity = existingTicket.quantity + 1;
            updatedCart = cart.map(item => 
                item.name === ticket.name ? { ...item, quantity: newQuantity } : item
            );
            console.log(`Updated quantity for "${ticket.name}":`, newQuantity);
        } else {
            updatedCart = [...cart, { ...ticket, price: ticketPrice, quantity: 1 }];
            console.log(`Added new ticket to cart:`, { ...ticket, price: ticketPrice, quantity: 1 });
        }

        setCart(updatedCart);
        setQuantities({
            ...quantities,
            [ticket.name]: (quantities[ticket.name] || 0) + 1
        });
    };

    // Function to update ticket quantity in the cart
    const updateCartQuantity = (ticketName, change) => {
        console.log(`Updating quantity for "${ticketName}" by ${change}`);

        const existingTicket = cart.find(item => item.name === ticketName);
        if (!existingTicket && change === -1) {
            // Trying to decrease quantity of a ticket not in the cart
            console.warn(`Cannot decrease quantity. Ticket "${ticketName}" not in cart.`);
            return;
        }

        let updatedCart;

        if (change === 1 && !existingTicket) {
            // If increasing and ticket not in cart, add it
            const ticket = eventDetails.tickets[ticketName];
            if (ticket) {
                addToCart(ticket);
                return;
            } else {
                console.error(`Ticket "${ticketName}" not found in event details.`);
                setError(`Ticket "${ticketName}" not found. Please contact support.`);
                return;
            }
        }

        const newQuantity = existingTicket ? existingTicket.quantity + change : 0;

        if (newQuantity < 0) {
            console.warn(`Quantity for "${ticketName}" cannot be negative.`);
            return;
        }

        if (newQuantity === 0) {
            // Remove ticket from cart
            updatedCart = cart.filter(item => item.name !== ticketName);
            console.log(`Removed "${ticketName}" from cart.`);
        } else {
            // Update quantity
            updatedCart = cart.map(item => 
                item.name === ticketName ? { ...item, quantity: newQuantity } : item
            );
            console.log(`Updated quantity for "${ticketName}" to ${newQuantity}.`);
        }

        setCart(updatedCart);
        setQuantities({
            ...quantities,
            [ticketName]: newQuantity
        });
    };

    // Function to apply coupon
    const applyCoupon = async () => {
        setCouponError('');
        if (!couponCode.trim()) {
            setCouponError('Please enter a coupon code');
            return;
        }

        try {
            const couponsRef = collection(db, 'coupons');
            const q = query(couponsRef, where('code', '==', couponCode.trim()));
            const querySnapshot = await getDocs(q);

            if (querySnapshot.empty) {
                setCouponError('Invalid coupon code');
                return;
            }

            const couponData = querySnapshot.docs[0].data();
            setAppliedCoupon(couponData);
            setCouponCode(''); // Clear the input field
        } catch (error) {
            console.error('Error applying coupon:', error);
            setCouponError('Error applying coupon. Please try again.');
        }
    };

    // Function to calculate discount amount
    const calculateDiscount = () => {
        if (!appliedCoupon) return 0;

        const subtotal = cart.reduce((acc, ticket) => acc + (ticket.price * ticket.quantity), 0);
        const discountAmount = subtotal * (appliedCoupon.discountPercentage / 100);
        return Math.min(discountAmount, appliedCoupon.maxDiscount);
    };

    // Function to calculate the transaction fee (4% of discounted ticket total)
    const calculateTransactionFee = () => {
        const subtotal = cart.reduce((acc, ticket) => acc + (ticket.price * ticket.quantity), 0);
        const discount = calculateDiscount();
        const discountedTotal = subtotal - discount;
        const fee = discountedTotal * 0.04; // 4% transaction fee
        return fee.toFixed(2);
    };

    // Function to calculate total price including discount and fee
    const calculateTotal = () => {
        const subtotal = cart.reduce((acc, ticket) => acc + (ticket.price * ticket.quantity), 0);
        const discount = calculateDiscount();
        const discountedTotal = subtotal - discount;
        const fee = discountedTotal * 0.04; // 4% transaction fee
        const totalWithFee = discountedTotal + fee;
        return totalWithFee.toFixed(2);
    };

    // Function to handle checkout
    const handleCheckout = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        console.log('Initiating checkout process.');

        if (cart.length === 0) {
            console.warn('Checkout attempted with an empty cart.');
            setError('Your cart is empty');
            setIsLoading(false);
            return;
        }

        if (!name.trim()) {
            console.warn('Checkout attempted without providing a name.');
            setError('Please provide your name');
            setIsLoading(false);
            return;
        }

        if (!email.trim()) {
            console.warn('Checkout attempted without providing an email.');
            setError('Please provide your email');
            setIsLoading(false);
            return;
        }

        if (!mobileNumber.trim()) {
            console.warn('Checkout attempted without providing a mobile number.');
            setError('Please provide your mobile number');
            setIsLoading(false);
            return;
        }

        // Optional: Validate mobile number format
        const mobileRegex = /^[0-9]{10,15}$/; // Adjust regex as per your requirements
        if (!mobileRegex.test(mobileNumber)) {
            console.warn('Invalid mobile number format.');
            setError('Please provide a valid mobile number');
            setIsLoading(false);
            return;
        }

        // Check ticket availability
        const availableTickets = Object.keys(eventDetails.tickets).reduce((acc, ticketName) => {
            acc[ticketName] = eventDetails.tickets[ticketName].available - (quantities[ticketName] || 0);
            return acc;
        }, {});

        console.log('Available Tickets After Cart:', availableTickets);

        const overbookedTickets = cart.filter(ticket => ticket.quantity > availableTickets[ticket.name]);

        if (overbookedTickets.length > 0) {
            console.warn('Attempting to book more tickets than available:', overbookedTickets);
            setError(`You are trying to book more tickets than available for: ${overbookedTickets.map(ticket => ticket.name).join(', ')}`);
            setIsLoading(false);
            return;
        }

        try {
            // Create a checkout session
            const response = await fetch('/api/create-checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    cart,
                    name,
                    email,
                    mobileNumber,
                    eventId,
                    appliedCoupon: appliedCoupon ? {
                        code: appliedCoupon.code,
                        discountAmount: calculateDiscount()
                    } : null,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                // Redirect to Stripe Checkout
                window.location.href = data.url;
            } else {
                console.error('Error creating checkout session:', data.error);
                setError(data.error || 'An error occurred while processing your payment.');
            }
        } catch (err) {
            console.error('Error during checkout:', err);
            setError('An unexpected error occurred. Please try again.');
        }

        setIsLoading(false);
    };

    return (
        <Elements stripe={stripePromise}>
            <section className="py-24 relative bg-gradient-to-r from-black from-60% to-indigo-800 text-white">
                <div className="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto">
                    {eventDetails ? (
                        <>
                            <h2 className="font-manrope font-bold text-4xl leading-10 mb-8 text-center text-white">
                                {eventDetails.name}
                            </h2>
                            <p className="mb-4 text-center">Date: {eventDetails.date}</p>
                            <p className="mb-8 text-center">{eventDetails.description}</p>
    
                            {/* Main layout container */}
                            <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
    
                                {/* Left section for ticket categories */}
                                <div className="lg:w-2/3">
                                    <h3 className="font-normal text-2xl mb-2">Ticket Categories</h3>
                                    <p className='mb-4 text-sm font-light'>Tue, 26 Nov 2024 8:00 AM - Wed, 27 Nov 2024 9:00 PM AEDT</p>
                                    <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
                                        {Object.keys(eventDetails.tickets).map((ticketName) => {
                                            const ticket = eventDetails.tickets[ticketName];
                                            const isExpanded = expandedTickets[ticketName];
                                            return (
                                                <div key={ticketName} className="bg-gradient-to-br from-blue-700 via-blue-500 to-blue-700 rounded-lg shadow-md p-4 mb-2">
    
                                                    <div className='flex justify-between'>
                                                        <div>
                                                            <h3 className="text-2xl font-semibold mb-1">{ticket.name}</h3>
                                                            <p className='text-sm'>Available Tickets: {parseInt(ticket.available)}</p>
                                                        </div>
                                                        <div className="flex ml-4 justify-center">
                                                            <button 
                                                                onClick={() => updateCartQuantity(ticket.name, -1)}
                                                                className="bg-gray-400 text-white px-3 py-1 mr-2 rounded-lg hover:bg-gray-300 transition duration-200"
                                                            >
                                                                -
                                                            </button>
                                                            <span className="mx-2 my-1">{quantities[ticket.name]}</span>
                                                            <button 
                                                                onClick={() => updateCartQuantity(ticket.name, 1)}
                                                                className="bg-blue-600 text-white px-3 py-1 ml-2 rounded-lg hover:bg-blue-500 transition duration-200"
                                                            >
                                                                +
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <p>A${parseFloat(ticket.price).toFixed(2)}</p>
                                                    <p className='text-sm my-1'>Description: {ticket.description}</p>
    
                                                    {/* Read More Section */}
                                                    {isExpanded && (
                                                        <div className="mt-2">
                                                            <p className="text-sm">
                                                                {/* Add any additional details you want to show when expanded */}
                                                                Additional details can be shown here when expanded.
                                                            </p>
                                                        </div>
                                                    )}
    
                                                    <button 
                                                        className="text-white-500 font-extralight mt-2 focus:outline-none hover:underline"
                                                        onClick={() => toggleExpand(ticketName)}
                                                    >
                                                        {isExpanded ? 'Read Less ↑' : 'Read More ↓'}
                                                    </button>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
    
                                {/* Right section for cart and form */}
                                <div className="lg:w-fit flex flex-col items-center justify-between h-full bg-gradient-to-br from-blue-700 via-blue-500 to-blue-700 px-8 py-5 mt-[75px] rounded-2xl">
                                    <h3 className="text-2xl mb-4">Order Summary: </h3>
                                    {cart.length === 0 ? (
                                        <p>No tickets in cart.</p>
                                    ) : (
                                        <ul className="rounded-lg p-4 mb-4">
                                            {cart.map((ticket, index) => (
                                                <li key={index} className="border-b border-gray-700 py-2 flex font-thin justify-between items-center">
                                                    <span className='text-xl'>{ticket.name} (x{ticket.quantity}) - A${(ticket.price * ticket.quantity).toFixed(2)}</span>
                                                </li>
                                            ))}
                                            <li className="mt-3 font-extralight">Ticket Total: A${cart.reduce((acc, ticket) => acc + (ticket.price * ticket.quantity), 0).toFixed(2)}</li>
                                            {appliedCoupon && (
                                                <li className="mt-3 font-extralight text-green-300">Discount: -A${calculateDiscount().toFixed(2)}</li>
                                            )}
                                            <li className="font-extralight mt-3">Transaction Fee (4%): A${calculateTransactionFee()}</li>
                                            <hr />
                                            <li className="mt-2 font-semibold text-xl">Total: A${calculateTotal()}</li>
                                        </ul>
                                    )}

                                    {/* Coupon Code Section */}
                                    <div className="mb-4 w-full">
                                        <label htmlFor="couponCode" className="block text-sm font-medium text-white">Coupon Code</label>
                                        <div className="flex mt-1">
                                            <input 
                                                type="text"
                                                id="couponCode"
                                                value={couponCode}
                                                onChange={(e) => setCouponCode(e.target.value)}
                                                className="flex-grow px-4 py-2 bg-gray-700 rounded-l-md border border-gray-600 text-white"
                                            />
                                            <button 
                                                onClick={applyCoupon}
                                                className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-500 transition duration-200"
                                            >
                                                Apply
                                            </button>
                                        </div>
                                        {couponError && <p className="text-red-500 mt-1 text-sm">{couponError}</p>}
                                        {appliedCoupon && (
                                            <p className="text-green-300 mt-1 text-sm">Coupon applied: {appliedCoupon.discountPercentage}% off (max A${appliedCoupon.maxDiscount})</p>
                                        )}
                                    </div>

                                    <form onSubmit={handleCheckout} className="mt-6 w-full">
                                        {/* Name Field */}
                                        <div className="mb-4">
                                            <label htmlFor="name" className="block text-sm font-medium text-white">Name</label>
                                            <input 
                                                type="text"
                                                id="name"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                required
                                                className="w-full px-4 py-2 bg-gray-700 rounded-md border border-gray-600 text-white"
                                            />
                                        </div>
    
                                        {/* Email Field */}
                                        <div className="mb-4">
                                            <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
                                            <input 
                                                type="email"
                                                id="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                                className="w-full px-4 py-2 bg-gray-700 rounded-md border border-gray-600 text-white"
                                            />
                                        </div>
    
                                        {/* Mobile Number Field */}
                                        <div className="mb-4">
                                            <label htmlFor="mobileNumber" className="block text-sm font-medium text-white">Mobile Number</label>
                                            <input 
                                                type="tel"
                                                id="mobileNumber"
                                                value={mobileNumber}
                                                onChange={(e) => setMobileNumber(e.target.value)}
                                                required
                                                pattern="[0-9]{10,15}"
                                                placeholder="e.g., 1234567890"
                                                className="w-full px-4 py-2 bg-gray-700 rounded-md border border-gray-600 text-white"
                                            />
                                        </div>
    
                                        <button 
                                            type="submit" 
                                            className={`w-full bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-500 transition duration-200 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                                            disabled={isLoading}
                                        >
                                            {isLoading ? 'Processing...' : 'Proceed to Checkout'}
                                        </button>
                                    </form>
    
                                    {error && <p className="text-red-500 mt-4">{error}</p>}
                                </div>
                            </div>
                        </>
                    ) : (
                        <p>Loading event details...</p>
                    )}
                </div>
            </section>
        </Elements>
    );
};

export default TicketPurchase;