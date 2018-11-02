const Router = require('koa-router')
const router = new Router()
const { routes } = require('../config')
const { errHandler } = require('../utils/index')
const compose = require('koa-compose')
const queryString = require('query-string')
const merge = require('lodash/merge')
const joi = require('joi')

Object.keys(routes).forEach(method => {
  Object.keys(routes[method]).forEach(route => {
    const path = routes[method][route].path || route
    const handler = typeof routes[method][route] === 'function' ? routes[method][route] : (typeof routes[method][route].handler === 'function' ? routes[method][route].handler : function () {})
    router[method](route, path, async function (ctx, next) {
      // joi validator
      const validate = function (it, schema) {
        this.validate = joi.validate.bind(null, it, schema(joi), err => {
          if (err) {
            errHandler(ctx, err)
          } else {
            if (typeof this.callback === 'function') {
              this.callback()
            }
          }
        })
        return {
          then: callback => {
            this.callback = callback
            this.validate()
          }
        }
      }
      // router core
      try {
        await next()
        handler(ctx, /* merge option */merge(
          {
            validate: validate,
            params: ctx.params || {},
            body: ctx.request.body
          },
          /* parse query */queryString.parseUrl(ctx.url))
        )
      } catch (err) {
        errHandler(ctx, err)
      }
      // clear
      ctx = null
    })
  })
})

module.exports = compose([
  router.routes(),
  router.allowedMethods()
])
