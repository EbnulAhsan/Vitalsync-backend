import express from "express";
import cors from "cors";
import authRoutes from "./modules/auth/auth.route";
import profileRoutes from "./modules/profile/profile.route";
import bmiRoutes from "./modules/bmi/bmi.route";

const app = express();

app.use(
    cors({
        origin: process.env.CLIENT_URL || "http://localhost:3000",
        credentials: true,
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "VitalSync Backend API is running 🚀",
    });
});

app.get("/health", (req, res) => {
    res.status(200).json({
        success: true,
        status: "healthy",
        timestamp: new Date().toISOString(),
    });
});

// API Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/bmi", bmiRoutes);

export default app;