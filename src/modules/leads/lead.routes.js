const express = require('express');
const router = express.Router();
const leadController = require('./lead.controller');

router.post('/', leadController.createLead);
router.patch('/:id/status', leadController.updateStatus);
router.get('/', leadController.getAllLeads);

module.exports = router;
