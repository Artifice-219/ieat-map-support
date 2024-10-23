// TODO 14 : SAN YUNG LOGIC PARA MAG INSERT NG DATA TO THE DATABASE ?
const express = require('express');

const User = require('../model/User');  // Model (Mongoose Schema)
const router = express.Router();

// POST route to handle form submission
router.post('/user', async (req, res) => {
    console.log('Form data received:', req.body);  // Debugging print statement

    try {
        // Create a new user document
        const newUser = new User({
            name: req.body.name
        });

        await newUser.save();  // Save user in the MongoDB database
        console.log('User saved:', newUser);  // Debugging print statement

        // Return success message as JSON
        res.status(201).json({ message: 'User saved successfully!' });
    } catch (error) {
        console.error('Error saving user:', error);
        res.status(500).json({ error: 'Error saving user' });
    }
});

module.exports = router;
