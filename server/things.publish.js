'use strict'

Meteor.publish('inmind', function(options, searchString) {
  var where = {
    'name': {
      '$regex': '.*' + (searchString || '') + '.*',
      '$options': 'i'
    }
  };
  // Counts.publish(this, 'numberOfThings', InMind.find(where, {fields: {'user': 0}}), {noReady: true});
  console.log(InMind.find({}, {fields: {'user': 0}}).fetch());
  return InMind.find({}, {fields: {'user': 0, 'reply.by': 0}});
});
