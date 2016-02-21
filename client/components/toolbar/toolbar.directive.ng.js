'use strict'

angular.module('sumanKoBasicSpaceApp')
.directive('toolbar', function() {
  return {
    restrict: 'AE',
    templateUrl: 'client/components/toolbar/toolbar.view.html',
    controller: 'NavbarCtrl',
    replace: true
  };
});