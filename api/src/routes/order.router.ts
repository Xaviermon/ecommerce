import { Router } from "express";
import { getOrder, createOrder, updateOrder, deleteOrder } from "../controllers/order.controller";

const orderRouter = Router();

orderRouter.get("/order", getOrder)
orderRouter.post("/order", createOrder)
orderRouter.put("/order", updateOrder)
orderRouter.delete("/order", deleteOrder)

export default orderRouter;
