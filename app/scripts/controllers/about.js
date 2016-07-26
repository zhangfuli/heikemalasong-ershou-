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
    //$scope.goods=[
    //  {
    //    "id":0,
    //    "title":"title1",
    //    "imgurl":"images/1.jpg",
    //    "price":2,
    //    "species":"生活用品1",
    //    "degree":"60%"
    //  },
    //  {
    //    "id":1,
    //    "title":"title2",
    //    "imgurl":"images/touxiang1.jpg",
    //    "price":2,
    //    "species":"生活用品2",
    //    "degree":"60%"
    //  },
    //  {
    //    "id":2,
    //    "title":"title3",
    //    "imgurl":"images/touxiang1.jpg",
    //    "price":2,
    //    "species":"生活用品3",
    //    "degree":"60%"
    //  }
    //];
    $scope.id=$routeParams.id;
    //$http.get("http://localhost:8080/second/findone?id="+$routeParams.id).then(function(respond){
    //  $scope.onegood=respond.data;
    //});


  });

