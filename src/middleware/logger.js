const { log } = require('../utils')

module.exports = async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  log(`${ctx.method} ${ctx.url} - ${ms}ms`)
}
