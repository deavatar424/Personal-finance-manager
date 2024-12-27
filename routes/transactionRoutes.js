const express = require('express');
const { addTransaction, getTransactions, deleteTransactions, updateTransactions } = require('../controllers/transactionController');
const { authenticateJWT } = require('../middleware/authmiddleware');
const router = express.Router();

router.use(authenticateJWT);
router.post('/', addTransaction);
router.get('/', getTransactions);
router.put('/:id', updateTransactions);
router.delete('/:id', deleteTransactions);

// Add other transaction routes similarly

module.exports = router;