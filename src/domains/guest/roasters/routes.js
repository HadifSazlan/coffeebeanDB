import {Router} from 'express';

import {index, show} from './controller.js';
import {authenticateJWT} from "../../../middlewares/authMiddleware.js";

const router = Router();

router.get('/', authenticateJWT, index);
router.post('/', authenticateJWT, show);

export default router