import { Request, Response } from 'express';
import Navigation from '../models/navigationModel';

export const getNavigation = async (_req: Request, res: Response): Promise<void> => {
    try {
        const navigation = await Navigation.findOne();

        res.status(200).json(navigation);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching navigation.', error });
    }
};

export const updateNavigation = async (req: Request, res: Response): Promise<void> => {
    try {
        const updatedNavigation = await Navigation.findOneAndUpdate(
            {},
            { navigation: req.body.navigation },
            { new: true, upsert: true }
        );

        res.status(200).json(updatedNavigation);
    } catch (error) {
        res.status(500).json({ message: 'Error updating navigation.', error });
    }
};