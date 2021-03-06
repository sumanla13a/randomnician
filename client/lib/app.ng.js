angular.module('sumanKoBasicSpaceApp', [
  'angular-meteor',
  'ui.router',
  'ngMaterial',
  'angularUtils.directives.dirPagination',
  'accounts.ui'
]);

onReady = function() {
  angular.bootstrap(document, ['sumanKoBasicSpaceApp']);
};
  
if(Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}