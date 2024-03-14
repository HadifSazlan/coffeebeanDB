import { Router } from 'express';

import { getBeans, addBean, getBean, updateBean, deleteBean } from './controller.js';

const router = Router();

router.get('/', getBeans);
router.post('/', addBean);
router.get('/:beanid', getBean);
router.put('/:beanid', updateBean);
router.delete('/:beanid', deleteBean);

export default router;