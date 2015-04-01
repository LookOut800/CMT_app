'use strict';
angular.module('MainController').controller('CVController', cVController);

cVController.$inject = ['AuthFactory', '$location'];

function cVController(AuthFactory, $location) {
  var vm = this;
};
