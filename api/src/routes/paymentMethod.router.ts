import { Router } from "express";
import { getPaymentMethod, createPaymentMethod, updatePaymentMethod, deltePaymentMethod } from "../controllers/paymentMethods.controller";

const paymentMethodRouter = Router();

paymentMethodRouter.get("/payment-method", getPaymentMethod);
paymentMethodRouter.post("/payment-method", createPaymentMethod);
paymentMethodRouter.put("/payment-method", updatePaymentMethod);
paymentMethodRouter.delete("/payment-method", deltePaymentMethod);

export default paymentMethodRouter;
