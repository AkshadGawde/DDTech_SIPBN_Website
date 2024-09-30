// pages/api/create-checkout-session.js

import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import { db } from '../../lib/firebase';
import { doc, getDoc } from 'firebase/firestore';

// Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2023-08-16', // Use the latest Stripe API version
});

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).end('Method Not Allowed');
    }

    const { cart, name, email, mobileNumber, eventId } = req.body;

    // Fetch event details from Firestore
    try {
        const eventDocRef = doc(db, 'events', eventId);
        const eventDoc = await getDoc(eventDocRef);

        if (!eventDoc.exists()) {
            return res.status(404).json({ error: 'Event not found' });
        }

        const eventData = eventDoc.data();

        // Prepare line items for Stripe
        const lineItems = cart.map(ticket => ({
            price_data: {
                currency: 'aud', // Adjust currency as needed
                product_data: {
                    name: ticket.name,
                    description: ticket.description || '', // Ensure description exists
                },
                unit_amount: Math.round(ticket.price * 100), // Stripe expects amount in cents
            },
            quantity: ticket.quantity,
        }));

        // Add transaction fee as a separate line item
        const ticketTotal = cart.reduce((acc, ticket) => acc + (ticket.price * ticket.quantity), 0);
        const transactionFee = Math.round(ticketTotal * 0.04 * 100); // 4% fee in cents

        if (transactionFee > 0) {
            lineItems.push({
                price_data: {
                    currency: 'aud',
                    product_data: {
                        name: 'Transaction Fee',
                    },
                    unit_amount: transactionFee,
                },
                quantity: 1,
            });
        }

        // Create the Checkout session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems,
            mode: 'payment',
            success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/successs?session_id={CHECKOUT_SESSION_ID}&name=${encodeURIComponent(name.trim())}&email=${encodeURIComponent(email.trim())}&mobileNumber=${encodeURIComponent(mobileNumber.trim())}`,
            cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
            metadata: {
                eventId,
                name,
                email,
                mobileNumber,
            },
        });

        return res.status(200).json({ url: session.url });
    } catch (error) {
        console.error('Error creating checkout session:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
