const express = require('express');
const router = express.Router();

const tripsCtrl = require('../controllers/trips');

router.get('/', tripsCtrl.index);

module.exports = router;