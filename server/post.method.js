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
    }
  }
})