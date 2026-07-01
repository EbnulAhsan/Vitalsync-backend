import { Response } from "express";
import { AuthRequest } from "../../middlewares/auth.middleware";
import { GoalService } from "./goal.service";

const createGoal = async (req: AuthRequest, res: Response) => {
    try {
        const userId = req.user?.userId;

        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized user",
            });
        }

        const result = await GoalService.createGoal(userId, req.body);

        return res.status(201).json({
            success: true,
            message: "Goal created successfully",
            data: result,
        });
    } catch (error: any) {
        return res.status(400).json({
            success: false,
            message: error.message || "Failed to create goal",
        });
    }
};

const getMyGoals = async (req: AuthRequest, res: Response) => {
    try {
        const userId = req.user?.userId;

        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized user",
            });
        }

        const result = await GoalService.getMyGoals(userId);

        return res.status(200).json({
            success: true,
            message: "Goals retrieved successfully",
            data: result,
        });
    } catch (error: any) {
        return res.status(400).json({
            success: false,
            message: error.message || "Failed to get goals",
        });
    }
};

const getGoalById = async (req: AuthRequest, res: Response) => {
    try {
        const userId = req.user?.userId;
        const goalId = req.params.id as string;

        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized user",
            });
        }

        if (!goalId) {
            return res.status(400).json({
                success: false,
                message: "Goal id is required",
            });
        }

        const result = await GoalService.getGoalById(userId, goalId);

        return res.status(200).json({
            success: true,
            message: "Goal retrieved successfully",
            data: result,
        });
    } catch (error: any) {
        return res.status(404).json({
            success: false,
            message: error.message || "Failed to get goal",
        });
    }
};

const updateGoal = async (req: AuthRequest, res: Response) => {
    try {
        const userId = req.user?.userId;
        const goalId = req.params.id as string;

        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized user",
            });
        }

        if (!goalId) {
            return res.status(400).json({
                success: false,
                message: "Goal id is required",
            });
        }

        const result = await GoalService.updateGoal(userId, goalId, req.body);

        return res.status(200).json({
            success: true,
            message: "Goal updated successfully",
            data: result,
        });
    } catch (error: any) {
        return res.status(400).json({
            success: false,
            message: error.message || "Failed to update goal",
        });
    }
};

const deleteGoal = async (req: AuthRequest, res: Response) => {
    try {
        const userId = req.user?.userId;
        const goalId = req.params.id as string;

        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized user",
            });
        }

        if (!goalId) {
            return res.status(400).json({
                success: false,
                message: "Goal id is required",
            });
        }

        await GoalService.deleteGoal(userId, goalId);

        return res.status(200).json({
            success: true,
            message: "Goal deleted successfully",
            data: null,
        });
    } catch (error: any) {
        return res.status(400).json({
            success: false,
            message: error.message || "Failed to delete goal",
        });
    }
};

export const GoalController = {
    createGoal,
    getMyGoals,
    getGoalById,
    updateGoal,
    deleteGoal,
};