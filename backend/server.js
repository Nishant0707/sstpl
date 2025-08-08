// ✅ Dependencies
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import path from "path";

// ✅ Local Modules
import { connectDB } from "./config/db.js";
import contactRoutes from "./routes/contact.route.js";
import jobRoutes from "./routes/job.route.js";
import infoRoutes from "./routes/info.route.js";
import authRoutes from "./routes/auth.route.js";
import leaderRoutes from "./routes/leader.route.js";

// ✅ Init App
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

// ✅ Middleware
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ extended: true, limit: "20mb" }));
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? process.env.FRONTEND_URL || "*"
        : "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
app.use(morgan("dev"));

// ✅ Routes
app.use("/api/leaders", leaderRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/info", infoRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);

// ✅ Serve frontend in production
if (process.env.NODE_ENV === "production") {
  // Serve the built React app
  app.use(express.static(path.join(__dirname, "frontend", "dist")));

  // Handle any other routes and send back index.html
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
  });
} else {
  // ✅ Dev root endpoint
  app.get("/", (req, res) => {
    res.status(200).send("✅ Backend API is running (Development Mode)");
  });
}

// ✅ Global Error Handler
app.use((err, req, res, next) => {
  console.error("❌", err.stack);
  res.status(500).json({ error: "Something went wrong on the server" });
});

// ✅ DB and Server Boot
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Failed to connect to DB", err);
    process.exit(1);
  });
