const config = {
  cors: [
    // 'http://localhost/'
  ],
  port: 3008
}

module.exports = require('lodash/merge')(config, {
  routes: require('./routes')
})
