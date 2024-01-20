import { Router } from "express";

const orderRouter = Router();

orderRouter.get("order", (req, res) => {
  console.log("ruta order");
});

export default orderRouter;
