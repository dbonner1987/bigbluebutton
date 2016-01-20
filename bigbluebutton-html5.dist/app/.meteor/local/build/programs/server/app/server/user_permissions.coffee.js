(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/user_permissions.coffee.js                                   //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var moderator, presenter, viewer;                                      // 2
                                                                       //
presenter = {                                                          // 2
  switchSlide: true,                                                   // 3
  subscribePoll: true,                                                 // 3
  subscribeAnswers: true                                               // 3
};                                                                     //
                                                                       //
moderator = {                                                          // 2
  joinListenOnly: true,                                                // 13
  leaveListenOnly: true,                                               // 13
  raiseOwnHand: true,                                                  // 13
  lowerOwnHand: true,                                                  // 13
  muteSelf: true,                                                      // 13
  unmuteSelf: true,                                                    // 13
  logoutSelf: true,                                                    // 13
  subscribeUsers: true,                                                // 13
  subscribeChat: true,                                                 // 13
  chatPublic: true,                                                    // 13
  chatPrivate: true,                                                   // 13
  subscribePoll: true,                                                 // 13
  subscribeAnswers: false,                                             // 13
  setEmojiStatus: true,                                                // 13
  clearEmojiStatus: true                                               // 13
};                                                                     //
                                                                       //
viewer = function(meetingId, userId) {                                 // 2
  var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7;                   // 50
  return {                                                             //
    joinListenOnly: true,                                              // 50
    leaveListenOnly: true,                                             // 50
    raiseOwnHand: true,                                                // 50
    lowerOwnHand: true,                                                // 50
    muteSelf: true,                                                    // 50
    unmuteSelf: !((ref = Meteor.Meetings.findOne({                     // 50
      meetingId: meetingId                                             //
    })) != null ? ref.roomLockSettings.disableMic : void 0) || !((ref1 = Meteor.Users.findOne({
      meetingId: meetingId,                                            //
      userId: userId                                                   //
    })) != null ? ref1.user.locked : void 0),                          //
    logoutSelf: true,                                                  // 50
    subscribeUsers: true,                                              // 50
    subscribeChat: true,                                               // 50
    chatPublic: !((ref2 = Meteor.Meetings.findOne({                    // 50
      meetingId: meetingId                                             //
    })) != null ? ref2.roomLockSettings.disablePublicChat : void 0) || !((ref3 = Meteor.Users.findOne({
      meetingId: meetingId,                                            //
      userId: userId                                                   //
    })) != null ? ref3.user.locked : void 0) || ((ref4 = Meteor.Users.findOne({
      meetingId: meetingId,                                            //
      userId: userId                                                   //
    })) != null ? ref4.user.presenter : void 0),                       //
    chatPrivate: !((ref5 = Meteor.Meetings.findOne({                   // 50
      meetingId: meetingId                                             //
    })) != null ? ref5.roomLockSettings.disablePrivateChat : void 0) || !((ref6 = Meteor.Users.findOne({
      meetingId: meetingId,                                            //
      userId: userId                                                   //
    })) != null ? ref6.user.locked : void 0) || ((ref7 = Meteor.Users.findOne({
      meetingId: meetingId,                                            //
      userId: userId                                                   //
    })) != null ? ref7.user.presenter : void 0),                       //
    subscribePoll: true,                                               // 50
    subscribeAnswers: false,                                           // 50
    setEmojiStatus: true,                                              // 50
    clearEmojiStatus: true                                             // 50
  };                                                                   //
};                                                                     // 47
                                                                       //
this.isAllowedTo = function(action, meetingId, userId, authToken) {    // 2
  var ref, ref1, ref2, ref3, user, validated;                          // 91
  validated = (ref = Meteor.Users.findOne({                            // 91
    meetingId: meetingId,                                              //
    userId: userId                                                     //
  })) != null ? ref.validated : void 0;                                //
  Meteor.log.info("in isAllowedTo: action-" + action + ", userId=" + userId + ", authToken=" + authToken + " validated:" + validated);
  user = Meteor.Users.findOne({                                        // 91
    meetingId: meetingId,                                              // 94
    userId: userId                                                     // 94
  });                                                                  //
  if ((user != null) && authToken === user.authToken) {                // 96
    if (user.validated && user.clientType === "HTML5") {               // 97
      if ((ref1 = user.user) != null ? ref1.presenter : void 0) {      // 101
        Meteor.log.info("user permissions presenter case");            // 102
        return presenter[action] || viewer(meetingId, userId)[action] || false;
      } else if (((ref2 = user.user) != null ? ref2.role : void 0) === 'VIEWER') {
        Meteor.log.info("user permissions viewer case");               // 107
        return viewer(meetingId, userId)[action] || false;             // 108
      } else if (((ref3 = user.user) != null ? ref3.role : void 0) === 'MODERATOR') {
        Meteor.log.info("user permissions moderator case");            // 112
        return moderator[action] || false;                             // 113
      } else {                                                         //
        Meteor.log.warn("UNSUCCESSFULL ATTEMPT FROM userid=" + userId + " to perform:" + action);
        return false;                                                  // 117
      }                                                                //
    } else {                                                           //
      if (action === "logoutSelf") {                                   // 120
        Meteor.log.warn("a user was successfully removed from the meeting following an unsuccessful login");
        return true;                                                   // 123
      }                                                                //
      return false;                                                    // 124
    }                                                                  //
  } else {                                                             //
    Meteor.log.error(("in meetingId=" + meetingId + " userId=" + userId + " tried to perform " + action + " without permission") + ("\n..while the authToken was " + (user != null ? user.authToken : void 0) + "    and the user's object is " + (JSON.stringify(user))));
    return false;                                                      // 129
  }                                                                    //
};                                                                     // 89
                                                                       //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=user_permissions.coffee.js.map
