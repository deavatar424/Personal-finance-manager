const Budget = require('../models/Budget');

exports.createBudget = async (req, res) => {
    const budget = new Budget({ ...req.body, userId: req.user.id });
    await budget.save();
    res.status(201).json({budget,message:"budget created successfuly"});
};

exports.getBudgets = async (req, res) => {
    const budgets = await Budget.find({ userId: req.user.id });
    res.json(budgets);
};

exports.getBudgetById = async (req, res) => {
    const budget = await Budget.findById(req.params.id);
    res.json(budget);
};

exports.updateBudget = async (req, res) => {
    const budget = await Budget.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({budget,message:"budget updated successfuly"});
};

exports.deleteBudget = async (req, res) => {
    await Budget.findByIdAndDelete(req.params.id);
    res.status(204).json({message:" budget deleted successfuly"});
};