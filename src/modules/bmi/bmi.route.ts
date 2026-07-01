import express from "express";
import { authMiddleware } from "../../middlewares/auth.middleware";
import { BMIController } from "./bmi.controller";

const router = express.Router();

router.post("/calculate", authMiddleware, BMIController.calculateBMI);
router.get("/history", authMiddleware, BMIController.getBMIHistory);

export default router;