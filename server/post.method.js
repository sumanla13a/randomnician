Array.prototype.unique = function() {
  var n = {},r=[];
  for(var i = 0; i < this.length; i++) {
    if ( this[i] && !n[this[i]]) {
      n[this[i]] = true;
      r.push(this[i]);
    }
  }
  return r;
};

Meteor.methods({
  addNew: function(userPost) {
    if(this.userId) {
      var newPost = {
        user: this.userId,
        thingInMind: userPost.message,
        createdAt: new Date()
      };

      InMind.insert(newPost);
    }
  },
  addReply: function(userReply) {
    if(this.userId) {
      InMind.update({_id: userReply.id}, {$addToSet: {reply: {message: userReply.message, by: this.userId, at: new Date()}}});
      var post = InMind.findOne({_id: userReply.id});
      var users = _.pluck(post.reply, 'by').unique();

      // users.splice(users.indexOf(this.userId), 1);
      users.forEach(function(entry) {
        var notification = {
          by: this.userId,
          foruser: entry,
          notificationOf: userReply.id,
          seen: false,
          message: post.thingInMind.substring(0,20) + '...',
          createdAt: new Date()
        }
        Notifications.insert(notification);
      })
    }
  }
})