
module.exports = require('koa-compose')([
  // core
  require('./cors'),
  require('./router'),
  require('koa-body')(),
  // others
  require('koa-logger')()
])
