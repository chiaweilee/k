const { app, start } = require('./app')
const check = require('./check')

module.exports = {
  app,
  start: function () {
    if (check()) start()
  }
}
