'use strict';
angular.module('MainDirective').directive('cmtFooter', [function(){
  return {
    restict: 'E',
    templateUrl: 'views/footer.html',
    controller: 'FooterController',
    controllerAs: 'footerController',
    bindToController: true,
    scope: {},
    link: function($scope, element, attrs){
      // manipulate the DOM here
    }
  };
}]);
