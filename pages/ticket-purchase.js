// pages/ticket-purchase.js

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { db } from '../lib/firebase';
import { doc, getDoc, updateDoc, collection, addDoc } from 'firebase/firestore';

const TicketPurchase = () => {
    const router = useRouter();
    const { eventId } = router.query;

    // State variables
    const [eventDetails, setEventDetails] = useState(null);
    const [quantities, setQuantities] = useState({});
    const [cart, setCart] = useState([]);
    const [name, setName] = useState(''); // New state for Name
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState(''); // New state for Mobile Number
    const [error, setError] = useState('');
    const [showPaypal, setShowPaypal] = useState(false);

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

    // Function to handle checkout
    const handleCheckout = async (e) => {
        e.preventDefault();
        setError(''); // Reset error

        console.log('Initiating checkout process.');

        if (cart.length === 0) {
            console.warn('Checkout attempted with an empty cart.');
            setError('Your cart is empty');
            return;
        }

        if (!name.trim()) { // Validate Name
            console.warn('Checkout attempted without providing a name.');
            setError('Please provide your name');
            return;
        }

        if (!email.trim()) {
            console.warn('Checkout attempted without providing an email.');
            setError('Please provide your email');
            return;
        }

        if (!mobileNumber.trim()) { // Validate Mobile Number
            console.warn('Checkout attempted without providing a mobile number.');
            setError('Please provide your mobile number');
            return;
        }

        // Optional: Validate mobile number format
        const mobileRegex = /^[0-9]{10,15}$/; // Adjust regex as per your requirements
        if (!mobileRegex.test(mobileNumber)) {
            console.warn('Invalid mobile number format.');
            setError('Please provide a valid mobile number');
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
            return;
        }

        // Proceed to show PayPal buttons
        setShowPaypal(true);
        console.log('Proceeding to PayPal checkout.');
    };

    // Function to calculate the transaction fee (4% of ticket total)
    const calculateTransactionFee = () => {
        const ticketTotal = cart.reduce((acc, ticket) => acc + (ticket.price * ticket.quantity), 0);
        const fee = ticketTotal * 0.04; // 4% transaction fee
        const feeFixed = fee.toFixed(2);

        console.log('Calculated transaction fee:', feeFixed);
        return feeFixed;
    };

    // Function to calculate total price including the 4% transaction fee
    const calculateTotal = () => {
        const ticketTotal = cart.reduce((acc, ticket) => acc + (ticket.price * ticket.quantity), 0);
        const fee = ticketTotal * 0.04; // 4% transaction fee
        const totalWithFee = ticketTotal + fee;
        const totalFixed = totalWithFee.toFixed(2);

        console.log('Calculated total:', totalFixed);
        return totalFixed;
    };

    // Function to create PayPal order with total including transaction fee
    const createOrder = (data, actions) => {
        console.log('Creating PayPal order.');
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: calculateTotal(), // Send total amount (including transaction fee) to PayPal
                }
            }]
        });
    };


    const onApprove = async (data, actions) => {
        try {
            console.log('Order approval initiated.');
            // Capture the order
            const order = await actions.order.capture();
            console.log('Order captured:', order);
    
            // Log eventDetails and cart for debugging
            console.log('Event Details:', eventDetails);
            console.log('Cart:', cart);
    
            // Check if eventDetails and eventDetails.tickets are defined
            if (!eventDetails || !eventDetails.tickets) {
                throw new Error('Event details are missing or malformed.');
            }
    
            const eventDocRef = doc(db, 'events', eventId);
            const updates = {};
    
            // Iterate over each ticket in the cart
            for (const ticket of cart) {
                console.log(`Processing ticket: ${ticket.name}`);
    
                const eventTicket = eventDetails.tickets[ticket.name];
                console.log(`Event Ticket Data for "${ticket.name}":`, eventTicket);
    
                // Check if the ticket exists in eventDetails
                if (!eventTicket) {
                    throw new Error(`Ticket "${ticket.name}" not found in event details.`);
                }
    
                // Validate data types
                if (typeof eventTicket.available !== 'number' || typeof eventTicket.sold !== 'number') {
                    throw new Error(`Invalid ticket data for "${ticket.name}". "available" and "sold" should be numbers.`);
                }
    
                // Calculate new available and sold counts
                const availableCount = eventTicket.available - ticket.quantity;
                const soldCount = eventTicket.sold + ticket.quantity;
    
                // Validate availability
                if (availableCount < 0) {
                    throw new Error(`Not enough available tickets for "${ticket.name}".`);
                }
    
                // Prepare updates for Firestore
                updates[`tickets.${ticket.name}.available`] = availableCount;
                updates[`tickets.${ticket.name}.sold`] = soldCount;
            }
    
            console.log('Updates to be applied:', updates);
    
            // Update Firestore with new ticket counts
            await updateDoc(eventDocRef, updates);
            console.log('Firestore updated successfully.');
    
            // Prepare order data for the orders collection
            const orderData = {
                orderId: order.id, // PayPal transaction ID
                name: name.trim(), // Include Name
                email: email.trim(),
                mobileNumber: mobileNumber.trim(), // Include Mobile Number
                eventId: eventId,
                eventDetails: eventDetails,
                tickets: cart,
                transactionFee: parseFloat(calculateTransactionFee()),
                totalAmount: parseFloat(calculateTotal()),
                createdAt: new Date(),
                status: 'confirmed', // You can set the status according to your workflow
            };
    
            // Add order details to the orders collection
            const ordersCollectionRef = collection(db, 'orders');
            await addDoc(ordersCollectionRef, orderData);
            console.log('Order details saved in the orders collection:', orderData);
    
            // Prepare detailed ticket info for the email (like an invoice)
            const emailPayload = {
                name: name.trim(), // Include Name
                email: email.trim(),
                mobileNumber: mobileNumber.trim(), // Include Mobile Number
                eventDetails: eventDetails,
                tickets: cart.map(ticket => ({
                    name: ticket.name,
                    quantity: ticket.quantity,
                    price: ticket.price,
                    total: ticket.quantity * ticket.price, // Total for this ticket type
                })),
                orderId: order.id, // Include PayPal transaction ID
                transactionFee: calculateTransactionFee(),
                totalAmount: calculateTotal(),
            };
    
            console.log('Sending email with payload:', emailPayload);
    
            const emailResponse = await fetch('/api/send-ticket-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(emailPayload),
            });
    
            if (!emailResponse.ok) {
                const errorText = await emailResponse.text();
                console.error('Email API response error:', errorText);
                throw new Error(`Email API Error: ${errorText}`);
            }
    
            console.log('Email sent successfully.');
    
            // Clear the cart and reset quantities
            setCart([]);
            const resetQuantities = { ...quantities };
            cart.forEach(ticket => {
                resetQuantities[ticket.name] = 0;
            });
            setQuantities(resetQuantities);
            console.log('Cart and quantities reset.');
    
            // Redirect to Success Page
            router.push({
                pathname: '/successs',
                query: { name: name.trim(), email: email.trim(), mobileNumber: mobileNumber.trim(), orderId: order.id }, // Include Name, Mobile Number, and PayPal transaction ID in query
            });
            console.log('Redirecting to success page.');
        } catch (error) {
            console.error('Error in onApprove:', error);
            setError(`Error processing your order: ${error.message}. Please contact support.`);
        }
    };


    return (
        <PayPalScriptProvider options={{ "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID }}>
            <section className="py-24 relative bg-gray-900 text-white">
                <div className="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto">
                    {eventDetails ? (
                        <>
                            <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-white">
                                {eventDetails.name}
                            </h2>
                            <p className="mb-4 text-center">Date: {eventDetails.date}</p>
                            <p className="mb-8 text-center">{eventDetails.description}</p>

                            <h3 className="font-semibold text-2xl mb-2">Ticket Categories</h3>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {Object.keys(eventDetails.tickets).map((ticketName) => {
                                    const ticket = eventDetails.tickets[ticketName];
                                    return (
                                        <div key={ticketName} className="bg-gray-800 rounded-lg shadow-md p-4 mb-2">
                                            <h4 className="font-semibold">{ticket.name}</h4>
                                            <p>Description: {ticket.description}</p>
                                            <p>Price: ${parseFloat(ticket.price).toFixed(2)}</p>
                                            <p>Available Tickets: {parseInt(ticket.available)}</p>
                                            <div className="flex items-center mt-2">
                                                <button 
                                                    className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-500 transition duration-200"
                                                    onClick={() => addToCart({ name: ticketName, ...ticket })}
                                                >
                                                    Add to Cart
                                                </button>
                                                <span className="ml-2">Quantity: {quantities[ticket.name]}</span>
                                                <div className="flex ml-4">
                                                    <button 
                                                        onClick={() => updateCartQuantity(ticket.name, -1)}
                                                        className="bg-red-600 text-white py-1 px-2 rounded-l-md hover:bg-red-500 transition duration-200"
                                                    >
                                                        -
                                                    </button>
                                                    <span className="mx-2">{quantities[ticket.name]}</span>
                                                    <button 
                                                        onClick={() => updateCartQuantity(ticket.name, 1)}
                                                        className="bg-green-600 text-white py-1 px-2 rounded-r-md hover:bg-green-500 transition duration-200"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <h3 className="text-2xl font-semibold mt-4">Your Cart</h3>
                            {cart.length === 0 ? (
                                <p>No tickets in cart.</p>
                            ) : (
                                <ul className="bg-gray-800 rounded-lg shadow-md p-4 mb-4">
                                    {cart.map((ticket, index) => (
                                        <li key={index} className="border-b border-gray-700 py-2 flex justify-between items-center">
                                            <span>{ticket.name} (x{ticket.quantity}) - ${ticket.price.toFixed(2)}</span>
                                        </li>
                                    ))}
                                    <li className="mt-2 font-semibold">Ticket Total: ${cart.reduce((acc, ticket) => acc + (ticket.price * ticket.quantity), 0).toFixed(2)}</li>
                                    <li className="font-semibold">Transaction Fee (4%): ${calculateTransactionFee()}</li>
                                    <li className="mt-2 font-bold">Total (Including Fee): ${calculateTotal()}</li>
                                </ul>
                            )}

                            <form onSubmit={handleCheckout} className="mt-6">
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
                                        pattern="[0-9]{10,15}" // Adjust pattern as needed
                                        placeholder="e.g., 1234567890"
                                        className="w-full px-4 py-2 bg-gray-700 rounded-md border border-gray-600 text-white"
                                    />
                                </div>

                                <button 
                                    type="submit" 
                                    className="bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-500 transition duration-200"
                                >
                                    Proceed to Checkout
                                </button>
                            </form>
                            
                            {showPaypal && (
                                <div className="mt-6">
                                    <PayPalButtons
                                        createOrder={createOrder}
                                        onApprove={onApprove}
                                    />
                                </div>
                            )}
                            
                            {error && <p className="text-red-500 mt-4">{error}</p>}
                        </>
                    ) : (
                        <p>Loading event details...</p>
                    )}
                </div>
            </section>
        </PayPalScriptProvider>
    );
};

export default TicketPurchase;
