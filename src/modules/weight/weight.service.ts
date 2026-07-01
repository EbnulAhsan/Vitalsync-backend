import { prisma } from "../../config/prisma";

type AddWeightPayload = {
    weightKg: number;
    note?: string;
};

const addWeight = async (userId: string, payload: AddWeightPayload) => {
    const weightKg = Number(payload.weightKg);

    if (!weightKg || weightKg <= 0) {
        throw new Error("Valid weightKg is required");
    }

    const weightRecord = await prisma.weightHistory.create({
        data: {
            userId,
            weightKg,
            note: payload.note,
        },
    });

    return weightRecord;
};

const getWeightHistory = async (userId: string) => {
    const records = await prisma.weightHistory.findMany({
        where: {
            userId,
        },
        orderBy: {
            recordedAt: "desc",
        },
    });

    return records;
};

const getLatestWeight = async (userId: string) => {
    const latestWeight = await prisma.weightHistory.findFirst({
        where: {
            userId,
        },
        orderBy: {
            recordedAt: "desc",
        },
    });

    if (!latestWeight) {
        throw new Error("No weight record found");
    }

    return latestWeight;
};

export const WeightService = {
    addWeight,
    getWeightHistory,
    getLatestWeight,
};