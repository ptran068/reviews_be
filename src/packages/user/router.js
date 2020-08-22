import express from 'express';
import UserCtrl from './controller';
import validator from '../validator'
import { checkAdmin } from '../../middlewares/checkAdmin';

const router = express.Router();

router.post('/login', validator.user.validateLogin, UserCtrl.login)
router.post('/create', validator.user.validateStore, UserCtrl.create)
router.post('/decode-token', UserCtrl.decodeToken)
router.post('/crawl', UserCtrl.crawl)


export default router;
