// backend/config/server/app.js
const express = require('express');
const path = require('path');
const app = express();

// Import the auth routes
const authRoutes = require('../../routes/auth'); // Path to auth.js

// Serve static files from the project root
app.use(express.static(path.join(__dirname, '../../../')));

// Use the login/signup routes
app.use('/auth', authRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});