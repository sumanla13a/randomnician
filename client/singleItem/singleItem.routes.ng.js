
  'use strict'

  angular.module('sumanKoBasicSpaceApp')
  .config(function($stateProvider) {
    $stateProvider
    .state('single', {
      url: '/post/:id',
      templateUrl: 'client/singleItem/singleItem.view.html',
      controller: 'singleItemCtrl',
      controllerAs: 'si'
    });
  });
