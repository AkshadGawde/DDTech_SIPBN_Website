// api/send-ticket-email.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  console.log('--- Starting email sending process ---');
  console.log('Request method:', req.method);
  
  if (req.method === 'POST') {
    console.log('Request body:', JSON.stringify(req.body, null, 2));
    
    const { email, orderId, eventDetails, tickets, totalAmount, transactionFee } = req.body;

    console.log('Environment variables:');
    console.log('ZOHO_USER:', process.env.ZOHO_USER ? `Set (${process.env.ZOHO_USER})` : 'Not set');
    console.log('ZOHO_PASSWORD:', process.env.ZOHO_PASSWORD ? 'Set (length: ' + process.env.ZOHO_PASSWORD.length + ')' : 'Not set');

    if (!process.env.ZOHO_USER || !process.env.ZOHO_PASSWORD) {
      console.error('Environment variables are not set correctly');
      return res.status(500).json({ error: 'Server configuration error: Missing environment variables' });
    }

    // Function to attempt sending email
    const attemptSendEmail = async (config) => {
      console.log(`Attempting to send email with config:`, JSON.stringify({...config, auth: {...config.auth, pass: '[REDACTED]'}}, null, 2));
      
      try {
        const transporter = nodemailer.createTransport(config);
        
        console.log('Verifying transporter connection...');
        await transporter.verify();
        console.log('Transporter connection verified successfully.');

        const mailOptions = {
          from: 'no-reply@sipbn.com.au',
          to: email,
          subject: `Your Ticket Purchase Confirmation for ${eventDetails.name}`,
          text: `Dear customer,\n\nThank you for purchasing tickets to ${eventDetails.name}.\nYour Order ID is: ${orderId}\n\nEvent Details:\nEvent Name: ${eventDetails.name}\nEvent Date: ${eventDetails.date}\n\nPurchased Tickets:\n${tickets.map(t => `${t.name} (Qty: ${t.quantity}) - $${t.price} each - Total: $${t.total}`).join('\n')}\n\nTotal Amount: $${totalAmount}\nTransaction Fee: $${transactionFee}\n\nYou will receive your tickets soon. If you have any questions, feel free to contact us.\n\nBest regards,\nThe Event Team`,
          html: `<h1>Thank you for your purchase!</h1><p>Your Order ID is: <strong>${orderId}</strong></p><h2>Event Details:</h2><ul><li><strong>Event Name:</strong> ${eventDetails.name}</li><li><strong>Event Date:</strong> ${eventDetails.date}</li></ul><h3>Purchased Tickets:</h3><ul>${tickets.map(t => `<li>${t.name} (Qty: ${t.quantity}) - $${t.price} each - Total: $${t.total}</li>`).join('')}</ul><p><strong>Total Amount:</strong> $${totalAmount}</p><p><strong>Transaction Fee:</strong> $${transactionFee}</p><p>You will receive your tickets soon. If you have any questions, feel free to contact us.</p><p>Best regards,</p><p>The Event Team</p>`,
        };

        console.log('Sending email...');
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', info.messageId);
        console.log('Full info object:', JSON.stringify(info, null, 2));
        
        return { success: true, info };
      } catch (error) {
        console.error(`Error with config ${JSON.stringify({...config, auth: {...config.auth, pass: '[REDACTED]'}}, null, 2)}:`, error);
        return { success: false, error };
      }
    };

    // Attempt with SSL
    console.log('Attempting to send email with SSL...');
    let result = await attemptSendEmail({
      host: 'smtp.zoho.in',
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_USER,
        pass: process.env.ZOHO_PASSWORD,
      },
      debug: true,
      logger: true
    });

    // If SSL fails, attempt with TLS
    if (!result.success) {
      console.log('SSL attempt failed. Trying with TLS...');
      result = await attemptSendEmail({
        host: 'smtp.zoho.in',
        port: 587,
        secure: false,
        auth: {
          user: process.env.ZOHO_USER,
          pass: process.env.ZOHO_PASSWORD,
        },
        debug: true,
        logger: true
      });
    }

    if (result.success) {
      console.log('Email sent successfully');
      return res.status(200).json({ message: 'Email sent successfully', messageId: result.info.messageId });
    } else {
      console.error('All email sending attempts failed');
      return res.status(500).json({ 
        error: 'Failed to send email', 
        message: result.error.message,
        stack: result.error.stack
      });
    }
  } else {
    console.log(`Method ${req.method} not allowed`);
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}