import to from '../../utils/to'
import service from './service'
import handle from '../../utils/handle'

async function login(req, res) {
  const [error, data] = await to(service.login(req))
  handle(res, data, error)
}

async function create(req, res) {
  const [error, data] = await to(service.create(req))
  handle(res, data, error)
}

async function decodeToken(req, res) {
  const [error, data] = await to(service.decodeToken(req))
  handle(res, data, error)
}

async function crawl(req, res) {
  const [error, data] = await to(service.crawlVideo(req))
  handle(res, data, error)
}

export default {
  login,
  create,
  decodeToken,
  crawl
}