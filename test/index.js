const { app } = require('../src/core')
const server = app.listen()
const request = require('supertest').agent(server)

module.exports = {
  app,
  server,
  request
}
