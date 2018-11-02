const { server, request } = require('../')

describe('404', function () {
  after(function () {
    server.close()
  })

  describe('when GET unreachable page', function () {
    it('should return 404', function (done) {
      request
        .get('/ibelievenoonewillusethisurlasatrueurlinproduction-soitshouldbe404')
        .expect(404)
        .expect(/Not Found/, done)
    })
  })

  describe('when POST unreachable page', function () {
    it('should return 404', function (done) {
      request
        .post('/ibelievenoonewillusethisurlasatrueurlinproduction-soitshouldbe404')
        .expect(404)
        .expect(/Not Found/, done)
    })
  })
})
