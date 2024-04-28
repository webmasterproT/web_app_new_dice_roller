const express = require('express');
const router = express.Router();
const diceController = require('../controllers/diceController');

// Route for rolling dice
router.post('/roll', diceController.rollDice);

// Route for saving the results log
router.post('/save-log', diceController.saveResultsLog);

// Route for exporting the results log to PDF
router.get('/export-log', diceController.exportResultsLogToPDF);

module.exports = router;