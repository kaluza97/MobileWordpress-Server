import { Request, Response } from "express";
import AppData from "../models/appDataModel";

export const getHeader = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const appData = await AppData.findOne({}, { header: 1, _id: 0 });
    if (!appData) {
      res.status(404).json({ message: "Header not found." });
      return;
    }
    res.status(200).json(appData.header);
  } catch (error) {
    res.status(500).json({ message: "Error fetching header.", error });
  }
};

export const updateHeader = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const updatedAppData = await AppData.findOneAndUpdate(
      {},
      { header: req.body.header },
      { new: true, upsert: true }
    );
    res.status(200).json(updatedAppData.header);
  } catch (error) {
    res.status(500).json({ message: "Error updating header.", error });
  }
};
