const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());

// --- Article view tracking (self-hosted counter) ---
// ponytail: JSON file store — fine for a marketing site's volume. Swap for a DB if
// views ever outgrow a single file. events[] is unbounded; trim/rotate if it gets large.
const VIEWS_FILE = path.join(__dirname, 'data', 'views.json');

const readViews = () => {
  try {
    return JSON.parse(fs.readFileSync(VIEWS_FILE, 'utf8'));
  } catch (e) {
    return { totals: {}, events: [] };
  }
};

const writeViews = (data) => {
  fs.mkdirSync(path.dirname(VIEWS_FILE), { recursive: true });
  fs.writeFileSync(VIEWS_FILE, JSON.stringify(data, null, 2));
};

app.post('/api/track/view', (req, res) => {
  const { slug, title } = req.body || {};
  if (!slug) return res.status(400).json({ error: 'slug required' });

  const data = readViews();
  data.totals[slug] = (data.totals[slug] || 0) + 1;
  data.events.push({ slug, title: title || null, ts: new Date().toISOString() });
  writeViews(data);
  res.status(204).end();
});

app.get('/api/track/stats', (req, res) => {
  const { totals } = readViews();
  const ranked = Object.entries(totals)
    .map(([slug, views]) => ({ slug, views }))
    .sort((a, b) => b.views - a.views);
  res.json({ ranked, totals });
});

app.post('/api/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Configure nodemailer to send emails
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your_email@gmail.com',
      pass: 'your_email_password',
    },
  });

  // Email content
  const mailOptions = {
    from: 'your_email@gmail.com',
    to: 'recipient_email@example.com',
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Email sent successfully!');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});