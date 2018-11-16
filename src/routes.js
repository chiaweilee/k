module.exports = {
  get: {
    'home': {
      path: '/',
      handler: function (ctx, { query, $validate, $cache }) {
        $validate(query, joi => joi.object({
          id: joi.any().valid(['1', '2', '3'])
        }))
          .then(() => {
            ctx.response.body = $cache('test', () => Math.random(), 5000)
          })
      }
    }
  }
}
