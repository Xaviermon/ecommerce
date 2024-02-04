import { Router } from "express";
import { getPayment, createPayment, updatePayment } from "../controllers/payment.controller";

const paymentRouter = Router();

paymentRouter.get("/payment", getPayment);
paymentRouter.post("/payment", createPayment);
paymentRouter.put("/payment", updatePayment);

export default paymentRouter;
