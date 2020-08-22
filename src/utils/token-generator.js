import { sign } from 'jsonwebtoken'
import config from '../config'

function generate(data, option = { expiresIn: '7d' }) {
  return sign(data, config.secret, option)
}

export default {
  generate
}
