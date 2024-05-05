import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer.js";
import axios from "axios";
// Initial State
const initialState = {
  transactions: [],
  error: null,
  loading: true,
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  async function getTransaction() {
    try {
      const res = await axios.get("/api/v1/transactions");
      console.log(res.data);
      dispatch({
        type: "GET_TRANSACTIONS",
        payload: res.data.data,
      });
    } catch (err) {
      // console.log(err);
      dispatch({
        type: "TRANSACTIONS_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  async function deleteTransaction(id) {
    try {
      await axios.delete(`/api/v1/transactions/${id}`);

      dispatch({
        type: "DELETE_TRANSACTION",
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTIONS_ERROR",
        payload: err.response.data.error,
      });
    }
  }
  async function addTransaction(transaction) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
  
    
    try {
      let res = await axios.post(`/api/v1/transactions`, transaction, config);
       
       dispatch({
         type: "ADD_TRANSACTION",
         payload: res.data.data,
       });
    } catch (err) {
       dispatch({
         type: "TRANSACTIONS_ERROR",
         payload: err.response.data.error,
       });
    }
   
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        getTransaction,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
