const compose = require('koa-compose')

module.exports = compose([
  require('./logger')
])
