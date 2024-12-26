const express = require('express');
const { createBudget, getBudgets, getBudgetById, updateBudget, deleteBudget } = require('../controllers/budgetController');
const { authenticateJWT } = require('../middleware/authmiddleware');
const router = express.Router();

router.use(authenticateJWT);
router.post('/', createBudget);
router.get('/', getBudgets);
router.get('/:id', getBudgetById);
router.put('/:id', updateBudget);
router.delete('/:id', deleteBudget);

module.exports = router;