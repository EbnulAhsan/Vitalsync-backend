import express from "express";
import { authMiddleware } from "../../middlewares/auth.middleware";
import { ProfileController } from "./profile.controller";

const router = express.Router();

router.get("/me", authMiddleware, ProfileController.getMyProfile);
router.patch("/me", authMiddleware, ProfileController.updateMyProfile);

export default router;