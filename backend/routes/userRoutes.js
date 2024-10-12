const express = require('express');
//* TODO 4 IM SURE THS MODEL/USER FILE IS NOT EXISTING
const User = require('../model/User');  // Model (Mongoose Schema)
const router = express.Router();

// POST route to handle form submission
router.post('/user', async (req, res) => {
    console.log('Form data received:', req.body);  // Debugging print statement
//* TODO 5 THIS USER SCHEMA IS NOT EXISTING AS OF YET LAHAT KASI NG ITO AT COY ASTED FROM RACTICE FOLDER

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
