// server/server.js

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Serve static files from the src directory
app.use(express.static(path.join(__dirname, '../src')));

// User registration endpoint
app.post('/register', (req, res) => {
    // TODO: Implement user registration logic here
    // This could involve saving the user's details to a database
    // and sending a confirmation email

    console.log('User registration request received');
    console.log('Username: ' + req.body.username);
    console.log('Password: ' + req.body.password);

    res.status(200).send('User registration successful');
});

// User login endpoint
app.post('/login', (req, res) => {
    // TODO: Implement user login logic here
    // This could involve checking the user's details against a database
    // and generating a session or token

    console.log('User login request received');
    console.log('Username: ' + req.body.username);
    console.log('Password: ' + req.body.password);

    res.status(200).send('User login successful');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
