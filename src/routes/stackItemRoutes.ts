import { Router } from "express";
import {
  getStackItem,
  updateStackItem,
} from "../controllers/stackItemController";

const router = Router();

router.get("/", getStackItem);

router.post("/", updateStackItem);

export default router;
