'use strict';

describe('Controller: ElegantCtrl', function () {

  // load the controller's module
  beforeEach(module('welcomePageApp'));

  var ElegantCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ElegantCtrl = $controller('ElegantCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ElegantCtrl.awesomeThings.length).toBe(3);
  });
});
