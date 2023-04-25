import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.routes.js";
import gigRoute from "./routes/gig.routes.js";
import orderRoute from "./routes/order.routes.js";
import conversationRoute from "./routes/conversation.routes.js";
import messageRoute from "./routes/message.routes.js";
import reviewRoute from "./routes/review.routes.js";
import authRoute from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import cors from "cors";

const port = process.env.PORT || 5000;
const app = express();

dotenv.config();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

const connectDB = (url) => {
  mongoose.set("strictQuery", true);
  return mongoose.connect(url);
};

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/gigs", gigRoute);
app.use("/api/orders", orderRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/reviews", reviewRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Someting Wrong";

  return res.status(errorStatus).send(errorMessage);
});

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server started on port ${port}`));
  } catch (err) {
    console.log(err);
  }
};

start();
