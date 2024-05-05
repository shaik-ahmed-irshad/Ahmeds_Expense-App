import mongoose from "mongoose";

async function connectDB() {
  try {
    const connect = await mongoose.connect(
      `mongodb+srv://ai-72:caQo8GK45ek7cpXl@codeforindia.jyq6r2l.mongodb.net/expenseTracker`
    );
    console.log(
      `Connected to mongoDB 
      ${connect.connection.host}`.cyan.underline.bold
    );
  } catch (error) {
    console.log(`Error: ${error.message}`.red);
    process.exit(1);
  }
}

connectDB();

export default connectDB;
