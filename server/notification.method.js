
Meteor.methods({
  notificationWatched: function(userPost) {
    if(this.userId) {
      Notifications.update({foruser: this.userId}, {$set: {seen: true}}, {multi: true})
    }
  }
})