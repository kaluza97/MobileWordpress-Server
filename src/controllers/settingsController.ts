import { Request, Response } from 'express';
import Settings from '../models/settingsModel';


export const getSettings = async (_req: Request, res: Response): Promise<void> => {
    try {
        const settings = await Settings.find();

        res.status(200).json(settings);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching settings.', error });
    }
};

export const saveSettings = async (req: Request, res: Response): Promise<void> => {

    try {
        const settings = await Settings.create({ name: req.body.name, icon: req.body.icon, view: req.body.view })
        res.status(201).json(settings)
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating record.', error });
    }

};


