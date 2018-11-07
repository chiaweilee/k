const http = require('http')
const https = require('https')
const Koa = require('koa')
const app = new Koa()
const { log } = require('../utils')
const { port } = require('../config')

// middleware
app.use(require('../middleware'))

module.exports = {
  app: app,
  start: function () {
    if (typeof port === 'number') {
      app.listen(port)
      log(`http server listening at *:${port}`)
    } else if (typeof port === 'object') {
      if (port.http) {
        http.createServer(app.callback()).listen(port.http)
        log(`http server listening at *:${port.http}`)
      }
      if (port.https) {
        https.createServer(app.callback()).listen(port.https)
        log(`https server listening at *:${port.https}`)
      }
    }
  }
}
