const express = require('express');
const router = express.Router();

const tripsCtrl = require('../controllers/trips');

// Show all trips
router.get('/', tripsCtrl.index);

// Create a trip
router.get('/new', tripsCtrl.new);

// Show the detals of trip
router.get('/:id', tripsCtrl.show);

// Save the new trip
router.post('/', tripsCtrl.create);

module.exports = router;