import { Router } from "express";

const paymentRouter = Router();

paymentRouter.get("/payment", (req, res) => {
  console.log("ruta payment");
});

export default paymentRouter;
