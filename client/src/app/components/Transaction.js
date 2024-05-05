import {useContext} from 'react'
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({transaction}) => {
  const { deleteTransaction } = useContext(GlobalContext);

    const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      <span style={{ maxWidth: "400px", marginRight: "15px" }}>
        {transaction.text}
      </span>
      <span style={{ minWidth: "70px" }}>{sign} ₹ {Math.abs(transaction.amount)}</span>
      <button onClick={()=> deleteTransaction(transaction._id)} className="delete-btn">x</button>
    </li>
  );
}

export default Transaction