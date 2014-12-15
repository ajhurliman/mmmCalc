'use strict';

module.exports = function(app) {
  var handleErrors = function(data) {
    console.log(data);
  };

  app.factory('calcFactory', ['$http', function($http) {
    return function() {
      return {
        calculate: function(numList) {
          return $http({
            method: 'POST',
            url: '/api/calculate',
            data: numList
          })
          .error(handleErrors);
        },
      };
    };
  }]);
};
