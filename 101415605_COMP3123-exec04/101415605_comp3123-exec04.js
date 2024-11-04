const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// GET request to /hello
app.get('/hello', (req, res) => {
    res.send('Hello Express JS');
});

// GET request to /user
app.get('/user', (req, res) => {
    const firstname = req.query.firstname || 'Simon';
    const lastname = req.query.lastname || 'Vu';
    res.json({ firstname, lastname });
});

// POST request to /user/:firstname/:lastname
app.post('/user/:firstname/:lastname', (req, res) => {
    const firstname = req.params.firstname;
    const lastname = req.params.lastname;
    res.json({ firstname, lastname });
});

// GET request to /user/:firstname/:lastname
app.get('/user/:firstname/:lastname', (req, res) => {
    const firstname = req.params.firstname;
    const lastname = req.params.lastname;
    res.json({ firstname, lastname });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
