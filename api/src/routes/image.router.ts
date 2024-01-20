import { Router } from "express";

const imageRouter = Router();

imageRouter.get("/image", (req, res) => {
  console.log("ruta image");
});

export default imageRouter;
