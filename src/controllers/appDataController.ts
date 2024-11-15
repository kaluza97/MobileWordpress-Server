import { Request, Response } from "express";
import AppData from "../models/appDataModel";

export const getAppData = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const appData = await AppData.findOne();

    if (!appData) {
      res.status(404).json({ message: "App data not found." });
      return;
    }

    res.status(200).json(appData);
  } catch (error) {
    res.status(500).json({ message: "Error fetching app data.", error });
  }
};
