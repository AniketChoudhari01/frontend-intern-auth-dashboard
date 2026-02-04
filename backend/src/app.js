import express from "express";
import cors from "cors";
import morgan from "morgan";
import authRoutes from "../src/routes/auth.route.js";
import taskRoutes from "../src/routes/task.route.js";
import errorHandler from "../src/middlewares/error.middleware.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/tasks", taskRoutes);

app.use(errorHandler);
export default app;
