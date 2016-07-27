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
      .when('/admin/admin', {
        templateUrl: 'views/admin.html',
        controller: 'AdminCtrl',
        controllerAs: 'admin'
      })
      .when('/admin/myadmin', {
        templateUrl: 'views/myadmin.html',
        controller: 'MyadminCtrl',
        controllerAs: 'myadmin'
      })
      .when('/admin/edit', {
        templateUrl: 'views/edit.html',
        controller: 'EditCtrl',
        controllerAs: 'edit'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


//var http1="http://heike.y1code.cn:8080/second/getallpublish";//获取所有发布消息
//var http2="http://heike.y1code.cn:8080/second/publishfindone?id=";//单个用户发布的信息
//var http3="http://heike.y1code.cn:8080/second/getuserinfo";//用户的基本信息
//var http4="http://heike.y1code.cn:8080/second/admin/delete?id=";  //管理员删除

