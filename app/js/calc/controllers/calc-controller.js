'use strict';

module.exports = function(app) {
  app.controller('calcCtrl', ['calcFactory', '$scope', function(calcFactory, $scope) {
    var calcService = new calcFactory();
    $scope.mmmCalc = function() {

      //parse the user's input into array of numbers
      var numArray = $scope.inputArray.split(" ");
      var arrLength = numArray.length;
      for(var i = 0; i < arrLength; i++) {
        numArray[i] = parseInt(numArray[i], 10);
      }

      $scope.mean = calcService.mean(numArray);
      $scope.median = calcService.median(numArray);
      $scope.mode = calcService.mode(numArray);
    };
  }]);
};
