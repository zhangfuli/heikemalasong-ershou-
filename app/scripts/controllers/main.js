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
    var APPID = "a2fdb91816803444";
    var CALLBACK = "http://f.yiban.cn/iapp55163";
    if ($location.search()['verify_request']) {
      //alert($location.search()['verify_request']);
      $http.get('http://localhost:8080/second/auth/?vq=' + $location.search()['verify_request']);
    } else {
      window.location = 'https://openapi.yiban.cn/oauth/authorize?client_id=' + APPID + '&redirect_uri=' + CALLBACK + '&display=html';
    }
    //$http.get("http://localhost:8080/second/getallpublish").then(function(respond){
    //  $scope.goods=respond.data;
    //});
    $scope.goods=[
      {
        "id":0,
        "title":"title1",
        "imgurl":"images/1.jpg",
        "price":2,
        "species":"生活用品1",
        "degree":"60%"
      },
      {
        "id":1,
        "title":"title2",
        "imgurl":"images/touxiang1.jpg",
        "price":2,
        "species":"生活用品2",
        "degree":"60%"
      },
      {
        "id":2,
        "title":"title3",
        "imgurl":"images/touxiang1.jpg",
        "price":2,
        "species":"生活用品3",
        "degree":"60%"
      }
    ];
  });


