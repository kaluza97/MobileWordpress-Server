import { Request, Response } from 'express';
import View from '../models/viewModel';

export const getAllViews = async (_req: Request, res: Response): Promise<void> => {
    try {
        const view = await View.find();

        res.status(200).json(view);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching view.', error });
    }
};

export const createView = async (req: Request, res: Response): Promise<void> => {

    try {
        const view = await View.create({ name: req.body.name })
        res.status(201).json(view)
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating record.', error });
    }
};

export const getViewById = async (req: Request, res: Response): Promise<void> => {
    try {
        const view = await View.findById(req.params.id);
        res.status(200).json(view);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching record.', error });
    }
};

export const updateViewById = async (req: Request, res: Response): Promise<void> => {
    try {
        const view = await View.findOneAndUpdate(
            { _id: req.params.id },
            { name: req.body.name },
            { new: true }
        );
        res.status(200).json(view);
    } catch (error) {
        res.status(500).json({ message: 'Error updating record.', error });
    }
};

export const deleteViewById = async (req: Request, res: Response): Promise<void> => {
    try {
        const view = await View.findOneAndDelete({ _id: req.params.id });
        res.status(202).json(view);
    } catch (error) {
        res.status(500).json({ message: 'Error deleting record.', error });
    }
};