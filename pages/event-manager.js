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
    const [ticketCategories, setTicketCategories] = useState([{ name: '', price: '', description: '', available: '' }]);
    const [existingEvents, setExistingEvents] = useState([]);
    const [selectedEventId, setSelectedEventId] = useState('add-new');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        const fetchEvents = async () => {
            const eventsCollection = collection(db, 'events');
            const eventDocs = await getDocs(eventsCollection);
            const events = eventDocs.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setExistingEvents(events);
        };
        fetchEvents();
    }, []);

    const handleTicketChange = (index, field, value) => {
        const newCategories = [...ticketCategories];
        newCategories[index][field] = value;
        setTicketCategories(newCategories);
    };

    const addTicketCategory = () => {
        setTicketCategories([...ticketCategories, { name: '', price: '', description: '', available: '' }]);
    };

    const deleteTicketCategory = (index) => {
        const newCategories = ticketCategories.filter((_, i) => i !== index);
        setTicketCategories(newCategories);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            const eventRef = await addDoc(collection(db, 'events'), {
                name: eventName,
                date: eventDate,
                tickets: ticketCategories,
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
        setTicketCategories([{ name: '', price: '', description: '', available: '' }]);
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
            setEventName(eventData.data().name);
            setEventDate(eventData.data().date);
            setTicketCategories(eventData.data().tickets);
            setSelectedEventId(eventId);
        }
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            const eventDoc = doc(db, 'events', selectedEventId);
            await updateDoc(eventDoc, {
                name: eventName,
                date: eventDate,
                tickets: ticketCategories,
            });
            setSuccess(`Event updated successfully`);
            resetForm();
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

                    <h3 className="sm:col-span-2 text-lg font-semibold text-gray-900 dark:text-white">Ticket Categories</h3>
                    {ticketCategories.map((ticket, index) => (
                        <div key={index} className="sm:col-span-2">
                            <h4 className="text-md font-semibold text-gray-900 dark:text-white">Ticket Category {index + 1}</h4>
                            <div className="grid gap-4 sm:grid-cols-4">
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name:</label>
                                    <input
                                        type="text"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        value={ticket.name}
                                        onChange={(e) => handleTicketChange(index, 'name', e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price:</label>
                                    <input
                                        type="number"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        value={ticket.price}
                                        onChange={(e) => handleTicketChange(index, 'price', e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description:</label>
                                    <input
                                        type="text"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        value={ticket.description}
                                        onChange={(e) => handleTicketChange(index, 'description', e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tickets Available:</label>
                                    <input
                                        type="number"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        value={ticket.available}
                                        onChange={(e) => handleTicketChange(index, 'available', e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <button
                                type="button"
                                onClick={() => deleteTicketCategory(index)}
                                className="mt-2 text-red-600 hover:underline"
                            >
                                Delete Ticket Category
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={addTicketCategory}
                        className="mt-2 text-blue-600 hover:underline"
                    >
                        Add Ticket Category
                    </button>

                    {error && <p className="text-red-500">{error}</p>}
                    {success && <p className="text-green-500">{success}</p>}

                    <div className="sm:col-span-2 mt-4">
                        <button
                            type="submit"
                            className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                        >
                            {selectedEventId === 'add-new' ? 'Add Event' : 'Update Event'}
                        </button>
                        {selectedEventId !== 'add-new' && (
                            <button
                                type="button"
                                onClick={handleDelete}
                                className="ml-2 inline-flex items-center px-5 py-2.5 text-sm font-medium text-red-600 hover:underline"
                            >
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
