import express from "express";
import { authMiddleware } from "../../middlewares/auth.middleware";
import { WaterController } from "./water.controller";

const router = express.Router();

router.post("/add", authMiddleware, WaterController.addWater);
router.get("/history", authMiddleware, WaterController.getWaterHistory);
router.get("/today", authMiddleware, WaterController.getTodayWater);

export default router;