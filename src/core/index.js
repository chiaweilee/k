const app = require('./app')
const { log } = require('../utils')
const { port } = require('../config')

// bodyParser
app.use(require('koa-body')())

// router
app.use(require('./router'))

// middleware
app.use(require('../middleware'))

module.exports = {
  app: app,
  start: function () {
    app.listen(port)
    log(`listening at *:${port}`)
  }
}
