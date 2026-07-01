import express from "express";
import { authMiddleware } from "../../middlewares/auth.middleware";
import { SleepController } from "./sleep.controller";

const router = express.Router();

router.post("/add", authMiddleware, SleepController.addSleep);
router.get("/history", authMiddleware, SleepController.getSleepHistory);
router.get("/today", authMiddleware, SleepController.getTodaySleep);

export default router;