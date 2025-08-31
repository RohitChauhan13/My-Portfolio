const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 5001;

// Middleware
app.use(cors({
  origin: ['http://localhost:5000', 'http://127.0.0.1:5000'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Create transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate input
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER || 'fakerohitchauhan6232@gmail.com',
      to: 'fakerohitchauhan6232@gmail.com',
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p><em>Sent from Rohit's Portfolio Website</em></p>
      `
    };

    // Send email (non-blocking)
    transporter.sendMail(mailOptions)
      .then(() => {
        console.log('Email sent successfully!');
        res.status(200).json({ message: 'Email sent successfully!' });
      })
      .catch((error) => {
        console.error('Email error:', error);
        res.status(500).json({ error: 'Failed to send email' });
      });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Server error occurred' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'SMTP Server is running' });
});

// Test endpoint for React app
app.get('/api/test', (req, res) => {
  res.json({ message: 'Server is connected successfully!' });
});

app.listen(PORT, () => {
  console.log(`SMTP Server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});
