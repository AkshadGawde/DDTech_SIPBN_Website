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

        // Convert ticketCategories object and use the actual ticket name as the key
        const ticketsArray = Object.entries(ticketCategories).reduce((acc, [ticketName, ticket]) => {
            acc[ticket.name] = {  // Use the actual ticket name here
                name: ticket.name,
                price: Number(ticket.price),  // Ensure price is a number
                description: ticket.description,
                available: Number(ticket.available), // Ensure available is a number
                sold: 0, // Initialize sold to 0
            };
            return acc;
        }, {});

        try {
            const eventRef = await addDoc(collection(db, 'events'), {
                name: eventName,
                date: eventDate,
                tickets: ticketsArray, // Save as an object with actual ticket names as keys
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

        const eventDoc = doc(db, 'events', selectedEventId);
        const eventData = await getDoc(eventDoc);
        if (!eventData.exists()) {
            setError('Event not found');
            return;
        }

        const existingTickets = eventData.data().tickets; // Get existing tickets

        // Convert ticketCategories object and use the actual ticket name as the key
        const ticketsArray = Object.entries(ticketCategories).reduce((acc, [ticketName, ticket]) => {
            const existingTicket = existingTickets[ticket.name] || { sold: 0 }; // Use existing sold value or 0 if not found
            acc[ticket.name] = {  // Use the actual ticket name here
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
                tickets: ticketsArray, // Save as an object with actual ticket names as keys
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
        <section className="event-manager">
            <h2>Event Manager</h2>
            <div className="event-header">
                <h2>Event Manager</h2>
                <Link href="/admin-dashboard" legacyBehavior>
                    <a className="back-button">
                        <FontAwesomeIcon icon={faArrowLeft} className="icon" />
                        Back to Admin Dashboard
                    </a>
                </Link>
            </div>

            <form onSubmit={selectedEventId === 'add-new' ? handleSubmit : handleUpdate}>
                <div className="form-group">
                    <label>Select Existing Event:</label>
                    <select
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

                <div className="form-group">
                    <label>Event Name:</label>
                    <input
                        type="text"
                        value={eventName}
                        onChange={(e) => setEventName(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Event Date:</label>
                    <input
                        type="date"
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                        required
                    />
                </div>

                <div className="ticket-categories">
                    <h3>Ticket Categories:</h3>
                    {Object.entries(ticketCategories).map(([ticketName, ticket]) => (
                        <div key={ticketName} className="ticket-item">
                            <div className="ticket-input">
                                <input
                                    type="text"
                                    placeholder="Ticket Name"
                                    value={ticket.name}
                                    onChange={(e) => handleTicketChange(ticketName, 'name', e.target.value)}
                                />
                                <input
                                    type="number"
                                    placeholder="Price"
                                    value={ticket.price}
                                    onChange={(e) => handleTicketChange(ticketName, 'price', e.target.value)}
                                />
                                <input
                                    type="number"
                                    placeholder="Available"
                                    value={ticket.available}
                                    onChange={(e) => handleTicketChange(ticketName, 'available', e.target.value)}
                                />
                                <textarea
                                    placeholder="Description"
                                    value={ticket.description}
                                    onChange={(e) => handleTicketChange(ticketName, 'description', e.target.value)}
                                />
                            </div>
                            <button
                                type="button"
                                onClick={() => deleteTicketCategory(ticketName)}
                                className="delete-ticket"
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                    <button type="button" onClick={addTicketCategory}>
                        Add Ticket Category
                    </button>
                </div>

                {error && <div className="error-message">{error}</div>}
                {success && <div className="success-message">{success}</div>}

                <button type="submit" className="submit-button">
                    {selectedEventId === 'add-new' ? 'Create Event' : 'Update Event'}
                </button>
                {selectedEventId !== 'add-new' && (
                    <button type="button" className="delete-button" onClick={handleDelete}>
                        Delete Event
                    </button>
                )}
            </form>
        </section>
    );
};

export default withAuth(EventManager);
