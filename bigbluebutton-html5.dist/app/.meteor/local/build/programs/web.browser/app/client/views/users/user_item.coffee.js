(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/views/users/user_item.coffee.js                              //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Template.displayUserIcons.events({                                     // 1
  'click .muteIcon': function(event) {                                 // 2
    return toggleMic(this);                                            //
  },                                                                   //
  'click .raisedHandIcon': function(event) {                           // 2
    return BBB.lowerHand(getInSession("meetingId"), this.userId, getInSession("userId"), getInSession("authToken"));
  }                                                                    //
});                                                                    //
                                                                       //
Template.displayUserIcons.helpers({                                    // 1
  userLockedIconApplicable: function(userId) {                         // 13
    var lockInAction, locked, ref, ref1, settings;                     // 16
    locked = (ref = BBB.getUser(userId)) != null ? ref.user.locked : void 0;
    settings = (ref1 = Meteor.Meetings.findOne()) != null ? ref1.roomLockSettings : void 0;
    lockInAction = settings.disablePrivateChat || settings.disableCam || settings.disableMic || settings.lockedLayout || settings.disablePublicChat;
    return locked && lockInAction;                                     // 23
  }                                                                    //
});                                                                    //
                                                                       //
Template.usernameEntry.events({                                        // 1
  'click .usernameEntry': function(event) {                            // 27
    var ref, userIdSelected;                                           // 28
    userIdSelected = this.userId;                                      // 28
    if (userIdSelected !== null) {                                     // 29
      if (userIdSelected === ((ref = BBB.getCurrentUser()) != null ? ref.userId : void 0)) {
        setInSession("inChatWith", "PUBLIC_CHAT");                     // 31
      } else {                                                         //
        setInSession("inChatWith", userIdSelected);                    // 33
      }                                                                //
    }                                                                  //
    if (isPortrait() || isPortraitMobile()) {                          // 34
      toggleUserlistMenu();                                            // 35
      toggleLeftHamburderIcon();                                       // 35
      toggleShield();                                                  // 35
    }                                                                  //
    return setTimeout(function() {                                     //
      return $("#newMessageInput").focus();                            //
    }, 0);                                                             //
  },                                                                   //
  'click .gotUnreadMail': function(event) {                            // 27
    var _id, _this, chat, chats, currentId, i, len;                    // 43
    _this = this;                                                      // 43
    currentId = getInSession('userId');                                // 43
    if (currentId !== void 0 && currentId === _this.userId) {          // 45
      _id = "PUBLIC_CHAT";                                             // 46
    } else {                                                           //
      _id = _this.userId;                                              // 48
    }                                                                  //
    chats = getInSession('chats');                                     // 43
    if (chats !== void 0) {                                            // 50
      for (i = 0, len = chats.length; i < len; i++) {                  // 51
        chat = chats[i];                                               //
        if (chat.userId === _id) {                                     // 52
          chat.gotMail = false;                                        // 53
          chat.number = 0;                                             // 53
          break;                                                       // 55
        }                                                              //
      }                                                                // 51
      return setInSession('chats', chats);                             //
    }                                                                  //
  }                                                                    //
});                                                                    //
                                                                       //
Template.usernameEntry.helpers({                                       // 1
  hasGotUnreadMailClass: function(userId) {                            // 59
    var chat, chats, i, len;                                           // 60
    chats = getInSession('chats');                                     // 60
    if (chats !== void 0) {                                            // 61
      for (i = 0, len = chats.length; i < len; i++) {                  // 62
        chat = chats[i];                                               //
        if (chat.userId === userId && chat.gotMail) {                  // 63
          return true;                                                 // 64
        }                                                              //
      }                                                                // 62
    }                                                                  //
    return false;                                                      // 65
  },                                                                   //
  getNumberOfUnreadMessages: function(userId) {                        // 59
    var chat, chats, i, len;                                           // 68
    chats = getInSession('chats');                                     // 68
    if (chats !== void 0) {                                            // 69
      for (i = 0, len = chats.length; i < len; i++) {                  // 70
        chat = chats[i];                                               //
        if (chat.userId === userId && chat.gotMail) {                  // 71
          if (chat.number > 9) {                                       // 72
            return "9+";                                               // 73
          } else {                                                     //
            return chat.number;                                        // 75
          }                                                            //
        }                                                              //
      }                                                                // 70
    }                                                                  //
  }                                                                    //
});                                                                    //
                                                                       //
/////////////////////////////////////////////////////////////////////////

}).call(this);
