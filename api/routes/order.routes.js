import express from "express";
import {
  getOrders,
  createOrder,
  confirm,
} from "../controllers/order.controller.js";
import { verifyToken } from "../middlewares/jwt.js";
const router = express.Router();

router.route("/").get(verifyToken, getOrders).put(verifyToken, confirm);
router.route("/:id").post(verifyToken, createOrder);

export default router;
