'use strict'

Meteor.publish('inmind', function(options, searchString) {
  var where = {
    'name': {
      '$regex': '.*' + (searchString || '') + '.*',
      '$options': 'i'
    }
  };
  if(!options) {
    options = {};
  }

  // Counts.publish(this, 'numberOfThings', InMind.find(where, {fields: {'user': 0}}), {noReady: true});
  return InMind.find(options, {fields: {'user': 0, 'reply.by': 0}});
});
