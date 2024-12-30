const express = require('express');
const { getFinancialSummary, getMonthlyBreakdown } = require('../controllers/insightsController');
const { authenticateJWT } = require('../middleware/authmiddleware'); // Ensure you have an authentication middleware
const router = express.Router();

router.get('/summary', authenticateJWT, getFinancialSummary);
router.get('/monthly', authenticateJWT, getMonthlyBreakdown);

module.exports = router; 

