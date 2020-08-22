import express from 'express'
import ImageCtrl from './controller'
import upload from '../../utils/multer';
import validator from '../validator'
import config from '../../config'
import { returnError } from '../../utils/response-handler';


const router = express.Router()

const uploadImage = upload.single('image')

router.post('/', validator.image.validateUpload, (req, res) => {
  uploadImage(req, res, function(err) {
    if (req.fileValidationError) {
      return returnError(res, req.fileValidationError)
    }
    if (req.invalidFile) {
      return returnError(res, req.invalidFile)
    }
    if (err && err.code === 'LIMIT_FILE_SIZE') {
      return returnError(res, config.errorResponse.limit)
    }

    ImageCtrl.create(req, res)
  })
})

/**
 * @api {delete} api/shop/images/:id Delete Image
 * @apiHeader {String} Authorization Access token shop

 * @apiGroup Shop Image
 * @apiName Delete Image
 * @apiVersion 1.0.0
 */

router.delete('/:id', ImageCtrl.destroy)

export default router
