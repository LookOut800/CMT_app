'use strict';
angular.module('MainController').controller('NavbarController', navbarController);

navbarController.$inject = ['AuthFactory', '$anchorScroll', '$location', '$scope'];

function navbarController(AuthFactory, $anchorScroll, $scope, $location) {
  var vm = this;
  // $scope.goToCv = function() {
  //   debugger;
  //   console.log('scrolling');
  //   // var newHash = 'cv';
  //   // if ($location.hash() !== newHash) {
  //   //   // set the $location.hash to `newHash` and
  //   //   // $anchorScroll will automatically scroll to it
  //     $location.hash('bottom');
  //   // } else {
  //     // call $anchorScroll() explicitly,
  //     // since $location.hash hasn't changed
  //     $anchorScroll();
  //   };

  vm.isLoggedin = function(){
    return AuthFactory.isAuthenticated();
  };

  vm.logout = function(){
    AuthFactory.logout().then(function(){
      $location.path('/');
    });
  };
}
