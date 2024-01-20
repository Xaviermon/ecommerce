import { Router } from "express";

const paymentMethodRouter = Router();

paymentMethodRouter.get("/payment-method", (req, res) => {
  console.log("ruta paymentMethod");
});

export default paymentMethodRouter;
