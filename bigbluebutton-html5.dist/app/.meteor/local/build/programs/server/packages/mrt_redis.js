(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;

/* Package-scope variables */
var redis;

(function(){

////////////////////////////////////////////////////////////////////////////
//                                                                        //
// packages/mrt_redis/packages/mrt_redis.js                               //
//                                                                        //
////////////////////////////////////////////////////////////////////////////
                                                                          //
(function () {                                                            // 1
                                                                          // 2
///////////////////////////////////////////////////////////////////////   // 3
//                                                                   //   // 4
// packages/mrt:redis/meteor-redis.js                                //   // 5
//                                                                   //   // 6
///////////////////////////////////////////////////////////////////////   // 7
                                                                     //   // 8
redis = Npm.require('redis');                                        // 1
                                                                     // 2
///////////////////////////////////////////////////////////////////////   // 11
                                                                          // 12
}).call(this);                                                            // 13
                                                                          // 14
////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['mrt:redis'] = {
  redis: redis
};

})();

//# sourceMappingURL=mrt_redis.js.map
