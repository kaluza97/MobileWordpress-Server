import { Request, Response } from "express";
import Header from "../models/headerModel";

export const getHeader = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const header = await Header.findOne();

    res.status(200).json(header);
  } catch (error) {
    res.status(500).json({ message: "Error fetching header.", error });
  }
};

export const updateHeader = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const updatedHeader = await Header.findOneAndUpdate(
      {},
      { header: req.body.header },
      { new: true, upsert: true }
    );

    res.status(200).json(updatedHeader);
  } catch (error) {
    res.status(500).json({ message: "Error updating header.", error });
  }
};
