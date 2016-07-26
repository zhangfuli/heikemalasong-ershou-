'use strict';

describe('Controller: DirectCtrl', function () {

  // load the controller's module
  beforeEach(module('welcomePageApp'));

  var DirectCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DirectCtrl = $controller('DirectCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DirectCtrl.awesomeThings.length).toBe(3);
  });
});
