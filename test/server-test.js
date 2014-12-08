'use strict';

var chai = require('chai');
var chaihttp = require('chai-http');
chai.use(chaihttp);

var expect = chai.expect;

require('../server');

describe('mean median and mode api', function() {
  it('should test mean the mean', function(done) {
    chai.request('http://localhost:3000')
    .post('/api/calculate')
    .send( {"numArray": [4, 4, 7]} )
    .end(function(err, res) {
      expect(err).to.eql(null);
      expect(res.body.mean).to.eql(5);
      expect(res.body.median).to.eql(4);
      expect(res.body.mode).to.eql(4);
      done();
    });
  });
});
