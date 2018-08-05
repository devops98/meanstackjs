var assert = require('chai').assert
var request = require('supertest')

describe('<%= Name %>', function () {
  describe('GET /api/<%= name %>', function () {
    it('should be returning <%= name %>', function (done) {
      request('52.211.38.127:3000/')
        .get('api/<%= name %>')
        .expect(200, function (error, res) {
          if (error) return done(error)
          assert.deepEqual(res.body, [])
          done()
        })
    })
  })
})
