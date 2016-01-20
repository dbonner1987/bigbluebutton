(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// config.coffee.js                                                    //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var config, file, ref, transports, winston;                            // 4
                                                                       //
config = {};                                                           // 4
                                                                       //
config.appName = 'BigBlueButton HTML5 Client';                         // 4
                                                                       //
config.bbbServerVersion = '1.0-beta';                                  // 4
                                                                       //
config.copyrightYear = '2015';                                         // 4
                                                                       //
config.html5ClientBuild = 'NNNN';                                      // 4
                                                                       //
config.defaultWelcomeMessage = 'Welcome to %%CONFNAME%%!\r\rFor help on using BigBlueButton see these (short) <a href="event:http://www.bigbluebutton.org/content/videos"><u>tutorial videos</u></a>.\r\rTo join the audio bridge click the gear icon (upper-right hand corner).  Use a headset to avoid causing background noise for others.\r\r\r';
                                                                       //
config.defaultWelcomeMessageFooter = "This server is running a build of <a href='http://docs.bigbluebutton.org/1.0/10overview.html' target='_blank'><u>BigBlueButton " + config.bbbServerVersion + "</u></a>.";
                                                                       //
config.maxUsernameLength = 30;                                         // 4
                                                                       //
config.maxChatLength = 140;                                            // 4
                                                                       //
config.lockOnJoin = true;                                              // 4
                                                                       //
config.app = {};                                                       // 4
                                                                       //
config.app.mobileFont = 16;                                            // 4
                                                                       //
config.app.desktopFont = 14;                                           // 4
                                                                       //
config.app.autoJoinAudio = false;                                      // 4
                                                                       //
config.app.WebRTCHangupRetryInterval = 2000;                           // 4
                                                                       //
config.redis = {};                                                     // 4
                                                                       //
config.redis.host = "127.0.0.1";                                       // 4
                                                                       //
config.redis.post = "6379";                                            // 4
                                                                       //
config.redis.timeout = 5000;                                           // 4
                                                                       //
config.redis.channels = {};                                            // 4
                                                                       //
config.redis.channels.fromBBBApps = "bigbluebutton:from-bbb-apps:*";   // 4
                                                                       //
config.redis.channels.toBBBApps = {};                                  // 4
                                                                       //
config.redis.channels.toBBBApps.pattern = "bigbluebutton:to-bbb-apps:*";
                                                                       //
config.redis.channels.toBBBApps.chat = "bigbluebutton:to-bbb-apps:chat";
                                                                       //
config.redis.channels.toBBBApps.meeting = "bigbluebutton:to-bbb-apps:meeting";
                                                                       //
config.redis.channels.toBBBApps.presentation = "bigbluebutton:to-bbb-apps:presentation";
                                                                       //
config.redis.channels.toBBBApps.users = "bigbluebutton:to-bbb-apps:users";
                                                                       //
config.redis.channels.toBBBApps.voice = "bigbluebutton:to-bbb-apps:voice";
                                                                       //
config.redis.channels.toBBBApps.whiteboard = "bigbluebutton:to-bbb-apps:whiteboard";
                                                                       //
config.redis.channels.toBBBApps.polling = "bigbluebutton:to-bbb-apps:polling";
                                                                       //
config.log = {};                                                       // 4
                                                                       //
if (Meteor.isServer) {                                                 // 51
  config.log.path = (typeof process !== "undefined" && process !== null ? (ref = process.env) != null ? ref.NODE_ENV : void 0 : void 0) === "production" ? "/var/log/bigbluebutton/bbbnode.log" : process.env.PWD + '/../log/development.log';
  winston = Winston;                                                   // 52
  file = config.log.path;                                              // 52
  transports = [                                                       // 52
    new winston.transports.Console(), new winston.transports.File({    //
      filename: file                                                   // 61
    })                                                                 //
  ];                                                                   //
  Meteor.log = new winston.Logger({                                    // 52
    transports: transports                                             // 64
  });                                                                  //
}                                                                      //
                                                                       //
Meteor.config = config;                                                // 4
                                                                       //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=config.coffee.js.map
