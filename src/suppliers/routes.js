import { Router } from 'express';

import { index, store, getSupplier, updateSupplier, deleteSupplier } from './controller.js';

const router = Router();

router.get('/', index);
router.post('/', store);
router.get('/:supplierid', getSupplier);
router.put('/:supplierid', updateSupplier);
router.delete('/:supplierid', deleteSupplier);

export default router;