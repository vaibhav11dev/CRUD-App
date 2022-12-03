import { Router } from 'express';
const router = Router();

import studentController from '../controllers/studentController.js';

router.get('/', studentController.getAllDoc)
router.post('/', studentController.createDoc)
router.get('/edit/:id', studentController.editDoc)
router.post('/update/:id', studentController.updateDocById)
router.post('/delet/:id', studentController.deletDocById)

export default router;
