(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/lib/bbb_api_bridge.coffee.js                                 //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
                                                                       // 1
/*                                                                     // 1
This file contains the BigBlueButton client APIs that will allow 3rd-party applications
to embed the HTML5 client and interact with it through Javascript.     //
                                                                       //
HOW TO USE:                                                            //
Some APIs allow synchronous and asynchronous calls. When using asynchronous, the 3rd-party
JS should register as listener for events listed at the bottom of this file. For synchronous,
3rd-party JS should pass in a callback function when calling the API.  //
                                                                       //
For an example on how to use these APIs, see:                          //
                                                                       //
https://github.com/bigbluebutton/bigbluebutton/blob/master/bigbluebutton-client/resources/prod/lib/3rd-party.js
https://github.com/bigbluebutton/bigbluebutton/blob/master/bigbluebutton-client/resources/prod/3rd-party.html
 */                                                                    //
this.BBB = (function() {                                               // 1
  var BBB, listeners, returnOrCallback;                                // 18
  BBB = {};                                                            // 18
  returnOrCallback = function(res, callback) {                         // 18
    if ((callback != null) && typeof callback === "function") {        // 21
      return callback(res);                                            //
    } else {                                                           //
      return res;                                                      //
    }                                                                  //
  };                                                                   //
  BBB.isPollGoing = function(userId) {                                 // 18
    if (userId !== void 0 && Meteor.Polls.findOne({                    // 27
      "poll_info.users": userId                                        // 27
    })) {                                                              //
      return true;                                                     // 28
    } else {                                                           //
      return false;                                                    // 30
    }                                                                  //
  };                                                                   //
  BBB.getCurrentPoll = function(userId) {                              // 18
    if (userId !== void 0 && Meteor.Polls.findOne({                    // 33
      "poll_info.users": userId                                        // 33
    })) {                                                              //
      return Meteor.Polls.findOne({                                    // 34
        "poll_info.users": userId                                      // 34
      });                                                              //
    }                                                                  //
  };                                                                   //
  BBB.sendPollResponseMessage = function(key, pollAnswerId) {          // 18
    return Meteor.call("publishVoteMessage", BBB.getMeetingId(), pollAnswerId, getInSession("userId"), getInSession("authToken"));
  };                                                                   //
  BBB.getMeetingId = function() {                                      // 18
    var ref;                                                           // 40
    return (ref = Meteor.Meetings.findOne()) != null ? ref.meetingId : void 0;
  };                                                                   //
  BBB.getInternalMeetingId = function(callback) {};                    // 18
                                                                       // 44
  /*                                                                   // 44
    Queryies the user object via it's id                               //
   */                                                                  //
  BBB.getUser = function(userId) {                                     // 18
    return Meteor.Users.findOne({                                      //
      userId: userId                                                   // 48
    });                                                                //
  };                                                                   //
  BBB.getCurrentUser = function() {                                    // 18
    return BBB.getUser(getInSession("userId"));                        //
  };                                                                   //
                                                                       // 53
  /*                                                                   // 53
  Query if the current user is sharing webcam.                         //
                                                                       //
  Param:                                                               //
  callback - function to return the result                             //
                                                                       //
  If you want to instead receive an event with the result, register a listener
  for AM_I_SHARING_CAM_RESP (see below).                               //
   */                                                                  //
  BBB.amISharingWebcam = function(callback) {                          // 18
    return false;                                                      // 64
  };                                                                   //
                                                                       // 66
  /*                                                                   // 66
                                                                       //
  Query if another user is sharing her camera.                         //
                                                                       //
  Param:                                                               //
  userID : the id of the user that may be sharing the camera           //
  callback: function if you want to be informed synchronously. Don't pass a function
  if you want to be informed through an event. You have to register for
  IS_USER_PUBLISHING_CAM_RESP (see below).                             //
   */                                                                  //
  BBB.isUserSharingWebcam = function(userId, callback) {               // 18
    return false;                                                      // 78
  };                                                                   //
  BBB.amIInAudio = function(callback) {                                // 18
    var ref, ref1, ref2, user;                                         // 83
    user = BBB.getCurrentUser();                                       // 83
    return (user != null ? (ref = user.user) != null ? ref.listenOnly : void 0 : void 0) || (user != null ? (ref1 = user.user) != null ? (ref2 = ref1.voiceUser) != null ? ref2.joined : void 0 : void 0 : void 0);
  };                                                                   //
  BBB.amIListenOnlyAudio = function(callback) {                        // 18
    var ref, ref1;                                                     // 88
    return (ref = BBB.getCurrentUser()) != null ? (ref1 = ref.user) != null ? ref1.listenOnly : void 0 : void 0;
  };                                                                   //
  BBB.amISharingAudio = function(callback) {                           // 18
    var ref;                                                           // 92
    return BBB.isUserSharingAudio((ref = BBB.getCurrentUser()) != null ? ref.userId : void 0);
  };                                                                   //
  BBB.amITalking = function(callback) {                                // 18
    var ref;                                                           // 96
    return BBB.isUserTalking((ref = BBB.getCurrentUser()) != null ? ref.userId : void 0);
  };                                                                   //
  BBB.isUserInAudio = function(userId, callback) {                     // 18
    var ref, ref1, ref2, user;                                         // 99
    user = BBB.getUser(userId);                                        // 99
    return (user != null ? (ref = user.user) != null ? ref.listenOnly : void 0 : void 0) || (user != null ? (ref1 = user.user) != null ? (ref2 = ref1.voiceUser) != null ? ref2.joined : void 0 : void 0 : void 0);
  };                                                                   //
  BBB.isUserListenOnlyAudio = function(userId, callback) {             // 18
    var ref, ref1;                                                     // 103
    return (ref = BBB.getUser(userId)) != null ? (ref1 = ref.user) != null ? ref1.listenOnly : void 0 : void 0;
  };                                                                   //
  BBB.isUserSharingAudio = function(userId, callback) {                // 18
    var ref, ref1, ref2;                                               // 106
    return (ref = BBB.getUser(userId)) != null ? (ref1 = ref.user) != null ? (ref2 = ref1.voiceUser) != null ? ref2.joined : void 0 : void 0 : void 0;
  };                                                                   //
  BBB.isUserTalking = function(userId, callback) {                     // 18
    var ref, ref1, ref2;                                               // 109
    return (ref = BBB.getUser(userId)) != null ? (ref1 = ref.user) != null ? (ref2 = ref1.voiceUser) != null ? ref2.talking : void 0 : void 0 : void 0;
  };                                                                   //
  BBB.isUserPresenter = function(userId, callback) {                   // 18
    var ref, ref1;                                                     // 112
    return (ref = BBB.getUser(userId)) != null ? (ref1 = ref.user) != null ? ref1.presenter : void 0 : void 0;
  };                                                                   //
  BBB.amILocked = function() {                                         // 18
    var ref;                                                           // 116
    return (ref = BBB.getCurrentUser()) != null ? ref.user.locked : void 0;
  };                                                                   //
  BBB.isMyMicLocked = function() {                                     // 18
    var lockedMicForRoom, ref;                                         // 121
    lockedMicForRoom = (ref = Meteor.Meetings.findOne()) != null ? ref.roomLockSettings.disableMic : void 0;
    return lockedMicForRoom && BBB.amILocked();                        // 124
  };                                                                   //
  BBB.getCurrentSlide = function() {                                   // 18
    var currentPresentation, currentSlide, presentationId, ref;        // 127
    currentPresentation = Meteor.Presentations.findOne({               // 127
      "presentation.current": true                                     // 127
    });                                                                //
    presentationId = currentPresentation != null ? (ref = currentPresentation.presentation) != null ? ref.id : void 0 : void 0;
    return currentSlide = Meteor.Slides.findOne({                      //
      "presentationId": presentationId,                                // 129
      "slide.current": true                                            // 129
    });                                                                //
  };                                                                   //
  BBB.getMeetingName = function() {                                    // 18
    var ref;                                                           // 132
    return ((ref = Meteor.Meetings.findOne()) != null ? ref.meetingName : void 0) || null;
  };                                                                   //
  BBB.getNumberOfUsers = function() {                                  // 18
    return Meteor.Users.find().count();                                //
  };                                                                   //
  BBB.currentPresentationName = function() {                           // 18
    var ref, ref1;                                                     // 138
    return (ref = Meteor.Presentations.findOne({                       //
      "presentation.current": true                                     //
    })) != null ? (ref1 = ref.presentation) != null ? ref1.name : void 0 : void 0;
  };                                                                   //
                                                                       // 140
  /*                                                                   // 140
  Raise user's hand.                                                   //
  Param:                                                               //
   */                                                                  //
  BBB.lowerHand = function(meetingId, toUserId, byUserId, byAuthToken) {
    return Meteor.call('userLowerHand', meetingId, toUserId, byUserId, byAuthToken);
  };                                                                   //
  BBB.raiseHand = function(meetingId, toUserId, byUserId, byAuthToken) {
    return Meteor.call('userRaiseHand', meetingId, toUserId, byUserId, byAuthToken);
  };                                                                   //
  BBB.setEmojiStatus = function(meetingId, toUserId, byUserId, byAuthToken, status) {
    return Meteor.call('userSetEmoji', meetingId, toUserId, byUserId, byAuthToken, status);
  };                                                                   //
  BBB.isUserEmojiStatusSet = function(userId) {                        // 18
    var ref, ref1, ref2, ref3;                                         // 155
    return ((ref = BBB.getUser(userId)) != null ? (ref1 = ref.user) != null ? ref1.emoji_status : void 0 : void 0) !== "none" && ((ref2 = BBB.getUser(userId)) != null ? (ref3 = ref2.user) != null ? ref3.emoji_status : void 0 : void 0) !== void 0;
  };                                                                   //
  BBB.isCurrentUserEmojiStatusSet = function() {                       // 18
    var ref;                                                           // 158
    return BBB.isUserEmojiStatusSet((ref = BBB.getCurrentUser()) != null ? ref.userId : void 0);
  };                                                                   //
  BBB.isMeetingRecording = function() {                                // 18
    var ref;                                                           // 161
    return (ref = MEteor.Meetings.findOne()) != null ? ref.recorded : void 0;
  };                                                                   //
                                                                       // 164
  /*                                                                   // 164
  Issue a switch presenter command.                                    //
                                                                       //
  Param:                                                               //
  newPresenterUserID - the user id of the new presenter                //
                                                                       //
  3rd-party JS must listen for SWITCHED_PRESENTER (see below) to get notified
  of switch presenter events.                                          //
   */                                                                  //
  BBB.switchPresenter = function(newPresenterUserID) {};               // 18
                                                                       // 175
  /*                                                                   // 175
  Query if current user is presenter.                                  //
                                                                       //
  Params:                                                              //
  callback - function if you want a callback as response. Otherwise, you need to listen
  for AM_I_PRESENTER_RESP (see below).                                 //
   */                                                                  //
  BBB.amIPresenter = function(callback) {                              // 18
    return returnOrCallback(false, callback);                          //
  };                                                                   //
                                                                       // 185
  /*                                                                   // 185
  Eject a user.                                                        //
                                                                       //
  Params:                                                              //
  userID - userID of the user you want to eject.                       //
   */                                                                  //
  BBB.ejectUser = function(userID) {};                                 // 18
                                                                       // 193
  /*                                                                   // 193
  Query who is presenter.                                              //
                                                                       //
  Params:                                                              //
  callback - function that gets executed for the response.             //
   */                                                                  //
  BBB.getPresenterUserID = function(callback) {};                      // 18
                                                                       // 201
  /*                                                                   // 201
  Query the current user's role.                                       //
  Params:                                                              //
  callback - function if you want a callback as response. Otherwise, you need to listen
  for GET_MY_ROLE_RESP (see below).                                    //
   */                                                                  //
  BBB.getMyRole = function(callback) {                                 // 18
    return returnOrCallback("VIEWER", callback);                       //
  };                                                                   //
                                                                       // 210
  /*                                                                   // 210
  Query the current user's id.                                         //
                                                                       //
  Params:                                                              //
  callback - function that gets executed for the response.             //
   */                                                                  //
  BBB.getMyUserID = function(callback) {                               // 18
    return returnOrCallback(getInSession("userId"), callback);         //
  };                                                                   //
  BBB.getMyDBID = function(callback) {                                 // 18
    var ref;                                                           // 221
    return returnOrCallback((ref = Meteor.Users.findOne({              //
      userId: getInSession("userId")                                   //
    })) != null ? ref._id : void 0, callback);                         //
  };                                                                   //
  BBB.getMyUserName = function(callback) {                             // 18
    var ref;                                                           // 225
    return BBB.getUserName((ref = BBB.getCurrentUser()) != null ? ref.userId : void 0);
  };                                                                   //
  BBB.getMyVoiceBridge = function(callback) {                          // 18
    var res;                                                           // 228
    res = Meteor.Meetings.findOne({}).voiceConf;                       // 228
    return returnOrCallback(res, callback);                            //
  };                                                                   //
  BBB.getUserName = function(userId, callback) {                       // 18
    var ref, ref1;                                                     // 232
    return returnOrCallback((ref = BBB.getUser(userId)) != null ? (ref1 = ref.user) != null ? ref1.name : void 0 : void 0, callback);
  };                                                                   //
                                                                       // 234
  /*                                                                   // 234
  Query the current user's role.                                       //
  Params:                                                              //
  callback - function if you want a callback as response. Otherwise, you need to listen
  for GET_MY_ROLE_RESP (see below).                                    //
   */                                                                  //
  BBB.getMyUserInfo = function(callback) {                             // 18
    var result;                                                        // 241
    result = {                                                         // 241
      myUserID: BBB.getMyUserID(),                                     // 242
      myUsername: BBB.getMyUserName(),                                 // 242
      myInternalUserID: BBB.getMyUserID(),                             // 242
      myAvatarURL: null,                                               // 242
      myRole: BBB.getMyRole(),                                         // 242
      amIPresenter: BBB.amIPresenter(),                                // 242
      voiceBridge: BBB.getMyVoiceBridge(),                             // 242
      dialNumber: null                                                 // 242
    };                                                                 //
    return returnOrCallback(result, callback);                         //
  };                                                                   //
                                                                       // 253
  /*                                                                   // 253
  Query the meeting id.                                                //
                                                                       //
  Params:                                                              //
  callback - function that gets executed for the response.             //
   */                                                                  //
                                                                       // 261
  /*                                                                   // 261
  Join the voice conference.                                           //
  isListenOnly: signifies whether the user joining the conference audio requests to join the listen only stream
   */                                                                  //
  BBB.joinVoiceConference = function(callback, isListenOnly) {         // 18
    if (BBB.isMyMicLocked()) {                                         // 266
      callIntoConference(BBB.getMyVoiceBridge(), callback, true);      // 267
    }                                                                  //
    return callIntoConference(BBB.getMyVoiceBridge(), callback, isListenOnly);
  };                                                                   //
                                                                       // 270
  /*                                                                   // 270
  Leave the voice conference.                                          //
   */                                                                  //
  BBB.leaveVoiceConference = function(callback) {                      // 18
    return webrtc_hangup(callback);                                    //
  };                                                                   //
                                                                       // 276
  /*                                                                   // 276
  Get a hold of the object containing the call information             //
   */                                                                  //
  BBB.getCallStatus = function() {                                     // 18
    return getCallStatus();                                            //
  };                                                                   //
                                                                       // 282
  /*                                                                   // 282
  Share user's webcam.                                                 //
                                                                       //
  Params:                                                              //
  publishInClient : (DO NOT USE - Unimplemented)                       //
   */                                                                  //
  BBB.shareVideoCamera = function(publishInClient) {};                 // 18
                                                                       // 290
  /*                                                                   // 290
  Stop share user's webcam.                                            //
   */                                                                  //
  BBB.stopSharingCamera = function() {};                               // 18
                                                                       // 295
  /*                                                                   // 295
    Indicates if a user is muted                                       //
   */                                                                  //
  BBB.isUserMuted = function(id) {                                     // 18
    var ref, ref1, ref2;                                               // 299
    return (ref = BBB.getUser(id)) != null ? (ref1 = ref.user) != null ? (ref2 = ref1.voiceUser) != null ? ref2.muted : void 0 : void 0 : void 0;
  };                                                                   //
                                                                       // 301
  /*                                                                   // 301
    Indicates if the current user is muted                             //
   */                                                                  //
  BBB.amIMuted = function() {                                          // 18
    return BBB.isUserMuted(BBB.getCurrentUser().userId);               //
  };                                                                   //
                                                                       // 307
  /*                                                                   // 307
  Mute the current user.                                               //
   */                                                                  //
  BBB.muteMe = function() {                                            // 18
    return BBB.muteUser(getInSession("userId"), getInSession("userId"), getInSession("authToken"));
  };                                                                   //
                                                                       // 312
  /*                                                                   // 312
  Unmute the current user.                                             //
   */                                                                  //
  BBB.unmuteMe = function() {                                          // 18
    return BBB.unmuteUser(getInSession("userId"), getInSession("userId"), getInSession("authToken"));
  };                                                                   //
  BBB.muteUser = function(meetingId, userId, toMuteId, requesterId, requestToken) {
    return Meteor.call('muteUser', meetingId, toMuteId, requesterId, getInSession("authToken"));
  };                                                                   //
  BBB.unmuteUser = function(meetingId, userId, toMuteId, requesterId, requestToken) {
    return Meteor.call('unmuteUser', meetingId, toMuteId, requesterId, getInSession("authToken"));
  };                                                                   //
  BBB.toggleMyMic = function() {                                       // 18
    var request;                                                       // 325
    request = BBB.amIMuted() ? "unmuteUser" : "muteUser";              // 325
    return Meteor.call(request, BBB.getMeetingId(), getInSession("userId"), getInSession("userId"), getInSession("authToken"));
  };                                                                   //
                                                                       // 328
  /*                                                                   // 328
  Mute all the users.                                                  //
   */                                                                  //
  BBB.muteAll = function() {};                                         // 18
                                                                       // 333
  /*                                                                   // 333
  Unmute all the users.                                                //
   */                                                                  //
  BBB.unmuteAll = function() {};                                       // 18
                                                                       // 338
  /*                                                                   // 338
  Switch to a new layout.                                              //
                                                                       //
  Param:                                                               //
  newLayout : name of the layout as defined in layout.xml (found in /var/www/bigbluebutton/client/conf/layout.xml)
   */                                                                  //
  BBB.switchLayout = function(newLayout) {};                           // 18
                                                                       // 346
  /*                                                                   // 346
  Lock the layout.                                                     //
                                                                       //
  Locking the layout means that users will have the same layout with the moderator that issued the lock command.
  Other users won't be able to move or resize the different windows.   //
   */                                                                  //
  BBB.lockLayout = function(lock) {};                                  // 18
                                                                       // 354
  /*                                                                   // 354
  Request to send a public chat                                        //
  fromUserID - the external user id for the sender                     //
  fontColor  - the color of the font to display the message            //
  localeLang - the 2-char locale code (e.g. en) for the sender         //
  message    - the message to send                                     //
   */                                                                  //
  BBB.sendPublicChatMessage = function(fontColor, localeLang, message) {
    var messageForServer;                                              // 362
    messageForServer = {                                               // 362
      "message": message,                                              // 362
      "chat_type": "PUBLIC_CHAT",                                      // 362
      "from_userid": getInSession("userId"),                           // 362
      "from_username": BBB.getMyUserName(),                            // 362
      "from_tz_offset": "240",                                         // 362
      "to_username": "public_chat_username",                           // 362
      "to_userid": "public_chat_userid",                               // 362
      "from_lang": localeLang,                                         // 362
      "from_time": getTime(),                                          // 362
      "from_color": fontColor                                          // 362
    };                                                                 //
    return Meteor.call("sendChatMessagetoServer", BBB.getMeetingId(), messageForServer, getInSession("userId"), getInSession("authToken"));
  };                                                                   //
                                                                       // 377
  /*                                                                   // 377
  Request to send a private chat                                       //
  fromUserID - the external user id for the sender                     //
  fontColor  - the color of the font to display the message            //
  localeLang - the 2-char locale code (e.g. en) for the sender         //
  message    - the message to send                                     //
  toUserID   - the external user id of the receiver                    //
   */                                                                  //
  BBB.sendPrivateChatMessage = function(fontColor, localeLang, message, toUserID, toUserName) {
    var messageForServer;                                              // 386
    messageForServer = {                                               // 386
      "message": message,                                              // 386
      "chat_type": "PRIVATE_CHAT",                                     // 386
      "from_userid": getInSession("userId"),                           // 386
      "from_username": BBB.getMyUserName(),                            // 386
      "from_tz_offset": "240",                                         // 386
      "to_username": toUserName,                                       // 386
      "to_userid": toUserID,                                           // 386
      "from_lang": localeLang,                                         // 386
      "from_time": getTime(),                                          // 386
      "from_color": fontColor                                          // 386
    };                                                                 //
    return Meteor.call("sendChatMessagetoServer", BBB.getMeetingId(), messageForServer, getInSession("userId"), getInSession("authToken"));
  };                                                                   //
                                                                       // 401
  /*                                                                   // 401
  Request to display a presentation.                                   //
  presentationID - the presentation to display                         //
   */                                                                  //
  BBB.displayPresentation = function(presentationID) {};               // 18
                                                                       // 407
  /*                                                                   // 407
  Query the list of uploaded presentations.                            //
   */                                                                  //
  BBB.queryListOfPresentations = function() {};                        // 18
                                                                       // 412
  /*                                                                   // 412
  Request to delete a presentation.                                    //
  presentationID - the presentation to delete                          //
   */                                                                  //
  BBB.deletePresentation = function(presentationID) {};                // 18
  BBB.goToPreviousPage = function() {                                  // 18
    return Meteor.call('publishSwitchToPreviousSlideMessage', getInSession('meetingId'), getInSession('userId'), getInSession('authToken'));
  };                                                                   //
  BBB.goToNextPage = function() {                                      // 18
    return Meteor.call('publishSwitchToNextSlideMessage', getInSession('meetingId'), getInSession('userId'), getInSession('authToken'));
  };                                                                   //
  BBB.webRTCConferenceCallStarted = function() {};                     // 18
  BBB.webRTCConferenceCallConnecting = function() {};                  // 18
  BBB.webRTCConferenceCallEnded = function() {};                       // 18
  BBB.webRTCConferenceCallFailed = function(errorcode) {};             // 18
  BBB.webRTCConferenceCallWaitingForICE = function() {};               // 18
  BBB.webRTCCallProgressCallback = function(progress) {};              // 18
  BBB.webRTCEchoTestStarted = function() {};                           // 18
  BBB.webRTCEchoTestConnecting = function() {};                        // 18
  BBB.webRTCEchoTestFailed = function(reason) {};                      // 18
  BBB.webRTCEchoTestWaitingForICE = function() {};                     // 18
  BBB.webRTCEchoTestEnded = function() {};                             // 18
  BBB.webRTCMediaRequest = function() {};                              // 18
  BBB.webRTCMediaSuccess = function() {};                              // 18
  BBB.webRTCMediaFail = function() {};                                 // 18
  BBB.webRTCWebcamRequest = function() {};                             // 18
  BBB.webRTCWebcamRequestSuccess = function() {};                      // 18
  BBB.webRTCWebcamRequestFail = function(reason) {};                   // 18
                                                                       // 472
  /*                                                                   // 472
  Stores the 3rd-party app event listeners **                          //
   */                                                                  //
  listeners = {};                                                      // 18
                                                                       // 477
  /*                                                                   // 477
  3rd-party apps should use this method to register to listen for events.
   */                                                                  //
  BBB.listen = function(eventName, handler) {};                        // 18
                                                                       // 482
  /*                                                                   // 482
  3rd-party app should use this method to unregister listener for a given event.
   */                                                                  //
  BBB.unlisten = function(eventName, handler) {};                      // 18
  BBB.init = function(callback) {};                                    // 18
  return BBB;                                                          //
})();                                                                  // 16
                                                                       //
/////////////////////////////////////////////////////////////////////////

}).call(this);
