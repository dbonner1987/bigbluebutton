(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/server.coffee.js                                             //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };
                                                                       //
Meteor.startup(function() {                                            // 1
  Meteor.log.info("server start");                                     // 2
  Meteor.WhiteboardCleanStatus.remove({});                             // 2
  clearUsersCollection();                                              // 2
  clearChatCollection();                                               // 2
  clearMeetingsCollection();                                           // 2
  clearShapesCollection();                                             // 2
  clearSlidesCollection();                                             // 2
  clearPresentationsCollection();                                      // 2
  clearPollCollection();                                               // 2
  Meteor.redisPubSub = new Meteor.RedisPubSub(function() {             // 2
    return Meteor.log.info("created pubsub");                          //
  });                                                                  //
  Meteor.myQueue = new PowerQueue({});                                 // 2
  Meteor.myQueue.taskHandler = function(data, next, failures) {        // 2
    var eventName, ref;                                                // 24
    eventName = (ref = JSON.parse(data.jsonMsg)) != null ? ref.header.name : void 0;
    if (failures > 0) {                                                // 25
      return Meteor.log.error("got a failure on taskHandler " + eventName + " " + failures);
    } else {                                                           //
      return handleRedisMessage(data, function() {                     //
        var length, lengthString;                                      // 29
        length = Meteor.myQueue.length();                              // 29
        lengthString = function() {                                    // 29
          if (length > 0) {                                            // 31
            return "In the queue we have " + length + " event(s) to process.";
          } else {                                                     //
            return "";                                                 //
          }                                                            //
        };                                                             //
        Meteor.log.info("in callback after handleRedisMessage " + eventName + ". " + (lengthString()));
        return next();                                                 //
      });                                                              //
    }                                                                  //
  };                                                                   //
  return this.handleRedisMessage = function(data, callback) {          //
    var chatMessage, currentlyBeingRecorded, dbUser, duration, emojiStatus, eventName, heightRatio, i, intendedForRecording, isLocked, j, k, l, len, len1, len2, len3, len4, listOfMeetings, m, meetingId, meetingName, message, messageObject, newPresenterId, newSettings, newSlide, notLoggedEventTypes, oldSettings, page, pollObj, poll_id, presentation, presentationId, processMeeting, processUser, ref, ref1, ref10, ref11, ref12, ref13, ref14, ref15, ref16, ref17, ref18, ref19, ref2, ref20, ref21, ref3, ref4, ref5, ref6, ref7, ref8, ref9, requesterId, set_emoji_time, shape, shapeId, slide, slideId, status, user, userId, userObj, users, validStatus, voiceConf, voiceUserObj, whiteboardId, widthRatio, x, xOffset, y, yOffset;
    message = JSON.parse(data.jsonMsg);                                // 51
    meetingId = (ref = message.payload) != null ? ref.meeting_id : void 0;
    notLoggedEventTypes = ["keep_alive_reply", "page_resized_message", "presentation_page_resized_message", "presentation_cursor_updated_message", "get_presentation_info_reply", "get_chat_history_reply", "get_whiteboard_shapes_reply", "presentation_shared_message", "presentation_conversion_done_message", "presentation_conversion_progress_message", "presentation_page_generated_message", "BbbPubSubPongMessage", "bbb_apps_is_alive_message", "user_voice_talking_message", "meeting_state_message", "get_recording_status_reply"];
    eventName = message.header.name;                                   // 51
    meetingId = (ref1 = message.payload) != null ? ref1.meeting_id : void 0;
    if (!(((message != null ? message.header : void 0) != null) && (message.payload != null))) {
      Meteor.log.error("ERROR!! No header or payload");                // 84
      callback();                                                      // 84
    }                                                                  //
    if (ref2 = message.header.name, indexOf.call(notLoggedEventTypes, ref2) < 0) {
      Meteor.log.info("redis incoming message  " + eventName + "  ", {
        message: data.jsonMsg                                          // 89
      });                                                              //
    }                                                                  //
    if (((message != null ? message.header : void 0) != null) && (message.payload != null)) {
      if (eventName === 'meeting_created_message') {                   // 93
        meetingName = message.payload.name;                            // 95
        intendedForRecording = message.payload.recorded;               // 95
        voiceConf = message.payload.voice_conf;                        // 95
        duration = message.payload.duration;                           // 95
        return addMeetingToCollection(meetingId, meetingName, intendedForRecording, voiceConf, duration, callback);
      } else if ((message.payload.user != null) && (eventName === 'user_left_voice_message' || eventName === 'user_joined_voice_message' || eventName === 'user_voice_talking_message' || eventName === 'user_voice_muted_message')) {
        voiceUserObj = {                                               // 109
          'web_userid': message.payload.user.voiceUser.web_userid,     // 109
          'listen_only': message.payload.listen_only,                  // 109
          'talking': message.payload.user.voiceUser.talking,           // 109
          'joined': message.payload.user.voiceUser.joined,             // 109
          'locked': message.payload.user.voiceUser.locked,             // 109
          'muted': message.payload.user.voiceUser.muted                // 109
        };                                                             //
        return updateVoiceUser(meetingId, voiceUserObj, callback);     //
      } else if (eventName === 'user_listening_only') {                //
        voiceUserObj = {                                               // 120
          'web_userid': message.payload.userid,                        // 120
          'listen_only': message.payload.listen_only                   // 120
        };                                                             //
        return updateVoiceUser(meetingId, voiceUserObj, callback);     //
      } else if (eventName === 'get_all_meetings_reply') {             //
        Meteor.log.info("Let's store some data for the running meetings so that when an HTML5 client joins everything is ready!");
        Meteor.log.info(JSON.stringify(message));                      // 127
        listOfMeetings = message.payload.meetings;                     // 127
        processMeeting = function() {                                  // 127
          var meeting;                                                 // 135
          meeting = listOfMeetings.pop();                              // 135
          if (meeting != null) {                                       // 136
            return addMeetingToCollection(meeting.meetingID, meeting.meetingName, meeting.recorded, meeting.voiceBridge, meeting.duration, processMeeting);
          } else {                                                     //
            return callback();                                         //
          }                                                            //
        };                                                             //
        return processMeeting();                                       //
      } else if (eventName === 'user_joined_message') {                //
        userObj = message.payload.user;                                // 145
        dbUser = Meteor.Users.findOne({                                // 145
          userId: userObj.userid,                                      // 146
          meetingId: message.payload.meeting_id                        // 146
        });                                                            //
        if ((dbUser != null ? (ref3 = dbUser.user) != null ? ref3.connection_status : void 0 : void 0) === "offline" && ((ref4 = message.payload.user) != null ? ref4.phone_user : void 0)) {
          Meteor.log.error("offline AND phone user");                  // 152
          return callback();                                           //
        } else {                                                       //
          if ((dbUser != null ? dbUser.clientType : void 0) === "HTML5") {
            status = dbUser != null ? dbUser.validated : void 0;       // 157
            Meteor.log.info("in user_joined_message the validStatus of the user was " + status);
            userObj.timeOfJoining = message.header.current_time;       // 157
            return userJoined(meetingId, userObj, callback);           //
          } else {                                                     //
            return userJoined(meetingId, userObj, callback);           //
          }                                                            //
        }                                                              //
      } else if (eventName === 'get_users_reply' && message.payload.requester_id === 'nodeJSapp') {
        users = message.payload.users;                                 // 169
        processUser = function() {                                     // 169
          var user;                                                    // 177
          user = users.pop();                                          // 177
          if (user != null) {                                          // 178
            user.timeOfJoining = message.header.current_time;          // 179
            if (user.emoji_status !== 'none' && typeof user.emoji_status === 'string') {
              console.log("3");                                        // 181
              user.set_emoji_time = new Date();                        // 181
              return userJoined(meetingId, user, processUser);         //
            } else {                                                   //
              return userJoined(meetingId, user, processUser);         //
            }                                                          //
          } else {                                                     //
            return callback();                                         //
          }                                                            //
        };                                                             //
        return processUser();                                          //
      } else if (eventName === 'validate_auth_token_reply') {          //
        userId = message.payload.userid;                               // 194
        user = Meteor.Users.findOne({                                  // 194
          userId: userId,                                              // 195
          meetingId: meetingId                                         // 195
        });                                                            //
        validStatus = message.payload.valid;                           // 194
        if ((user != null ? user.clientType : void 0) === "HTML5") {   // 199
          return Meteor.Users.update({                                 //
            userId: userId,                                            // 201
            meetingId: message.payload.meeting_id                      // 201
          }, {                                                         //
            $set: {                                                    // 202
              validated: validStatus                                   // 202
            }                                                          //
          }, function(err, numChanged) {                               //
            var funct;                                                 // 204
            if (numChanged.insertedId != null) {                       // 204
              funct = function(cbk) {                                  // 205
                var ref5, val;                                         // 206
                val = (ref5 = Meteor.Users.findOne({                   // 206
                  userId: userId,                                      //
                  meetingId: message.payload.meeting_id                //
                })) != null ? ref5.validated : void 0;                 //
                Meteor.log.info("user.validated for user " + userId + " in meeting " + user.meetingId + " just became " + val);
                return cbk();                                          //
              };                                                       //
              return funct(callback);                                  //
            } else {                                                   //
              return callback();                                       //
            }                                                          //
          });                                                          //
        } else {                                                       //
          Meteor.log.info("a non-html5 user got validate_auth_token_reply.");
          return callback();                                           //
        }                                                              //
      } else if (eventName === 'user_left_message') {                  //
        userId = (ref5 = message.payload.user) != null ? ref5.userid : void 0;
        if ((userId != null) && (meetingId != null)) {                 // 221
          return markUserOffline(meetingId, userId, callback);         //
        } else {                                                       //
          return callback();                                           //
        }                                                              //
      } else if (eventName === 'presenter_assigned_message') {         //
        newPresenterId = message.payload.new_presenter_id;             // 229
        if (newPresenterId != null) {                                  // 230
          Meteor.Users.update({                                        // 232
            "user.presenter": true,                                    // 232
            meetingId: meetingId                                       // 232
          }, {                                                         //
            $set: {                                                    // 233
              "user.presenter": false                                  // 233
            }                                                          //
          }, function(err, numUpdated) {                               //
            return Meteor.log.info(" Updating old presenter numUpdated=" + numUpdated + ", err=" + err);
          });                                                          //
          Meteor.Users.update({                                        // 232
            "user.userid": newPresenterId,                             // 239
            meetingId: meetingId                                       // 239
          }, {                                                         //
            $set: {                                                    // 240
              "user.presenter": true                                   // 240
            }                                                          //
          }, function(err, numUpdated) {                               //
            return Meteor.log.info(" Updating new presenter numUpdated=" + numUpdated + ", err=" + err);
          });                                                          //
        }                                                              //
        return callback();                                             //
      } else if (eventName === 'user_emoji_status_message') {          //
        userId = message.payload.userid;                               // 249
        meetingId = message.payload.meeting_id;                        // 249
        emojiStatus = message.payload.emoji_status;                    // 249
        if ((userId != null) && (meetingId != null)) {                 // 252
          set_emoji_time = new Date();                                 // 253
          Meteor.Users.update({                                        // 253
            "user.userid": userId                                      // 254
          }, {                                                         //
            $set: {                                                    // 255
              "user.set_emoji_time": set_emoji_time,                   // 255
              "user.emoji_status": emojiStatus                         // 255
            }                                                          //
          }, function(err, numUpdated) {                               //
            return Meteor.log.info(" Updating emoji numUpdated=" + numUpdated + ", err=" + err);
          });                                                          //
        }                                                              //
        return callback();                                             //
      } else if (eventName === 'user_locked_message' || eventName === 'user_unlocked_message') {
        userId = message.payload.userid;                               // 263
        isLocked = message.payload.locked;                             // 263
        setUserLockedStatus(meetingId, userId, isLocked);              // 263
        return callback();                                             //
      } else if (eventName === "meeting_ended_message" || eventName === "meeting_destroyed_event" || eventName === "end_and_kick_all_message" || eventName === "disconnect_all_users_message") {
        Meteor.log.info("DESTROYING MEETING " + meetingId);            // 271
        return removeMeetingFromCollection(meetingId, callback);       //
                                                                       // 274
        /*                                                             // 274
         if Meteor.Meetings.findOne({meetingId: meetingId})?           //
          count=Meteor.Users.find({meetingId: meetingId}).count()      //
          Meteor.log.info "there are #{count} users in the meeting"    //
          for user in Meteor.Users.find({meetingId: meetingId}).fetch()
            markUserOffline meetingId, user.userId                     //
          #TODO should we clear the chat messages for that meeting?!   //
          unless eventName is "disconnect_all_users_message"           //
            removeMeetingFromCollection meetingId                      //
         */                                                            //
      } else if (eventName === "get_chat_history_reply" && message.payload.requester_id === "nodeJSapp") {
        if (Meteor.Meetings.findOne({                                  // 287
          MeetingId: message.payload.meeting_id                        //
        }) == null) {                                                  //
          ref6 = message.payload.chat_history;                         // 288
          for (i = 0, len = ref6.length; i < len; i++) {               // 288
            chatMessage = ref6[i];                                     //
            addChatToCollection(meetingId, chatMessage);               // 289
          }                                                            // 288
        }                                                              //
        return callback();                                             //
      } else if (eventName === "send_public_chat_message" || eventName === "send_private_chat_message") {
        messageObject = message.payload.message;                       // 294
        messageObject.from_time = message.header.current_time;         // 294
        addChatToCollection(meetingId, messageObject);                 // 294
        return callback();                                             //
      } else if (eventName === "presentation_shared_message") {        //
        presentationId = (ref7 = message.payload.presentation) != null ? ref7.id : void 0;
        Meteor.Presentations.update({                                  // 302
          "presentation.current": true,                                // 304
          meetingId: meetingId                                         // 304
        }, {                                                           //
          $set: {                                                      // 305
            "presentation.current": false                              // 305
          }                                                            //
        });                                                            //
        removePresentationFromCollection(meetingId, presentationId);   // 302
        addPresentationToCollection(meetingId, message.payload.presentation);
        ref9 = (ref8 = message.payload.presentation) != null ? ref8.pages : void 0;
        for (j = 0, len1 = ref9.length; j < len1; j++) {               // 311
          slide = ref9[j];                                             //
          addSlideToCollection(meetingId, (ref10 = message.payload.presentation) != null ? ref10.id : void 0, slide);
          if (slide.current) {                                         // 313
            displayThisSlide(meetingId, slide.id, slide);              // 314
          }                                                            //
        }                                                              // 311
        return callback();                                             //
      } else if (eventName === "get_presentation_info_reply" && message.payload.requester_id === "nodeJSapp") {
        ref11 = message.payload.presentations;                         // 319
        for (k = 0, len2 = ref11.length; k < len2; k++) {              // 319
          presentation = ref11[k];                                     //
          addPresentationToCollection(meetingId, presentation);        // 320
          ref12 = presentation.pages;                                  // 322
          for (l = 0, len3 = ref12.length; l < len3; l++) {            // 322
            page = ref12[l];                                           //
            addSlideToCollection(meetingId, presentation.id, page);    // 324
            whiteboardId = presentation.id + "/" + page.num;           // 324
            message = {                                                // 324
              "payload": {                                             // 331
                "meeting_id": meetingId,                               // 332
                "requester_id": "nodeJSapp",                           // 332
                "whiteboard_id": whiteboardId                          // 332
              },                                                       //
              "header": {                                              // 331
                "timestamp": new Date().getTime(),                     // 336
                "name": "get_whiteboard_shapes_request",               // 336
                "version": "0.0.1"                                     // 336
              }                                                        //
            };                                                         //
            if ((whiteboardId != null) && (meetingId != null)) {       // 340
              publish(Meteor.config.redis.channels.toBBBApps.whiteboard, message);
            } else {                                                   //
              Meteor.log.info("did not have enough information to send a user_leaving_request");
            }                                                          //
          }                                                            // 322
        }                                                              // 319
        return callback();                                             //
      } else if (eventName === "presentation_page_changed_message") {  //
        newSlide = message.payload.page;                               // 348
        displayThisSlide(meetingId, newSlide != null ? newSlide.id : void 0, newSlide);
        return callback();                                             //
      } else if (eventName === "presentation_removed_message") {       //
        presentationId = message.payload.presentation_id;              // 354
        meetingId = message.payload.meeting_id;                        // 354
        removePresentationFromCollection(meetingId, presentationId);   // 354
        return callback();                                             //
      } else if (eventName === "get_whiteboard_shapes_reply" && message.payload.requester_id === "nodeJSapp") {
        if (Meteor.WhiteboardCleanStatus.findOne({                     // 362
          meetingId: meetingId                                         //
        }) == null) {                                                  //
          Meteor.WhiteboardCleanStatus.insert({                        // 363
            meetingId: meetingId,                                      // 363
            in_progress: false                                         // 363
          });                                                          //
        }                                                              //
        ref13 = message.payload.shapes;                                // 365
        for (m = 0, len4 = ref13.length; m < len4; m++) {              // 365
          shape = ref13[m];                                            //
          whiteboardId = shape.wb_id;                                  // 366
          addShapeToCollection(meetingId, whiteboardId, shape);        // 366
        }                                                              // 365
        return callback();                                             //
      } else if (eventName === "send_whiteboard_shape_message") {      //
        if (message.payload.shape.shape_type === "poll_result" && typeof message.payload.shape.shape.result === 'string') {
          message.payload.shape.shape.result = JSON.parse(message.payload.shape.shape.result);
        }                                                              //
        shape = message.payload.shape;                                 // 374
        whiteboardId = shape != null ? shape.wb_id : void 0;           // 374
        addShapeToCollection(meetingId, whiteboardId, shape);          // 374
        return callback();                                             //
      } else if (eventName === "presentation_cursor_updated_message") {
        x = message.payload.x_percent;                                 // 384
        y = message.payload.y_percent;                                 // 384
        Meteor.Presentations.update({                                  // 384
          "presentation.current": true,                                // 386
          meetingId: meetingId                                         // 386
        }, {                                                           //
          $set: {                                                      // 387
            "pointer.x": x,                                            // 387
            "pointer.y": y                                             // 387
          }                                                            //
        });                                                            //
        return callback();                                             //
      } else if (eventName === "whiteboard_cleared_message") {         //
        whiteboardId = message.payload.whiteboard_id;                  // 392
        Meteor.WhiteboardCleanStatus.update({                          // 392
          meetingId: meetingId                                         // 393
        }, {                                                           //
          $set: {                                                      // 393
            'in_progress': true                                        // 393
          }                                                            //
        });                                                            //
        removeAllShapesFromSlide(meetingId, whiteboardId);             // 392
        return callback();                                             //
      } else if (eventName === "undo_whiteboard_request") {            //
        whiteboardId = message.payload.whiteboard_id;                  // 399
        shapeId = message.payload.shape_id;                            // 399
        removeShapeFromSlide(meetingId, whiteboardId, shapeId);        // 399
        return callback();                                             //
      } else if (eventName === "presentation_page_resized_message") {  //
        slideId = (ref14 = message.payload.page) != null ? ref14.id : void 0;
        heightRatio = (ref15 = message.payload.page) != null ? ref15.height_ratio : void 0;
        widthRatio = (ref16 = message.payload.page) != null ? ref16.width_ratio : void 0;
        xOffset = (ref17 = message.payload.page) != null ? ref17.x_offset : void 0;
        yOffset = (ref18 = message.payload.page) != null ? ref18.y_offset : void 0;
        presentationId = slideId.split("/")[0];                        // 407
        Meteor.Slides.update({                                         // 407
          presentationId: presentationId,                              // 413
          "slide.current": true                                        // 413
        }, {                                                           //
          $set: {                                                      // 414
            "slide.height_ratio": heightRatio,                         // 414
            "slide.width_ratio": widthRatio,                           // 414
            "slide.x_offset": xOffset,                                 // 414
            "slide.y_offset": yOffset                                  // 414
          }                                                            //
        });                                                            //
        return callback();                                             //
      } else if (eventName === "recording_status_changed_message") {   //
        intendedForRecording = message.payload.recorded;               // 421
        currentlyBeingRecorded = message.payload.recording;            // 421
        Meteor.Meetings.update({                                       // 421
          meetingId: meetingId,                                        // 423
          intendedForRecording: intendedForRecording                   // 423
        }, {                                                           //
          $set: {                                                      // 424
            currentlyBeingRecorded: currentlyBeingRecorded             // 424
          }                                                            //
        });                                                            //
        return callback();                                             //
      } else if (eventName === "eject_voice_user_message") {           //
        return callback();                                             //
      } else if (eventName === "new_permission_settings") {            //
        oldSettings = (ref19 = Meteor.Meetings.findOne({               // 436
          meetingId: meetingId                                         //
        })) != null ? ref19.roomLockSettings : void 0;                 //
        newSettings = (ref20 = message.payload) != null ? ref20.permissions : void 0;
        if (!(oldSettings != null ? oldSettings.disableMic : void 0) && newSettings.disableMic) {
          handleLockingMic(meetingId, newSettings);                    // 441
        }                                                              //
        Meteor.Meetings.update({                                       // 436
          meetingId: meetingId                                         // 444
        }, {                                                           //
          $set: {                                                      // 444
            'roomLockSettings.disablePrivateChat': newSettings.disablePrivateChat,
            'roomLockSettings.disableCam': newSettings.disableCam,     // 444
            'roomLockSettings.disableMic': newSettings.disableMic,     // 444
            'roomLockSettings.lockOnJoin': newSettings.lockOnJoin,     // 444
            'roomLockSettings.lockedLayout': newSettings.lockedLayout,
            'roomLockSettings.disablePublicChat': newSettings.disablePublicChat,
            'roomLockSettings.lockOnJoinConfigurable': newSettings.lockOnJoinConfigurable
          }                                                            //
        });                                                            //
        return callback();                                             //
      } else if (eventName === "poll_started_message") {               //
        if ((message.payload.meeting_id != null) && (message.payload.requester_id != null) && (message.payload.poll != null)) {
          if (Meteor.Meetings.findOne({                                // 459
            meetingId: message.payload.meeting_id                      //
          }) != null) {                                                //
            users = Meteor.Users.find({                                // 461
              meetingId: message.payload.meeting_id                    // 461
            }, {                                                       //
              fields: {                                                // 462
                "user.userid": 1,                                      // 462
                _id: 0                                                 // 462
              }                                                        //
            }).fetch();                                                //
            addPollToCollection(message.payload.poll, message.payload.requester_id, users, message.payload.meeting_id);
          }                                                            //
        }                                                              //
        return callback();                                             //
      } else if (eventName === "poll_stopped_message") {               //
        meetingId = message.payload.meeting_id;                        // 469
        poll_id = message.payload.poll_id;                             // 469
        clearPollCollection(meetingId, poll_id);                       // 469
        return callback();                                             //
      } else if (eventName === "user_voted_poll_message") {            //
        if ((((ref21 = message.payload) != null ? ref21.poll : void 0) != null) && (message.payload.meeting_id != null) && (message.payload.presenter_id != null)) {
          pollObj = message.payload.poll;                              // 477
          meetingId = message.payload.meeting_id;                      // 477
          requesterId = message.payload.presenter_id;                  // 477
          updatePollCollection(pollObj, meetingId, requesterId);       // 477
          return callback();                                           //
        }                                                              //
      } else if (eventName === "poll_show_result_message") {           //
        if ((message.payload.poll.id != null) && (message.payload.meeting_id != null)) {
          poll_id = message.payload.poll.id;                           // 486
          meetingId = message.payload.meeting_id;                      // 486
          clearPollCollection(meetingId, poll_id);                     // 486
        }                                                              //
        return callback();                                             //
      } else {                                                         //
        if (indexOf.call(notLoggedEventTypes, eventName) < 0) {        // 493
          Meteor.log.info("WARNING!!! THE JSON MESSAGE WAS NOT OF TYPE SUPPORTED BY THIS APPLICATION\n " + eventName + "   {JSON.stringify message}");
        }                                                              //
        return callback();                                             //
      }                                                                //
    } else {                                                           //
      return callback();                                               //
    }                                                                  //
  };                                                                   //
});                                                                    // 1
                                                                       //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=server.coffee.js.map
