'use strict';

/**
 * @ngdoc function
 * @name welcomePageApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the welcomePageApp
 */
angular.module('welcomePageApp')
  .controller('AboutCtrl', function ($scope,$routeParams,$http,$route) {
    $http.get("http://localhost:8080/second/publishfindone?id="+$routeParams.id).then(function(respond){
      $scope.onegood=respond.data;
    });
    $http.get("http://localhost:8080/second/review/getreview?publishid="+$routeParams.id).then(function(respond){
      $scope.says=respond.data;
    });
    $scope.pushon=function(){
      var sayword=$scope.sayword;
      $http.get("http://localhost:8080/second/review/doreview?publishid="+$routeParams.id+"&detail="+sayword);
      $route.reload();
    }


  });

