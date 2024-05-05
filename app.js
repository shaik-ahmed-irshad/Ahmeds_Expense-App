// const path = require('path')
import path from 'path'
import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import morgan from "morgan";
import connectDB from "./config/dbConnect.js";

dotenv.config({ path: "./config/config.env" });

import transactionRouter from "./transactions/transaction.routes.js";

const app = express();
app.use(express.json());

app.use("/api/v1/transactions", transactionRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));

  app.get('*', (req,res)=> res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')))
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  );
});
