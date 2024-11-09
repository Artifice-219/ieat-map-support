const express = require('express');
const Student = require('../model/Student');  // Model (Mongoose Schema)
const router = express.Router();
const conn = require('../config/db/dbConn')

// POST route to handle form submission
router.post('/user', async (req, res) => {
    console.log('Form data received:', req.body);  // Debugging print statement

    // inserting received data to the database
    async function main() {
        const client = await conn();

        const database = client.db('myLocalDB');
        const student_collection = database.collection('student_collection');

        try {
        // Create a new user document
        const new_student = new Student({
            email: req.body.email
        });

        const student_insertionResult = await student_collection.insertOne(new_student)
        console.log(`'New student inserted succesfully ' ${student_insertionResult.insertedId}`)
        res.status(201).json({ message: 'User saved successfully!' });

        // closing database connection
        client.close()

    } catch (error) {
        console.error('Error saving user:', error);
        res.status(500).json({ error: 'Error saving user' });
    }

    }


    main()
});





module.exports = router;
