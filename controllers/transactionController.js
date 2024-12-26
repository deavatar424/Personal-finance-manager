const Transaction = require('../models/Transaction');

exports.addTransaction = async (req, res) => {
    const transaction = new Transaction({ ...req.body, userId: req.user.id });
    await transaction.save();
    res.status(201).json(transaction);
};

exports.getTransactions = async (req, res) => {
    const transactions = await Transaction.find({ userId: req.user.id });
    res.json(transactions);
};

// Implement other transaction functions (get by ID, update, delete) similarly
