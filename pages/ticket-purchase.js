// pages/ticket-purchase.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { db } from '../lib/firebase'; // Ensure this path is correct
import { doc, getDoc } from 'firebase/firestore';

const TicketPurchase = () => {
    const router = useRouter();
    const { eventId } = router.query; // Get event ID from URL
    const [eventDetails, setEventDetails] = useState(null);
    const [quantities, setQuantities] = useState({});
    const [cart, setCart] = useState([]);
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        const fetchEventDetails = async () => {
            if (!eventId) return; // Ensure eventId is defined
            const eventDocRef = doc(db, 'events', eventId); // Reference to the specific event
            const eventDoc = await getDoc(eventDocRef); // Fetch the event document

            if (eventDoc.exists()) {
                const eventData = eventDoc.data();
                setEventDetails(eventData); // Set event details

                // Initialize quantities for tickets
                const initialQuantities = {};
                eventData.tickets.forEach(ticket => {
                    initialQuantities[ticket.name] = 0; // Set initial quantity to 0
                });
                setQuantities(initialQuantities);
            } else {
                setError('Event not found');
            }
        };

        fetchEventDetails();
    }, [eventId]); // Re-run when eventId changes

    const addToCart = (ticket) => {
        const ticketPrice = parseFloat(ticket.price); // Convert price to a number

        const existingTicket = cart.find(item => item.name === ticket.name);
        if (existingTicket) {
            setCart(cart.map(item => 
                item.name === ticket.name ? { ...existingTicket, quantity: existingTicket.quantity + 1 } : item
            ));
        } else {
            // Create a new ticket entry with quantity and converted price
            setCart([...cart, { ...ticket, price: ticketPrice, quantity: 1 }]);
        }
        setQuantities({
            ...quantities,
            [ticket.name]: quantities[ticket.name] + 1 // Increase quantity
        });
    };

    const handleCheckout = async (e) => {
        e.preventDefault();
        // Implement PayPal integration with the cart details here
        console.log('Checkout:', cart, email);
        setSuccess('Ticket purchase successful! A ticket will be sent to your email.');
        setCart([]);
        setEmail('');
    };

    return (
        <div className="bg-gray-100 h-screen py-8">
            <div className="container mx-auto px-4">
                {eventDetails ? (
                    <>
                        <h2 className="text-2xl font-semibold mb-4">{eventDetails.name}</h2>
                        <p className="mb-4">Date: {eventDetails.date}</p>
                        <h3 className="text-xl font-semibold mb-2">Ticket Categories</h3>
                        {eventDetails.tickets.map((ticket, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md p-4 mb-2">
                                <h4 className="font-semibold">{ticket.name}</h4>
                                <p>Price: ${parseFloat(ticket.price).toFixed(2)}</p>
                                <p>Max Tickets: {ticket.maxTickets}</p>
                                <div className="flex items-center mt-2">
                                    <button 
                                        className="bg-blue-500 text-white py-2 px-4 rounded-md"
                                        onClick={() => addToCart(ticket)}
                                    >
                                        Add to Cart
                                    </button>
                                    <span className="ml-2">Quantity: {quantities[ticket.name]}</span>
                                </div>
                            </div>
                        ))}
                        <h3 className="text-xl font-semibold mt-4">Your Cart</h3>
                        {cart.length === 0 ? (
                            <p>No tickets in cart.</p>
                        ) : (
                            <ul className="bg-white rounded-lg shadow-md p-4 mb-4">
                                {cart.map((ticket, index) => (
                                    <li key={index}>
                                        {ticket.name} - ${ticket.price.toFixed(2)} x {ticket.quantity}
                                    </li>
                                ))}
                            </ul>
                        )}
                        <form onSubmit={handleCheckout} className="bg-white rounded-lg shadow-md p-4">
                            <div className="mb-4">
                                <label className="block mb-2">Email:</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="border border-gray-300 rounded-md p-2 w-full"
                                />
                            </div>
                            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full">
                                Proceed to Payment
                            </button>
                        </form>
                        {error && <p className="text-red-500">{error}</p>}
                        {success && <p className="text-green-500">{success}</p>}
                    </>
                ) : (
                    <p>Loading event details...</p>
                )}
            </div>
        </div>
    );
};

export default TicketPurchase;
