const express = require('express');
const getPeopleController = require('./people.controller');

const router = express.Router();

// Get the list of people.
router.get(
    '/',
    getPeopleController.getPeopleList
);

module.exports = router;