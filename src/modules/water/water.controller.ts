import { Response } from "express";
import { AuthRequest } from "../../middlewares/auth.middleware";
import { WaterService } from "./water.service";

const addWater = async (req: AuthRequest, res: Response) => {
    try {
        const userId = req.user?.userId;

        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized user",
            });
        }

        const result = await WaterService.addWater(userId, req.body);

        res.status(201).json({
            success: true,
            message: "Water intake added successfully",
            data: result,
        });
    } catch (error: any) {
        res.status(400).json({
            success: false,
            message: error.message || "Failed to add water intake",
        });
    }
};

const getWaterHistory = async (req: AuthRequest, res: Response) => {
    try {
        const userId = req.user?.userId;

        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized user",
            });
        }

        const result = await WaterService.getWaterHistory(userId);

        res.status(200).json({
            success: true,
            message: "Water history retrieved successfully",
            data: result,
        });
    } catch (error: any) {
        res.status(400).json({
            success: false,
            message: error.message || "Failed to get water history",
        });
    }
};

const getTodayWater = async (req: AuthRequest, res: Response) => {
    try {
        const userId = req.user?.userId;

        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized user",
            });
        }

        const result = await WaterService.getTodayWater(userId);

        res.status(200).json({
            success: true,
            message: "Today water intake retrieved successfully",
            data: result,
        });
    } catch (error: any) {
        res.status(400).json({
            success: false,
            message: error.message || "Failed to get today water intake",
        });
    }
};

export const WaterController = {
    addWater,
    getWaterHistory,
    getTodayWater,
};