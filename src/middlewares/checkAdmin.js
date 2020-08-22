import config from '../config'
import { returnError } from '../utils/response-handler'

async function checkAdmin(req, res, next) {
  const {user} = req
  if (user) {
    if (user.role === config.role.admin) {
      return next()
    }

    return returnError(res, 'You are not admin')
  }

  return returnError(res, 'User is not found')

}

export {
  checkAdmin
}