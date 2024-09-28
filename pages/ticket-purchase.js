// pages/ticket-purchase.js
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { db } from '../lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import Link from 'next/link';

const TicketPurchase = () => {
    const router = useRouter();
    const { eventId } = router.query; // Get event ID from URL
    const [eventDetails, setEventDetails] = useState(null);
    const [cart, setCart] = useState([]);
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        const fetchEventDetails = async () => {
            if (!eventId) return; // Ensure eventId is defined
            const eventRef = doc(db, 'events', eventId);
            const eventSnap = await getDoc(eventRef);

            if (eventSnap.exists()) {
                setEventDetails(eventSnap.data());
            } else {
                setError('Event not found');
            }
        };

        fetchEventDetails();
    }, [eventId]);

    const addToCart = (ticket) => {
        setCart([...cart, ticket]);
    };

    const handleCheckout = async (e) => {
        e.preventDefault();
        // Here you can implement PayPal integration with the cart details
        console.log('Checkout:', cart, email);
        setSuccess('Ticket purchase successful! A ticket will be sent to your email.');
        setCart([]);
        setEmail('');
    };

    return (
        <div className="max-w-2xl mx-auto p-6">
            {eventDetails ? (
                <>
                    <h2 className="text-2xl font-bold mb-4">{eventDetails.name}</h2>
                    <p className="mb-4">Date: {eventDetails.date}</p>
                    <h3 className="text-xl font-semibold mb-2">Ticket Categories</h3>
                    {eventDetails.tickets.map((ticket, index) => (
                        <div key={index} className="border rounded-lg p-4 mb-4">
                            <h4 className="text-lg font-semibold">{ticket.name}</h4>
                            <p>Price: ${ticket.price}</p>
                            <p>Max Tickets: {ticket.maxTickets}</p>
                            <button
                                onClick={() => addToCart(ticket)}
                                className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                            >
                                Add to Cart
                            </button>
                        </div>
                    ))}
                    <h3 className="text-xl font-semibold mt-6 mb-2">Your Cart</h3>
                    {cart.length === 0 ? (
                        <p>No tickets in cart.</p>
                    ) : (
                        <ul className="border rounded-lg p-4">
                            {cart.map((ticket, index) => (
                                <li key={index} className="flex justify-between mb-2">
                                    {ticket.name} - ${ticket.price}
                                </li>
                            ))}
                        </ul>
                    )}
                    <div className="mt-4">
                        <Link href="/cart">
                            <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400">
                                View Cart
                            </button>
                        </Link>
                    </div>
                    <form onSubmit={handleCheckout} className="mt-4">
                        <div>
                            <label className="block mb-1">Email:</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="border rounded-lg p-2 w-full"
                            />
                        </div>
                        <button type="submit" className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
                            Proceed to Payment
                        </button>
                    </form>
                    {error && <p className="text-red-500 mt-2">{error}</p>}
                    {success && <p className="text-green-500 mt-2">{success}</p>}
                </>
            ) : (
                <p>Loading event details...</p>
            )}
        </div>
    );
};

export default TicketPurchase;
