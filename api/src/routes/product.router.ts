import { Router } from "express";
import { getProducts, createProduct, updateProduct, deleteProduct } from "../controllers/products.controller";

const productRouter = Router();

productRouter.get("/product", getProducts);
productRouter.post("/product", createProduct);
productRouter.put("/product", updateProduct);
productRouter.delete("/product", deleteProduct);

export default productRouter;
