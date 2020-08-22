import service from './service'
import to from '../../utils/to'
import handle from '../../utils/handle'

async function create(req, res) {
  const [error, data] = await to(service.create(req))
  handle(res, data, error)
}

async function destroy(req, res) {
  const [error, data] = await to(service.destroy(req))
  handle(res, data, error)
}

export default {
  create,
  destroy
}
