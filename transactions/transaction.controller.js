import TransactionModel from "../models/Transaction.js";

// @desc     Get all transactions
// @route    GET /api/v1/transactions
// @access   Public

async function getTransactions(req, res) {
  try {
    const transactions = await TransactionModel.find();

    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (err) {
    console.log("Error: in getTransactions function controller");
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
}

// @desc     Add transaction
// @route    POST /api/v1/transactions
// @access   Public
async function addTransaction(req, res) {
  
  try {
    console.log("in addTransaction function controller");
    const { text, amount } = req.body;

    const transaction = await TransactionModel.create(req.body);

    return res.status(201).json({
      success: true,
      data: transaction,
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);

      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }
}

// @desc     Delete transaction
// @route    DELETE /api/v1/transactions/:id
// @access   Public

async function deleteTransaction(req, res) {
 try {
     console.log("in deleteTransaction function controller");

     const transaction = await TransactionModel.findByIdAndDelete(req.params.id);
        console.log(req.params.id);
        console.log(transaction);
     if(!transaction){
        return res.status(404).json({
            success:false,
            error: "No transaction found"
        })
     }
     console.log('check-1');
    //  await transaction.remove()
     console.log("check-2");

     return res.status(200).json({
        success: true,
        data: {}
     })
 } catch (err) {
     console.log("Error: in deleteTransaction function controller");
    console.log(err);
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
 }
}
export default { getTransactions, addTransaction, deleteTransaction };
