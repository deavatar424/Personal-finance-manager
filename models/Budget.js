const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({
    title: { type: String, required: true },
    total_amount: { type: Number, required: true },
    duration: { type: String, enum: ['weekly', 'monthly'], required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

module.exports = mongoose.model('Budget', budgetSchema);