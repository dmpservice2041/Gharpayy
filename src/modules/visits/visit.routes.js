const express = require('express');
const router = express.Router();
const visitController = require('./visit.controller');

router.post('/', visitController.scheduleVisit);

module.exports = router;
