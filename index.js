const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('./db'); // Import the database connection
const User = require('./User'); // Import the User model

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/signup', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        if (!username || !email || !password) {
            return res.status(400).json({ message: 'Please fill in all fields.' });
        }

        const newUser = new User({ username, email, password });
        await newUser.save();

        res.json({ message: 'User created successfully!' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error creating user' });
    }
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
