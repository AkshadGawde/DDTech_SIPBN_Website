import Stripe from 'stripe';
import { db } from '../../lib/firebase';
import { doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';

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

    try {
        // Fetch event details from Firestore
        const eventDocRef = doc(db, 'events', eventId);
        const eventDoc = await getDoc(eventDocRef);

        if (!eventDoc.exists()) {
            return res.status(404).json({ error: 'Event not found' });
        }

        const eventData = eventDoc.data();

        // Fetch ticket details and validate cart
        let ticketTotal = 0;
        const discountedCart = [];

        for (const cartItem of cart) {
            const ticketName = cartItem.name; // assuming `name` refers to the ticket name in the cart
            const ticketData = eventData.tickets[ticketName];

            if (!ticketData) {
                return res.status(404).json({ error: `Ticket ${ticketName} not found` });
            }

            const ticketPrice = ticketData.price;
            const ticketQuantity = cartItem.quantity;

            // Calculate total for this ticket
            const ticketTotalPrice = ticketPrice * ticketQuantity;
            ticketTotal += ticketTotalPrice;

            discountedCart.push({
                name: ticketName,
                price: ticketPrice,
                quantity: ticketQuantity,
                description: ticketData.description,
                total: ticketTotalPrice, // store the total per ticket
            });
        }

        // Fetch discount details from Firestore using the appliedCoupon's code
        let discountPercentage = 0; // default to 0 if no coupon applied
        if (appliedCoupon && appliedCoupon.code) {
            const couponCode = appliedCoupon.code.trim();
            const couponsRef = collection(db, 'coupons');
            const q = query(couponsRef, where('code', '==', couponCode));
            const querySnapshot = await getDocs(q);

            if (querySnapshot.empty) {
                return res.status(404).json({ error: 'Invalid coupon code' });
            }

            const couponData = querySnapshot.docs[0].data();
            discountPercentage = couponData.discountPercentage || 0; // assuming the coupon has a `discountPercentage` field
        }

        // Apply discount to the total
        const discountAmount = (ticketTotal * discountPercentage) / 100;
        const totalAfterDiscount = ticketTotal - discountAmount;

        // Adjust prices in the discountedCart array
        discountedCart.forEach((ticket, index) => {
            const proportion = ticket.total / ticketTotal;
            const discountForTicket = discountAmount * proportion;

            // Adjust the price after discount
            const discountedPrice = ticket.price - (discountForTicket / ticket.quantity);

            discountedCart[index] = {
                ...ticket,
                price: discountedPrice,
                description: `Original Price: $${ticket.price.toFixed(2)}, Discounted Price: $${discountedPrice.toFixed(2)}`,
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
        const transactionFee = Math.round(totalAfterDiscount * 0.04 * 100); // 4% fee in cents

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
