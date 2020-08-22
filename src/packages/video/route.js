import express from 'express'
import VideoCtrl from '../video/controller'


const router = express.Router()

router.post('/upload', VideoCtrl.upload)
router.get('/', VideoCtrl.show)
router.get('/:id', VideoCtrl.getOne)
router.get('/crawl', VideoCtrl.crawlVideo)


export default router
