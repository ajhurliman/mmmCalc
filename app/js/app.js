'use strict';

require('angular/angular');

var mmmApp = angular.module('mmmApp', []);

require('./calc/controllers/calc-controller')(mmmApp);
