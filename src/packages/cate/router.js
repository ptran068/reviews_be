import express from 'express';
import CateCtrl from './controller';

const router = express.Router();

router.post('/',  CateCtrl.create)
router.put('/:id',  CateCtrl.update)
router.delete('/:id', CateCtrl.destroy)


export default router;
