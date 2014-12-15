'use strict';

require('../../app/js/app');
require('angular-mocks');

describe('calculate service', function() {
  beforeEach(angular.mock.module('mmmApp'));
  var Service;
  var $httpBackend;
  var calcService;

  beforeEach(angular.mock.inject(function(calcFactory, _$httpBackend_) {
    Service = calcFactory;
    $httpBackend = _$httpBackend_;
    calcService = new Service();
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should be able to calculate mean median and mode', function() {
    $httpBackend.expectPOST('/api/calculate').respond(200,{mean: 5, median: 4, mode: 4});

    var promise = calcService.calculate([4, 4, 7]);

    promise.success(function(data) {
      expect(data).toEqual(jasmine.objectContaining({mean: 5}));
    });

    $httpBackend.flush();
  });
});
