import service from './service'
import to from '../../utils/to'
import handle from '../../utils/handle'

async function create(req, res) {
  const [error, data] = await to(service.create(req))
  handle(res, data, error)
}

async function upload(req, res) {
  const [error, data] = await to(service.upload(req))
  handle(res, data, error)
}

async function show(req, res) {
  const [error, data] = await to(service.show(req))
  handle(res, data, error)
}

async function getOne(req, res) {
  const [error, data] = await to(service.getOne(req))
  handle(res, data, error)
}

async function crawlVideo(req, res) {
  const [error, data] = await to(service.crawlVideo(req))
  handle(res, data, error)
}

export default {
  create,
  upload,
  show,
  getOne,
  crawlVideo
}
