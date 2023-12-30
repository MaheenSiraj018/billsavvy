//survey.js
// Import required modules and models
const express = require('express');
const router = express.Router();
const Survey = require('./inputdata.js');
const User = require('./user.js');

// API endpoint for submitting survey data
router.post('/submit-survey', async (req, res) => {
  try {

    // Assuming you have the user ID in the request body
    const userId = req.body.userId;

// Separate the userId and survey data
const { userId: _, ...surveyData } = req.body;

    // Proceed to save the survey data
    const newSurvey = new Survey({ userId, ...surveyData});
    await newSurvey.save();

// Update the user with the reference to the survey
await User.findByIdAndUpdate(userId, { survey: newSurvey._id });

    res.status(201).json({ message: 'Survey submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;