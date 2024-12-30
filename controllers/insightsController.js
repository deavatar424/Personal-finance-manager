const {Transaction} = require('../models/Transaction');
const {Budget} = require('../models/Budget');

exports.getFinancialSummary = async (req, res) => {
    try {
        const userId = req.user.id;

        // Calculate total income and expenses
        const transactions = await Transaction.find({ userId });
        const totalIncome = transactions
            .filter(t => t.amount > 0)
            .reduce((acc, t) => acc + t.amount, 0);
        const totalExpenses = transactions
            .filter(t => t.amount < 0)
            .reduce((acc, t) => acc + Math.abs(t.amount), 0);

        // Calculate remaining budget
        const budgets = await Budget.find({ userId });
        const remainingBudget = budgets.reduce((acc, budget) => acc + budget.total_amount, 0) - totalExpenses;

        // Calculate top spending categories
        const spendingCategories = transactions
            .filter(t => t.amount < 0)
            .reduce((acc, t) => {
                acc[t.category] = (acc[t.category] || 0) + Math.abs(t.amount);
                return acc;
            }, {});

        const topSpendingCategories = Object.entries(spendingCategories)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5); // Top 5 categories

        res.json({
            totalIncome,
            totalExpenses,
            remainingBudget,
            topSpendingCategories
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching financial summary', error });
    }
};

exports.getMonthlyBreakdown = async (req, res) => {
    try {
        const userId = req.user.id;
        const transactions = await Transaction.find({ userId }).sort({ createdAt: -1 });

        const monthlyData = {};

        transactions.forEach(t => {
            const month = new Date(t.createdAt).toLocaleString('default', { month: 'long', year: 'numeric' });
            monthlyData[month] = monthlyData[month] || { income: 0, expenses: 0 };

            if (t.amount > 0) {
                monthlyData[month].income += t.amount;
            } else {
                monthlyData[month].expenses += Math.abs(t.amount);
            }
        });

        res.json(monthlyData);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching monthly breakdown', error });
    }
};
