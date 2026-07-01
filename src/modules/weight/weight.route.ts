import express from "express";
import { authMiddleware } from "../../middlewares/auth.middleware";
import { WeightController } from "./weight.controller";

const router = express.Router();

router.post("/add", authMiddleware, WeightController.addWeight);
router.get("/history", authMiddleware, WeightController.getWeightHistory);
router.get("/latest", authMiddleware, WeightController.getLatestWeight);

export default router;