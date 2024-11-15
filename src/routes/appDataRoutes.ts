import { Router } from "express";
import { getAppData } from "../controllers/appDataController";

const router = Router();

router.get("/", getAppData);

export default router;
