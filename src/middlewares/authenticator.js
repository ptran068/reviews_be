import config from '../config';
import express from 'express'
import { verify } from 'jsonwebtoken'
import returnError from '../utils/handle';

const router = express.Router()
const whiteList = [
  '/user/create',
  '/user/login',
  '/user/upload',
  '/video',
  '/video',

]

router.use((req, res, next) => {

  if (whiteList.includes(req.baseUrl) || req.baseUrl.includes('/video/')) {
    return next()
  }
  const token = req.headers.authorization
  if (token) {
    verify(token.split(' ')[1], config.secret, (error, decoded) => {
      if (error) {
        return returnError(res, config.tokenVerifyFailed.message)
      }
      if (typeof decoded === 'string') {
        decoded = JSON.parse(decodeURIComponent(decoded))
      }
      req.user = decoded
      next()
    })
  } else {
    return returnError(res, config.noToken.message)
  }
})

export default router
