'use strict';

module.exports = function(app) {
  app.controller('calcCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.mmmCalc = function() {

      //parse the user's input into array of numbers
      var numArray = $scope.numSet.inputArray.split(" ");
      console.log(numArray);
      var arrLength = numArray.length;
      for(var i = 0; i < arrLength; i++) {
        numArray[i] = parseInt(numArray[i], 10);
      }
      var params = {"numArray": numArray};

      //send a get request to the server with the array
      $http({
        method: 'POST',
        url: '/api/calculate',
        data: params
      })
      .success(function(data) {

        $scope.numSet.mean = data.mean;
        $scope.numSet.median = data.median;
        $scope.numSet.mode = data.mode;
      })
      .error(function(data, status) {
        console.log(data);
      });
    };
  }]);
};
