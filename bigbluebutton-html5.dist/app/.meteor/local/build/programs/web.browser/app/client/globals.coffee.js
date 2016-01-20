(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/globals.coffee.js                                            //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
this.getBuildInformation = function() {                                // 1
  var copyrightYear, defaultWelcomeMessage, defaultWelcomeMessageFooter, html5ClientBuild, link, ref, ref1, ref2, ref3;
  copyrightYear = ((ref = Meteor.config) != null ? ref.copyrightYear : void 0) || "DATE";
  html5ClientBuild = ((ref1 = Meteor.config) != null ? ref1.html5ClientBuild : void 0) || "VERSION";
  defaultWelcomeMessage = ((ref2 = Meteor.config) != null ? ref2.defaultWelcomeMessage : void 0) || "WELCOME MESSAGE";
  defaultWelcomeMessageFooter = ((ref3 = Meteor.config) != null ? ref3.defaultWelcomeMessageFooter : void 0) || "WELCOME MESSAGE";
  link = "<a href='http://bigbluebutton.org/' target='_blank'>http://bigbluebutton.org</a>";
  return {                                                             //
    'copyrightYear': copyrightYear,                                    // 8
    'html5ClientBuild': html5ClientBuild,                              // 8
    'defaultWelcomeMessage': defaultWelcomeMessage,                    // 8
    'defaultWelcomeMessageFooter': defaultWelcomeMessageFooter,        // 8
    'link': link                                                       // 8
  };                                                                   //
};                                                                     // 1
                                                                       //
this.colourToHex = function(value) {                                   // 1
  var hex;                                                             // 18
  hex = parseInt(value).toString(16);                                  // 18
  while (hex.length < 6) {                                             // 19
    hex = "0" + hex;                                                   // 19
  }                                                                    //
  return "#" + hex;                                                    //
};                                                                     // 17
                                                                       //
this.formatColor = function(color) {                                   // 1
  if (color == null) {                                                 //
    color = "0";                                                       //
  }                                                                    //
  if (!color.toString().match(/\#.*/)) {                               // 25
    color = colourToHex(color);                                        // 26
  }                                                                    //
  return color;                                                        //
};                                                                     // 23
                                                                       //
this.getCurrentSlideDoc = function() {                                 // 1
  return BBB.getCurrentSlide();                                        //
};                                                                     // 29
                                                                       //
this.getInSession = function(k) {                                      // 1
  return SessionAmplify.get(k);                                        //
};                                                                     // 32
                                                                       //
this.getTime = function() {                                            // 1
  return (new Date).valueOf();                                         //
};                                                                     // 34
                                                                       //
this.isPanHorizontal = function(event) {                               // 1
  return Math.abs(event.deltaX) > Math.abs(event.deltaY);              //
};                                                                     // 38
                                                                       //
Handlebars.registerHelper("amIInAudio", function() {                   // 1
  return BBB.amIInAudio();                                             //
});                                                                    // 42
                                                                       //
Handlebars.registerHelper("amIListenOnlyAudio", function() {           // 1
  return BBB.amIListenOnlyAudio();                                     //
});                                                                    // 46
                                                                       //
Handlebars.registerHelper("isMyMicLocked", function() {                // 1
  return BBB.isMyMicLocked();                                          //
});                                                                    // 50
                                                                       //
Handlebars.registerHelper("colourToHex", (function(_this) {            // 1
  return function(value) {                                             //
    return _this.window.colourToHex(value);                            //
  };                                                                   //
})(this));                                                             // 53
                                                                       //
Handlebars.registerHelper('equals', function(a, b) {                   // 1
  return a === b;                                                      //
});                                                                    // 56
                                                                       //
Handlebars.registerHelper("getCurrentMeeting", function() {            // 1
  return Meteor.Meetings.findOne();                                    //
});                                                                    // 59
                                                                       //
Handlebars.registerHelper("getCurrentSlide", function() {              // 1
  return getCurrentSlideDoc();                                         //
});                                                                    // 62
                                                                       //
Handlebars.registerHelper("getInSession", function(k) {                // 1
  return SessionAmplify.get(k);                                        //
});                                                                    // 66
                                                                       //
Handlebars.registerHelper("getMeetingName", function() {               // 1
  return BBB.getMeetingName();                                         //
});                                                                    // 68
                                                                       //
Handlebars.registerHelper("getShapesForSlide", function() {            // 1
  var currentSlide, ref;                                               // 72
  currentSlide = getCurrentSlideDoc();                                 // 72
  return Meteor.Shapes.find({                                          //
    whiteboardId: currentSlide != null ? (ref = currentSlide.slide) != null ? ref.id : void 0 : void 0
  });                                                                  //
});                                                                    // 71
                                                                       //
Handlebars.registerHelper("getUsersInMeeting", function() {            // 1
  var users;                                                           // 79
  users = Meteor.Users.find().fetch();                                 // 79
  if ((users != null ? users.length : void 0) > 1) {                   // 80
    return getSortedUserList(users);                                   //
  } else {                                                             //
    return users;                                                      //
  }                                                                    //
});                                                                    // 78
                                                                       //
Handlebars.registerHelper("getWhiteboardTitle", function() {           // 1
  return BBB.currentPresentationName() || "Loading presentation...";   //
});                                                                    // 85
                                                                       //
Handlebars.registerHelper("getCurrentUserEmojiStatus", function() {    // 1
  var ref, ref1;                                                       // 89
  return (ref = BBB.getCurrentUser()) != null ? (ref1 = ref.user) != null ? ref1.emoji_status : void 0 : void 0;
});                                                                    // 88
                                                                       //
Handlebars.registerHelper("isCurrentUser", function(userId) {          // 1
  var ref;                                                             // 92
  return userId === null || userId === ((ref = BBB.getCurrentUser()) != null ? ref.userId : void 0);
});                                                                    // 91
                                                                       //
Handlebars.registerHelper("isCurrentUserMuted", function() {           // 1
  return BBB.amIMuted();                                               //
});                                                                    // 94
                                                                       //
Handlebars.registerHelper("privateChatName", function() {              // 1
  var obj, ref;                                                        // 99
  obj = Meteor.Users.findOne({                                         // 99
    userId: getInSession("inChatWith")                                 // 99
  });                                                                  //
  if (obj != null) {                                                   // 100
    return obj != null ? (ref = obj.user) != null ? ref.name : void 0 : void 0;
  }                                                                    //
});                                                                    // 98
                                                                       //
Handlebars.registerHelper("isCurrentUserEmojiStatusSet", function() {  // 1
  return BBB.isCurrentUserEmojiStatusSet();                            //
});                                                                    // 103
                                                                       //
Handlebars.registerHelper("isCurrentUserSharingVideo", function() {    // 1
  return BBB.amISharingVideo();                                        //
});                                                                    // 106
                                                                       //
Handlebars.registerHelper("isCurrentUserTalking", function() {         // 1
  return BBB.amITalking();                                             //
});                                                                    // 109
                                                                       //
Handlebars.registerHelper("isCurrentUserPresenter", function() {       // 1
  return BBB.isUserPresenter(getInSession('userId'));                  //
});                                                                    // 112
                                                                       //
Handlebars.registerHelper("isDisconnected", function() {               // 1
  return !Meteor.status().connected;                                   // 116
});                                                                    // 115
                                                                       //
Handlebars.registerHelper("isUserInAudio", function(userId) {          // 1
  return BBB.isUserInAudio(userId);                                    //
});                                                                    // 118
                                                                       //
Handlebars.registerHelper("isUserListenOnlyAudio", function(userId) {  // 1
  return BBB.isUserListenOnlyAudio(userId);                            //
});                                                                    // 121
                                                                       //
Handlebars.registerHelper("isUserMuted", function(userId) {            // 1
  return BBB.isUserMuted(userId);                                      //
});                                                                    // 124
                                                                       //
Handlebars.registerHelper("isUserSharingVideo", function(userId) {     // 1
  return BBB.isUserSharingWebcam(userId);                              //
});                                                                    // 127
                                                                       //
Handlebars.registerHelper("isUserTalking", function(userId) {          // 1
  return BBB.isUserTalking(userId);                                    //
});                                                                    // 130
                                                                       //
Handlebars.registerHelper('isMobile', function() {                     // 1
  return isMobile();                                                   //
});                                                                    // 133
                                                                       //
Handlebars.registerHelper('isPortraitMobile', function() {             // 1
  return isPortraitMobile();                                           //
});                                                                    // 136
                                                                       //
Handlebars.registerHelper('isMobileChromeOrFirefox', function() {      // 1
  return isMobile() && ((getBrowserName() === 'Chrome') || (getBrowserName() === 'Firefox'));
});                                                                    // 139
                                                                       //
Handlebars.registerHelper("meetingIsRecording", function() {           // 1
  return BBB.isMeetingRecording();                                     //
});                                                                    // 142
                                                                       //
Handlebars.registerHelper("messageFontSize", function() {              // 1
  return {                                                             //
    style: "font-size: " + (getInSession("messageFontSize")) + "px;"   // 146
  };                                                                   //
});                                                                    // 145
                                                                       //
Handlebars.registerHelper("pointerLocation", function() {              // 1
  var currentPresentation, currentSlideDoc, pointer, presentationId, ref;
  currentPresentation = Meteor.Presentations.findOne({                 // 149
    "presentation.current": true                                       // 149
  });                                                                  //
  presentationId = currentPresentation != null ? (ref = currentPresentation.presentation) != null ? ref.id : void 0 : void 0;
  currentSlideDoc = Meteor.Slides.findOne({                            // 149
    "presentationId": presentationId,                                  // 151
    "slide.current": true                                              // 151
  });                                                                  //
  pointer = currentPresentation != null ? currentPresentation.pointer : void 0;
  pointer.x = (-currentSlideDoc.slide.x_offset * 2 + currentSlideDoc.slide.width_ratio * pointer.x) / 100;
  pointer.y = (-currentSlideDoc.slide.y_offset * 2 + currentSlideDoc.slide.height_ratio * pointer.y) / 100;
  return pointer;                                                      //
});                                                                    // 148
                                                                       //
Handlebars.registerHelper("safeName", function(str) {                  // 1
  return safeString(str);                                              //
});                                                                    // 157
                                                                       //
                                                                       // 160
/*Handlebars.registerHelper "visibility", (section) ->                 // 160
  if getInSession "display_#{section}"                                 //
    style: 'display:block;'                                            //
  else                                                                 //
    style: 'display:none;'                                             //
 */                                                                    //
                                                                       //
Handlebars.registerHelper("visibility", function(section) {            // 1
  return {                                                             //
    style: 'display:block;'                                            // 167
  };                                                                   //
});                                                                    // 166
                                                                       //
Handlebars.registerHelper('containerPosition', function(section) {     // 1
  if (getInSession('display_usersList')) {                             // 170
    return 'moved-to-right';                                           // 171
  } else if (getInSession('display_menu')) {                           //
    return 'moved-to-left';                                            // 173
  } else {                                                             //
    return '';                                                         // 175
  }                                                                    //
});                                                                    // 169
                                                                       //
Handlebars.registerHelper('whiteboardSize', function(section) {        // 1
  if (BBB.isUserPresenter(getInSession('userId'))) {                   // 179
    return 'presenter-whiteboard';                                     // 180
  } else {                                                             //
    if (BBB.isPollGoing(getInSession('userId'))) {                     // 182
      return 'poll-whiteboard';                                        // 183
    } else {                                                           //
      return 'viewer-whiteboard';                                      // 185
    }                                                                  //
  }                                                                    //
});                                                                    // 178
                                                                       //
Handlebars.registerHelper("getPollQuestions", function() {             // 1
  var answer, buttonStyle, j, len, marginStyle, number, polls, ref, widthStyle;
  polls = BBB.getCurrentPoll(getInSession('userId'));                  // 188
  if ((polls != null) && polls !== void 0) {                           // 189
    number = polls.poll_info.poll.answers.length;                      // 190
    widthStyle = "width: calc(75%/" + number + ");";                   // 190
    marginStyle = "margin-left: calc(25%/" + (number * 2) + ");" + "margin-right: calc(25%/" + (number * 2) + ");";
    buttonStyle = widthStyle + marginStyle;                            // 190
    ref = polls.poll_info.poll.answers;                                // 194
    for (j = 0, len = ref.length; j < len; j++) {                      // 194
      answer = ref[j];                                                 //
      answer.style = buttonStyle;                                      // 195
    }                                                                  // 194
    return polls.poll_info.poll.answers;                               // 196
  }                                                                    //
});                                                                    // 187
                                                                       //
this.getSortedUserList = function(users) {                             // 1
  if ((users != null ? users.length : void 0) > 1) {                   // 199
    users.sort(function(a, b) {                                        // 200
      var aTime, bTime;                                                // 201
      if (a.user.role === "MODERATOR" && b.user.role === "MODERATOR") {
        if (a.user.set_emoji_time && b.user.set_emoji_time) {          // 202
          aTime = a.user.set_emoji_time.getTime();                     // 203
          bTime = b.user.set_emoji_time.getTime();                     // 203
          if (aTime < bTime) {                                         // 205
            return -1;                                                 // 206
          } else {                                                     //
            return 1;                                                  // 208
          }                                                            //
        } else if (a.user.set_emoji_time) {                            //
          return -1;                                                   // 210
        } else if (b.user.set_emoji_time) {                            //
          return 1;                                                    // 212
        }                                                              //
      } else if (a.user.role === "MODERATOR") {                        //
        return -1;                                                     // 214
      } else if (b.user.role === "MODERATOR") {                        //
        return 1;                                                      // 216
      } else if (a.user.set_emoji_time && b.user.set_emoji_time) {     //
        aTime = a.user.set_emoji_time.getTime();                       // 218
        bTime = b.user.set_emoji_time.getTime();                       // 218
        if (aTime < bTime) {                                           // 220
          return -1;                                                   // 221
        } else {                                                       //
          return 1;                                                    // 223
        }                                                              //
      } else if (a.user.set_emoji_time) {                              //
        return -1;                                                     // 225
      } else if (b.user.set_emoji_time) {                              //
        return 1;                                                      // 227
      } else if (!a.user.phone_user && !b.user.phone_user) {           //
                                                                       // 228
      } else if (!a.user.phone_user) {                                 //
        return -1;                                                     // 231
      } else if (!b.user.phone_user) {                                 //
        return 1;                                                      // 233
      }                                                                //
      if (a.user._sort_name < b.user._sort_name) {                     // 239
        return -1;                                                     // 240
      } else if (a.user._sort_name > b.user._sort_name) {              //
        return 1;                                                      // 242
      } else if (a.user.userid.toLowerCase() > b.user.userid.toLowerCase()) {
        return -1;                                                     // 244
      } else if (a.user.userid.toLowerCase() < b.user.userid.toLowerCase()) {
        return 1;                                                      // 246
      }                                                                //
    });                                                                //
  }                                                                    //
  return users;                                                        //
};                                                                     // 198
                                                                       //
this.linkify = function(str) {                                         // 1
  return str = str.replace(re_weburl, "<a href='event:$&'><u>$&</u></a>");
};                                                                     // 251
                                                                       //
this.setInSession = function(k, v) {                                   // 1
  return SessionAmplify.set(k, v);                                     //
};                                                                     // 254
                                                                       //
this.safeString = function(str) {                                      // 1
  if (typeof str === 'string') {                                       // 257
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }                                                                    //
};                                                                     // 256
                                                                       //
this.toggleCam = function(event) {};                                   // 1
                                                                       //
this.toggleChatbar = function() {                                      // 1
  setInSession("display_chatbar", !getInSession("display_chatbar"));   // 265
  if (!getInSession("display_chatbar")) {                              // 266
    $('#whiteboard').css('width', '100%');                             // 267
    $('#whiteboard .ui-resizable-handle').css('display', 'none');      // 267
  } else {                                                             //
    $('#whiteboard').css('width', '');                                 // 270
    $('#whiteboard .ui-resizable-handle').css('display', '');          // 270
  }                                                                    //
  return setTimeout(scaleWhiteboard, 0);                               //
};                                                                     // 264
                                                                       //
this.toggleMic = function(event) {                                     // 1
  return BBB.toggleMyMic();                                            //
};                                                                     // 274
                                                                       //
this.toggleUsersList = function() {                                    // 1
  if ($('.userlistMenu').hasClass('hiddenInLandscape')) {              // 278
    $('.userlistMenu').removeClass('hiddenInLandscape');               // 279
  } else {                                                             //
    $('.userlistMenu').addClass('hiddenInLandscape');                  // 281
  }                                                                    //
  return setTimeout(scaleWhiteboard, 0);                               //
};                                                                     // 277
                                                                       //
this.populateNotifications = function(msg) {                           // 1
  var chat, chats, initChats, j, l, len, len1, myPrivateChats, myUserId, new_msg_userid, results, u, uniqueArray, users;
  myUserId = getInSession("userId");                                   // 285
  users = Meteor.Users.find().fetch();                                 // 285
  myPrivateChats = Meteor.Chat.find({                                  // 285
    'message.chat_type': 'PRIVATE_CHAT'                                // 289
  }).fetch();                                                          //
  uniqueArray = [];                                                    // 285
  for (j = 0, len = myPrivateChats.length; j < len; j++) {             // 292
    chat = myPrivateChats[j];                                          //
    if (chat.message.to_userid === myUserId) {                         // 293
      uniqueArray.push({                                               // 294
        userId: chat.message.from_userid,                              // 294
        username: chat.message.from_username                           // 294
      });                                                              //
    }                                                                  //
    if (chat.message.from_userid === myUserId) {                       // 295
      uniqueArray.push({                                               // 296
        userId: chat.message.to_userid,                                // 296
        username: chat.message.to_username                             // 296
      });                                                              //
    }                                                                  //
  }                                                                    // 292
  uniqueArray = uniqueArray.filter(function(itm, i, a) {               // 285
    return i === a.indexOf(itm);                                       //
  });                                                                  //
  if (msg.message.to_userid === myUserId) {                            // 303
    new_msg_userid = msg.message.from_userid;                          // 304
  }                                                                    //
  if (msg.message.from_userid === myUserId) {                          // 305
    new_msg_userid = msg.message.to_userid;                            // 306
  }                                                                    //
  chats = getInSession('chats');                                       // 285
  if (chats === void 0) {                                              // 309
    initChats = [                                                      // 310
      {                                                                //
        userId: "PUBLIC_CHAT",                                         // 311
        gotMail: false,                                                // 311
        number: 0                                                      // 311
      }                                                                //
    ];                                                                 //
    setInSession('chats', initChats);                                  // 310
  }                                                                    //
  results = [];                                                        // 318
  for (l = 0, len1 = uniqueArray.length; l < len1; l++) {              //
    u = uniqueArray[l];                                                //
    chats = getInSession('chats');                                     // 319
    if (chats.filter(function(chat) {                                  // 320
      return chat.userId === u.userId;                                 //
    }).length === 0 && u.userId === new_msg_userid) {                  //
      chats.push({                                                     // 321
        userId: u.userId,                                              // 321
        gotMail: false,                                                // 321
        number: 0                                                      // 321
      });                                                              //
      results.push(setInSession('chats', chats));                      // 321
    } else {                                                           //
      results.push(void 0);                                            //
    }                                                                  //
  }                                                                    // 318
  return results;                                                      //
};                                                                     // 284
                                                                       //
this.toggleShield = function() {                                       // 1
  if (parseFloat($('.shield').css('opacity')) === 0.5) {               // 325
    $('.shield').css('opacity', '');                                   // 326
  }                                                                    //
  if (!$('.shield').hasClass('darken') && !$('.shield').hasClass('animatedShield')) {
    return $('.shield').addClass('darken');                            //
  } else {                                                             //
    $('.shield').removeClass('darken');                                // 331
    return $('.shield').removeClass('animatedShield');                 //
  }                                                                    //
};                                                                     // 324
                                                                       //
this.removeFullscreenStyles = function() {                             // 1
  $('#whiteboard-paper').removeClass('vertically-centered');           // 335
  $('#chat').removeClass('invisible');                                 // 335
  $('#users').removeClass('invisible');                                // 335
  $('#navbar').removeClass('invisible');                               // 335
  $('.FABTriggerButton').removeClass('invisible');                     // 335
  $('.fullscreenButton').removeClass('exitFullscreenButton');          // 335
  $('.fullscreenButton').addClass('whiteboardFullscreenButton');       // 335
  $('.fullscreenButton i').removeClass('ion-arrow-shrink');            // 335
  return $('.fullscreenButton i').addClass('ion-arrow-expand');        //
};                                                                     // 334
                                                                       //
this.enterWhiteboardFullscreen = function() {                          // 1
  var element;                                                         // 346
  element = document.getElementById('whiteboard');                     // 346
  if (element.requestFullscreen) {                                     // 347
    element.requestFullscreen();                                       // 348
  } else if (element.mozRequestFullScreen) {                           //
    element.mozRequestFullScreen();                                    // 350
    $('.fullscreenButton').addClass('iconFirefox');                    // 350
  } else if (element.webkitRequestFullscreen) {                        //
    element.webkitRequestFullscreen();                                 // 353
    $('.fullscreenButton').addClass('iconChrome');                     // 353
  } else if (element.msRequestFullscreen) {                            //
    element.msRequestFullscreen();                                     // 356
  }                                                                    //
  $('#chat').addClass('invisible');                                    // 346
  $('#users').addClass('invisible');                                   // 346
  $('#navbar').addClass('invisible');                                  // 346
  $('.FABTriggerButton').addClass('invisible');                        // 346
  $('.fullscreenButton').removeClass('whiteboardFullscreenButton');    // 346
  $('.fullscreenButton').addClass('exitFullscreenButton');             // 346
  $('.fullscreenButton i').removeClass('ion-arrow-expand');            // 346
  $('.fullscreenButton i').addClass('ion-arrow-shrink');               // 346
  $('#whiteboard-paper').addClass('vertically-centered');              // 346
  $('#whiteboard').bind('webkitfullscreenchange', function(e) {        // 346
    if (document.webkitFullscreenElement === null) {                   // 367
      $('#whiteboard').unbind('webkitfullscreenchange');               // 368
      $('.fullscreenButton').removeClass('iconChrome');                // 368
      removeFullscreenStyles();                                        // 368
      return scaleWhiteboard();                                        //
    }                                                                  //
  });                                                                  //
  return $(document).bind('mozfullscreenchange', function(e) {         //
    if (document.mozFullScreenElement === null) {                      // 373
      $(document).unbind('mozfullscreenchange');                       // 374
      $('.fullscreenButton').removeClass('iconFirefox');               // 374
      removeFullscreenStyles();                                        // 374
      return scaleWhiteboard();                                        //
    }                                                                  //
  });                                                                  //
};                                                                     // 345
                                                                       //
this.closeMenus = function() {                                         // 1
  if ($('.userlistMenu').hasClass('menuOut')) {                        // 380
    toggleUserlistMenu();                                              // 381
    return toggleLeftHamburderIcon();                                  //
  } else if ($('.settingsMenu').hasClass('menuOut')) {                 //
    toggleSettingsMenu();                                              // 384
    return toggleRightHamburderIcon();                                 //
  }                                                                    //
};                                                                     // 379
                                                                       //
this.exitVoiceCall = function(event) {                                 // 1
  var checkToHangupCall, hangupCallback;                               // 391
  hangupCallback = function() {                                        // 391
    return console.log("Exiting Voice Conference");                    //
  };                                                                   //
  getInSession("triedHangup", false);                                  // 391
  (checkToHangupCall = function(context) {                             // 391
    if (BBB.getCallStatus() !== null && !getInSession("triedHangup")) {
      console.log("Attempting to hangup on WebRTC call");              // 402
      if (BBB.amIListenOnlyAudio()) {                                  // 403
        Meteor.call('listenOnlyRequestToggle', BBB.getMeetingId(), getInSession("userId"), getInSession("authToken"), false);
      }                                                                //
      BBB.leaveVoiceConference(hangupCallback);                        // 402
      getInSession("triedHangup", true);                               // 402
      return notification_WebRTCAudioExited();                         //
    } else {                                                           //
      console.log("RETRYING hangup on WebRTC call in " + Meteor.config.app.WebRTCHangupRetryInterval + " ms");
      return setTimeout(checkToHangupCall, Meteor.config.app.WebRTCHangupRetryInterval);
    }                                                                  //
  })(this);                                                            //
  return false;                                                        // 412
};                                                                     // 389
                                                                       //
this.joinVoiceCall = function(event, arg) {                            // 1
  var isListenOnly, joinCallback;                                      // 416
  isListenOnly = (arg != null ? arg : {}).isListenOnly;                // 416
  if (!isWebRTCAvailable()) {                                          // 416
    notification_WebRTCNotSupported();                                 // 417
    return;                                                            // 418
  }                                                                    //
  if (isListenOnly == null) {                                          //
    isListenOnly = true;                                               //
  }                                                                    //
  joinCallback = function(message) {                                   // 416
    return console.log("Beginning WebRTC Conference Call");            //
  };                                                                   //
  notification_WebRTCAudioJoining();                                   // 416
  if (isListenOnly) {                                                  // 427
    Meteor.call('listenOnlyRequestToggle', BBB.getMeetingId(), getInSession("userId"), getInSession("authToken"), true);
  }                                                                    //
  BBB.joinVoiceConference(joinCallback, isListenOnly);                 // 416
  return false;                                                        // 431
};                                                                     // 415
                                                                       //
this.userLogout = function(meeting, user) {                            // 1
  Meteor.call("userLogout", meeting, user, getInSession("authToken"));
  console.log("logging out");                                          // 437
  return clearSessionVar(document.location = getInSession('logoutURL'));
};                                                                     // 436
                                                                       //
this.clearSessionVar = function(callback) {                            // 1
  amplify.store('authToken', null);                                    // 443
  amplify.store('bbbServerVersion', null);                             // 443
  amplify.store('chats', null);                                        // 443
  amplify.store('dateOfBuild', null);                                  // 443
  amplify.store('display_chatPane', null);                             // 443
  amplify.store('display_chatbar', null);                              // 443
  amplify.store('display_navbar', null);                               // 443
  amplify.store('display_usersList', null);                            // 443
  amplify.store('display_whiteboard', null);                           // 443
  amplify.store('inChatWith', null);                                   // 443
  amplify.store('logoutURL', null);                                    // 443
  amplify.store('meetingId', null);                                    // 443
  amplify.store('messageFontSize', null);                              // 443
  amplify.store('tabsRenderedTime', null);                             // 443
  amplify.store('userId', null);                                       // 443
  amplify.store('display_menu', null);                                 // 443
  if (callback != null) {                                              // 459
    return callback();                                                 //
  }                                                                    //
};                                                                     // 442
                                                                       //
this.setDefaultSettings = function() {                                 // 1
  var initChats;                                                       // 464
  setInSession("display_navbar", true);                                // 464
  setInSession("display_chatbar", true);                               // 464
  setInSession("display_whiteboard", true);                            // 464
  setInSession("display_chatPane", true);                              // 464
  if (isPortraitMobile() || isLandscapeMobile()) {                     // 470
    setInSession("messageFontSize", Meteor.config.app.mobileFont);     // 471
  } else {                                                             //
    setInSession("messageFontSize", Meteor.config.app.desktopFont);    // 474
  }                                                                    //
  setInSession('display_slidingMenu', false);                          // 464
  setInSession('display_hiddenNavbarSection', false);                  // 464
  if (isLandscape()) {                                                 // 477
    setInSession('display_usersList', true);                           // 478
  } else {                                                             //
    setInSession('display_usersList', false);                          // 480
  }                                                                    //
  setInSession('display_menu', false);                                 // 464
  setInSession('chatInputMinHeight', 0);                               // 464
  if (loginOrRefresh()) {                                              // 486
    initChats = [                                                      // 487
      {                                                                //
        userId: "PUBLIC_CHAT",                                         // 488
        gotMail: false,                                                // 488
        number: 0                                                      // 488
      }                                                                //
    ];                                                                 //
    setInSession('chats', initChats);                                  // 487
    setInSession("inChatWith", 'PUBLIC_CHAT');                         // 487
  }                                                                    //
  return TimeSync.loggingEnabled = false;                              //
};                                                                     // 463
                                                                       //
this.loginOrRefresh = function() {                                     // 1
  var checkId, userId;                                                 // 499
  userId = getInSession('userId');                                     // 499
  checkId = getInSession('checkId');                                   // 499
  if (checkId === void 0) {                                            // 501
    setInSession('checkId', userId);                                   // 502
    return true;                                                       // 503
  } else if (userId !== checkId) {                                     //
    setInSession('checkId', userId);                                   // 505
    return true;                                                       // 506
  } else {                                                             //
    return false;                                                      // 508
  }                                                                    //
};                                                                     // 498
                                                                       //
this.onLoadComplete = function() {                                     // 1
  var ref;                                                             // 511
  document.title = "BigBlueButton " + ((ref = BBB.getMeetingName()) != null ? ref : 'HTML5');
  setDefaultSettings();                                                // 511
  return Meteor.Users.find().observe({                                 //
    removed: function(oldDocument) {                                   // 514
      if (oldDocument.userId === getInSession('userId')) {             // 516
        return document.location = getInSession('logoutURL');          //
      }                                                                //
    }                                                                  //
  });                                                                  //
};                                                                     // 510
                                                                       //
this.isMobile = function() {                                           // 1
  return navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone|iPad|iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) || navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/webOS/i);
};                                                                     // 521
                                                                       //
this.isLandscape = function() {                                        // 1
  return !isMobile() && window.matchMedia('(orientation: landscape)').matches && window.matchMedia('(min-device-aspect-ratio: 1/1)').matches;
};                                                                     // 530
                                                                       //
this.isPortrait = function() {                                         // 1
  return !isMobile() && window.matchMedia('(orientation: portrait)').matches && window.matchMedia('(min-device-aspect-ratio: 1/1)').matches;
};                                                                     // 535
                                                                       //
this.isPortraitMobile = function() {                                   // 1
  return isMobile() && window.matchMedia('(orientation: portrait)').matches && window.matchMedia('(max-device-aspect-ratio: 1/1)').matches;
};                                                                     // 541
                                                                       //
this.isLandscapeMobile = function() {                                  // 1
  return isMobile() && window.matchMedia('(orientation: landscape)').matches && window.matchMedia('(min-device-aspect-ratio: 1/1)').matches;
};                                                                     // 547
                                                                       //
this.isLandscapePhone = function() {                                   // 1
  return window.matchMedia('(orientation: landscape)').matches && window.matchMedia('(min-device-aspect-ratio: 1/1)').matches && window.matchMedia('(max-device-width: 959px)').matches;
};                                                                     // 552
                                                                       //
this.isPortraitPhone = function() {                                    // 1
  return (window.matchMedia('(orientation: portrait)').matches && window.matchMedia('(max-device-aspect-ratio: 1/1)').matches && window.matchMedia('(max-device-width: 480px)').matches) || (window.matchMedia('(orientation: landscape)').matches && window.matchMedia('(max-device-aspect-ratio: 1/1)').matches && window.matchMedia('(max-device-width: 480px)').matches);
};                                                                     // 558
                                                                       //
this.isPhone = function() {                                            // 1
  return isLandscapePhone() || isPortraitPhone();                      //
};                                                                     // 568
                                                                       //
this.orientationBecameLandscape = function() {                         // 1
  return adjustChatInputHeight();                                      //
};                                                                     // 572
                                                                       //
this.orientationBecamePortrait = function() {                          // 1
  return adjustChatInputHeight();                                      //
};                                                                     // 575
                                                                       //
this.isOnlyOnePanelOpen = function() {                                 // 1
  return getInSession("display_usersList") + getInSession("display_whiteboard") + getInSession("display_chatbar") === 1;
};                                                                     // 578
                                                                       //
this.getBrowserName = function() {                                     // 1
  if (navigator.userAgent.match(/Chrome/i)) {                          // 584
    return 'Chrome';                                                   // 585
  } else if (navigator.userAgent.match(/Firefox/i)) {                  //
    return 'Firefox';                                                  // 587
  } else if (navigator.userAgent.match(/Safari/i)) {                   //
    return 'Safari';                                                   // 589
  } else if (navigator.userAgent.match(/Trident/i)) {                  //
    return 'IE';                                                       // 591
  } else {                                                             //
    return null;                                                       // 593
  }                                                                    //
};                                                                     // 583
                                                                       //
this.scrollChatDown = function() {                                     // 1
  var ref;                                                             // 596
  return $('#chatbody').scrollTop((ref = $('#chatbody')[0]) != null ? ref.scrollHeight : void 0);
};                                                                     // 595
                                                                       //
this.adjustChatInputHeight = function() {                              // 1
  var projectedHeight, ref;                                            // 600
  if (isLandscape()) {                                                 // 600
    $('#newMessageInput').css('height', 'auto');                       // 601
    projectedHeight = $('#newMessageInput')[0].scrollHeight + 23;      // 601
    if (projectedHeight !== $('.panel-footer').height() && projectedHeight >= getInSession('chatInputMinHeight')) {
      $('#newMessageInput').css('overflow', 'hidden');                 // 605
      $('.panel-footer').css('top', -(projectedHeight - 70) + 'px');   // 605
      $('.panel-footer').css('height', projectedHeight + 'px');        // 605
      $('#newMessageInput').height($('#newMessageInput')[0].scrollHeight);
      $('#chatbody').height($('#chat').height() - projectedHeight - 45);
      $('#chatbody').scrollTop((ref = $('#chatbody')[0]) != null ? ref.scrollHeight : void 0);
    }                                                                  //
    return $('#newMessageInput').css('height', '');                    //
  } else if (isPortrait()) {                                           //
    $('.panel-footer').attr('style', '');                              // 618
    $('#chatbody').attr('style', '');                                  // 618
    return $('#newMessageInput').attr('style', '');                    //
  }                                                                    //
};                                                                     // 599
                                                                       //
this.toggleEmojisFAB = function() {                                    // 1
  if ($('.FABContainer').hasClass('openedFAB')) {                      // 623
    $('.FABContainer > button:nth-child(2)').css('opacity', $('.FABContainer > button:nth-child(2)').css('opacity'));
    $('.FABContainer > button:nth-child(3)').css('opacity', $('.FABContainer > button:nth-child(3)').css('opacity'));
    $('.FABContainer > button:nth-child(4)').css('opacity', $('.FABContainer > button:nth-child(4)').css('opacity'));
    $('.FABContainer > button:nth-child(5)').css('opacity', $('.FABContainer > button:nth-child(5)').css('opacity'));
    $('.FABContainer > button:nth-child(6)').css('opacity', $('.FABContainer > button:nth-child(6)').css('opacity'));
    $('.FABContainer > button:nth-child(7)').css('opacity', $('.FABContainer > button:nth-child(7)').css('opacity'));
    $('.FABContainer').removeClass('openedFAB');                       // 624
    return $('.FABContainer').addClass('closedFAB');                   //
  } else {                                                             //
    $('.FABContainer > button:nth-child(2)').css('opacity', $('.FABContainer > button:nth-child(2)').css('opacity'));
    $('.FABContainer > button:nth-child(3)').css('opacity', $('.FABContainer > button:nth-child(3)').css('opacity'));
    $('.FABContainer > button:nth-child(4)').css('opacity', $('.FABContainer > button:nth-child(4)').css('opacity'));
    $('.FABContainer > button:nth-child(5)').css('opacity', $('.FABContainer > button:nth-child(5)').css('opacity'));
    $('.FABContainer > button:nth-child(6)').css('opacity', $('.FABContainer > button:nth-child(6)').css('opacity'));
    $('.FABContainer > button:nth-child(7)').css('opacity', $('.FABContainer > button:nth-child(7)').css('opacity'));
    $('.FABContainer').removeClass('closedFAB');                       // 633
    return $('.FABContainer').addClass('openedFAB');                   //
  }                                                                    //
};                                                                     // 622
                                                                       //
this.toggleLeftHamburderIcon = function() {                            // 1
  if ($('.leftHamburgerButton').hasClass('hamburgerToggledOn')) {      // 643
    return $('.leftHamburgerButton').removeClass('hamburgerToggledOn');
  } else {                                                             //
    return $('.leftHamburgerButton').addClass('hamburgerToggledOn');   //
  }                                                                    //
};                                                                     // 642
                                                                       //
this.toggleRightHamburderIcon = function() {                           // 1
  if ($('.rightHamburgerButton').hasClass('hamburgerToggledOn')) {     // 649
    return $('.rightHamburgerButton').removeClass('hamburgerToggledOn');
  } else {                                                             //
    return $('.rightHamburgerButton').addClass('hamburgerToggledOn');  //
  }                                                                    //
};                                                                     // 648
                                                                       //
this.toggleUserlistMenu = function() {                                 // 1
  if ($('.userlistMenu').hasClass('menuOut')) {                        // 655
    return $('.userlistMenu').removeClass('menuOut');                  //
  } else {                                                             //
    return $('.userlistMenu').addClass('menuOut');                     //
  }                                                                    //
};                                                                     // 654
                                                                       //
this.toggleSettingsMenu = function() {                                 // 1
  if ($('.settingsMenu').hasClass('menuOut')) {                        // 661
    return $('.settingsMenu').removeClass('menuOut');                  //
  } else {                                                             //
    return $('.settingsMenu').addClass('menuOut');                     //
  }                                                                    //
};                                                                     // 660
                                                                       //
/////////////////////////////////////////////////////////////////////////

}).call(this);
