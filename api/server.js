import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
const port = process.env.PORT || 5000;
const app = express();

dotenv.config();
app.use(express.json());

const connectDB = (url) => {
  mongoose.set("strictQuery", true);
  return mongoose.connect(url);
};

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server started on port ${port}`));
  } catch (err) {
    console.log(err);
  }
};

start();
