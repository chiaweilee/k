const Koa = require('koa')
const app = new Koa()
const { log } = require('../utils')
const { port } = require('../config')

// middleware
app.use(require('../middleware'))

module.exports = {
  app: app,
  start: function () {
    app.listen(port)
    log(`listening at *:${port}`)
  }
}
