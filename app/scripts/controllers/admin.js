'use strict';

/**
 * @ngdoc function
 * @name welcomePageApp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the welcomePageApp
 */
angular.module('welcomePageApp')
  .controller('AdminCtrl', function ($http,$scope,$route) {
    $http.get("http://heike.y1code.cn:8080/second/getallpublish").then(function(respond){
      $scope.goods=respond.data;
    });
    $scope.dele=function(id){
      $http.get("http://heike.y1code.cn:8080/second/admin/delete?id="+id).then(function(respond){
        console.log(respond.data);
        if(respond.data.code==-1){
          alert("对不起，您没有权限");
        }
      });
      $route.reload();
    };
  });
