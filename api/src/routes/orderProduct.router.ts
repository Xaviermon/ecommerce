import { Router } from "express";
import { getOrderProduct, createOrderProduct, deleteOrderProduct } from "../controllers/orderProduct.controller";

const orderProductRouter = Router();

orderProductRouter.get("/order-product", getOrderProduct);
orderProductRouter.get("/order-product", createOrderProduct);
orderProductRouter.get("/order-product", deleteOrderProduct);

export default orderProductRouter;
