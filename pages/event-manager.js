// pages/event-manager.js
import { useState, useEffect } from 'react';
import { db } from '../lib/firebase';
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc, getDoc } from 'firebase/firestore';
import withAuth from '../lib/withAuth';
import Link from 'next/link';

const EventManager = () => {
    const [eventName, setEventName] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [ticketCategories, setTicketCategories] = useState([{ name: '', price: '', maxTickets: '' }]);
    const [existingEvents, setExistingEvents] = useState([]);
    const [selectedEventId, setSelectedEventId] = useState('');
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
        setTicketCategories([...ticketCategories, { name: '', price: '', maxTickets: '' }]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            // Create a new event in Firestore
            const eventRef = await addDoc(collection(db, 'events'), {
                name: eventName,
                date: eventDate,
                tickets: ticketCategories,
            });
            setSuccess(`Event added with ID: ${eventRef.id}`);
            // Reset form
            resetForm();
        } catch (error) {
            setError('Error adding event: ' + error.message);
        }
    };

    const resetForm = () => {
        setEventName('');
        setEventDate('');
        setTicketCategories([{ name: '', price: '', maxTickets: '' }]);
    };

    const handleEventSelect = async (eventId) => {
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
            setSelectedEventId('');
        } catch (error) {
            setError('Error updating event: ' + error.message);
        }
    };

    const handleDelete = async () => {
        if (!selectedEventId) return;
        
        try {
            const eventDoc = doc(db, 'events', selectedEventId);
            await deleteDoc(eventDoc);
            setSuccess('Event deleted successfully');
            resetForm();
            setSelectedEventId('');
            setExistingEvents(existingEvents.filter(event => event.id !== selectedEventId));
        } catch (error) {
            setError('Error deleting event: ' + error.message);
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <Link href="/admin-dashboard">
                <button style={{ marginBottom: '20px' }}>Back to Admin Dashboard</button>
            </Link>
            <h2>Event Manager</h2>
            <form onSubmit={selectedEventId ? handleUpdate : handleSubmit}>
                <div>
                    <label>Select Existing Event:</label>
                    <select value={selectedEventId} onChange={(e) => handleEventSelect(e.target.value)}>
                        <option value="">Select an event</option>
                        {existingEvents.map((event) => (
                            <option key={event.id} value={event.id}>
                                {event.name}
                            </option>
                        ))}
                    </select>
                </div>

                Create a new event - <br></br>

                <div>
                    <label>Event Name:</label>
                    <input
                        type="text"
                        value={eventName}
                        onChange={(e) => setEventName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Event Date:</label>
                    <input
                        type="date"
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                        required
                    />
                </div>

                <h3>Ticket Categories</h3>
                {ticketCategories.map((ticket, index) => (
                    <div key={index}>
                        <h4>Ticket Category {index + 1}</h4>
                        <div>
                            <label>Name:</label>
                            <input
                                type="text"
                                value={ticket.name}
                                onChange={(e) => handleTicketChange(index, 'name', e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label>Price:</label>
                            <input
                                type="number"
                                value={ticket.price}
                                onChange={(e) => handleTicketChange(index, 'price', e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label>Max Tickets:</label>
                            <input
                                type="number"
                                value={ticket.maxTickets}
                                onChange={(e) => handleTicketChange(index, 'maxTickets', e.target.value)}
                                required
                            />
                        </div>
                    </div>
                ))}
                <button type="button" onClick={addTicketCategory}>Add Ticket Category</button>
                <button type="submit">{selectedEventId ? 'Update Event' : 'Add Event'}</button>
                {selectedEventId && <button type="button" onClick={handleDelete} style={{ marginLeft: '10px' }}>Delete Event</button>}
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {success && <p style={{ color: 'green' }}>{success}</p>}
            </form>
        </div>
    );
};

export default withAuth(EventManager);
