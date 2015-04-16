'use strict';
angular
  .module('CmtApp', [
  'ngAnimate',
  'ngAria',
  'ngCookies',
  'ngMessages',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'MainController',
  'MainDirective'
]).run(function($rootScope, $http, $window, $location, AuthFactory, PostsFactory){
  // if(AuthFactory.isAuthenticated()){
  //   var data = JSON.parse($window.localStorage.getItem('cmt-user'));
  //   $http.defaults.headers.common.Authorization = 'Token token=' + data.token;
  // } else {
    $location.path('/');
    // PostsFactory.getPosts();
  // }

  // $rootScope.$on('$routeChangeStart',function(event,next){
  // //   if(!AuthFactory.isAuthenticated()){
  // //     $location.path('/login');
  // //   } else {
  //     PostsFactory.getPosts();
  // //   }
  // });
});

