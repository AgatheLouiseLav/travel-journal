const express = require('express');
const router = express.Router();
const friendsCtrl = require('../controllers/friends');

router.post('/trips/:id/friends', friendsCtrl.create);

module.exports = router;
