'use strict';

/**
 * @ngdoc function
 * @name welcomePageApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the welcomePageApp
 */
angular.module('welcomePageApp')
  .controller('AboutCtrl', function ($scope,$routeParams,$http) {
    $http.get("http://heike.y1code.cn:8080/second/publishfindone?id="+$routeParams.id).then(function(respond){
      $scope.onegood=respond.data;
    });




  });

