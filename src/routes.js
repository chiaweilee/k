const routes = {
  get: {
    'home': {
      path: '/test',
      handler: function (ctx, { query, validate }) {
        validate(query, joi => joi.object({
          id: joi.any().valid(['1', '2', '3'])
        }))
          .then(() => {
            ctx.response.body = query
          })
      }
    },
    'test': {
      path: '/test/:id',
      handler: function (ctx, { validate, params }) {
        validate(params, joi => joi.object({
          id: joi.any().valid(['1', '2', '3'])
        }))
          .then(() => {
            ctx.response.body = params
          })
      }
    }
  },
  post: {
    '/test': function (ctx, { validate, body }) {
      validate(body, joi => joi.object({
        id: joi.any().valid(['1', '2', '3'])
      }))
        .then(() => {
          ctx.response.body = body
        })
    }
  },
  put: {},
  del: {},
  all: {}
}

module.exports = routes
