import {Router} from 'express';

import {index, show} from './controller.js';

const router = Router();

router.get('/', index);
router.get('/:slug', show);

export default router