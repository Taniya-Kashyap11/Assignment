import express from "express";
import { getKey, paymentverification, processPayment } from "../controller/productController.js";

const router = express.Router();

router.route("/payment/process").post(processPayment);

router.route("/getKey").get(getKey);
router.route("/paymentVerification").post(paymentverification)
export default router;