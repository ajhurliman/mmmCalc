'use strict';

var express = require('express');
var bodyparser = require('body-parser');
var app = express();

app.use(bodyparser.json());
app.use(express.static(__dirname + '/build'));

require('./routes/calc-routes')(app);

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
  console.log('server is up, listening on port: %d', app.get('port'));
});
