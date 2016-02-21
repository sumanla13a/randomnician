(function() {
  'use strict'

  angular.module('sumanKoBasicSpaceApp')
  .controller('singleItemCtrl', ['$scope', '$meteor', '$stateParams', function($scope, $meteor, $stateParams) {
    var mainvm = this;
    mainvm.userLoggedIn = Meteor.userId() ? true : false;
    $meteor.autorun($scope, function() {
      $scope.$meteorSubscribe('inmind', {
        _id: $stateParams.id
      }).then(function() {
        mainvm.selectedPost = InMind.findOne({});
      });
    });

    mainvm.addComment = function( id) {
      // console.log($scope.forms.post0);
      if(mainvm['post'].$valid) {
        var newComment = {
          message: mainvm['reply'],
          id: id
        };
        console.log(newComment);
        Meteor.call('addReply', newComment, function(err, response) {
          delete mainvm.newPost;
        })
      }
    }
  }]);
})();
