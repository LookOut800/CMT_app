'use strict';
angular.module('MainController').controller('FooterController', footerController);

footerController.$inject = ['AuthFactory', '$location'];

function footerController(AuthFactory, $location) {
  var vm = this;

  // vm.isLoggedin = function(){
  //   return AuthFactory.isAuthenticated();
  // };

  // vm.logout = function(){
  //   AuthFactory.logout().then(function(){
  //     $location.path('/');
  //   });
  // };
};
