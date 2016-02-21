(function(){

  'use strict'

  angular.module('sumanKoBasicSpaceApp')
  .controller('NavbarCtrl', ['$scope', '$meteor', function($scope, $meteor){
    $scope.userLoggedIn = Meteor.userId() ? true : false;
    $meteor.autorun($scope, function() {
      $scope.$meteorSubscribe('notifications', {
        // limit: parseInt($scope.getReactively('perPage')),
        // skip: parseInt(($scope.getReactively('page') - 1) * $scope.getReactively('perPage')),
        sort: {'createdAt': 0}
      }).then(function() {
        $scope.notificationCount = $meteor.object(Counts, 'numberOfNotifications', false);
        $scope.notifications = $meteor.collection(function() {
          return Notifications.find({}, {sort: {'createdAt': 1}});
        });
      });
    });

    $scope.notificationWatched = function() {
      Meteor.call('notificationWatched');
    }
  }]);
})();
