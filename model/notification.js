Notifications = new Mongo.Collection('notifications');

Notifications.allow({
  insert: function(userId, thing) {
    return false;
  },
  update: function(userId, thing, fields, modifier) {
    return false;
  },
  remove: function(userId, thing) {
    return false;
  }
});