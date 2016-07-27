'use strict';

/**
 * @ngdoc function
 * @name welcomePageApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the welcomePageApp
 */
angular.module('welcomePageApp')
  .controller('MainCtrl', function ($scope,$http,$location) {
    var APPID = "d3e9e3722272dc94";   //a2fdb91816803444
    var CALLBACK = "http://f.yiban.cn/iapp55289"// "http://f.yiban.cn/iapp55163";
    if ($location.search()['verify_request']) {
      //alert($location.search()['verify_request']);
      $http.get('http://localhost:8080/second/auth/?vq=' + $location.search()['verify_request']);
    }
    else {
      window.location = 'https://openapi.yiban.cn/oauth/authorize?client_id=' + APPID + '&redirect_uri=' + CALLBACK + '&display=html';
    }
    $http.get("http://localhost:8080/second/getallpublish").then(function(respond){
      $scope.goods=respond.data;
    });
  });


