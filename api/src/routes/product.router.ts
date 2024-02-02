import { Router } from "express";
import { getProducts } from "../controllers/products.controller";

const productRouter = Router();

productRouter.get("/product", getProducts);

export default productRouter;
