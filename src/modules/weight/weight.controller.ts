import { Response } from "express";
import { AuthRequest } from "../../middlewares/auth.middleware";
import { WeightService } from "./weight.service";

const addWeight = async (req: AuthRequest, res: Response) => {
    try {
        const userId = req.user?.userId;

        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized user",
            });
        }

        const result = await WeightService.addWeight(userId, req.body);

        res.status(201).json({
            success: true,
            message: "Weight record added successfully",
            data: result,
        });
    } catch (error: any) {
        res.status(400).json({
            success: false,
            message: error.message || "Failed to add weight record",
        });
    }
};

const getWeightHistory = async (req: AuthRequest, res: Response) => {
    try {
        const userId = req.user?.userId;

        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized user",
            });
        }

        const result = await WeightService.getWeightHistory(userId);

        res.status(200).json({
            success: true,
            message: "Weight history retrieved successfully",
            data: result,
        });
    } catch (error: any) {
        res.status(400).json({
            success: false,
            message: error.message || "Failed to get weight history",
        });
    }
};

const getLatestWeight = async (req: AuthRequest, res: Response) => {
    try {
        const userId = req.user?.userId;

        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized user",
            });
        }

        const result = await WeightService.getLatestWeight(userId);

        res.status(200).json({
            success: true,
            message: "Latest weight retrieved successfully",
            data: result,
        });
    } catch (error: any) {
        res.status(400).json({
            success: false,
            message: error.message || "Failed to get latest weight",
        });
    }
};

export const WeightController = {
    addWeight,
    getWeightHistory,
    getLatestWeight,
};