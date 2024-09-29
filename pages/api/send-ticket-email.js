export default async function handler(req, res) {
  if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, eventDetails, tickets, orderId } = req.body;

  // Validate input data
  if (!email || !eventDetails || !tickets || !orderId) {
      return res.status(400).json({ message: 'Missing required fields' });
  }

  // Construct email content
  const emailContent = `
      Thank you for your purchase!

      Event: ${eventDetails.name}
      Date: ${eventDetails.date}
      Description: ${eventDetails.description}

      Tickets:
      ${tickets.map(ticket => `${ticket.name} x${ticket.quantity} - $${ticket.price}`).join('\n')}

      Order ID: ${orderId}

      Enjoy the event!
  `;

  // Log email content to the console
  console.log('Email Content:', emailContent);
  console.log('Recipient Email:', email);

  // Respond with a success message
  res.status(200).json({ message: 'Email logged successfully.' });
}