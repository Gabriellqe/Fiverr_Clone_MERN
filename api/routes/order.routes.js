import express from "express";
import { getOrders, intent, confirm } from "../controllers/order.controller.js";
import { verifyToken } from "../middlewares/jwt.js";
const router = express.Router();

router.get("/", verifyToken, getOrders);
router.post("/create-payment-intent/:id", verifyToken, intent);
//router.put("/", verifyToken, confirm);

export default router;
