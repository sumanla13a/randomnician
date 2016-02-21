'use strict'

Meteor.publish('notifications', function(options, searchString) {
  var where = { seen: false, foruser: this.userId};
  Counts.publish(this, 'numberOfNotifications', Notifications.find(where), {noReady: true});
  return Notifications.find({foruser: this.userId}, {fields: {'user': 0, 'reply.by': 0}});
});
