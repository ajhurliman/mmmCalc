'use strict';

module.exports = function(app) {
  app.directive('formDirective', function() {
    return {
      restrict: 'AC',
      templateUrl: 'templates/directives/calc-form.html'
    };
  });
};
