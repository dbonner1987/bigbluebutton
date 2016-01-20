(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/publish.coffee.js                                            //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.publish('users', function(meetingId, userid, authToken) {       // 3
  var ref, ref1, u, username;                                          // 4
  Meteor.log.info("attempt publishing users for " + meetingId + ", " + userid + ", " + authToken);
  u = Meteor.Users.findOne({                                           // 4
    'userId': userid,                                                  // 5
    'meetingId': meetingId                                             // 5
  });                                                                  //
  if (u != null) {                                                     // 6
    Meteor.log.info("found it from the first time " + userid);         // 7
    if (isAllowedTo('subscribeUsers', meetingId, userid, authToken)) {
      Meteor.log.info(userid + " was allowed to subscribe to 'users'");
      username = (u != null ? (ref = u.user) != null ? ref.name : void 0 : void 0) || "UNKNOWN";
      if (((ref1 = u.user) != null ? ref1.connection_status : void 0) !== 'online') {
        Meteor.call("validateAuthToken", meetingId, userid, authToken);
      }                                                                //
      Meteor.Users.update({                                            // 9
        'meetingId': meetingId,                                        // 16
        'userId': userid                                               // 16
      }, {                                                             //
        $set: {                                                        // 16
          'user.connection_status': "online"                           // 16
        }                                                              //
      });                                                              //
      Meteor.log.info("username of the subscriber: " + username + ", connection_status becomes online");
      this._session.socket.on("close", Meteor.bindEnvironment((function(_this) {
        return function() {                                            //
          Meteor.log.info("\na user lost connection: session.id=" + _this._session.id + " userId = " + userid + ", username=" + username + ", meeting=" + meetingId);
          Meteor.Users.update({                                        // 20
            'meetingId': meetingId,                                    // 21
            'userId': userid                                           // 21
          }, {                                                         //
            $set: {                                                    // 21
              'user.connection_status': "offline"                      // 21
            }                                                          //
          });                                                          //
          Meteor.log.info("username of the user losing connection: " + username + ", connection_status: becomes offline");
          return requestUserLeaving(meetingId, userid);                //
        };                                                             //
      })(this)));                                                      //
      return Meteor.Users.find({                                       //
        meetingId: meetingId,                                          // 29
        'user.connection_status': {                                    // 29
          $in: ["online", ""]                                          // 29
        }                                                              //
      }, {                                                             //
        fields: {                                                      // 30
          'authToken': false                                           // 30
        }                                                              //
      });                                                              //
    } else {                                                           //
      Meteor.log.warn("was not authorized to subscribe to 'users'");   // 33
      return this.error(new Meteor.Error(402, "The user was not authorized to subscribe to 'users'"));
    }                                                                  //
  } else {                                                             //
    Meteor.call("validateAuthToken", meetingId, userid, authToken);    // 37
    Meteor.log.error("there was no such user " + userid + "  in " + meetingId);
    return Meteor.Users.find({                                         //
      meetingId: meetingId,                                            // 40
      'user.connection_status': {                                      // 40
        $in: ["online", ""]                                            // 40
      }                                                                //
    }, {                                                               //
      fields: {                                                        // 41
        'authToken': false                                             // 41
      }                                                                //
    });                                                                //
  }                                                                    //
});                                                                    // 3
                                                                       //
Meteor.publish('chat', function(meetingId, userid, authToken) {        // 3
  if (isAllowedTo('subscribeChat', meetingId, userid, authToken)) {    // 46
    Meteor.log.info("publishing chat for " + meetingId + " " + userid + " " + authToken);
    return Meteor.Chat.find({                                          // 49
      $or: [                                                           // 49
        {                                                              //
          'message.chat_type': 'PUBLIC_CHAT',                          // 50
          'meetingId': meetingId                                       // 50
        }, {                                                           //
          'message.from_userid': userid,                               // 51
          'meetingId': meetingId                                       // 51
        }, {                                                           //
          'message.to_userid': userid,                                 // 52
          'meetingId': meetingId                                       // 52
        }                                                              //
      ]                                                                //
    });                                                                //
  } else {                                                             //
    this.error(new Meteor.Error(402, "The user was not authorized to subscribe for 'chats'"));
  }                                                                    //
});                                                                    // 45
                                                                       //
Meteor.publish('bbb_poll', function(meetingId, userid, authToken) {    // 3
  if (isAllowedTo('subscribePoll', meetingId, userid, authToken)) {    // 61
    if (isAllowedTo('subscribeAnswers', meetingId, userid, authToken)) {
      Meteor.log.info("publishing Poll for presenter: " + meetingId + " " + userid + " " + authToken);
      return Meteor.Polls.find({                                       // 65
        "poll_info.meetingId": meetingId,                              // 65
        "poll_info.users": userid                                      // 65
      });                                                              //
    } else {                                                           //
      Meteor.log.info("publishing Poll for viewer: " + meetingId + " " + userid + " " + authToken);
      return Meteor.Polls.find({                                       // 68
        "poll_info.meetingId": meetingId,                              // 68
        "poll_info.users": userid                                      // 68
      }, {                                                             //
        fields: {                                                      // 69
          "poll_info.poll.answers.num_votes": 0                        // 69
        }                                                              //
      });                                                              //
    }                                                                  //
  } else {                                                             //
    this.error(new Meteor.Error(402, "The user was not authorized to subscribe for 'bbb_poll'"));
  }                                                                    //
});                                                                    // 59
                                                                       //
Meteor.publish('shapes', function(meetingId) {                         // 3
  return Meteor.Shapes.find({                                          //
    meetingId: meetingId                                               // 75
  });                                                                  //
});                                                                    // 74
                                                                       //
Meteor.publish('slides', function(meetingId) {                         // 3
  Meteor.log.info("publishing slides for " + meetingId);               // 78
  return Meteor.Slides.find({                                          //
    meetingId: meetingId                                               // 79
  });                                                                  //
});                                                                    // 77
                                                                       //
Meteor.publish('meetings', function(meetingId) {                       // 3
  Meteor.log.info("publishing meetings for " + meetingId);             // 82
  return Meteor.Meetings.find({                                        //
    meetingId: meetingId                                               // 83
  });                                                                  //
});                                                                    // 81
                                                                       //
Meteor.publish('presentations', function(meetingId) {                  // 3
  Meteor.log.info("publishing presentations for " + meetingId);        // 86
  return Meteor.Presentations.find({                                   //
    meetingId: meetingId                                               // 87
  });                                                                  //
});                                                                    // 85
                                                                       //
Meteor.publish('whiteboard-clean-status', function(meetingId) {        // 3
  Meteor.log.info("whiteboard clean status " + meetingId);             // 90
  return Meteor.WhiteboardCleanStatus.find({                           //
    meetingId: meetingId                                               // 91
  });                                                                  //
});                                                                    // 89
                                                                       //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=publish.coffee.js.map
