const express = require('express');
const { addTransaction, getTransactions } = require('../controllers/transactionController');
const { authenticateJWT } = require('../middleware/authmiddleware');
const router = express.Router();

router.use(authenticateJWT);
router.post('/', addTransaction);
router.get('/', getTransactions);

// Add other transaction routes similarly

module.exports = router;