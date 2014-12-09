'use strict';
var mmm = require('../lib/mean_median_mode');

module.exports = function(app) {
  app.post('/api/calculate', function(req, res) {
    var mean = mmm.mean(req.body.numArray);
    var median = mmm.median(req.body.numArray);
    var mode = mmm.mode(req.body.numArray);
    res.json({'mean': mean, 'median': median, 'mode': mode});
  });
};
