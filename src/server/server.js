const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import CORS
const app = express();
const port = 5000;

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON data
app.use(bodyParser.json());

// POST route to handle form data
app.post('/submit', (req, res) => {
  const { name, email, message } = req.body;

  const content = `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n\n`;

  // Write to input.txt file
  fs.appendFile(path.join(__dirname, 'input.txt'), content, (err) => {
    if (err) {
      console.error('Error writing to file', err);
      return res.status(500).json({ message: 'Failed to save message' });
    }
    res.status(200).json({ message: 'Message saved successfully' });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

