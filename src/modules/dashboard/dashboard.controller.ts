import { Response } from "express";
import { AuthRequest } from "../../middlewares/auth.middleware";
import { DashboardService } from "./dashboard.service";

const getDashboardSummary = async (req: AuthRequest, res: Response) => {
    try {
        const userId = req.user?.userId;

        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized user",
            });
        }

        const result = await DashboardService.getDashboardSummary(userId);

        return res.status(200).json({
            success: true,
            message: "Dashboard summary retrieved successfully",
            data: result,
        });
    } catch (error: any) {
        return res.status(400).json({
            success: false,
            message: error.message || "Failed to get dashboard summary",
        });
    }
};

export const DashboardController = {
    getDashboardSummary,
};