(function() {
  'use strict'

  angular.module('sumanKoBasicSpaceApp')
  .controller('MainCtrl', ['$scope', '$meteor', function($scope, $meteor) {
    var mainvm = this;
    
    
    $meteor.autorun($scope, function() {
      $scope.$meteorSubscribe('inmind', {
        // limit: parseInt($scope.getReactively('perPage')),
        // skip: parseInt(($scope.getReactively('page') - 1) * $scope.getReactively('perPage')),
        sort: {'createdAt': 0}
      }).then(function() {
        mainvm.posts = $meteor.collection(function() {
          return InMind.find({}, {sort: {'createdAt': 1}});
        });
      });
    });

    // $meteor.session('thingsCounter').bind($scope, 'page');

    mainvm.save = function() {
      if($scope.form.$valid) {
        var newPost = {
          message: mainvm.newpost
        };
        Meteor.call('addNew', newPost, function(err, response) {
          mainvm.newPost = '';
        })
      }
    };

    mainvm.addComment = function($index, id) {
      // console.log($scope.forms.post0);
      if(mainvm['post'+$index].$valid) {
        var newComment = {
          message: mainvm['reply'+$index],
          id: id
        };
        console.log(newComment);
        Meteor.call('addReply', newComment, function(err, response) {
          // mainvm.newPost = '';
        })
      }
    }
        
    /*mainvm.remove = function(thing) {
      mainvm.things.remove(thing);
    };
      
    mainvm.pageChanged = function(newPage) {
      mainvm.page = newPage;
    };*/
      
/*    $scope.$watch(function() {return mainvm.orderProperty;}, function() {
      if(mainvm.orderProperty) {
        mainvm.sort = {name_sort: parseInt(mainvm.orderProperty)};
      }
    });*/
  }]);
})();
