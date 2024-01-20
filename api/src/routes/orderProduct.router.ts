import { Router } from "express";

const orderProductRouter = Router();

orderProductRouter.get("/order-product", (req, res) => {
  console.log("ruta orderProduct");
});

export default orderProductRouter;
