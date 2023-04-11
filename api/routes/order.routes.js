import express from "express";
import { fn } from "../controllers/user.controller.js";
const router = express.Router();

router.route("/").get();

export default router;
