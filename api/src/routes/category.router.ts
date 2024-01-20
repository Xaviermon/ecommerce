import { Router } from "express";

const categoryRouter = Router();

categoryRouter.get("/category", (req, res) => {
  console.log("ruta category");
});

export default categoryRouter;
