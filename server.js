const express = require('express');
// TODO 1 : does this path even works ?
const connectDB = require('./backend/config/db/dbConn.js');  // Database connection
// TODO 2 : this route is not created as of yet
const userRoutes = require('./routes/userRoutes');  // Routes

const app = express();
const port = 3000;

// TODO 3 : THIS IS AN ERRONOUS EXPORT FILE
// Connect to MongoDB
connectDB();

// Middleware to parse form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static HTML files from the "public" directory
// TODO: THERE IS NO SUCH THING AS 'PUBLIC' ON YOURE DIRECTORY GALING PA TO SA PRACTICE FILE MO E
app.use(express.static('public'));

// Routes for handling form submission
app.use('/api', userRoutes);  // API routes

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
 