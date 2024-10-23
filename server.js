const express = require('express');

// TODO 16 : HAVE AN ERROR HANDLING HERE JUST INCASE DI MAHANAP MGA FILES NA TO
const connectDB = require('./backend/config/db/dbConn.js');  // Database connection
const userRoutes = require('./backend/routes/userRoutes.js');  // Routes

const app = express();
const port = 3000;

// Connect to MongoDB
// TODO 9 : AS THIS IS AN EXPORT FUNCTION HAVE A TRY CATCH BLOCK HERE TO MAKE SURE THAT ALL IS WORKING
async function start_server(){
    try{
        await connectDB()
        console.log('Database and server succesfully connected');

        // Middleware to parse form data
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));

        // TODO 17 : HAVE AN ERROR HANDLING BAKA SAKALING DI ULIT MAKUHA YUNG PATH
        const path = require('path')
        app.use(express.static(__dirname));

        // Routes for handling form submission
        app.use('/api', userRoutes);  // API routes
        // starting the server
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });

    }catch(error){
        console.error('Error connecting to database', error)
    }
    
}

start_server()