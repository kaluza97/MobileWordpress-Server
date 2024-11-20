import { Router } from 'express';
import { createView, getViewById, updateViewById, deleteViewById, getAllViews } from '../controllers/viewController';

const router = Router();

router.get('/', getAllViews)

router.post('/', createView);

router.get('/:id', getViewById);

router.put('/:id', updateViewById);

router.delete('/:id', deleteViewById);

export default router;
