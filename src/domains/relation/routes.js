import {Router} from 'express';

import {index} from './controller.js';
import {authenticateJWT} from "../../middlewares/authMiddleware.js";

const router = Router();

router.get('/', authenticateJWT, index);

export default router;