(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/collection_methods/users.coffee.js                           //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.methods({                                                       // 8
  listenOnlyRequestToggle: function(meetingId, userId, authToken, isJoining) {
    var message, ref, ref1, username, voiceConf;                       // 14
    voiceConf = (ref = Meteor.Meetings.findOne({                       // 14
      meetingId: meetingId                                             //
    })) != null ? ref.voiceConf : void 0;                              //
    username = (ref1 = Meteor.Users.findOne({                          // 14
      meetingId: meetingId,                                            //
      userId: userId                                                   //
    })) != null ? ref1.user.name : void 0;                             //
    if (isJoining) {                                                   // 16
      if (isAllowedTo('joinListenOnly', meetingId, userId, authToken)) {
        message = {                                                    // 18
          payload: {                                                   // 19
            userid: userId,                                            // 20
            meeting_id: meetingId,                                     // 20
            voice_conf: voiceConf,                                     // 20
            name: username                                             // 20
          },                                                           //
          header: {                                                    // 19
            timestamp: new Date().getTime(),                           // 25
            name: "user_connected_to_global_audio",                    // 25
            version: "0.0.1"                                           // 25
          }                                                            //
        };                                                             //
        Meteor.log.info("publishing a user listenOnly toggleRequest " + isJoining + " request for " + userId);
        publish(Meteor.config.redis.channels.toBBBApps.meeting, message);
      }                                                                //
    } else {                                                           //
      if (isAllowedTo('leaveListenOnly', meetingId, userId, authToken)) {
        message = {                                                    // 35
          payload: {                                                   // 36
            userid: userId,                                            // 37
            meeting_id: meetingId,                                     // 37
            voice_conf: voiceConf,                                     // 37
            name: username                                             // 37
          },                                                           //
          header: {                                                    // 36
            timestamp: new Date().getTime(),                           // 42
            name: "user_disconnected_from_global_audio",               // 42
            version: "0.0.1"                                           // 42
          }                                                            //
        };                                                             //
        Meteor.log.info("publishing a user listenOnly toggleRequest " + isJoining + " request for " + userId);
        publish(Meteor.config.redis.channels.toBBBApps.meeting, message);
      }                                                                //
    }                                                                  //
  },                                                                   //
  muteUser: function(meetingId, toMuteUserId, requesterUserId, requesterToken) {
    var action, message;                                               // 57
    action = function() {                                              // 57
      if (toMuteUserId === requesterUserId) {                          // 58
        return 'muteSelf';                                             // 59
      } else {                                                         //
        return 'muteOther';                                            // 61
      }                                                                //
    };                                                                 //
    if (isAllowedTo(action(), meetingId, requesterUserId, requesterToken)) {
      message = {                                                      // 64
        payload: {                                                     // 65
          user_id: toMuteUserId,                                       // 66
          meeting_id: meetingId,                                       // 66
          mute: true,                                                  // 66
          requester_id: requesterUserId                                // 66
        },                                                             //
        header: {                                                      // 65
          timestamp: new Date().getTime(),                             // 71
          name: "mute_user_request_message",                           // 71
          version: "0.0.1"                                             // 71
        }                                                              //
      };                                                               //
      Meteor.log.info("publishing a user mute request for " + toMuteUserId);
      publish(Meteor.config.redis.channels.toBBBApps.users, message);  // 64
      updateVoiceUser(meetingId, {                                     // 64
        'web_userid': toMuteUserId,                                    // 78
        talking: false,                                                // 78
        muted: true                                                    // 78
      });                                                              //
    }                                                                  //
  },                                                                   //
  unmuteUser: function(meetingId, toMuteUserId, requesterUserId, requesterToken) {
    var action, message;                                               // 86
    action = function() {                                              // 86
      if (toMuteUserId === requesterUserId) {                          // 87
        return 'unmuteSelf';                                           // 88
      } else {                                                         //
        return 'unmuteOther';                                          // 90
      }                                                                //
    };                                                                 //
    if (isAllowedTo(action(), meetingId, requesterUserId, requesterToken)) {
      message = {                                                      // 93
        payload: {                                                     // 94
          user_id: toMuteUserId,                                       // 95
          meeting_id: meetingId,                                       // 95
          mute: false,                                                 // 95
          requester_id: requesterUserId                                // 95
        },                                                             //
        header: {                                                      // 94
          timestamp: new Date().getTime(),                             // 100
          name: "mute_user_request_message",                           // 100
          version: "0.0.1"                                             // 100
        }                                                              //
      };                                                               //
      Meteor.log.info("publishing a user unmute request for " + toMuteUserId);
      publish(Meteor.config.redis.channels.toBBBApps.users, message);  // 93
      updateVoiceUser(meetingId, {                                     // 93
        'web_userid': toMuteUserId,                                    // 107
        talking: false,                                                // 107
        muted: false                                                   // 107
      });                                                              //
    }                                                                  //
  },                                                                   //
  userSetEmoji: function(meetingId, toRaiseUserId, raisedByUserId, raisedByToken, status) {
    var message;                                                       // 111
    if (isAllowedTo('setEmojiStatus', meetingId, raisedByUserId, raisedByToken)) {
      message = {                                                      // 112
        payload: {                                                     // 113
          emoji_status: status,                                        // 114
          userid: toRaiseUserId,                                       // 114
          meeting_id: meetingId                                        // 114
        },                                                             //
        header: {                                                      // 113
          timestamp: new Date().getTime(),                             // 118
          name: "user_emoji_status_message",                           // 118
          version: "0.0.1"                                             // 118
        }                                                              //
      };                                                               //
      publish(Meteor.config.redis.channels.toBBBApps.users, message);  // 112
    }                                                                  //
  },                                                                   //
  userLogout: function(meetingId, userId, authToken) {                 // 13
    if (isAllowedTo('logoutSelf', meetingId, userId, authToken)) {     // 130
      Meteor.log.info(("a user is logging out from " + meetingId + ":") + userId);
      return requestUserLeaving(meetingId, userId);                    //
    }                                                                  //
  }                                                                    //
});                                                                    //
                                                                       //
this.markUserOffline = function(meetingId, userId, callback) {         // 8
  var user;                                                            // 145
  user = Meteor.Users.findOne({                                        // 145
    meetingId: meetingId,                                              // 145
    userId: userId                                                     // 145
  });                                                                  //
  if ((user != null ? user.clientType : void 0) === "HTML5") {         // 146
    Meteor.log.info("marking html5 user [" + userId + "] as offline in meeting[" + meetingId + "]");
    return Meteor.Users.update({                                       //
      meetingId: meetingId,                                            // 148
      userId: userId                                                   // 148
    }, {                                                               //
      $set: {                                                          // 148
        'user.connection_status': 'offline',                           // 148
        'voiceUser.talking': false,                                    // 148
        'voiceUser.joined': false,                                     // 148
        'voiceUser.muted': false,                                      // 148
        'user.time_of_joining': 0,                                     // 148
        'user.listenOnly': false                                       // 148
      }                                                                //
    }, function(err, numChanged) {                                     //
      var funct;                                                       // 156
      if (err != null) {                                               // 156
        Meteor.log.error("_unsucc update (mark as offline) of user " + (user != null ? user.user.name : void 0) + " " + userId + " err=" + (JSON.stringify(err)));
        return callback();                                             //
      } else {                                                         //
        funct = function(cbk) {                                        // 161
          Meteor.log.info("_marking as offline html5 user " + (user != null ? user.user.name : void 0) + " " + userId + "  numChanged=" + numChanged);
          return cbk();                                                //
        };                                                             //
        return funct(callback);                                        //
      }                                                                //
    });                                                                //
  } else {                                                             //
    return Meteor.Users.remove({                                       //
      meetingId: meetingId,                                            // 169
      userId: userId                                                   // 169
    }, function(err, numDeletions) {                                   //
      var funct;                                                       // 170
      if (err != null) {                                               // 170
        Meteor.log.error("_unsucc deletion of user " + (user != null ? user.user.name : void 0) + " " + userId + " err=" + (JSON.stringify(err)));
        return callback();                                             //
      } else {                                                         //
        funct = function(cbk) {                                        // 175
          Meteor.log.info("_deleting info for user " + (user != null ? user.user.name : void 0) + " " + userId + " numDeletions=" + numDeletions);
          return cbk();                                                //
        };                                                             //
        return funct(callback);                                        //
      }                                                                //
    });                                                                //
  }                                                                    //
};                                                                     // 143
                                                                       //
this.requestUserLeaving = function(meetingId, userId) {                // 8
  var listenOnlyMessage, message, ref, userObject, voiceConf;          // 188
  userObject = Meteor.Users.findOne({                                  // 188
    'meetingId': meetingId,                                            // 188
    'userId': userId                                                   // 188
  });                                                                  //
  voiceConf = (ref = Meteor.Meetings.findOne({                         // 188
    meetingId: meetingId                                               //
  })) != null ? ref.voiceConf : void 0;                                //
  if ((userObject != null) && (voiceConf != null) && (userId != null) && (meetingId != null)) {
    if (userObject.user.listenOnly) {                                  // 193
      listenOnlyMessage = {                                            // 194
        payload: {                                                     // 195
          userid: userId,                                              // 196
          meeting_id: meetingId,                                       // 196
          voice_conf: voiceConf,                                       // 196
          name: userObject.user.name                                   // 196
        },                                                             //
        header: {                                                      // 195
          timestamp: new Date().getTime(),                             // 201
          name: "user_disconnected_from_global_audio"                  // 201
        }                                                              //
      };                                                               //
      publish(Meteor.config.redis.channels.toBBBApps.meeting, listenOnlyMessage);
    }                                                                  //
    message = {                                                        // 193
      payload: {                                                       // 208
        meeting_id: meetingId,                                         // 209
        userid: userId                                                 // 209
      },                                                               //
      header: {                                                        // 208
        timestamp: new Date().getTime(),                               // 212
        name: "user_leaving_request"                                   // 212
      }                                                                //
    };                                                                 //
    Meteor.log.info("sending a user_leaving_request for " + meetingId + ":" + userId);
    return publish(Meteor.config.redis.channels.toBBBApps.users, message);
  } else {                                                             //
    return Meteor.log.info("did not have enough information to send a user_leaving_request");
  }                                                                    //
};                                                                     // 187
                                                                       //
this.updateVoiceUser = function(meetingId, voiceUserObject, callback) {
  var u;                                                               // 223
  u = Meteor.Users.findOne({                                           // 223
    userId: voiceUserObject.web_userid                                 // 223
  });                                                                  //
  if (u != null) {                                                     // 224
    if (voiceUserObject.talking != null) {                             // 225
      Meteor.Users.update({                                            // 226
        meetingId: meetingId,                                          // 226
        userId: voiceUserObject.web_userid                             // 226
      }, {                                                             //
        $set: {                                                        // 227
          'user.voiceUser.talking': voiceUserObject.talking            // 227
        }                                                              //
      }, function(err, numChanged) {                                   //
        if (err != null) {                                             // 229
          Meteor.log.error("_unsucc update of voiceUser " + voiceUserObject.web_userid + " [talking] err=" + (JSON.stringify(err)));
        }                                                              //
        return callback();                                             //
      });                                                              //
    }                                                                  //
    if (voiceUserObject.joined != null) {                              // 234
      Meteor.Users.update({                                            // 235
        meetingId: meetingId,                                          // 235
        userId: voiceUserObject.web_userid                             // 235
      }, {                                                             //
        $set: {                                                        // 236
          'user.voiceUser.joined': voiceUserObject.joined              // 236
        }                                                              //
      }, function(err, numChanged) {                                   //
        if (err != null) {                                             // 238
          Meteor.log.error("_unsucc update of voiceUser " + voiceUserObject.web_userid + " [joined] err=" + (JSON.stringify(err)));
        }                                                              //
        return callback();                                             //
      });                                                              //
    }                                                                  //
    if (voiceUserObject.locked != null) {                              // 243
      Meteor.Users.update({                                            // 244
        meetingId: meetingId,                                          // 244
        userId: voiceUserObject.web_userid                             // 244
      }, {                                                             //
        $set: {                                                        // 245
          'user.voiceUser.locked': voiceUserObject.locked              // 245
        }                                                              //
      }, function(err, numChanged) {                                   //
        if (err != null) {                                             // 247
          Meteor.log.error("_unsucc update of voiceUser " + voiceUserObject.web_userid + " [locked] err=" + (JSON.stringify(err)));
        }                                                              //
        return callback();                                             //
      });                                                              //
    }                                                                  //
    if (voiceUserObject.muted != null) {                               // 252
      Meteor.Users.update({                                            // 253
        meetingId: meetingId,                                          // 253
        userId: voiceUserObject.web_userid                             // 253
      }, {                                                             //
        $set: {                                                        // 254
          'user.voiceUser.muted': voiceUserObject.muted                // 254
        }                                                              //
      }, function(err, numChanged) {                                   //
        if (err != null) {                                             // 256
          Meteor.log.error("_unsucc update of voiceUser " + voiceUserObject.web_userid + " [muted] err=" + (JSON.stringify(err)));
        }                                                              //
        return callback();                                             //
      });                                                              //
    }                                                                  //
    if (voiceUserObject.listen_only != null) {                         // 261
      return Meteor.Users.update({                                     //
        meetingId: meetingId,                                          // 262
        userId: voiceUserObject.web_userid                             // 262
      }, {                                                             //
        $set: {                                                        // 263
          'user.listenOnly': voiceUserObject.listen_only               // 263
        }                                                              //
      }, function(err, numChanged) {                                   //
        if (err != null) {                                             // 265
          Meteor.log.error("_unsucc update of voiceUser " + voiceUserObject.web_userid + " [listenOnly] err=" + (JSON.stringify(err)));
        }                                                              //
        return callback();                                             //
      });                                                              //
    }                                                                  //
  } else {                                                             //
    Meteor.log.error("ERROR! did not find such voiceUser!");           // 271
    return callback();                                                 //
  }                                                                    //
};                                                                     // 222
                                                                       //
this.userJoined = function(meetingId, user, callback) {                // 8
  var ref, ref1, u, userId, welcomeMessage;                            // 275
  userId = user.userid;                                                // 275
  u = Meteor.Users.findOne({                                           // 275
    userId: user.userid,                                               // 277
    meetingId: meetingId                                               // 277
  });                                                                  //
  if ((u != null) && (u.authToken != null)) {                          // 282
    Meteor.Users.update({                                              // 284
      userId: user.userid,                                             // 284
      meetingId: meetingId                                             // 284
    }, {                                                               //
      $set: {                                                          // 284
        user: {                                                        // 284
          userid: user.userid,                                         // 286
          presenter: user.presenter,                                   // 286
          name: user.name,                                             // 286
          _sort_name: user.name.toLowerCase(),                         // 286
          phone_user: user.phone_user,                                 // 286
          set_emoji_time: user.set_emoji_time,                         // 286
          emoji_status: user.emoji_status,                             // 286
          has_stream: user.has_stream,                                 // 286
          role: user.role,                                             // 286
          listenOnly: user.listenOnly,                                 // 286
          extern_userid: user.extern_userid,                           // 286
          locked: user.locked,                                         // 286
          time_of_joining: user.timeOfJoining,                         // 286
          connection_status: "online",                                 // 286
          voiceUser: {                                                 // 286
            web_userid: user.voiceUser.web_userid,                     // 301
            callernum: user.voiceUser.callernum,                       // 301
            userid: user.voiceUser.userid,                             // 301
            talking: user.voiceUser.talking,                           // 301
            joined: user.voiceUser.joined,                             // 301
            callername: user.voiceUser.callername,                     // 301
            locked: user.voiceUser.locked,                             // 301
            muted: user.voiceUser.muted                                // 301
          },                                                           //
          webcam_stream: user.webcam_stream                            // 286
        }                                                              //
      }                                                                //
    }, function(err) {                                                 //
      var funct;                                                       // 311
      if (err != null) {                                               // 311
        Meteor.log.error("_error " + err + " when trying to insert user " + userId);
        return callback();                                             //
      } else {                                                         //
        funct = function(cbk) {                                        // 315
          Meteor.log.info("_(case1) UPDATING USER " + user.userid + ", authToken= " + u.authToken + ", locked=" + user.locked + ", username=" + user.name);
          return cbk();                                                //
        };                                                             //
        return funct(callback);                                        //
      }                                                                //
    });                                                                //
    welcomeMessage = Meteor.config.defaultWelcomeMessage.replace(/%%CONFNAME%%/, (ref = Meteor.Meetings.findOne({
      meetingId: meetingId                                             //
    })) != null ? ref.meetingName : void 0);                           //
    welcomeMessage = welcomeMessage + Meteor.config.defaultWelcomeMessageFooter;
    return Meteor.Chat.upsert({                                        //
      meetingId: meetingId,                                            // 327
      userId: userId,                                                  // 327
      'message.chat_type': 'SYSTEM_MESSAGE',                           // 327
      'message.to_userid': userId                                      // 327
    }, {                                                               //
      meetingId: meetingId,                                            // 332
      userId: userId,                                                  // 332
      message: {                                                       // 332
        chat_type: 'SYSTEM_MESSAGE',                                   // 336
        message: welcomeMessage,                                       // 336
        from_color: '0x3399FF',                                        // 336
        to_userid: userId,                                             // 336
        from_userid: 'SYSTEM_MESSAGE',                                 // 336
        from_username: '',                                             // 336
        from_time: (ref1 = user.timeOfJoining) != null ? ref1.toString() : void 0
      }                                                                //
    }, function(err) {                                                 //
      if (err != null) {                                               // 344
        return Meteor.log.error("_error " + err + " when trying to insert welcome message for " + userId);
      } else {                                                         //
        return Meteor.log.info("_added/updated a system message in chat for user " + userId);
      }                                                                //
    });                                                                //
  } else {                                                             //
    return Meteor.Users.upsert({                                       //
      meetingId: meetingId,                                            // 355
      userId: userId                                                   // 355
    }, {                                                               //
      meetingId: meetingId,                                            // 355
      userId: userId,                                                  // 355
      user: {                                                          // 355
        userid: user.userid,                                           // 359
        presenter: user.presenter,                                     // 359
        name: user.name,                                               // 359
        _sort_name: user.name.toLowerCase(),                           // 359
        phone_user: user.phone_user,                                   // 359
        emoji_status: user.emoji_status,                               // 359
        set_emoji_time: user.set_emoji_time,                           // 359
        has_stream: user.has_stream,                                   // 359
        role: user.role,                                               // 359
        listenOnly: user.listenOnly,                                   // 359
        extern_userid: user.extern_userid,                             // 359
        locked: user.locked,                                           // 359
        time_of_joining: user.timeOfJoining,                           // 359
        connection_status: "",                                         // 359
        voiceUser: {                                                   // 359
          web_userid: user.voiceUser.web_userid,                       // 374
          callernum: user.voiceUser.callernum,                         // 374
          userid: user.voiceUser.userid,                               // 374
          talking: user.voiceUser.talking,                             // 374
          joined: user.voiceUser.joined,                               // 374
          callername: user.voiceUser.callername,                       // 374
          locked: user.voiceUser.locked,                               // 374
          muted: user.voiceUser.muted                                  // 374
        },                                                             //
        webcam_stream: user.webcam_stream                              // 359
      }                                                                //
    }, function(err, numChanged) {                                     //
      var funct;                                                       // 384
      if (numChanged.insertedId != null) {                             // 384
        funct = function(cbk) {                                        // 385
          Meteor.log.info("_joining user (case2) userid=[" + userId + "]:" + user.name + ". Users.size is now " + (Meteor.Users.find({
            meetingId: meetingId                                       // 387
          }).count()));                                                //
          return cbk();                                                //
        };                                                             //
        return funct(callback);                                        //
      } else {                                                         //
        return callback();                                             //
      }                                                                //
    });                                                                //
  }                                                                    //
};                                                                     // 274
                                                                       //
this.createDummyUser = function(meetingId, userId, authToken) {        // 8
  if (Meteor.Users.findOne({                                           // 398
    userId: userId,                                                    //
    meetingId: meetingId,                                              //
    authToken: authToken                                               //
  }) != null) {                                                        //
    return Meteor.log.info("html5 user userId:[" + userId + "] from [" + meetingId + "] tried to revalidate token");
  } else {                                                             //
    return Meteor.Users.insert({                                       //
      meetingId: meetingId,                                            // 401
      userId: userId,                                                  // 401
      authToken: authToken,                                            // 401
      clientType: "HTML5",                                             // 401
      validated: false                                                 // 401
    }, function(err, id) {                                             //
      return Meteor.log.info("_added a dummy html5 user with: userId=[" + userId + "] Users.size is now " + (Meteor.Users.find({
        meetingId: meetingId                                           // 409
      }).count()));                                                    //
    });                                                                //
  }                                                                    //
};                                                                     // 397
                                                                       //
this.handleLockingMic = function(meetingId, newSettings) {             // 8
  var i, len, ref, ref1, results, u;                                   // 416
  ref1 = (ref = Meteor.Users.find({                                    // 416
    meetingId: meetingId,                                              //
    'user.role': 'VIEWER',                                             //
    'user.listenOnly': false,                                          //
    'user.locked': true,                                               //
    'user.voiceUser.joined': true,                                     //
    'user.voiceUser.muted': false                                      //
  })) != null ? ref.fetch() : void 0;                                  //
  results = [];                                                        // 416
  for (i = 0, len = ref1.length; i < len; i++) {                       //
    u = ref1[i];                                                       //
    results.push(Meteor.call('muteUser', meetingId, u.userId, u.userId, u.authToken, true));
  }                                                                    // 416
  return results;                                                      //
};                                                                     // 414
                                                                       //
this.setUserLockedStatus = function(meetingId, userId, isLocked) {     // 8
  var u;                                                               // 428
  u = Meteor.Users.findOne({                                           // 428
    meetingId: meetingId,                                              // 428
    userId: userId                                                     // 428
  });                                                                  //
  if (u != null) {                                                     // 429
    Meteor.Users.update({                                              // 430
      userId: userId,                                                  // 430
      meetingId: meetingId                                             // 430
    }, {                                                               //
      $set: {                                                          // 431
        'user.locked': isLocked                                        // 431
      }                                                                //
    }, function(err, numChanged) {                                     //
      if (err != null) {                                               // 433
        return Meteor.log.error("_error " + err + " while updating user " + userId + " with lock settings");
      } else {                                                         //
        return Meteor.log.info("_setting user locked status for userid:[" + userId + "] from [" + meetingId + "] locked=" + isLocked);
      }                                                                //
    });                                                                //
    if (u.user.role === 'VIEWER' && !u.user.listenOnly && u.user.voiceUser.joined && !u.user.voiceUser.muted && isLocked) {
      return Meteor.call('muteUser', meetingId, u.userId, u.userId, u.authToken, true);
    }                                                                  //
  } else {                                                             //
    return Meteor.log.error("(unsuccessful-no such user) setting user locked status for userid:[" + userId + "] from [" + meetingId + "] locked=" + isLocked);
  }                                                                    //
};                                                                     // 427
                                                                       //
this.clearUsersCollection = function(meetingId) {                      // 8
  if (meetingId != null) {                                             // 448
    return Meteor.Users.remove({                                       //
      meetingId: meetingId                                             // 449
    }, function(err) {                                                 //
      if (err != null) {                                               // 450
        return Meteor.log.error("_error " + (JSON.stringify(err)) + " while removing users from meeting " + meetingId);
      } else {                                                         //
        return Meteor.log.info("_cleared Users Collection (meetingId: " + meetingId + ")!");
      }                                                                //
    });                                                                //
  } else {                                                             //
    return Meteor.Users.remove({}, function(err) {                     //
      if (err != null) {                                               // 457
        return Meteor.log.error("_error " + (JSON.stringify(err)) + " while removing users from all meetings!");
      } else {                                                         //
        return Meteor.log.info("_cleared Users Collection (all meetings)!");
      }                                                                //
    });                                                                //
  }                                                                    //
};                                                                     // 447
                                                                       //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=users.coffee.js.map
