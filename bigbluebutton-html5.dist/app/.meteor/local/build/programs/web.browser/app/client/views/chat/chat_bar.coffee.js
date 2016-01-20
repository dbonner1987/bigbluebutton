(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/views/chat/chat_bar.coffee.js                                //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
this.activateBreakLines = function(str) {                              // 9
  var res;                                                             // 10
  if (typeof str === 'string') {                                       // 10
    res = str.replace(new RegExp(CARRIAGE_RETURN, 'g'), BREAK_LINE);   // 12
    return res;                                                        //
  }                                                                    //
};                                                                     // 9
                                                                       //
this.detectUnreadChat = function() {                                   // 9
  return Meteor.Chat.find({}).observe({                                //
    added: (function(_this) {                                          // 17
      return function(chatMessage) {                                   //
        var findDestinationTab;                                        // 19
        findDestinationTab = function() {                              // 19
          var ref, ref1;                                               // 20
          if (((ref = chatMessage.message) != null ? ref.chat_type : void 0) === "PUBLIC_CHAT") {
            return "PUBLIC_CHAT";                                      //
          } else {                                                     //
            return (ref1 = chatMessage.message) != null ? ref1.from_userid : void 0;
          }                                                            //
        };                                                             //
        return Tracker.autorun(function(comp) {                        //
          var destinationTab, tabsTime;                                // 25
          tabsTime = getInSession('userListRenderedTime');             // 25
          if ((tabsTime != null) && chatMessage.message.from_userid !== "SYSTEM_MESSAGE" && chatMessage.message.from_time - tabsTime > 0) {
            populateNotifications(chatMessage);                        // 27
            destinationTab = findDestinationTab();                     // 27
            if (destinationTab !== getInSession("inChatWith")) {       // 29
              setInSession('chats', getInSession('chats').map(function(tab) {
                if (tab.userId === destinationTab) {                   // 31
                  tab.gotMail = true;                                  // 32
                  tab.number++;                                        // 32
                }                                                      //
                return tab;                                            //
              }));                                                     //
            }                                                          //
          }                                                            //
          return comp.stop();                                          //
        });                                                            //
      };                                                               //
    })(this)                                                           //
  });                                                                  //
};                                                                     // 15
                                                                       //
this.getFormattedMessagesForChat = function() {                        // 9
  var chattingWith;                                                    // 42
  chattingWith = getInSession('inChatWith');                           // 42
  if (chattingWith === 'PUBLIC_CHAT') {                                // 43
    return Meteor.Chat.find({                                          // 44
      'message.chat_type': {                                           // 44
        $in: ["SYSTEM_MESSAGE", "PUBLIC_CHAT"]                         // 44
      }                                                                //
    }, {                                                               //
      sort: {                                                          // 44
        'message.from_time': 1                                         // 44
      }                                                                //
    }).fetch();                                                        //
  } else {                                                             //
    return Meteor.Chat.find({                                          // 46
      'message.chat_type': 'PRIVATE_CHAT',                             // 46
      $or: [                                                           // 46
        {                                                              //
          'message.to_userid': chattingWith                            // 46
        }, {                                                           //
          'message.from_userid': chattingWith                          // 46
        }                                                              //
      ]                                                                //
    }).fetch();                                                        //
  }                                                                    //
};                                                                     // 41
                                                                       //
Handlebars.registerHelper("autoscroll", function() {                   // 9
  var ref;                                                             // 50
  $('#chatbody').scrollTop((ref = $('#chatbody')[0]) != null ? ref.scrollHeight : void 0);
  return false;                                                        //
});                                                                    // 49
                                                                       //
Handlebars.registerHelper("publicChatDisabled", function() {           // 9
  var presenter, publicChatIsDisabled, ref, ref1, ref2, userIsLocked;  // 55
  userIsLocked = (ref = Meteor.Users.findOne({                         // 55
    userId: getInSession('userId')                                     //
  })) != null ? ref.user.locked : void 0;                              //
  publicChatIsDisabled = (ref1 = Meteor.Meetings.findOne({})) != null ? ref1.roomLockSettings.disablePublicChat : void 0;
  presenter = (ref2 = Meteor.Users.findOne({                           // 55
    userId: getInSession('userId')                                     //
  })) != null ? ref2.user.presenter : void 0;                          //
  return userIsLocked && publicChatIsDisabled && !presenter;           // 58
});                                                                    // 54
                                                                       //
Handlebars.registerHelper("privateChatDisabled", function() {          // 9
  var presenter, privateChatIsDisabled, ref, ref1, ref2, userIsLocked;
  userIsLocked = (ref = Meteor.Users.findOne({                         // 62
    userId: getInSession('userId')                                     //
  })) != null ? ref.user.locked : void 0;                              //
  privateChatIsDisabled = (ref1 = Meteor.Meetings.findOne({})) != null ? ref1.roomLockSettings.disablePrivateChat : void 0;
  presenter = (ref2 = Meteor.Users.findOne({                           // 62
    userId: getInSession('userId')                                     //
  })) != null ? ref2.user.presenter : void 0;                          //
  return userIsLocked && privateChatIsDisabled && !presenter;          // 65
});                                                                    // 61
                                                                       //
Handlebars.registerHelper("inPrivateChat", function() {                // 9
  return (getInSession('inChatWith')) !== 'PUBLIC_CHAT';               // 69
});                                                                    // 68
                                                                       //
this.sendMessage = function() {                                        // 9
  var chattingWith, color, message, ref, toUsername;                   // 72
  message = linkify($('#newMessageInput').val());                      // 72
  if (!((message != null ? message.length : void 0) > 0 && (/\S/.test(message)))) {
    return;                                                            // 74
  }                                                                    //
  color = "0x000000";                                                  // 72
  if ((chattingWith = getInSession('inChatWith')) !== "PUBLIC_CHAT") {
    toUsername = (ref = Meteor.Users.findOne({                         // 78
      userId: chattingWith                                             //
    })) != null ? ref.user.name : void 0;                              //
    BBB.sendPrivateChatMessage(color, "en", message, chattingWith, toUsername);
  } else {                                                             //
    BBB.sendPublicChatMessage(color, "en", message);                   // 81
  }                                                                    //
  return $('#newMessageInput').val('');                                //
};                                                                     // 71
                                                                       //
Template.chatbar.helpers({                                             // 9
  getCombinedMessagesForChat: function() {                             // 86
    var deleted, i, j, len, msgs;                                      // 87
    msgs = getFormattedMessagesForChat();                              // 87
    len = msgs != null ? msgs.length : void 0;                         // 87
    i = 0;                                                             // 87
    while (i < len) {                                                  // 90
      if (msgs[i].message.from_userid !== 'System') {                  // 91
        j = i + 1;                                                     // 92
        while (j < len) {                                              // 94
          deleted = false;                                             // 95
          if (msgs[j].message.from_userid !== 'System') {              // 96
            if ((parseFloat(msgs[j].message.from_time) - parseFloat(msgs[i].message.from_time)) >= 60000) {
              break;                                                   // 99
            }                                                          //
            if (msgs[i].message.from_userid === msgs[j].message.from_userid) {
              msgs[i].message.message += "" + CARRIAGE_RETURN + msgs[j].message.message;
              msgs.splice(j, 1);                                       // 103
              deleted = true;                                          // 103
            } else {                                                   //
              break;                                                   // 106
            }                                                          //
          } else {                                                     //
            break;                                                     // 108
          }                                                            //
          len = msgs.length;                                           // 95
          if (!deleted) {                                              // 111
            ++j;                                                       // 111
          }                                                            //
        }                                                              //
      }                                                                //
      ++i;                                                             // 91
      len = msgs.length;                                               // 91
    }                                                                  //
    return msgs;                                                       //
  },                                                                   //
  userExists: function() {                                             // 86
    if (getInSession('inChatWith') === "PUBLIC_CHAT") {                // 119
      return true;                                                     // 120
    } else {                                                           //
      return Meteor.Users.findOne({                                    // 122
        userId: getInSession('inChatWith')                             //
      }) != null;                                                      //
    }                                                                  //
  }                                                                    //
});                                                                    //
                                                                       //
Template.chatbar.rendered = function() {                               // 9
  return detectUnreadChat();                                           //
};                                                                     // 125
                                                                       //
Template.chatbar.events({                                              // 9
  'click .toPublic': function(event) {                                 // 130
    setInSession('inChatWith', 'PUBLIC_CHAT');                         // 131
    return setInSession('chats', getInSession('chats').map(function(chat) {
      if (chat.userId === "PUBLIC_CHAT") {                             // 133
        chat.gotMail = false;                                          // 134
        chat.number = 0;                                               // 134
      }                                                                //
      return chat;                                                     //
    }));                                                               //
  }                                                                    //
});                                                                    //
                                                                       //
Template.privateChatTab.rendered = function() {                        // 9
  if (isLandscape() || isPortrait()) {                                 // 140
    return $("#newMessageInput").focus();                              //
  }                                                                    //
};                                                                     // 139
                                                                       //
Template.message.rendered = function() {                               // 9
  var ref;                                                             // 145
  $('#chatbody').scrollTop((ref = $('#chatbody')[0]) != null ? ref.scrollHeight : void 0);
  return false;                                                        //
};                                                                     // 144
                                                                       //
Template.chatInput.rendered = function() {                             // 9
  return $('.panel-footer').resizable({                                //
    handles: 'n',                                                      // 150
    minHeight: 70,                                                     // 150
    resize: function(event, ui) {                                      // 150
      var ref;                                                         // 153
      if ($('.panel-footer').css('top') === '0px') {                   // 153
        $('.panel-footer').height(70);                                 // 154
      } else {                                                         //
        $('.panel-footer').css('top', parseInt($('.panel-footer').css('top')) + 1 + 'px');
      }                                                                //
      $('#chatbody').height($('#chat').height() - $('.panel-footer').height() - 45);
      return $('#chatbody').scrollTop((ref = $('#chatbody')[0]) != null ? ref.scrollHeight : void 0);
    },                                                                 //
    start: function(event, ui) {                                       // 150
      $('#newMessageInput').css('overflow', '');                       // 160
      return $('.panel-footer').resizable('option', 'maxHeight', Math.max($('.panel-footer').height(), $('#chat').height() / 2));
    },                                                                 //
    stop: function(event, ui) {                                        // 150
      return setInSession('chatInputMinHeight', $('.panel-footer').height() + 1);
    }                                                                  //
  });                                                                  //
};                                                                     // 148
                                                                       //
Template.chatInput.events({                                            // 9
  'click #sendMessageButton': function(event) {                        // 166
    $('#sendMessageButton').blur();                                    // 167
    sendMessage();                                                     // 167
    return adjustChatInputHeight();                                    //
  },                                                                   //
  'keypress #newMessageInput': function(event) {                       // 166
    var key;                                                           // 172
    key = (event.charCode ? event.charCode : (event.keyCode ? event.keyCode : 0));
    if (event.shiftKey && (key === 13)) {                              // 174
      event.preventDefault();                                          // 175
      document.getElementById("newMessageInput").value += CARRIAGE_RETURN;
      return;                                                          // 178
    }                                                                  //
    if (key === 13) {                                                  // 180
      event.preventDefault();                                          // 181
      sendMessage();                                                   // 181
      $('#newMessageInput').val("");                                   // 181
      return false;                                                    // 184
    }                                                                  //
  }                                                                    //
});                                                                    //
                                                                       //
Template.chatInputControls.rendered = function() {                     // 9
  return $('#newMessageInput').on('keydown paste cut', function() {    //
    return setTimeout(function() {                                     //
      return adjustChatInputHeight();                                  //
    }, 0);                                                             //
  });                                                                  //
};                                                                     // 186
                                                                       //
Template.message.helpers({                                             // 9
  sanitizeAndFormat: function(str) {                                   // 192
    var res;                                                           // 193
    if (typeof str === 'string') {                                     // 193
      res = str.replace(/&/g, '&amp;').replace(/<(?![au\/])/g, '&lt;').replace(/\/([^au])>/g, '$1&gt;').replace(/([^=])"(?!>)/g, '$1&quot;');
      res = toClickable(res);                                          // 195
      return res = activateBreakLines(res);                            //
    }                                                                  //
  },                                                                   //
  toClockTime: function(epochTime) {                                   // 192
    var dateObj, hours, local, minutes, offset;                        // 200
    if (epochTime === null) {                                          // 200
      return "";                                                       // 201
    }                                                                  //
    local = new Date();                                                // 200
    offset = local.getTimezoneOffset();                                // 200
    epochTime = epochTime - offset * 60000;                            // 200
    dateObj = new Date(epochTime);                                     // 200
    hours = dateObj.getUTCHours();                                     // 200
    minutes = dateObj.getUTCMinutes();                                 // 200
    if (minutes < 10) {                                                // 208
      minutes = "0" + minutes;                                         // 209
    }                                                                  //
    return hours + ":" + minutes;                                      //
  }                                                                    //
});                                                                    //
                                                                       //
this.toClickable = function(str) {                                     // 9
  var res;                                                             // 214
  if (typeof str === 'string') {                                       // 214
    res = str.replace(/<a href='event:/gim, "<a target='_blank' href='");
    return res = res.replace(/<a href="event:/gim, '<a target="_blank" href="');
  }                                                                    //
};                                                                     // 213
                                                                       //
/////////////////////////////////////////////////////////////////////////

}).call(this);
