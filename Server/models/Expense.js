const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  userId: String,
  amount: Number,
  category: String,
  date: { type: Date, default: Date.now },
});

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;
