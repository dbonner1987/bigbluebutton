(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/redispubsub.coffee.js                                        //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };
                                                                       //
Meteor.methods({                                                       // 1
  validateAuthToken: function(meetingId, userId, authToken) {          // 3
    var message;                                                       // 4
    Meteor.log.info("sending a validate_auth_token with", {            // 4
      userid: userId,                                                  // 5
      authToken: authToken,                                            // 5
      meetingid: meetingId                                             // 5
    });                                                                //
    message = {                                                        // 4
      "payload": {                                                     // 10
        "auth_token": authToken,                                       // 11
        "userid": userId,                                              // 11
        "meeting_id": meetingId                                        // 11
      },                                                               //
      "header": {                                                      // 10
        "timestamp": new Date().getTime(),                             // 15
        "reply_to": meetingId + "/" + userId,                          // 15
        "name": "validate_auth_token"                                  // 15
      }                                                                //
    };                                                                 //
    if ((authToken != null) && (userId != null) && (meetingId != null)) {
      createDummyUser(meetingId, userId, authToken);                   // 20
      return publish(Meteor.config.redis.channels.toBBBApps.meeting, message);
    } else {                                                           //
      return Meteor.log.info("did not have enough information to send a validate_auth_token message");
    }                                                                  //
  }                                                                    //
});                                                                    //
                                                                       //
Meteor.RedisPubSub = (function() {                                     // 1
  function RedisPubSub(callback) {                                     // 27
    this._addToQueue = bind(this._addToQueue, this);                   // 28
    this._onSubscribe = bind(this._onSubscribe, this);                 // 28
    Meteor.log.info("constructor RedisPubSub");                        // 28
    this.pubClient = redis.createClient();                             // 28
    this.subClient = redis.createClient();                             // 28
    Meteor.log.info("Subscribing message on channel: " + Meteor.config.redis.channels.fromBBBApps);
    this.subClient.on("psubscribe", Meteor.bindEnvironment(this._onSubscribe));
    this.subClient.on("pmessage", Meteor.bindEnvironment(this._addToQueue));
    this.subClient.psubscribe(Meteor.config.redis.channels.fromBBBApps);
    callback(this);                                                    // 28
  }                                                                    //
                                                                       //
  RedisPubSub.prototype._onSubscribe = function(channel, count) {      // 27
    var message;                                                       // 43
    Meteor.log.info("Subscribed to " + channel);                       // 43
    message = {                                                        // 43
      "header": {                                                      // 47
        "name": "get_all_meetings_request"                             // 48
      },                                                               //
      "payload": {}                                                    // 47
    };                                                                 //
    return publish(Meteor.config.redis.channels.toBBBApps.meeting, message);
  };                                                                   //
                                                                       //
  RedisPubSub.prototype._addToQueue = function(pattern, channel, jsonMsg) {
    var eventName, message, messagesWeIgnore;                          // 54
    message = JSON.parse(jsonMsg);                                     // 54
    eventName = message.header.name;                                   // 54
    messagesWeIgnore = ["BbbPubSubPongMessage", "bbb_apps_is_alive_message", "broadcast_layout_message"];
    if (indexOf.call(messagesWeIgnore, eventName) < 0) {               // 63
      console.log("Q " + eventName + " " + (Meteor.myQueue.total()));  // 64
      return Meteor.myQueue.add({                                      //
        pattern: pattern,                                              // 65
        channel: channel,                                              // 65
        jsonMsg: jsonMsg                                               // 65
      });                                                              //
    }                                                                  //
  };                                                                   //
                                                                       //
  return RedisPubSub;                                                  //
                                                                       //
})();                                                                  //
                                                                       //
this.publish = function(channel, message) {                            // 1
  Meteor.log.info("redis outgoing message  " + message.header.name, {  // 77
    channel: channel,                                                  // 78
    message: message                                                   // 78
  });                                                                  //
  if (Meteor.redisPubSub != null) {                                    // 81
    return Meteor.redisPubSub.pubClient.publish(channel, JSON.stringify(message), function(err, res) {
      if (err) {                                                       // 83
        return Meteor.log.info("error", {                              //
          error: err                                                   // 85
        });                                                            //
      }                                                                //
    });                                                                //
  } else {                                                             //
    return Meteor.log.info("ERROR!! Meteor.redisPubSub was undefined");
  }                                                                    //
};                                                                     // 76
                                                                       //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=redispubsub.coffee.js.map
