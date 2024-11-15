import { Router } from "express";
import { getMainItem, updateMainItem } from "../controllers/mainItemController";

const router = Router();

router.get("/", getMainItem);

router.post("/", updateMainItem);

export default router;
