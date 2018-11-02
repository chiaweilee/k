const merge = require('lodash/merge')
const routes = require('./routes')

const config = {
  cors: [
    // 'http://localhost/'
  ],
  port: 3008
}

module.exports = merge(config, {
  routes: routes
})
