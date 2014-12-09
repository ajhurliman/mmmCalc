'use strict';

module.exports = function(app) {
  app.controller('calcCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.mmmCalc = function() {

      //parse the user's input into array of numbers
      var numArray = $scope.inputArray.split(" ");
      var arrLength = numArray.length;
      for(var i = 0; i < arrLength; i++) {
        numArray[i] = parseInt(numArray[i], 10);
      }
      var params = {"numArray": numArray};
      console.log(params);

      //send a get request to the server with the array
      $http({
        method: 'POST',
        url: '/api/calculate',
        data: params
      })
      .success(function(data) {
        //$httpBackend was sending me a 1-member array for some reason
        //so this line takes care of it
        data = data[0] || data;

        $scope.mean = data.mean;
        $scope.median = data.median;
        $scope.mode = data.mode;
      })
      .error(function(data, status) {
        console.log('fail!');
        console.log(data);
      });
    };
  }]);
};
