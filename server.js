const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const budgetRoutes = require('./routes/budgetRoutes');
const transactionRoutes = require('./routes/transactionRoutes');

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({
    credentials:true
}));



app.use('/api', authRoutes);
app.use('/api/budgets', budgetRoutes);
app.use('/api/transactions', transactionRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT,async() => {
    mongoose.connect(process.env.DB_URI,);
    console.log("database connected")
    console.log(`Server running on port ${PORT}`);
});