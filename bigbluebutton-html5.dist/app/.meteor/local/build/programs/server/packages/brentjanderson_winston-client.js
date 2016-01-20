(function () {

/* Imports */
var Winston = Package['infinitedg:winston'].Winston;
var Meteor = Package.meteor.Meteor;

(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// packages/brentjanderson_winston-client/packages/brentjanderson_winston-client.js                         //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
(function () {                                                                                              // 1
                                                                                                            // 2
////////////////////////////////////////////////////////////////////////////////////////////////////////    // 3
//                                                                                                    //    // 4
// packages/brentjanderson:winston-client/server.js                                                   //    // 5
//                                                                                                    //    // 6
////////////////////////////////////////////////////////////////////////////////////////////////////////    // 7
                                                                                                      //    // 8
var util = Npm.require("util"),                                                                       // 1  // 9
    lastMessage = ''; // The message to return to the user                                            // 2  // 10
                                                                                                      // 3  // 11
/**                                                                                                   // 4  // 12
A custom transport for winston that is used by winston-client to send log messages back to the client // 5  // 13
@class MeteorClient                                                                                   // 6  // 14
*/                                                                                                    // 7  // 15
var MeteorClient = Winston.transports.MeteorClient = function (options) {                             // 8  // 16
  this.name = 'meteorClient';                                                                         // 9  // 17
  this.level = options.level || 'silly';                                                              // 10
};                                                                                                    // 11
                                                                                                      // 12
util.inherits(MeteorClient, Winston.Transport);                                                       // 13
                                                                                                      // 14
/**                                                                                                   // 15
Determine if a dictionary is empty                                                                    // 16
@method isEmpty                                                                                       // 17
@param {Object} obj The object to test                                                                // 18
@return Boolean                                                                                       // 19
*/                                                                                                    // 20
function isEmpty(obj) {                                                                               // 21
    "use strict";                                                                                     // 22
    var prop, result;                                                                                 // 23
    if (Object.keys) { // EMCAScript 5 support                                                        // 24
        result =  Object.keys(obj).length === 0;                                                      // 25
    } else { // Old school                                                                            // 26
        for (prop in obj) {                                                                           // 27
            if (obj.hasOwnProperty(prop)) {                                                           // 28
                return false;                                                                         // 29
            }                                                                                         // 30
        }                                                                                             // 31
        result = true;                                                                                // 32
    }                                                                                                 // 33
    return result;                                                                                    // 34
}                                                                                                     // 35
                                                                                                      // 36
MeteorClient.prototype.log = function (level, msg, meta, callback) {                                  // 37
  // @TODO: Make the log message conform better to Winston's own output                               // 38
  "use strict";                                                                                       // 39
  var lastMessage = level + ': ' + msg;                                                               // 40
  if (!isEmpty(meta) && JSON.stringify) {                                                             // 41
    lastMessage += '\nmeta = ' + JSON.stringify(meta)                                                 // 42
  }                                                                                                   // 43
  callback(null, true);                                                                               // 44
};                                                                                                    // 45
                                                                                                      // 46
Winston.add(Winston.transports.MeteorClient, {});                                                     // 47
Meteor.startup(function () {                                                                          // 48
    Meteor.methods({                                                                                  // 49
      /**                                                                                             // 50
      A rough equivalent to Winston.log() over Meteor.call.                                           // 51
      Takes the same arguments                                                                        // 52
      */                                                                                              // 53
      'winston-client.log': function() {                                                              // 54
        check(arguments, [Match.Any]);                                                                // 55
        Winston.log.apply(null, arguments);                                                           // 56
        return lastMessage;                                                                           // 57
      }                                                                                               // 58
    });                                                                                               // 59
});                                                                                                   // 60
////////////////////////////////////////////////////////////////////////////////////////////////////////    // 69
                                                                                                            // 70
}).call(this);                                                                                              // 71
                                                                                                            // 72
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['brentjanderson:winston-client'] = {};

})();

//# sourceMappingURL=brentjanderson_winston-client.js.map
