import { Request, Response } from "express";
import AppData from "../models/appDataModel";

export const getMainItem = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const appData = await AppData.findOne({}, { main: 1, _id: 0 });

    if (!appData) {
      res.status(404).json({ message: "Main items not found." });
      return;
    }

    res.status(200).json(appData.main);
  } catch (error) {
    res.status(500).json({ message: "Error fetching main items.", error });
  }
};

export const updateMainItem = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const updatedAppData = await AppData.findOneAndUpdate(
      {},
      { main: req.body.main },
      { new: true, upsert: true }
    );
    res.status(200).json(updatedAppData.main);
  } catch (error) {
    res.status(500).json({ message: "Error updating main items.", error });
  }
};
