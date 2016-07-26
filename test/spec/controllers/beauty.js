'use strict';

describe('Controller: BeautyCtrl', function () {

  // load the controller's module
  beforeEach(module('welcomePageApp'));

  var BeautyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BeautyCtrl = $controller('BeautyCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BeautyCtrl.awesomeThings.length).toBe(3);
  });
});
