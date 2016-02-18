'use strict'

angular.module('sumanKoBasicSpaceApp')
.config(function($stateProvider) {
  $stateProvider
  .state('main', {
    url: '/',
    templateUrl: 'client/main/main.view.html',
    controller: 'MainCtrl',
    controllerAs: 'mc'
  });
});