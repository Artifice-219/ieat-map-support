// backend/routes/auth.js
const express = require('express');
const path = require('path');
const router = express.Router();

// Route to serve signup.html
router.get('/signup', (req, res) => {
    // Ensure the path is correct and matches the actual file name
    res.sendFile(path.join(__dirname, '../../frontend/pages/signup.html')); // Corrected filename to 'signup.html'
});

module.exports = router;
