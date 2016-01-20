(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/collection_methods/meetings.coffee.js                        //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
this.addMeetingToCollection = function(meetingId, name, intendedForRecording, voiceConf, duration, callback) {
  var obj;                                                             // 8
  return obj = Meteor.Meetings.upsert({                                //
    meetingId: meetingId                                               // 8
  }, {                                                                 //
    $set: {                                                            // 8
      meetingName: name,                                               // 8
      intendedForRecording: intendedForRecording,                      // 8
      currentlyBeingRecorded: false,                                   // 8
      voiceConf: voiceConf,                                            // 8
      duration: duration,                                              // 8
      roomLockSettings: {                                              // 8
        disablePrivateChat: false,                                     // 16
        disableCam: false,                                             // 16
        disableMic: false,                                             // 16
        lockOnJoin: Meteor.config.lockOnJoin,                          // 16
        lockedLayout: false,                                           // 16
        disablePublicChat: false,                                      // 16
        lockOnJoinConfigurable: false                                  // 16
      }                                                                //
    }                                                                  //
  }, (function(_this) {                                                //
    return function(err, numChanged) {                                 //
      var funct;                                                       // 24
      if (numChanged.insertedId != null) {                             // 24
        funct = function(cbk) {                                        // 25
          Meteor.log.info("__added MEETING " + meetingId);             // 26
          return cbk();                                                //
        };                                                             //
        return funct(callback);                                        //
      } else {                                                         //
        Meteor.log.error("nothing happened");                          // 30
        return callback();                                             //
      }                                                                //
    };                                                                 //
  })(this));                                                           //
};                                                                     // 5
                                                                       //
this.clearMeetingsCollection = function(meetingId) {                   // 5
  if (meetingId != null) {                                             // 37
    return Meteor.Meetings.remove({                                    //
      meetingId: meetingId                                             // 38
    }, Meteor.log.info("cleared Meetings Collection (meetingId: " + meetingId + "!"));
  } else {                                                             //
    return Meteor.Meetings.remove({}, Meteor.log.info("cleared Meetings Collection (all meetings)!"));
  }                                                                    //
};                                                                     // 36
                                                                       //
this.removeMeetingFromCollection = function(meetingId, callback) {     // 5
  var funct;                                                           // 46
  if (Meteor.Meetings.findOne({                                        // 46
    meetingId: meetingId                                               //
  }) != null) {                                                        //
    Meteor.log.info("end of meeting " + meetingId + ". Clear the meeting data from all collections");
    clearUsersCollection(meetingId);                                   // 47
    clearSlidesCollection(meetingId);                                  // 47
    clearShapesCollection(meetingId);                                  // 47
    clearPresentationsCollection(meetingId);                           // 47
    clearChatCollection(meetingId);                                    // 47
    clearMeetingsCollection(meetingId);                                // 47
    return callback();                                                 //
  } else {                                                             //
    funct = function(localCallback) {                                  // 68
      Meteor.log.error("Error! There was no such meeting " + meetingId);
      return localCallback();                                          //
    };                                                                 //
    return funct(callback);                                            //
  }                                                                    //
};                                                                     // 45
                                                                       //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=meetings.coffee.js.map
