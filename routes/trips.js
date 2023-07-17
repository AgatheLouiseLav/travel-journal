const express = require('express');
const router = express.Router();

const tripsCtrl = require('../controllers/trips');

// Show all trips
router.get('/', tripsCtrl.index);

// Create a trip
router.get('/new', tripsCtrl.new);

// Show the detals of trip
router.get('/:id', tripsCtrl.show);

//Update trip
router.put('/:id', tripsCtrl.update);

//Edit trip
router.get('/:id/edit', tripsCtrl.edit);

// Save the new trip
router.post('/', tripsCtrl.create);

// Delete Trip by id
router.delete('/:id', tripsCtrl.delete);



module.exports = router;