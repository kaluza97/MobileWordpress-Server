import { Request, Response } from "express";
import AppData from "../models/appDataModel";

export const getStackItem = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const appData = await AppData.findOne({}, { stack: 1, _id: 0 });

    if (!appData) {
      res.status(404).json({ message: "Stack items not found." });
      return;
    }

    res.status(200).json(appData.stack);
  } catch (error) {
    res.status(500).json({ message: "Error fetching stack items.", error });
  }
};

export const updateStackItem = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const updatedAppData = await AppData.findOneAndUpdate(
      {},
      { stack: req.body.stack },
      { new: true, upsert: true }
    );
    res.status(200).json(updatedAppData.stack);
  } catch (error) {
    res.status(500).json({ message: "Error updating stack items.", error });
  }
};
