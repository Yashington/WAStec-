const express = require('express');
const router = express.Router();
const { submitContactForm } = require('../controllers/contactController');

// Contact form submission route
router.post('/', submitContactForm);

module.exports = router;