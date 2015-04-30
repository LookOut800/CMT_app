'use strict';
angular.module('MainController').controller('CVController', cVController);

cVController.$inject = ['AuthFactory', '$anchorScroll', '$location', '$scope'];

function cVController(AuthFactory, $anchorScroll, $location, $scope) {
  var vm = this;
  $scope.gotoBottom = function() {
    console.log('scrolling')
      // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash('bottom');

      // call $anchorScroll()
      $anchorScroll();
    };
}
