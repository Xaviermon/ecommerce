import { Router } from "express";
import { getCategory, createCategory, updateCategory, deleteCategory } from "../controllers/category.controller";

const categoryRouter = Router();

categoryRouter.get("/category", getCategory);
categoryRouter.post("/category", createCategory);
categoryRouter.put("/category", updateCategory);
categoryRouter.delete("/category", deleteCategory);

export default categoryRouter;
