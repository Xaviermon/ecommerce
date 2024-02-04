import { Router } from "express";
import { getTransationHistory, createTransationHistory, updateTransationHistory, deleteTransationHistory } from "../controllers/transationHistory.controller";

const transationHistoryRouter = Router();

transationHistoryRouter.get("/transation-history", getTransationHistory);
transationHistoryRouter.post("/transation-history", createTransationHistory);
transationHistoryRouter.put("/transation-history", updateTransationHistory);
transationHistoryRouter.delete("/transation-history", deleteTransationHistory);

export default transationHistoryRouter;
