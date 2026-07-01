import { Response } from "express";
import { AuthRequest } from "../../middlewares/auth.middleware";
import { BMIService } from "./bmi.service";

const calculateBMI = async (req: AuthRequest, res: Response) => {
    try {
        const userId = req.user?.userId;

        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized user",
            });
        }

        const result = await BMIService.calculateBMI(userId, req.body);

        res.status(201).json({
            success: true,
            message: "BMI calculated successfully",
            data: result,
        });
    } catch (error: any) {
        res.status(400).json({
            success: false,
            message: error.message || "Failed to calculate BMI",
        });
    }
};

const getBMIHistory = async (req: AuthRequest, res: Response) => {
    try {
        const userId = req.user?.userId;

        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized user",
            });
        }

        const result = await BMIService.getBMIHistory(userId);

        res.status(200).json({
            success: true,
            message: "BMI history retrieved successfully",
            data: result,
        });
    } catch (error: any) {
        res.status(400).json({
            success: false,
            message: error.message || "Failed to get BMI history",
        });
    }
};

export const BMIController = {
    calculateBMI,
    getBMIHistory,
};
