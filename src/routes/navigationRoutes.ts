import { Router } from 'express';
import { getNavigation, updateNavigation } from '../controllers/navigationController';

const router = Router();

router.get('/', getNavigation);

router.patch('/', updateNavigation);

export default router;
