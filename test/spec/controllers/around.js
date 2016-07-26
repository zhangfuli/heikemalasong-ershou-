'use strict';

describe('Controller: AroundCtrl', function () {

  // load the controller's module
  beforeEach(module('welcomePageApp'));

  var AroundCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AroundCtrl = $controller('AroundCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AroundCtrl.awesomeThings.length).toBe(3);
  });
});
