'use strict';
angular.module('CmtApp').config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'HomeController'
    })
    .when('/login', {
      templateUrl: 'views/login.html'
    })
    .when('/posts', {
      templateUrl: 'views/posts.html',
      controller: 'PostsController',
      controllerAs: 'postsController'
    })
    .when('/media', {
      templateUrl: 'views/media.html',
      controller: 'MediaController',
      controllerAs: 'mediaController'
    })
    .when('/cv', {
      templateUrl: 'views/cv.html'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);
