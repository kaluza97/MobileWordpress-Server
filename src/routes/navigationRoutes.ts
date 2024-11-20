import { Router } from "express";
import {
  getNavigation,
  updateNavigation,
  clearNavigation,
} from "../controllers/navigationController";

const router = Router();

router.get("/", getNavigation);

router.patch("/", updateNavigation);

router.patch("/", clearNavigation);

export default router;
