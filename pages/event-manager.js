// pages/event-manager.js
import { useState, useEffect } from 'react';
import { db } from '../lib/firebase';
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc, getDoc } from 'firebase/firestore';
import withAuth from '../lib/withAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const EventManager = () => {
    const [eventName, setEventName] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [ticketCategories, setTicketCategories] = useState({});
    const [existingEvents, setExistingEvents] = useState([]);
    const [selectedEventId, setSelectedEventId] = useState('add-new');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        fetchEvents(); // Fetch existing events on component mount
    }, []);

    const fetchEvents = async () => {
        const eventsCollection = collection(db, 'events');
        const eventDocs = await getDocs(eventsCollection);
        const events = eventDocs.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setExistingEvents(events);
    };

    const handleTicketChange = (ticketName, field, value) => {
        const newCategories = { ...ticketCategories };
        if (!newCategories[ticketName]) {
            newCategories[ticketName] = { name: ticketName, price: 0, description: '', available: 0, sold: 0 };
        }

        // Ensure that price and available are treated as numbers
        if (field === 'price' || field === 'available') {
            newCategories[ticketName][field] = parseFloat(value) || 0; // Convert to number or default to 0
        } else {
            newCategories[ticketName][field] = value;
        }

        setTicketCategories(newCategories);
    };

    const addTicketCategory = () => {
        const newTicketName = `ticket-${Object.keys(ticketCategories).length + 1}`;
        setTicketCategories({
            ...ticketCategories,
            [newTicketName]: { name: newTicketName, price: 0, description: '', available: 0, sold: 0 } // Initialize sold to 0
        });
    };

    const deleteTicketCategory = (ticketName) => {
        const newCategories = { ...ticketCategories };
        delete newCategories[ticketName];
        setTicketCategories(newCategories);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
    
        // Convert ticketCategories object to an array and include sold as 0
        const ticketsArray = Object.entries(ticketCategories).map(([ticketName, ticket]) => ({
            [ticketName]: {
                name: ticket.name,
                price: Number(ticket.price),  // Ensure price is a number
                description: ticket.description,
                available: Number(ticket.available), // Ensure available is a number
                sold: 0, // Initialize sold to 0
            }
        })).reduce((acc, curr) => ({ ...acc, ...curr }), {}); // Flatten the array into an object
    
        try {
            const eventRef = await addDoc(collection(db, 'events'), {
                name: eventName,
                date: eventDate,
                tickets: ticketsArray, // Save as an object with ticket names as keys
            });
            setSuccess(`Event added with ID: ${eventRef.id}`);
            resetForm();
        } catch (error) {
            setError('Error adding event: ' + error.message);
        }
    };

    const resetForm = () => {
        setEventName('');
        setEventDate('');
        setTicketCategories({});
        setSelectedEventId('add-new');
    };

    const handleEventSelect = async (eventId) => {
        if (eventId === 'add-new') {
            resetForm();
            return;
        }
    
        const eventDoc = doc(db, 'events', eventId);
        const eventData = await getDoc(eventDoc);
        if (eventData.exists()) {
            const eventTickets = eventData.data().tickets;
    
            // Convert the tickets object back to an array for the form
            const ticketObj = {};
            Object.entries(eventTickets).forEach(([ticketName, ticket]) => {
                ticketObj[ticketName] = { ...ticket }; // Maintain existing ticket data
            });
    
            setEventName(eventData.data().name);
            setEventDate(eventData.data().date);
            setTicketCategories(ticketObj); // Set the tickets as an object for the form
            setSelectedEventId(eventId);
        }
    };
    

    const handleUpdate = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
    
        // Fetch the existing event document first to retain the sold value
        const eventDoc = doc(db, 'events', selectedEventId);
        const eventData = await getDoc(eventDoc);
        if (!eventData.exists()) {
            setError('Event not found');
            return;
        }
    
        const existingTickets = eventData.data().tickets; // Get existing tickets
    
        // Convert ticketCategories object to an array while retaining the sold values
        const ticketsArray = Object.entries(ticketCategories).reduce((acc, [ticketName, ticket]) => {
            const existingTicket = existingTickets[ticketName] || { sold: 0 }; // Use existing sold value or 0 if not found
            acc[ticketName] = {
                name: ticket.name,
                price: Number(ticket.price), // Ensure price is a number
                description: ticket.description,
                available: Number(ticket.available), // Ensure available is a number
                sold: existingTicket.sold, // Retain sold value
            };
            return acc;
        }, {});
    
        try {
            await updateDoc(eventDoc, {
                name: eventName,
                date: eventDate,
                tickets: ticketsArray, // Save as an object with ticket names as keys
            });
            setSuccess('Event updated successfully');
            resetForm();
            await fetchEvents(); // Refresh existing events to reflect the updated event
        } catch (error) {
            setError('Error updating event: ' + error.message);
        }
    };
    

    const handleDelete = async () => {
        if (!selectedEventId || selectedEventId === 'add-new') return;

        try {
            const eventDoc = doc(db, 'events', selectedEventId);
            await deleteDoc(eventDoc);
            setSuccess('Event deleted successfully');
            resetForm();
            setExistingEvents(existingEvents.filter(event => event.id !== selectedEventId));
        } catch (error) {
            setError('Error deleting event: ' + error.message);
        }
    };

    return (
        <section className="bg-white dark:bg-gray-900 py-8 px-4 mx-auto max-w-2xl lg:py-16">
            <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Event Manager</h2>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Event Manager</h2>
                <Link href="/admin-dashboard" legacyBehavior>
                    <a className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                        <FontAwesomeIcon icon={faArrowLeft} className="text-white mr-2" />
                        Back to Admin Dashboard
                    </a>
                </Link>
            </div>

            <form onSubmit={selectedEventId === 'add-new' ? handleSubmit : handleUpdate}>
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <div className="sm:col-span-2">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Select Existing Event:
                        </label>
                        <select
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            value={selectedEventId}
                            onChange={(e) => handleEventSelect(e.target.value)}
                        >
                            <option value="add-new">Add New Event</option>
                            {existingEvents.map((event) => (
                                <option key={event.id} value={event.id}>
                                    {event.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="sm:col-span-2">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Event Name:</label>
                        <input
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            value={eventName}
                            onChange={(e) => setEventName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="sm:col-span-2">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Event Date:</label>
                        <input
                            type="date"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            value={eventDate}
                            onChange={(e) => setEventDate(e.target.value)}
                            required
                        />
                    </div>

                    <div className="sm:col-span-2">
                        <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Ticket Categories:</h3>
                        {Object.entries(ticketCategories).map(([ticketName, ticket]) => (
                            <div key={ticketName} className="sm:col-span-2 flex justify-between items-center mb-2">
                                <div className="flex-1">
                                    <input
                                        type="text"
                                        placeholder="Ticket Name"
                                        value={ticket.name}
                                        onChange={(e) => handleTicketChange(ticketName, 'name', e.target.value)}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                    />
                                    <input
                                        type="number"
                                        placeholder="Price"
                                        value={ticket.price}
                                        onChange={(e) => handleTicketChange(ticketName, 'price', e.target.value)}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                    />
                                    <input
                                        type="number"
                                        placeholder="Available"
                                        value={ticket.available}
                                        onChange={(e) => handleTicketChange(ticketName, 'available', e.target.value)}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                    />
                                    <textarea
                                        placeholder="Description"
                                        value={ticket.description}
                                        onChange={(e) => handleTicketChange(ticketName, 'description', e.target.value)}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                    />
                                </div>
                                <button
                                    type="button"
                                    onClick={() => deleteTicketCategory(ticketName)}
                                    className="text-red-600 hover:text-red-800">
                                    Delete
                                </button>
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={addTicketCategory}
                            className="sm:col-span-2 text-green-600 hover:text-green-800">
                            Add Ticket Category
                        </button>
                    </div>

                    <div className="mt-4 sm:col-span-2">
                        {error && <p className="text-red-500">{error}</p>}
                        {success && <p className="text-green-500">{success}</p>}
                        <button
                            type="submit"
                            className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-700">
                            {selectedEventId === 'add-new' ? 'Add Event' : 'Update Event'}
                        </button>
                        {selectedEventId !== 'add-new' && (
                            <button
                                type="button"
                                onClick={handleDelete}
                                className="ml-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-white bg-red-600 rounded-lg focus:ring-4 focus:ring-red-200 hover:bg-red-700">
                                Delete Event
                            </button>
                        )}
                    </div>
                </div>
            </form>
        </section>
    );
};

export default withAuth(EventManager);
