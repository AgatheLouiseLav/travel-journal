const express = require('express');
const router = express.Router();
const tripsCtrl = require('../controllers/trips');
const ensureLoggedIn = require('../config/ensureLoggedIn');


// Show all trips
router.get('/', tripsCtrl.index);

// Create a trip
router.get('/new', ensureLoggedIn, tripsCtrl.new);

// Show the detals of trip
router.get('/:id', tripsCtrl.show);

//Update trip
router.put('/:id', ensureLoggedIn, tripsCtrl.update);

//Edit trip
router.get('/:id/edit', ensureLoggedIn, tripsCtrl.edit);

// Save the new trip
router.post('/', ensureLoggedIn, tripsCtrl.create);

// Delete Trip by id
router.delete('/:id',  ensureLoggedIn, tripsCtrl.delete);



module.exports = router;