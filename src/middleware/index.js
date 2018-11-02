const compose = require('koa-compose')

module.exports = compose([
  // core
  require('./cors'),
  require('./router'),
  require('koa-body')(),
  // others
  require('koa-logger')()
])
