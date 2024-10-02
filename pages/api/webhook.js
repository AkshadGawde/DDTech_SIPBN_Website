import { buffer } from 'micro';
import Stripe from 'stripe';
import { db } from '../../lib/firebase';
import { doc, updateDoc, collection, addDoc, getDoc } from 'firebase/firestore';

// Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2024-06-20',
});

// Disable body parsing to handle raw payload
export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const sig = req.headers['stripe-signature'];
        const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

        let event;

        try {
            const buf = await buffer(req);
            event = stripe.webhooks.constructEvent(buf.toString(), sig, webhookSecret);
        } catch (err) {
            console.error('Webhook signature verification failed:', err.message);
            return res.status(400).send(`Webhook Error: ${err.message}`);
        }

        // Handle the event
        if (event.type === 'checkout.session.completed') {
            console.log("Webhook received: checkout.session.completed");
            const session = event.data.object;

            // Extract metadata
            const { eventId, name, email, mobileNumber, cartString, appliedCoupon } = session.metadata;

            console.log("This is the fetched detail");
            console.log(cartString);

            // Fetch event details
            const eventDocRef = doc(db, 'events', eventId);
            const eventDoc = await getDoc(eventDocRef);

            if (!eventDoc.exists()) {
                console.error('Event not found in Firestore');
                return res.status(400).send('Event not found');
            }

            const eventData = eventDoc.data();
            const cart = JSON.parse(cartString || '[]'); // Adjust based on how you pass cart data

            // Prepare updates
            const updates = {};

            cart.forEach(ticket => {
                const ticketName = ticket.name;
                const quantity = ticket.quantity;
                console.log(ticketName, quantity);

                const eventTicket = eventData.tickets[ticketName];
                if (!eventTicket) {
                    throw new Error(`Ticket "${ticketName}" not found in event details.`);
                }

                const availableCount = eventTicket.available - quantity;
                const soldCount = eventTicket.sold + quantity;

                if (availableCount < 0) {
                    throw new Error(`Not enough available tickets for "${ticketName}".`);
                }

                updates[`tickets.${ticketName}.available`] = availableCount;
                updates[`tickets.${ticketName}.sold`] = soldCount;
            });

            // Update Firestore
            await updateDoc(eventDocRef, updates);
            console.log(updates);
            console.log("Stock update successful");

            // Parse the discount details from the metadata (if any)
            const couponDetails = appliedCoupon ? JSON.parse(appliedCoupon) : null;
            const discountDescription = couponDetails ? `Discount (${couponDetails.code}): $${couponDetails.discountAmount}` : 'No discount applied';

            // Save order details
            const orderData = {
                orderId: session.id,
                name: name.trim(),
                email: email.trim(),
                mobileNumber: mobileNumber.trim(),
                eventId: eventId,
                eventDetails: eventData,
                tickets: cart,
                transactionFee: (session.amount_total * 0.04) / 100, // Adjust based on your fee calculation
                totalAmount: session.amount_total / 100,
                discount: couponDetails ? couponDetails.discountAmount : 0, // Store the discount amount
                discountDescription, // Description of the discount
                createdAt: new Date(),
                status: 'confirmed',
            };

            const ordersCollectionRef = collection(db, 'orders');
            await addDoc(ordersCollectionRef, orderData);
            console.log("Order added successfully");

            // Prepare detailed ticket info for the email (like an invoice)
            const emailPayload = {
                name: name.trim(),
                email: email.trim(),
                mobileNumber: mobileNumber.trim(),
                eventDetails: eventData,
                tickets: cart.map(ticket => ({
                    name: ticket.name,
                    quantity: ticket.quantity,
                    price: ticket.price,
                    total: ticket.quantity * ticket.price,
                })),
                orderId: session.id,
                transactionFee: (session.amount_total * 0.04) / 100, // Adjust if needed
                totalAmount: session.amount_total / 100,
                discount: couponDetails ? couponDetails.discountAmount : 0, // Include discount info in the email
                discountDescription, // Include discount description in the email
            };

            console.log('Sending email with payload:', emailPayload);

            // Send email via another API endpoint or service
            const emailResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/send-ticket-email`, {
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

            // Return a 200 response to acknowledge receipt of the event
            res.status(200).json({ received: true });
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}
