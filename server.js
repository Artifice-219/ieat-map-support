const express = require('express');


    const connectDB = require('./backend/config/db/dbConn.js');  // Database connection
    const userRoutes = require('./backend/routes/userRoutes.js');  // Routes


const app = express();
const port = 3000;

async function start_server(){
    try{
        await connectDB()
        console.log('Database and server succesfully connected');

        // Middleware to parse form data
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));
        
        try{
            const path = require('path')
        }
        catch(error){
            console.log(`Cannot load path ${error.message}`)
            // dont just log the error put youre solution here
        }
        app.use(express.static(__dirname));

        // Routes for handling form submission
        app.use('/api', userRoutes);
        // starting the server
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });

    }catch(error){
        console.error('Error connecting to database', error)
    }
    
}

start_server()