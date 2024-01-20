import { Router } from "express";

const productRouter = Router();

productRouter.get("/product", (req, res) => {
  console.log("ruta product");
});

export default productRouter;
