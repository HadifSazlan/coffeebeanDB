import { Router } from 'express';

import { getRoasters, addRoaster, getRoaster, updateRoaster, deleteRoaster } from '../roasters/controller.js';

const router = Router();

router.get('/', getRoasters);
router.post('/', addRoaster);
router.get('/:roasterid', getRoaster);
router.put('/:roasterid', updateRoaster);
router.delete('/:roasterid', deleteRoaster);

export default router;