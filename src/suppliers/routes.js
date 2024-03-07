import { Router } from 'express';

import { getSuppliers, addSupplier, getSupplier, updateSupplier, deleteSupplier } from '../suppliers/controller.js';

const router = Router();

router.get('/', getSuppliers);
router.post('/', addSupplier);
router.get('/:supplierid', getSupplier);
router.put('/:supplierid', updateSupplier);
router.delete('/:supplierid', deleteSupplier);

export default router;