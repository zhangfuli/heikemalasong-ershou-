'use strict';

describe('Controller: KnownCtrl', function () {

  // load the controller's module
  beforeEach(module('welcomePageApp'));

  var KnownCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    KnownCtrl = $controller('KnownCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(KnownCtrl.awesomeThings.length).toBe(3);
  });
});
