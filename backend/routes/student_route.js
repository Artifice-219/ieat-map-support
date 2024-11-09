const express = require('express');
const Student = require('../model/Student');
const router = express.Router();
const conn = require('../config/db/dbConn')

// POST request to handle data retrieval
router.post('/getStudent', async (req, res) => {
    console.log(`Data received ${req.body}`)

    // requesting student data from the database using email
    try{
        const client = await conn()
        const database = client.database('myLocalDB');
        const collection = database.collection('student_collection');

        // retrieve student data using the email
        const student = await collection.findOne({
            email : req.body.email
        });

        if(student){
            res.status(200).json({
                message : `Student found ${student}`
            });
        }else{
            res.status(404).json({
                message : `Student not found`
            })
        }

        client.close()
    }
    catch(error){
        console.error(`'Error during login' ${error}`);
        res.status(500).json({
            message: `Error during login`
        })
    }
})