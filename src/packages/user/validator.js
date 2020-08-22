import Joi from 'joi'
import config from '../../config'
import customizeErrorMessage from '../../utils/base-validate';


export default {
  validateStore: {
    body: {
      name: Joi.string().required().max(255).min(3).label('name').error(customizeErrorMessage()),
      email: Joi.string().required().regex(config.regex.email).max(255).min(5).label('email').error(customizeErrorMessage()),
      password: Joi.string().required().max(255).min(3).label('password').error(customizeErrorMessage()),
    }
  },
  validateLogin: {
    body: {
      email: Joi.string().required().regex(config.regex.email).max(255).min(5).label('email').error(customizeErrorMessage()),
      password: Joi.string().required().label('password').error(customizeErrorMessage()),
    }
  },
  validateUpdate: {
    body: {
      title: Joi.string().required().label('title'),
      status: Joi.string().valid(config.statuses.all).label('status')
    }
  },
  validateGetPaginate: {
    query: {
      page: Joi.number().integer().default(config.pagination.page).min(1).label('page'),
      limit: Joi.number().integer().default(config.pagination.limit).label('limit'),
    }
  },
  validateGet: {
    params: {
      id: Joi.string().required().regex(config.regex.objectId).error(customizeErrorMessage())
    }
  }
}
