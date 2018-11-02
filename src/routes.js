const routes = {
  get: {
    'home': {
      path: '/',
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
      path: '/:id',
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
    '/': function (ctx, { validate, body }) {
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