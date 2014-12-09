'use strict';

require('../../app/js/app');
require('angular-mocks');

describe('mean median mode angular interface', function() {
  var $controllerConstructor;
  var $scope;

  beforeEach(angular.mock.module('mmmApp'));

  beforeEach(angular.mock.inject(function($controller, $rootScope) {
    $scope = $rootScope.$new();
    $controllerConstructor = $controller;
  }));

  it('should be able to create a controller', function() {
    var calcController = $controllerConstructor('calcCtrl', {$scope: $scope});
    expect(typeof calcController).toBe('object');
  });

  it('should test the calculate service', function() {
    $controllerConstructor('calcCtrl', {$scope: $scope});
    $scope.inputArray = '4 4 7';
    $scope.mmmCalc();

    expect($scope.mean).toBeDefined();
  });
});
