import React, { useContext } from "react";
import Transaction from "./Transaction";
import { GlobalContext } from "../context/GlobalState";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions
          .sort((a, b) => a.date - b.date)
          .map((transaction) => (
            <div key={transaction.id}>
              <span style={{ fontSize: "15px", fontWeight: "bold" }}>
                {transaction.date}
              </span>
              <Transaction transaction={transaction} />
            </div>
          ))}
      </ul>
    </>
  );
};

export default TransactionList;
