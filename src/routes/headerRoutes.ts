import { Router } from 'express';
import { getHeader, updateHeader } from '../controllers/headerController';

const router = Router();

router.get('/', getHeader);

router.patch('/', updateHeader);

export default router;
