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

    const { cart, name, email, mobileNumber, eventId, appliedCoupon } = req.body;

    // Extract discountAmount from appliedCoupon
    const discountAmount = appliedCoupon?.discountAmount || 0; // Fallback to 0 if no coupon applied

    // Fetch event details from Firestore
    try {
        const eventDocRef = doc(db, 'events', eventId);
        const eventDoc = await getDoc(eventDocRef);

        if (!eventDoc.exists()) {
            return res.status(404).json({ error: 'Event not found' });
        }

        const eventData = eventDoc.data();

        // Calculate the total amount of tickets
        let ticketTotal = cart.reduce((acc, ticket) => acc + (ticket.price * ticket.quantity), 0);

        // Ensure discount doesn't exceed total
        const discountApplied = Math.min(discountAmount, ticketTotal);

        // Proportionally apply the discount across the tickets
        let remainingDiscount = discountApplied;
        const discountedCart = cart.map((ticket, index) => {
            const ticketTotalPrice = ticket.price * ticket.quantity;

            // Calculate proportional discount for this ticket
            const proportion = ticketTotalPrice / ticketTotal;
            const discountForTicket = remainingDiscount * proportion;

            // Adjust price per ticket based on the proportional discount
            const discountedPrice = ticket.price - (discountForTicket / ticket.quantity);
            remainingDiscount -= discountForTicket;

            // Create dynamic description
            const description = discountForTicket > 0
                ? `Original Price: $${ticket.price.toFixed(2)}, Discounted Price: $${discountedPrice.toFixed(2)}`
                : `Price: $${ticket.price.toFixed(2)}`;

            return {
                ...ticket,
                price: discountedPrice, // Update the price to reflect the discount
                description, // Add dynamic description
            };
        });

        // Prepare line items for Stripe
        const lineItems = discountedCart.map(ticket => ({
            price_data: {
                currency: 'aud', // Adjust currency as needed
                product_data: {
                    name: ticket.name,
                    description: ticket.description, // Use the dynamic description
                },
                unit_amount: Math.round(ticket.price * 100), // Stripe expects amount in cents
            },
            quantity: ticket.quantity,
        }));

        // Add transaction fee as a separate line item (after discount)
        const newTicketTotal = discountedCart.reduce((acc, ticket) => acc + (ticket.price * ticket.quantity), 0);
        const transactionFee = Math.round(newTicketTotal * 0.04 * 100); // 4% fee in cents

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
            success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}&name=${encodeURIComponent(name.trim())}&email=${encodeURIComponent(email.trim())}&mobileNumber=${encodeURIComponent(mobileNumber.trim())}`,
            cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
            metadata: {
                eventId,
                name,
                email,
                mobileNumber,
                cartString: JSON.stringify(discountedCart), // Store discounted cart in metadata
                appliedCoupon: JSON.stringify(appliedCoupon),  // Include coupon details in metadata
            },
        });

        return res.status(200).json({ url: session.url });
    } catch (error) {
        console.error('Error creating checkout session:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
