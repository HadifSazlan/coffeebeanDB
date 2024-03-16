import {Router} from 'express';

import {index, store, getSupplier, updateSupplier, deleteSupplier} from './controller.js';
import {authenticateJWT} from "../../middlewares/authMiddleware.js";

const router = Router();

router.get('/', authenticateJWT, index);
router.post('/', authenticateJWT, store);
router.get('/:supplierid', getSupplier);
router.put('/:supplierid', updateSupplier);
router.delete('/:supplierid', deleteSupplier);

export default router;