'use strict';

/**
 * @ngdoc function
 * @name welcomePageApp.controller:MyadminCtrl
 * @description
 * # MyadminCtrl
 * Controller of the welcomePageApp
 */
angular.module('welcomePageApp')
  .controller('MyadminCtrl', function ($scope,$http,$route) {
    $http.get("http://localhost:8080/second/publish/self").then(function(respond){
      if(respond.data.code==-1){
        alert("对不起，您没有登陆");
      }
      else{
      $scope.mygood=respond.data;
      }
    });
    $scope.dele=function(id){
      $http.get("http://localhost:8080/second/publish/delete?id="+id).then(function(respond){
        if(respond.data.code==-1){
          alert("对不起，您没有权限");
        }
      });
      $route.reload();
    };
  });
