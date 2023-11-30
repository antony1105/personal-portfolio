const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail', // Use your preferred email service
  auth: {
    user: 'ntinlok1@gmail.com', // Your email
    pass: '1b2e3e4d' // Your email password or app-specific password
  }
});

app.post('/sendemail', (req, res) => {
  const mailOptions = {
    from: req.body.email, // Sender address
    to: 'ntinlok1@gmail.com', // Receiver address
    subject: req.body.subject,
    text: req.body.message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).send(error.message);
    } else {
      res.status(200).send('Email sent: ' + info.response);
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));