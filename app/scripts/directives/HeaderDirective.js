'use strict';
angular.module('MainDirective').directive('cmtHeader', [function(){
  return {
    restict: 'E',
    templateUrl: 'views/header.html',
    controller: 'HeaderController',
    controllerAs: 'headerController',
    bindToController: true,
    scope: {},
    link: function($scope, element, attrs){
      // manipulate the DOM here
    }
  };
}]);
