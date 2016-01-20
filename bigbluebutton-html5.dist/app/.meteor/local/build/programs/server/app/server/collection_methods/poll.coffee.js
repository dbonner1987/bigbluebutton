(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/collection_methods/poll.coffee.js                            //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.methods({                                                       // 4
  publishVoteMessage: function(meetingId, pollAnswerId, requesterUserId, requesterToken) {
    var _poll_id, eventName, message, result;                          // 7
    if (isAllowedTo("subscribePoll", meetingId, requesterUserId, requesterToken)) {
      eventName = "vote_poll_user_request_message";                    // 8
      result = Meteor.Polls.findOne({                                  // 8
        "poll_info.users": requesterUserId,                            // 10
        "poll_info.meetingId": meetingId,                              // 10
        "poll_info.poll.answers.id": pollAnswerId                      // 10
      }, {                                                             //
        fields: {                                                      // 11
          "poll_info.poll.id": 1,                                      // 11
          _id: 0                                                       // 11
        }                                                              //
      });                                                              //
      _poll_id = result.poll_info.poll.id;                             // 8
      if ((eventName != null) && (meetingId != null) && (requesterUserId != null) && (_poll_id != null) && (pollAnswerId != null)) {
        message = {                                                    // 15
          header: {                                                    // 16
            timestamp: new Date().getTime(),                           // 17
            name: eventName                                            // 17
          },                                                           //
          payload: {                                                   // 16
            meeting_id: meetingId,                                     // 20
            user_id: requesterUserId,                                  // 20
            poll_id: _poll_id,                                         // 20
            question_id: 0,                                            // 20
            answer_id: pollAnswerId                                    // 20
          }                                                            //
        };                                                             //
        Meteor.Polls.update({                                          // 15
          "poll_info.users": requesterUserId,                          // 26
          "poll_info.meetingId": meetingId,                            // 26
          "poll_info.poll.answers.id": pollAnswerId                    // 26
        }, {                                                           //
          $pull: {                                                     // 27
            "poll_info.users": requesterUserId                         // 27
          }                                                            //
        });                                                            //
        Meteor.log.info("publishing Poll response to redis");          // 15
        return publish(Meteor.config.redis.channels.toBBBApps.polling, message);
      }                                                                //
    }                                                                  //
  }                                                                    //
});                                                                    //
                                                                       //
this.addPollToCollection = function(poll, requester_id, users, meetingId) {
  var _users, answer, entry, i, j, len, len1, ref, user;               // 38
  _users = [];                                                         // 38
  for (i = 0, len = users.length; i < len; i++) {                      // 39
    user = users[i];                                                   //
    _users.push(user.user.userid);                                     // 40
  }                                                                    // 39
  ref = poll.answers;                                                  // 42
  for (j = 0, len1 = ref.length; j < len1; j++) {                      // 42
    answer = ref[j];                                                   //
    answer.num_votes = 0;                                              // 43
  }                                                                    // 42
  poll.num_responders = -1;                                            // 38
  poll.num_respondents = -1;                                           // 38
  entry = {                                                            // 38
    poll_info: {                                                       // 50
      "meetingId": meetingId,                                          // 51
      "poll": poll,                                                    // 51
      "requester": requester_id,                                       // 51
      "users": _users                                                  // 51
    }                                                                  //
  };                                                                   //
  Meteor.log.info("added poll _id=[" + poll.id + "]:meetingId=[" + meetingId + "].");
  return Meteor.Polls.insert(entry);                                   //
};                                                                     // 36
                                                                       //
this.clearPollCollection = function(meetingId, poll_id) {              // 4
  if ((meetingId != null) && (poll_id != null) && (Meteor.Polls.findOne({
    "poll_info.meetingId": meetingId,                                  //
    "poll_info.poll.id": poll_id                                       //
  }) != null)) {                                                       //
    return Meteor.Polls.remove({                                       //
      "poll_info.meetingId": meetingId,                                // 60
      "poll_info.poll.id": poll_id                                     // 60
    }, Meteor.log.info("cleared Polls Collection (meetingId: " + meetingId + ", pollId: " + poll_id + "!)"));
  } else {                                                             //
    return Meteor.Polls.remove({}, Meteor.log.info("cleared Polls Collection (all meetings)!"));
  }                                                                    //
};                                                                     // 58
                                                                       //
this.updatePollCollection = function(poll, meetingId, requesterId) {   // 4
  if ((poll.answers != null) && (poll.num_responders != null) && (poll.num_respondents != null) && (poll.id != null) && (meetingId != null) && (requesterId != null)) {
    return Meteor.Polls.update({                                       //
      "poll_info.meetingId": meetingId,                                // 69
      "poll_info.requester": requesterId,                              // 69
      "poll_info.poll.id": poll.id                                     // 69
    }, {                                                               //
      $set: {                                                          // 70
        "poll_info.poll.answers": poll.answers,                        // 71
        "poll_info.poll.num_responders": poll.num_responders,          // 71
        "poll_info.poll.num_respondents": poll.num_respondents         // 71
      }                                                                //
    }, Meteor.log.info("updating Polls Collection (meetingId: " + meetingId + ", pollId: " + poll.id + "!)"));
  }                                                                    //
};                                                                     // 67
                                                                       //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=poll.coffee.js.map
