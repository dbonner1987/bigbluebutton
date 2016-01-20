//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;

/* Package-scope variables */
var Winston;

(function(){

/////////////////////////////////////////////////////////////////////////////
//                                                                         //
// packages/brentjanderson_winston-client/packages/brentjanderson_winston- //
//                                                                         //
/////////////////////////////////////////////////////////////////////////////
                                                                           //
(function () {                                                             // 1
                                                                           // 2
///////////////////////////////////////////////////////////////////////    // 3
//                                                                   //    // 4
// packages/brentjanderson:winston-client/client.js                  //    // 5
//                                                                   //    // 6
///////////////////////////////////////////////////////////////////////    // 7
                                                                     //    // 8
var log = function(level, args) {                                    // 1  // 9
  args = Array.prototype.slice.call(args, 0),                        // 2  // 10
  args.splice(0, 0, level);                                          // 3  // 11
  args.splice(0, 0, "winston-client.log");                           // 4  // 12
  args.push(function(error, result) {                                // 5  // 13
    if (error) {                                                     // 6  // 14
      throw error;                                                   // 7  // 15
    } else {                                                         // 8  // 16
      if (result)                                                    // 9  // 17
        console.log(result);                                         // 10
    }                                                                // 11
  });                                                                // 12
  Meteor.call.apply(null, args);                                     // 13
}                                                                    // 14
                                                                     // 15
Winston = {                                                          // 16
  log:      function(level) { log(level, arguments)},                // 17
  silly:    function() { log('silly', arguments); },                 // 18
  input:    function() { log('input', arguments); },                 // 19
  verbose:  function() { log('verbose', arguments); },               // 20
  prompt:   function() { log('prompt', arguments); },                // 21
  debug:    function() { log('debug', arguments); },                 // 22
  info:     function() { log('info', arguments); },                  // 23
  data:     function() { log('data', arguments); },                  // 24
  help:     function() { log('help', arguments); },                  // 25
  warn:     function() { log('warn', arguments); },                  // 26
  error:    function() { log('error', arguments); }                  // 27
};                                                                   // 28
                                                                     // 29
                                                                     // 30
                                                                     // 31
///////////////////////////////////////////////////////////////////////    // 40
                                                                           // 41
}).call(this);                                                             // 42
                                                                           // 43
/////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['brentjanderson:winston-client'] = {
  Winston: Winston
};

})();
