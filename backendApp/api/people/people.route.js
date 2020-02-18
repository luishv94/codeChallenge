const express = require('express');
const getPeopleController = require('./people.controller');

const router = express.Router();

// Get the list of people.
router.get(
    '/',
    getPeopleController.getPeopleList
);

// Get the frequency count of all the unique characters in all the email addresses of all the People
router.get(
    '/frequencyCount',
    getPeopleController.getFrequencyCount
);

module.exports = router;