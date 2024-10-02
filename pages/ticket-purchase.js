// pages/ticket-purchase.js

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { db } from '../lib/firebase';
import { doc, getDoc, updateDoc, collection, addDoc } from 'firebase/firestore';
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

    // Function to handle checkout
    const handleCheckout = async (e) => {
        e.preventDefault();
        setError(''); // Reset error
        setIsLoading(true);

        console.log('Initiating checkout process.');

        if (cart.length === 0) {
            console.warn('Checkout attempted with an empty cart.');
            setError('Your cart is empty');
            setIsLoading(false);
            return;
        }

        if (!name.trim()) { // Validate Name
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

        if (!mobileNumber.trim()) { // Validate Mobile Number
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
  <section className="event-section">
    <div className="container">
      {eventDetails ? (
        <>
          <h2 className="event-title">{eventDetails.name}</h2>
          <p className="event-date">Date: {eventDetails.date}</p>
          <p className="event-description">{eventDetails.description}</p>

          {/* Main layout container */}
          <div className="event-layout">
            {/* Left section for ticket categories */}
            <div className="tickets-section">
              <h3 className="ticket-title">Ticket Categories</h3>
              <p className='event-time'>
                Tue, 26 Nov 2024 8:00 AM - Wed, 27 Nov 2024 9:00 PM AEDT
              </p>
              <div className="tickets-grid">
                {Object.keys(eventDetails.tickets).map((ticketName) => {
                  const ticket = eventDetails.tickets[ticketName];
                  const isExpanded = expandedTickets[ticketName];
                  return (
                    <div key={ticketName} className="ticket-card">
                      <div className='ticket-info'>
                        <div>
                          <h3 className="ticket-name">{ticket.name}</h3>
                          <p className='ticket-available'>Available Tickets: {parseInt(ticket.available)}</p>
                        </div>
                        <div className="ticket-actions">
                          <button 
                            onClick={() => updateCartQuantity(ticket.name, -1)}
                            className="ticket-decrease"
                          >
                            -
                          </button>
                          <span className="ticket-quantity">{quantities[ticket.name]}</span>
                          <button 
                            onClick={() => updateCartQuantity(ticket.name, 1)}
                            className="ticket-increase"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <hr className="divider" />
                      <p className="ticket-price">A${parseFloat(ticket.price).toFixed(2)}</p>
                      <p className='ticket-description'>Description: {ticket.description}</p>

                      {/* Read More Section */}
                      {isExpanded && (
                        <div className="ticket-details">
                          <p>Here are the additional details when expanded.</p>
                        </div>
                      )}

                      <button 
                        className="read-more"
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
            <div className="cart-section">
              <h3 className="cart-title">Order Summary</h3>
              {cart.length === 0 ? (
                <p className="cart-empty">No tickets in cart.</p>
              ) : (
                <ul className="cart-list">
                  {cart.map((ticket, index) => (
                    <li key={index} className="cart-item">
                      <span>{ticket.name} (x{ticket.quantity})</span>
                      <span>A${ticket.price.toFixed(2)}</span>
                    </li>
                  ))}
                  <li className="cart-total">Ticket Total: A${cart.reduce((acc, ticket) => acc + (ticket.price * ticket.quantity), 0).toFixed(2)}</li>
                  <li className="transaction-fee">Transaction Fee (4%): A${calculateTransactionFee()}</li>
                  <hr className="divider" />
                  <li className="total-price">Total : A${calculateTotal()}</li>
                </ul>
              )}

              <form onSubmit={handleCheckout} className="checkout-form">
                {/* Name Field */}
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input 
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                {/* Email Field */}
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                {/* Mobile Number Field */}
                <div className="form-group">
                  <label htmlFor="mobileNumber">Mobile Number</label>
                  <input 
                    type="tel"
                    id="mobileNumber"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    required
                    pattern="[0-9]{10,15}"
                    placeholder="e.g., 1234567890"
                  />
                </div>

                <button 
                  type="submit" 
                  className={`checkout-btn ${isLoading ? 'loading' : ''}`}
                  disabled={isLoading}
                >
                  {isLoading ? 'Processing...' : 'Proceed to Checkout'}
                </button>
              </form>

              {error && <p className="error-message">{error}</p>}
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
