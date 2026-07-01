import { Response } from "express";
import { AuthRequest } from "../../middlewares/auth.middleware";
import { SleepService } from "./sleep.service";

const addSleep = async (req: AuthRequest, res: Response) => {
    try {
        const userId = req.user?.userId;

        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized user",
            });
        }

        const result = await SleepService.addSleep(userId, req.body);

        res.status(201).json({
            success: true,
            message: "Sleep record added successfully",
            data: result,
        });
    } catch (error: any) {
        res.status(400).json({
            success: false,
            message: error.message || "Failed to add sleep record",
        });
    }
};

const getSleepHistory = async (req: AuthRequest, res: Response) => {
    try {
        const userId = req.user?.userId;

        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized user",
            });
        }

        const result = await SleepService.getSleepHistory(userId);

        res.status(200).json({
            success: true,
            message: "Sleep history retrieved successfully",
            data: result,
        });
    } catch (error: any) {
        res.status(400).json({
            success: false,
            message: error.message || "Failed to get sleep history",
        });
    }
};

const getTodaySleep = async (req: AuthRequest, res: Response) => {
    try {
        const userId = req.user?.userId;

        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized user",
            });
        }

        const result = await SleepService.getTodaySleep(userId);

        res.status(200).json({
            success: true,
            message: "Today sleep retrieved successfully",
            data: result,
        });
    } catch (error: any) {
        res.status(400).json({
            success: false,
            message: error.message || "Failed to get today sleep",
        });
    }
};

export const SleepController = {
    addSleep,
    getSleepHistory,
    getTodaySleep,
};