'use strict';

require('../../app/js/app');
require('angular-mocks');

describe('resource service', function() {
  beforeEach(angular.mock.module('mmmApp'));
  var service;
  var $httpBackend;
  var calcService;

  beforeEach(angular.mock.inject(function(resourceService, _$httpBackend_) {
    service = resourceService;
    $httpBackend = _$httpBackend_;
    calcService = new Service('calc'); //make this the same as whatever I name the service
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should be able to post request to calc', function() {
    $httpBackend.expectPOST('/api/calc').respond(200,[]);

    var promise = calcService.index();

    $httpBackend.flush();
  });
});
