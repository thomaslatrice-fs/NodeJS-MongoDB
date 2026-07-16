/*const { config } = require("dotenv");
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = mongoose.connect(process.env.MONGODB_URI);
    console.log(`Connected to MongoDB successfully ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
*/
const mongoose = require("mongoose");

const connectDB = async () => {
  const uri = process.env.MONGO_URI;

  if (!uri) {
    throw new Error("MONGO_URI is missing from the .env file");
  }

  const connection = await mongoose.connect(uri);

  console.log(`MongoDB connected: ${connection.connection.host}`);

  return connection;
};

module.exports = connectDB;
