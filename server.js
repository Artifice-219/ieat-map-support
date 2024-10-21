const express = require('express');
const connectDB = require('./backend/config/db/dbConn.js');  // Database connection
const userRoutes = require('./routes/userRoutes');  // Routes

const app = express();
const port = 3000;

// Connect to MongoDB
// TODO 9 : AS THIS IS AN EXPORT FUNCTION HAVE A TRY CATCH BLOCK HERE TO MAKE SURE THAT ALL IS WORKING
main()

// Middleware to parse form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('frontend/pages'));

// Routes for handling form submission
app.use('/api', userRoutes);  // API routes

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
 