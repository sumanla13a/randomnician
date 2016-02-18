'use strict'

angular.module('sumanKoBasicSpaceApp')
.config(function($stateProvider) {
  $stateProvider
  .state('about', {
    url: '/about',
    templateUrl: 'client/about/about.view.html',
    controller: 'AboutCtrl'
  });
});