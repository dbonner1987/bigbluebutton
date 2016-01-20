(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/collection_methods/chat.coffee.js                            //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.methods({                                                       // 1
  sendChatMessagetoServer: function(meetingId, chatObject, requesterUserId, requesterToken) {
    var action, chatType, eventName, message, recipient;               // 7
    chatType = chatObject.chat_type;                                   // 7
    recipient = chatObject.to_userid;                                  // 7
    eventName = null;                                                  // 7
    action = function() {                                              // 7
      if (chatType === "PUBLIC_CHAT") {                                // 11
        eventName = "send_public_chat_message";                        // 12
        return 'chatPublic';                                           // 13
      } else {                                                         //
        eventName = "send_private_chat_message";                       // 15
        if (recipient === requesterUserId) {                           // 16
          return 'chatSelf';                                           // 17
        } else {                                                       //
          return 'chatPrivate';                                        // 19
        }                                                              //
      }                                                                //
    };                                                                 //
    if (isAllowedTo(action(), meetingId, requesterUserId, requesterToken) && chatObject.from_userid === requesterUserId) {
      chatObject.message = translateHTML5ToFlash(chatObject.message);  // 22
      message = {                                                      // 22
        header: {                                                      // 24
          timestamp: new Date().getTime(),                             // 25
          name: eventName                                              // 25
        },                                                             //
        payload: {                                                     // 24
          message: chatObject,                                         // 28
          meeting_id: meetingId,                                       // 28
          requester_id: chatObject.from_userid                         // 28
        }                                                              //
      };                                                               //
      Meteor.log.info("publishing chat to redis");                     // 22
      publish(Meteor.config.redis.channels.toBBBApps.chat, message);   // 22
    }                                                                  //
  },                                                                   //
  deletePrivateChatMessages: function(userId, contact_id) {            // 6
    var contact, requester;                                            // 38
    requester = Meteor.Users.findOne({                                 // 38
      userId: userId                                                   // 38
    });                                                                //
    contact = Meteor.Users.findOne({                                   // 38
      _id: contact_id                                                  // 39
    });                                                                //
    return deletePrivateChatMessages(requester.userId, contact.userId);
  }                                                                    //
});                                                                    //
                                                                       //
this.addChatToCollection = function(meetingId, messageObject) {        // 1
  var id;                                                              // 47
  messageObject.from_time = messageObject.from_time.toString().split('.').join("").split("E")[0];
  if ((messageObject.from_userid != null) && (messageObject.to_userid != null)) {
    messageObject.message = translateFlashToHTML5(messageObject.message);
    return id = Meteor.Chat.upsert({                                   //
      meetingId: meetingId,                                            // 52
      'message.message': messageObject.message,                        // 52
      'message.from_time': messageObject.from_time,                    // 52
      'message.from_userid': messageObject.from_userid                 // 52
    }, {                                                               //
      meetingId: meetingId,                                            // 57
      message: {                                                       // 57
        chat_type: messageObject.chat_type,                            // 60
        message: messageObject.message,                                // 60
        to_username: messageObject.to_username,                        // 60
        from_tz_offset: messageObject.from_tz_offset,                  // 60
        from_color: messageObject.from_color,                          // 60
        to_userid: messageObject.to_userid,                            // 60
        from_userid: messageObject.from_userid,                        // 60
        from_time: messageObject.from_time,                            // 60
        from_username: messageObject.from_username,                    // 60
        from_lang: messageObject.from_lang                             // 60
      }                                                                //
    }, function(err, numChanged) {                                     //
      if (err != null) {                                               // 71
        Meteor.log.error("_error " + err + " when adding chat to collection");
      }                                                                //
      if (numChanged.insertedId != null) {                             // 73
        return Meteor.log.info("_added chat id=[" + numChanged.insertedId + "] " + messageObject.from_username + " to " + (messageObject.to_username != null ? 'PUBLIC' : void 0) + ":" + messageObject.message);
      }                                                                //
    });                                                                //
  }                                                                    //
};                                                                     // 44
                                                                       //
this.clearChatCollection = function(meetingId) {                       // 1
  if (meetingId != null) {                                             // 79
    return Meteor.Chat.remove({                                        //
      meetingId: meetingId                                             // 80
    }, Meteor.log.info("cleared Chat Collection (meetingId: " + meetingId + "!"));
  } else {                                                             //
    return Meteor.Chat.remove({}, Meteor.log.info("cleared Chat Collection (all meetings)!"));
  }                                                                    //
};                                                                     // 78
                                                                       //
this.translateHTML5ToFlash = function(message) {                       // 1
  var result;                                                          // 90
  result = message;                                                    // 90
  result = result.replace(new RegExp(CARRIAGE_RETURN, 'g'), BREAK_LINE);
  result = result.replace(new RegExp(NEW_LINE, 'g'), BREAK_LINE);      // 90
  return result;                                                       //
};                                                                     // 89
                                                                       //
this.translateFlashToHTML5 = function(message) {                       // 1
  var result;                                                          // 97
  result = message;                                                    // 97
  result = result.replace(new RegExp(BREAK_LINE, 'g'), CARRIAGE_RETURN);
  return result;                                                       //
};                                                                     // 96
                                                                       //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=chat.coffee.js.map
