const app = require('./app')
const { log } = require('../utils')
const { port } = require('../config')

// bodyParser
app.use(require('koa-bodyparser')())

// router
app.use(require('./router'))

// middleware
app.use(require('../middleware'))

module.exports = {
  start: function () {
    app.listen(port)
    log(`listening at *:${port}`)
  }
}
