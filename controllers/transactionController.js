const Transaction = require('../models/Transaction');

exports.addTransaction = async (req, res) => {
    const transaction = new Transaction({ ...req.body, userId: req.user.id });
    await transaction.save();
    res.status(201).json(transaction,{message:" Transactions created successfuly"});
};

exports.getTransactions = async (req, res) => {
    const transactions = await Transaction.find({ userId: req.user.id });
    res.json(transactions);


};

exports.updateTransactions = async (req, res) => {
    const Transactions = await Transactions.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({Transactions,message:"Transactions updated successfuly"});
};
exports.deleteTransactions = async (req, res) => {
    await Transactions.findByIdAndDelete(req.params.id);
    res.status(204).json({message:" Transactions deleted successfuly"});
};
// Implement other transaction functions (get by ID, update, delete) similarly
