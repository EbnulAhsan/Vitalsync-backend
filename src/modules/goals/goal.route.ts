import express from "express";
import { authMiddleware } from "../../middlewares/auth.middleware";
import { GoalController } from "./goal.controller";

const router = express.Router();

router.post("/", authMiddleware, GoalController.createGoal);
router.get("/", authMiddleware, GoalController.getMyGoals);
router.get("/:id", authMiddleware, GoalController.getGoalById);
router.patch("/:id", authMiddleware, GoalController.updateGoal);
router.delete("/:id", authMiddleware, GoalController.deleteGoal);

export default router;