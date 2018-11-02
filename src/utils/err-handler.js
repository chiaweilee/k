const log = require('./log')

module.exports = (ctx, err) => {
  log(err.message, true)
  const errCode = err.statusCode || err.status || 500
  ctx.status = errCode
  ctx.body = {
    error: true,
    code: errCode,
    message: err.message
  }
}
