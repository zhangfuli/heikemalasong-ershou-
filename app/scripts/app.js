'use strict';

/**
 * @ngdoc overview
 * @name welcomePageApp
 * @description
 * # welcomePageApp
 *
 * Main module of the application.
 */
angular
  .module('welcomePageApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'

  ])
  .config(function ($routeProvider,$httpProvider) {

    $httpProvider.defaults.withCredentials = true;
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'

      })
      .when('/:id', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'

      })
      .otherwise({
        redirectTo: '/'
      });
  });


//var http1="http://localhost:8080/second/getallpublish";//获取所有发布消息
//var http2="http://localhost:8080/second/findone?id=*";//单个用户发布的信息
//var http3="http://localhost:8080/second/getuserinfo";//用户的基本信息

