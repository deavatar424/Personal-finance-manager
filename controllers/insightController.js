exports.generateSummary = async (req, res) => {
    // Logic to calculate total income, expenses, and remaining budget
    res.json(summary);
};

exports.monthlyBreakdown = async (req, res) => {
    // Logic to provide a monthly breakdown of income and expenses
    res.json(monthlyData);
};