import express, { Application } from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import headerRoutes from "./routes/headerRoutes";
import appDataRoutes from "./routes/appDataRoutes";
import stackItemRoutes from "./routes/stackItemRoutes";
import mainItemRoutes from "./routes/mainItemRoutes";

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());
app.use("/api/appData", appDataRoutes);
app.use("/api/appData/mainItem", mainItemRoutes);
app.use("/api/appData/header", headerRoutes);
app.use("/api/appData/stackItem", stackItemRoutes);

mongoose
  .connect(process.env.MONGODB_URI || "")
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error: Error) => console.error(error));

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
