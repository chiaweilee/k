
module.exports = require('koa-compose')([
  // core
  require('../core/cors'),
  require('../core/router'),
  require('koa-body')(),
  // others
  require('koa-logger')()
])
