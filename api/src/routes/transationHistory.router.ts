import { Router } from "express";

const transationHistoryRouter = Router();

transationHistoryRouter.get("/transation-history", (req, res) => {
  console.log("ruta transation History");
});

export default transationHistoryRouter;
