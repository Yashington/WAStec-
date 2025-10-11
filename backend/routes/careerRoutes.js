const express = require('express');
const router = express.Router();
const { submitCareerApplication } = require('../controllers/careerController');

// Career application route
router.post('/', submitCareerApplication);

module.exports = router;