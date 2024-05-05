import express from "express";
const router = express.Router();
import transactionController from "./transaction.controller.js";

router.get("/", (req, res) => {
  transactionController.getTransactions(req, res);
});

router.post("/", (req, res) => {
  transactionController.addTransaction(req, res);
});

router.delete("/:id", (req, res) => {
  transactionController.deleteTransaction(req, res);
});

export default router;
