import { Router } from 'express'
import {User, Image, Cate, Video} from './src/packages/router'
import authenticator from './src/middlewares/authenticator'

export default () => {
  const api = Router()

  api.use('*', authenticator)


  api.use('/user/', User)
  api.use('/image/', Image)
  api.use('/cate/', Cate)
  api.use('/video/', Video)

  return api
}
