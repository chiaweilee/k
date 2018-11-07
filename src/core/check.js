const { log } = require('../utils')
const joi = require('joi')
const config = require('../config')
const routes = require('../routes')

const validate = function (it, schema) {
  return joi.validate(it, schema(joi), err => {
    if (err) {
      throw err
    } else {
      return true
    }
  })
}

const configSchema = joi => joi.object({
  'Access-Control-Allow-Origin': joi.array(),
  port: joi.alternatives().try(joi.number().port(), joi.object())
})

const routesSchema = joi => joi.object({
  get: joi.object(),
  post: joi.object(),
  put: joi.object(),
  del: joi.object(),
  all: joi.object(),
})

module.exports = function () {
  if (!validate(config, configSchema)) return false
  log('config validate success..')
  if (!validate(routes, routesSchema)) return false
  log('routes validate success..')
  return true
}
