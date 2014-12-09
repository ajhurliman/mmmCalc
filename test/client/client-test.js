'use strict';

require('../../app/js/app');
require('angular-mocks');

describe('mean median mode angular interface', function() {
  var $controllerConstructor;
  var $httpBackend;
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

  describe('rest request', function() {
    beforeEach(angular.mock.inject(function(_$httpBackend_) {
      $httpBackend = _$httpBackend_;
    }));

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should calculate mean/median/mode', function() {
      $scope.inputArray = '4 4 7';
      $httpBackend.expectPOST('/api/calculate').respond(200, [{'mean': 5, 'median': 4, 'mode': 4}]);
      $controllerConstructor('calcCtrl', {$scope: $scope});
      $scope.mmmCalc();
      $httpBackend.flush();

      expect($scope.mean).toBe(5);
      expect($scope.median).toBe(4);
      expect($scope.mode).toBe(4);
    });
  });
});
