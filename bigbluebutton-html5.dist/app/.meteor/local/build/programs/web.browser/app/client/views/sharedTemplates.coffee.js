(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/views/sharedTemplates.coffee.js                              //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Template.makeButton.helpers({                                          // 1
  hasGotUnreadMail: function(userId) {                                 // 2
    var chats, i, j, len, len1, tabs;                                  // 3
    chats = getInSession('chats');                                     // 3
    if (chats !== void 0) {                                            // 4
      if (userId === "all_chats") {                                    // 5
        for (i = 0, len = chats.length; i < len; i++) {                // 6
          tabs = chats[i];                                             //
          if (tabs.gotMail === true) {                                 // 7
            return true;                                               // 8
          }                                                            //
        }                                                              // 6
      } else if (userId === "PUBLIC_CHAT") {                           //
        for (j = 0, len1 = chats.length; j < len1; j++) {              // 10
          tabs = chats[j];                                             //
          if (tabs.userId === userId && tabs.gotMail === true) {       // 11
            return true;                                               // 12
          }                                                            //
        }                                                              // 10
      }                                                                //
    }                                                                  //
    return false;                                                      // 13
  },                                                                   //
  getNumberOfUnreadMessages: function(userId) {                        // 2
    var chat, chats, i, len;                                           // 16
    if (userId === "all_chats") {                                      // 16
      return;                                                          // 17
    } else {                                                           //
      chats = getInSession('chats');                                   // 19
      if (chats !== void 0) {                                          // 20
        for (i = 0, len = chats.length; i < len; i++) {                // 21
          chat = chats[i];                                             //
          if (chat.userId === userId && chat.gotMail) {                // 22
            if (chat.number > 9) {                                     // 23
              return "9+";                                             // 24
            } else {                                                   //
              return chat.number;                                      // 26
            }                                                          //
          }                                                            //
        }                                                              // 21
      }                                                                //
    }                                                                  //
  },                                                                   //
  getNotificationClass: function(userId) {                             // 2
    if (userId === "all_chats") {                                      // 30
      return "unreadChat";                                             // 31
    }                                                                  //
    if (userId === "PUBLIC_CHAT") {                                    // 32
      return "unreadChatNumber";                                       // 33
    }                                                                  //
  }                                                                    //
});                                                                    //
                                                                       //
/////////////////////////////////////////////////////////////////////////

}).call(this);
