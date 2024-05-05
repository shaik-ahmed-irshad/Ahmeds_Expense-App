import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, "Please add some text"],
  },
  date: {
    type: String,
    required: [true, "Please add a date"],
  },
  amount: {
    type: Number,
    required: [true, "Please add a positive or negative number"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const TransactionModel = mongoose.model(
  "Transaction", // dunno what
  TransactionSchema, // schema name
  "Transactions" // collection name
);

export default TransactionModel;

// cluster : codeForIndia
// database : expenseTracker
// collection : Transactions
