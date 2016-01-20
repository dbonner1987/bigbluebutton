(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var ECMAScript = Package.ecmascript.ECMAScript;
var WebApp = Package.webapp.WebApp;
var main = Package.webapp.main;
var WebAppInternals = Package.webapp.WebAppInternals;
var MongoInternals = Package.mongo.MongoInternals;
var Mongo = Package.mongo.Mongo;
var check = Package.check.check;
var Match = Package.check.Match;
var Random = Package.random.Random;
var _ = Package.underscore._;
var chokidar = Package['velocity:chokidar'].chokidar;
var VelocityMeteorInternals = Package['velocity:meteor-internals'].VelocityMeteorInternals;
var SourceMapSupport = Package['velocity:source-map-support'].SourceMapSupport;
var LongRunningChildProcess = Package['sanjo:long-running-child-process'].LongRunningChildProcess;
var MeteorFilesHelpers = Package['sanjo:meteor-files-helpers'].MeteorFilesHelpers;
var babelHelpers = Package['babel-runtime'].babelHelpers;
var Promise = Package.promise.Promise;
var Map = Package['ecmascript-collections'].Map;
var Set = Package['ecmascript-collections'].Set;

/* Package-scope variables */
var Velocity, VelocityInternals, VelocityTestFiles, VelocityFixtureFiles, VelocityTestReports, VelocityAggregateReports, VelocityLogs, VelocityMirrors, VelocityOptions, DEBUG, CONTINUOUS_INTEGRATION;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/velocity_core/src/source_map_support.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/* globals SourceMapSupport: false */                                                                                  //
                                                                                                                       //
SourceMapSupport.install();                                                                                            // 3
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/velocity_core/src/polyfills.js                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';                                                                                                          // 1
                                                                                                                       //
// PhantomJS 1.x does not support Function.bind.                                                                       //
// This is a very commonly used function and                                                                           //
// the resulting errors are very hard to debug right now.                                                              //
// For this reason we include it in velocity:core.                                                                     //
if (!Function.prototype.bind) {                                                                                        // 7
  Function.prototype.bind = function (otherThis) {                                                                     // 8
    return _.bind(this, otherThis);                                                                                    // 9
  };                                                                                                                   //
}                                                                                                                      //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/velocity_core/src/globals.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/* globals                                                                                                             //
   Velocity: true,                                                                                                     //
   VelocityInternals: true                                                                                             //
*/                                                                                                                     //
                                                                                                                       //
/**                                                                                                                    //
 * The `Velocity` object provides a common API for test frameworks to report                                           //
 * test results.  Frameworks can also request assets, such as a copy of the                                            //
 * user's application (the 'mirror') in which tests can be safely run without                                          //
 * impacting on-going development.                                                                                     //
 *                                                                                                                     //
 * Test results and log activity are reported via                                                                      //
 * {{#crossLink "Meteor.methods"}}Meteor methods{{/crossLink}}.                                                        //
 *                                                                                                                     //
 * @class Velocity                                                                                                     //
 */                                                                                                                    //
Velocity = {                                                                                                           // 17
  /**                                                                                                                  //
   * @class Velocity.Collections                                                                                       //
   */                                                                                                                  //
  Collections: {},                                                                                                     // 21
  Methods: {}                                                                                                          // 22
};                                                                                                                     //
                                                                                                                       //
VelocityInternals = {};                                                                                                // 25
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/velocity_core/src/collections.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/* global                                                                                                              //
 VelocityTestFiles: true,                                                                                              //
 VelocityFixtureFiles: true,                                                                                           //
 VelocityTestReports: true,                                                                                            //
 VelocityAggregateReports: true,                                                                                       //
 VelocityLogs: true,                                                                                                   //
 VelocityMirrors: true,                                                                                                //
 VelocityOptions: true                                                                                                 //
 */                                                                                                                    //
                                                                                                                       //
var collectionOptions = {};                                                                                            // 11
                                                                                                                       //
if (Meteor.isServer) {                                                                                                 // 13
  var velocityMongoUrl = process.env.VELOCITY_MONGO_URL;                                                               // 14
  if (velocityMongoUrl) {                                                                                              // 15
    collectionOptions._driver = new MongoInternals.RemoteCollectionDriver(velocityMongoUrl);                           // 16
  }                                                                                                                    //
}                                                                                                                      //
                                                                                                                       //
/**                                                                                                                    //
 * TODO: Needs description and example records                                                                         //
 *                                                                                                                     //
 * @property Velocity.Collections.TestFiles                                                                            //
 * @type Mongo.Collection                                                                                              //
 */                                                                                                                    //
Velocity.Collections.TestFiles = new Mongo.Collection('velocityTestFiles', collectionOptions);                         // 26
/**                                                                                                                    //
 * @property VelocityTestFiles                                                                                         //
 * @type Mongo.Collection                                                                                              //
 * @deprecated Use `Velocity.Collections.TestFiles`                                                                    //
 */                                                                                                                    //
VelocityTestFiles = Velocity.Collections.TestFiles;                                                                    // 32
                                                                                                                       //
/**                                                                                                                    //
 * TODO: Needs description and example records                                                                         //
 *                                                                                                                     //
 * @property Velocity.Collections.FixtureFiles                                                                         //
 * @type Mongo.Collection                                                                                              //
 */                                                                                                                    //
Velocity.Collections.FixtureFiles = new Mongo.Collection('velocityFixtureFiles', collectionOptions);                   // 41
/**                                                                                                                    //
 * @property VelocityFixtureFiles                                                                                      //
 * @type Mongo.Collection                                                                                              //
 * @deprecated Use `Velocity.Collections.FixtureFiles`                                                                 //
 */                                                                                                                    //
VelocityFixtureFiles = Velocity.Collections.FixtureFiles;                                                              // 47
                                                                                                                       //
/**                                                                                                                    //
 * TODO: Needs description and example records                                                                         //
 *                                                                                                                     //
 * @property Velocity.Collections.TestReports                                                                          //
 * @type Mongo.Collection                                                                                              //
 */                                                                                                                    //
Velocity.Collections.TestReports = new Mongo.Collection('velocityTestReports', collectionOptions);                     // 56
/**                                                                                                                    //
 * @property VelocityTestReports                                                                                       //
 * @type Mongo.Collection                                                                                              //
 * @deprecated Use `Velocity.Collections.TestReports`                                                                  //
 */                                                                                                                    //
VelocityTestReports = Velocity.Collections.TestReports;                                                                // 62
                                                                                                                       //
/**                                                                                                                    //
 * TODO: Needs description and example records                                                                         //
 *                                                                                                                     //
 * @property Velocity.Collections.AggregateReports                                                                     //
 * @type Mongo.Collection                                                                                              //
 */                                                                                                                    //
Velocity.Collections.AggregateReports = new Mongo.Collection('velocityAggregateReports', collectionOptions);           // 71
/**                                                                                                                    //
 * TODO: Needs description and example records                                                                         //
 *                                                                                                                     //
 * @property VelocityAggregateReports                                                                                  //
 * @type Mongo.Collection                                                                                              //
 * @deprecated Use `Velocity.Collections.AggregateReports`                                                             //
 */                                                                                                                    //
VelocityAggregateReports = Velocity.Collections.AggregateReports;                                                      // 79
                                                                                                                       //
/**                                                                                                                    //
 * TODO: Needs description and example records                                                                         //
 *                                                                                                                     //
 * @property Velocity.Collections.Logs                                                                                 //
 * @type Mongo.Collection                                                                                              //
 */                                                                                                                    //
Velocity.Collections.Logs = new Mongo.Collection('velocityLogs', collectionOptions);                                   // 88
/**                                                                                                                    //
 * @property VelocityLogs                                                                                              //
 * @type Mongo.Collection                                                                                              //
 * @deprecated Use `Velocity.Collections.Logs`                                                                         //
 */                                                                                                                    //
VelocityLogs = Velocity.Collections.Logs;                                                                              // 94
                                                                                                                       //
/**                                                                                                                    //
 * TODO: Needs description and example records                                                                         //
 *                                                                                                                     //
 * @property Velocity.Collections.Mirrors                                                                              //
 * @type Mongo.Collection                                                                                              //
 */                                                                                                                    //
Velocity.Collections.Mirrors = new Mongo.Collection('velocityMirrors', collectionOptions);                             // 103
/**                                                                                                                    //
 * @property VelocityMirrors                                                                                           //
 * @type Mongo.Collection                                                                                              //
 * @deprecated Use `Velocity.Collections.Mirrors`                                                                      //
 */                                                                                                                    //
VelocityMirrors = Velocity.Collections.Mirrors;                                                                        // 109
                                                                                                                       //
/**                                                                                                                    //
 * TODO: Needs description and example records                                                                         //
 *                                                                                                                     //
 * @property Velocity.Collections.Options                                                                              //
 * @type Mongo.Collection                                                                                              //
 */                                                                                                                    //
Velocity.Collections.Options = new Mongo.Collection('velocityOptions', collectionOptions);                             // 118
/**                                                                                                                    //
 * @property VelocityOptions                                                                                           //
 * @type Mongo.Collection                                                                                              //
 * @deprecated Use `Velocity.Collections.Options`                                                                      //
 */                                                                                                                    //
VelocityOptions = Velocity.Collections.Options;                                                                        // 124
                                                                                                                       //
(function () {                                                                                                         // 127
  'use strict';                                                                                                        // 128
                                                                                                                       //
  if (Meteor.isServer) {                                                                                               // 130
    Meteor.publish('VelocityTestFiles', function () {                                                                  // 131
      return Velocity.Collections.TestFiles.find({});                                                                  // 132
    });                                                                                                                //
    Meteor.publish('VelocityFixtureFiles', function () {                                                               // 134
      return Velocity.Collections.FixtureFiles.find({});                                                               // 135
    });                                                                                                                //
    Meteor.publish('VelocityTestReports', function () {                                                                // 137
      return Velocity.Collections.TestReports.find({});                                                                // 138
    });                                                                                                                //
    Meteor.publish('VelocityAggregateReports', function () {                                                           // 140
      return VelocityAggregateReports.find({});                                                                        // 141
    });                                                                                                                //
    Meteor.publish('VelocityLogs', function () {                                                                       // 143
      return VelocityLogs.find({});                                                                                    // 144
    });                                                                                                                //
    Meteor.publish('VelocityMirrors', function () {                                                                    // 146
      return VelocityMirrors.find({});                                                                                 // 147
    });                                                                                                                //
    Meteor.publish('VelocityOptions', function () {                                                                    // 149
      return VelocityOptions.find({});                                                                                 // 150
    });                                                                                                                //
  }                                                                                                                    //
                                                                                                                       //
  if (Meteor.isClient) {                                                                                               // 154
    Meteor.subscribe('VelocityTestFiles');                                                                             // 155
    Meteor.subscribe('VelocityFixtureFiles');                                                                          // 156
    Meteor.subscribe('VelocityTestReports');                                                                           // 157
    Meteor.subscribe('VelocityAggregateReports');                                                                      // 158
    Meteor.subscribe('VelocityLogs');                                                                                  // 159
    Meteor.subscribe('VelocityMirrors');                                                                               // 160
    Meteor.subscribe('VelocityOptions');                                                                               // 161
  }                                                                                                                    //
})();                                                                                                                  //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/velocity_core/src/helpers.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/* globals VelocityInternals: true */                                                                                  //
                                                                                                                       //
'use strict';                                                                                                          // 3
                                                                                                                       //
var files = VelocityMeteorInternals.files;                                                                             // 5
                                                                                                                       //
VelocityInternals.isWindows = function () {                                                                            // 7
  return process.platform === 'win32';                                                                                 // 8
};                                                                                                                     //
                                                                                                                       //
VelocityInternals.isDirectory = function (path) {                                                                      // 11
  var stat = files.statOrNull(path);                                                                                   // 12
  return stat && stat.isDirectory();                                                                                   // 13
};                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/velocity_core/src/methods/logs/logs_reset.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/**                                                                                                                    //
 * Clear log entries, either for a specific framework or for                                                           //
 * all frameworks.                                                                                                     //
 *                                                                                                                     //
 * @method velocity/logs/reset                                                                                         //
 * @param {Object} [options]                                                                                           //
 *   @param {String} [options.framework] The name of a specific framework                                              //
 *                                       to clear logs for.  Ex. 'mocha'                                               //
 */                                                                                                                    //
Velocity.Methods['velocity/logs/reset'] = function (options) {                                                         // 10
  options = options || {};                                                                                             // 11
  check(options, {                                                                                                     // 12
    framework: Match.Optional(String)                                                                                  // 13
  });                                                                                                                  //
                                                                                                                       //
  var query = {};                                                                                                      // 16
  if (options.framework) {                                                                                             // 17
    query.framework = options.framework;                                                                               // 18
  }                                                                                                                    //
  Velocity.Collections.Logs.remove(query);                                                                             // 20
};                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/velocity_core/src/methods/logs/logs_submit.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/**                                                                                                                    //
 * Log a message to the Velocity log store.  This provides a central                                                   //
 * location for different reporters to query for test framework log                                                    //
 * entries.                                                                                                            //
 *                                                                                                                     //
 * @method velocity/logs/submit                                                                                        //
 * @param {Object} options                                                                                             //
 *   @param {String} options.framework The name of the test framework                                                  //
 *   @param {String} options.message The message to log                                                                //
 *   @param {String} [options.level] Log level.  Ex. 'error'. Default: 'info'                                          //
 *   @param {Date} [options.timestamp]                                                                                 //
 */                                                                                                                    //
Velocity.Methods['velocity/logs/submit'] = function (options) {                                                        // 13
  check(options, {                                                                                                     // 14
    framework: String,                                                                                                 // 15
    message: String,                                                                                                   // 16
    level: Match.Optional(String),                                                                                     // 17
    timestamp: Match.Optional(Match.OneOf(Date, String))                                                               // 18
  });                                                                                                                  //
                                                                                                                       //
  Velocity.Collections.Logs.insert({                                                                                   // 21
    framework: options.framework,                                                                                      // 22
    message: options.message,                                                                                          // 23
    level: options.level || 'info',                                                                                    // 24
    timestamp: options.timestamp ? new Date(options.timestamp) : new Date()                                            // 25
  });                                                                                                                  //
};                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/velocity_core/src/methods/mirrors/mirror_init.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/**                                                                                                                    //
 * Stores metadata about the mirror.                                                                                   //
 * Before a mirror implementation starts, it needs to call                                                             //
 * this method to let Velocity know it is starting up.                                                                 //
 *                                                                                                                     //
 * @method velocity/mirrors/init                                                                                       //
 * @param {Object} options                                                                                             //
 *   @param {String} options.framework The name of the test framework                                                  //
 *                                     making the request                                                              //
 *   @param {Number} options.port The port this mirror is running on                                                   //
 *   @param {String} options.mongoUrl The mongo url this mirror is using                                               //
 *   @param {String} options.host The root url of this mirror without any                                              //
 *                        additional paths. Used for making DDP connections                                            //
 *   @param {String} options.rootUrl The root url of this mirror, which also                                           //
 *                           includes the path and params                                                              //
 *   @param {String} options.rootUrlPath Adds this string to the end of                                                //
 *                           the root url in the Velocity.Collections.Mirrors                                          //
 *                           collection. To be used by test frameworks to                                              //
 *                           recognize when they are executing in a mirror.                                            //
 *                           eg. `/?jasmine=true`                                                                      //
 * @param {Object} [extra] Any additional metadata the implementing mirror                                             //
 *                         would like to store in the Velocity mirrors                                                 //
 *                         collection.                                                                                 //
 */                                                                                                                    //
Velocity.Methods['velocity/mirrors/init'] = function (options, extra) {                                                // 25
  check(options, {                                                                                                     // 26
    framework: String,                                                                                                 // 27
    port: Number,                                                                                                      // 28
    mongoUrl: String,                                                                                                  // 29
    host: String,                                                                                                      // 30
    rootUrl: String,                                                                                                   // 31
    rootUrlPath: String,                                                                                               // 32
    pid: Number                                                                                                        // 33
  });                                                                                                                  //
  check(extra, Match.Optional(Object));                                                                                // 35
                                                                                                                       //
  if (extra) {                                                                                                         // 37
    _.extend(options, extra);                                                                                          // 38
  }                                                                                                                    //
                                                                                                                       //
  var _upsertQuery = {                                                                                                 // 42
    framework: options.framework,                                                                                      // 43
    port: options.port                                                                                                 // 44
  };                                                                                                                   //
                                                                                                                       //
  var _options = _.extend(options, {                                                                                   // 47
    state: 'starting'                                                                                                  // 48
  });                                                                                                                  //
                                                                                                                       //
  Velocity.Collections.Mirrors.upsert(_upsertQuery, _options);                                                         // 51
};                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/velocity_core/src/methods/mirrors/mirror_register.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/**                                                                                                                    //
 * Lets Velocity know the mirror has started successfully                                                              //
 *                                                                                                                     //
 * @method velocity/mirrors/register                                                                                   //
 * @param {Object} options                                                                                             //
 *   @param {String} options.framework The name of the test framework                                                  //
 *                                     making the request                                                              //
 *   @param {String} options.host The root url of this mirror without any                                              //
 *                                additional paths. Must include port. Used                                            //
 *                                for making DDP connections                                                           //
 */                                                                                                                    //
Velocity.Methods['velocity/mirrors/register'] = function (options) {                                                   // 12
  check(options, Match.ObjectIncluding({                                                                               // 13
    framework: String,                                                                                                 // 14
    host: String                                                                                                       // 15
  }));                                                                                                                 //
                                                                                                                       //
  DEBUG && console.log('[velocity] Mirror registered. Handshaking with mirror...');                                    // 18
                                                                                                                       //
  this.unblock();                                                                                                      // 20
                                                                                                                       //
  // TODO: Should the host really include the port?                                                                    //
  var mirrorConnection = DDP.connect(options.host, {                                                                   // 23
    // Don't show the user connection errors when not in debug mode.                                                   //
    // We will normally eventually connect to the mirror after                                                         //
    // a connection error has been shown.                                                                              //
    _dontPrintErrors: !DEBUG                                                                                           // 27
  });                                                                                                                  //
  mirrorConnection.onReconnect = function () {                                                                         // 29
    DEBUG && console.log('[velocity] Connected to mirror, setting state to ready', options);                           // 30
    mirrorConnection.call('velocity/parentHandshake', function (e, r) {                                                // 31
      DEBUG && console.log('[velocity] Parent Handshake response', e, r);                                              // 32
    });                                                                                                                //
    mirrorConnection.disconnect();                                                                                     // 34
                                                                                                                       //
    var _updateQuery = {                                                                                               // 36
      framework: options.framework,                                                                                    // 37
      port: parseInt(options.port)                                                                                     // 38
    };                                                                                                                 //
    Velocity.Collections.Mirrors.update(_updateQuery, {                                                                // 40
      $set: {                                                                                                          // 41
        state: 'ready',                                                                                                // 42
        lastModified: Date.now()                                                                                       // 43
      }                                                                                                                //
    });                                                                                                                //
  };                                                                                                                   //
};                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/velocity_core/src/methods/mirrors/mirror_request.js                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/* globals DEBUG: true, _: true */                                                                                     //
                                                                                                                       //
var DEBUG = !!process.env.VELOCITY_DEBUG;                                                                              // 3
var _ = Npm.require('lodash');                                                                                         // 4
var url = Npm.require('url');                                                                                          // 5
var mongodbUri = Npm.require('mongodb-uri');                                                                           // 6
var freeport = Npm.require('freeport');                                                                                // 7
var tmp = Npm.require('tmp');                                                                                          // 8
var files = VelocityMeteorInternals.files;                                                                             // 9
var _mirrorChildProcesses = {};                                                                                        // 10
Npm.require('colors');                                                                                                 // 11
                                                                                                                       //
// Specifies the Meteor release that we use for mirrors                                                                //
Velocity.mirrorMeteorReleaseName = 'velocity:METEOR';                                                                  // 15
Velocity.mirrorMeteorVersion = '1.2.0.2_1';                                                                            // 16
Velocity.mirrorMeteorRelease = Velocity.mirrorMeteorReleaseName + '@' + Velocity.mirrorMeteorVersion;                  // 17
Velocity.mirrorMeteorToolReleaseName = 'velocity:meteor-tool';                                                         // 19
Velocity.mirrorMeteorToolVersion = '1.1.9_1';                                                                          // 20
Velocity.mirrorMeteorToolRelease = Velocity.mirrorMeteorToolReleaseName + '@' + Velocity.mirrorMeteorToolVersion;      // 21
                                                                                                                       //
/**                                                                                                                    //
 * Starts a new mirror if it has not already been started, and reuses an                                               //
 * existing one if it is already started.                                                                              //
 *                                                                                                                     //
 * This method will update the `Velocity.Collections.Mirrors` collection with once the mirror is ready.                //
 *                                                                                                                     //
 * @method velocity/mirrors/request                                                                                    //
 * @for Meteor.methods                                                                                                 //
 * @param {Object} options                  Options for the mirror.                                                    //
 * @param {String} options.framework        The name of the calling framework                                          //
 * @param {String} [options.testsPath]      The path to tests for this framework.                                      //
 *                                          For example 'jasmine/server/unit'.                                         //
 *                                          Don't include a leading or trailing slash.                                 //
 * @param {String} [options.args]           Additional arguments that the mirror is called with                        //
 *                                          It accepts all the options that are available for `meteor run`.            //
 * @param {Object} [options.env]            Additional environment variables that the mirror is called with.           //
 * @param {Number} [options.port]           Use a specific port.  Default is random, free port.                        //
 * @param {String} [options.rootUrlPath]    Adds this string to the end of the root url in the                         //
 *                                          Velocity.Collections.Mirrors collection. eg. `/?jasmine=true`              //
 * @param {Number} [options.nodes]          The number of mirrors required. This is used by                            //
 *                                          distributable frameworks. Default is 1                                     //
 * @param {Boolean} [options.handshake]     Specifies whether or not this mirror should perform                        //
 *                                          a DDP handshake with the parent. Distributable                             //
 *                                          frameworks can use this to get mirrors to behave                           //
 *                                          like workers. The default is true                                          //
 *                                                                                                                     //
 */                                                                                                                    //
Velocity.Methods['velocity/mirrors/request'] = function (options) {                                                    // 52
  check(options, {                                                                                                     // 53
    framework: String,                                                                                                 // 54
    testsPath: Match.Optional(String),                                                                                 // 55
    args: Match.Optional([Match.Any]),                                                                                 // 56
    env: Match.Optional(Object),                                                                                       // 57
    port: Match.Optional(Number),                                                                                      // 58
    rootUrlPath: Match.Optional(String),                                                                               // 59
    nodes: Match.Optional(Number),                                                                                     // 60
    handshake: Match.Optional(Boolean)                                                                                 // 61
  });                                                                                                                  //
                                                                                                                       //
  this.unblock();                                                                                                      // 64
                                                                                                                       //
  _startMirrors(options);                                                                                              // 66
};                                                                                                                     //
                                                                                                                       //
function _startMirrors(options) {                                                                                      // 70
  options = _.extend({                                                                                                 // 71
    nodes: 1                                                                                                           // 72
  }, options);                                                                                                         //
  DEBUG && console.log('[velocity]', options.nodes, 'mirror(s) requested');                                            // 74
  // only respect a provided port if a single mirror is requested                                                      //
  if (options.port && options.nodes === 1) {                                                                           // 76
    _startMirror(options);                                                                                             // 77
  } else {                                                                                                             //
    _reuseMirrors();                                                                                                   // 79
    _startUninitializedMirrorsWithFreePorts();                                                                         // 80
  }                                                                                                                    //
                                                                                                                       //
  function _reuseMirrors() {                                                                                           // 83
    options.unitializedNodes = options.nodes;                                                                          // 84
    var _reusableMirrorsForFramework = _.filter(Velocity.reusableMirrors, function (rmp) {                             // 85
      return rmp.framework === options.framework && rmp.reused === false;                                              // 86
    });                                                                                                                //
                                                                                                                       //
    _reusableMirrorsForFramework.forEach(function (rmff) {                                                             // 89
      rmff.reused = true;                                                                                              // 90
                                                                                                                       //
      options.port = rmff.port;                                                                                        // 92
      _startMirror(options);                                                                                           // 93
                                                                                                                       //
      options.unitializedNodes--;                                                                                      // 95
    });                                                                                                                //
  }                                                                                                                    //
                                                                                                                       //
  function _startUninitializedMirrorsWithFreePorts() {                                                                 // 101
    var startWithFreePort = Meteor.bindEnvironment(function (err, port) {                                              // 102
      options.port = port;                                                                                             // 103
      _startMirror(options);                                                                                           // 104
    });                                                                                                                //
                                                                                                                       //
    for (var i = 0; i < options.unitializedNodes; i++) {                                                               // 107
      freeport(startWithFreePort);                                                                                     // 108
    }                                                                                                                  //
  }                                                                                                                    //
}                                                                                                                      //
                                                                                                                       //
var _generateSettingsFile = _.memoize(function () {                                                                    // 114
  var tmpObject = tmp.fileSync();                                                                                      // 115
  files.writeFile(tmpObject.name, JSON.stringify(Meteor.settings));                                                    // 116
  return tmpObject.name;                                                                                               // 117
});                                                                                                                    //
                                                                                                                       //
function _startMirror(options) {                                                                                       // 121
                                                                                                                       //
  // TODO, options is passed as a reference, maybe we should pass a copy instead                                       //
                                                                                                                       //
  options.handshake = options.handshake === undefined ? true : options.handshake;                                      // 125
  options.rootUrlPath = options.rootUrlPath || '';                                                                     // 126
  options.host = _getMirrorUrl(options.port);                                                                          // 127
  options.rootUrl = options.host;                                                                                      // 128
                                                                                                                       //
  var environment = _getEnvironmentVariables(options);                                                                 // 130
                                                                                                                       //
  // append the port to the mirror log if there are multiple mirrors                                                   //
  var processName = environment.FRAMEWORK;                                                                             // 133
  if (options.nodes > 1) {                                                                                             // 134
    processName = environment.FRAMEWORK + '_' + environment.PORT;                                                      // 135
  }                                                                                                                    //
                                                                                                                       //
  var mirrorChild = _getMirrorChild(environment.FRAMEWORK, processName);                                               // 138
  if (mirrorChild.isRunning()) {                                                                                       // 139
    return;                                                                                                            // 140
  }                                                                                                                    //
                                                                                                                       //
  var command = VelocityInternals.isWindows() ? 'meteor.bat' : 'meteor';                                               // 143
  var args = ['run', '--test-app', '--port', String(environment.PORT)];                                                // 144
                                                                                                                       //
  if (options.testsPath) {                                                                                             // 150
    args.push('--include-tests', files.convertToStandardPath(options.testsPath));                                      // 151
  }                                                                                                                    //
                                                                                                                       //
  if (Meteor.settings) {                                                                                               // 154
    var settingsPath = _generateSettingsFile();                                                                        // 155
    args.push('--settings', settingsPath);                                                                             // 156
  }                                                                                                                    //
                                                                                                                       //
  if (options.args) {                                                                                                  // 159
    args.push.apply(args, options.args);                                                                               // 160
  }                                                                                                                    //
                                                                                                                       //
  // Make it possible to debug a mirror                                                                                //
  if (process.env.VELOCITY_DEBUG_MIRROR && process.env.VELOCITY_DEBUG_MIRROR === environment.FRAMEWORK && !_.contains(options.args, '--debug-port')) {
    var debugPort = '5858';                                                                                            // 169
    args.push('--debug-port', debugPort);                                                                              // 170
    console.log('[velocity] Your mirror is now paused and ready for debugging!');                                      // 171
    console.log();                                                                                                     // 172
    console.log('[velocity] To debug the server process using a graphical debugging interface,');                      // 173
    console.log('[velocity] visit this URL in your web browser:');                                                     // 174
    console.log('[velocity] http://localhost:8080/debug?port=' + debugPort);                                           // 175
  }                                                                                                                    //
                                                                                                                       //
  // Allow to use checked out meteor for spawning mirrors                                                              //
  // for development on our Meteor fork                                                                                //
  if (!process.env.VELOCITY_USE_CHECKED_OUT_METEOR) {                                                                  // 180
    args.push('--release', Velocity.mirrorMeteorRelease);                                                              // 181
  }                                                                                                                    //
                                                                                                                       //
  mirrorChild.spawn({                                                                                                  // 184
    command: command,                                                                                                  // 185
    args: args,                                                                                                        // 186
    options: {                                                                                                         // 187
      cwd: process.env.VELOCITY_APP_PATH || process.env.PWD,                                                           // 188
      env: environment                                                                                                 // 189
    }                                                                                                                  //
  });                                                                                                                  //
                                                                                                                       //
  DEBUG && console.log('[velocity] Mirror process forked with pid', mirrorChild.getPid());                             // 193
                                                                                                                       //
  console.log(('[velocity] ' + environment.FRAMEWORK + ' is starting a mirror at ' + environment.ROOT_URL + '.').yellow);
                                                                                                                       //
  var isMeteorToolInstalled = MeteorFilesHelpers.isPackageInstalled(Velocity.mirrorMeteorToolReleaseName, Velocity.mirrorMeteorToolVersion);
  if (!isMeteorToolInstalled) {                                                                                        // 208
    console.log('[velocity] *** Meteor Tools is installing ***', '\nThis takes a few minutes the first time.'.yellow);
  }                                                                                                                    //
                                                                                                                       //
  console.log(('[velocity] You can see the mirror logs at: tail -f ' + files.convertToOSPath(files.pathJoin(Velocity.getAppPath(), '.meteor', 'local', 'log', processName + '.log'))).yellow);
                                                                                                                       //
  Meteor.call('velocity/mirrors/init', {                                                                               // 219
    framework: environment.FRAMEWORK,                                                                                  // 220
    port: environment.PORT,                                                                                            // 221
    mongoUrl: environment.MONGO_URL,                                                                                   // 222
    host: environment.HOST,                                                                                            // 223
    rootUrl: environment.ROOT_URL,                                                                                     // 224
    rootUrlPath: environment.ROOT_URL_PATH,                                                                            // 225
    pid: mirrorChild.getPid()                                                                                          // 226
  });                                                                                                                  //
}                                                                                                                      //
                                                                                                                       //
/**                                                                                                                    //
 * Return URL for the mirror with the given port.                                                                      //
 *                                                                                                                     //
 * @method _getMirrorUrl                                                                                               //
 * @param {Number} port Mirror port                                                                                    //
 * @return {String} Mirror URL                                                                                         //
 * @private                                                                                                            //
 */                                                                                                                    //
function _getMirrorUrl(port) {                                                                                         // 239
  var rootUrlParts = url.parse(Meteor.absoluteUrl());                                                                  // 240
  return url.format({                                                                                                  // 241
    protocol: rootUrlParts.protocol,                                                                                   // 242
    slashes: rootUrlParts.slashes,                                                                                     // 243
    hostname: rootUrlParts.hostname,                                                                                   // 244
    port: port,                                                                                                        // 245
    pathname: rootUrlParts.pathname                                                                                    // 246
  });                                                                                                                  //
}                                                                                                                      //
                                                                                                                       //
/**                                                                                                                    //
 * Return the environment variables that a mirror should run with                                                      //
 *                                                                                                                     //
 * @method _getEnvironmentVariables                                                                                    //
 * @param {Object} options Required fields:                                                                            //
 *   @param {String} options.framework The name of the test framework                                                  //
 *                                     making the request                                                              //
 *   @param {Number} options.port The port this mirror is running on                                                   //
 *   @param {String} options.host The root url of this mirror without any                                              //
 *                        additional paths. Used for making DDP connections                                            //
 *   @param {String} options.rootUrl The root url of this mirror, which also                                           //
 *                           includes the path and params                                                              //
 *   @param {String} options.rootUrlPath Adds this string to the end of                                                //
 *                           the root url in the Velocity.Collections.Mirrors                                          //
 *                           collection. To be used by test frameworks to                                              //
 *                           recognize when they are executing in a mirror.                                            //
 *                           eg. `/?jasmine=true`                                                                      //
 *   @param {Boolean} options.handshake Specifies whether or not this mirror                                           //
 *                                      should perform a DDP handshake with                                            //
 *                                      the parent. Distributable frameworks                                           //
 *                                      can use this to get mirrors to behave                                          //
 *                                      like workers.                                                                  //
 *   @param {Object} [options.env] Additional environment variables that the                                           //
 *                                 mirror is called with.                                                              //
 * @return {Object} environment variables                                                                              //
 * @private                                                                                                            //
 */                                                                                                                    //
function _getEnvironmentVariables(options) {                                                                           // 278
  var env = {                                                                                                          // 279
    PORT: options.port,                                                                                                // 280
    // PORT gets overridden by Meteor so we save the mirror port in                                                    //
    // MIRROR_PORT too.                                                                                                //
    MIRROR_PORT: options.port,                                                                                         // 283
    HOST: options.host,                                                                                                // 284
    ROOT_URL_PATH: options.rootUrlPath,                                                                                // 285
    ROOT_URL: options.rootUrl,                                                                                         // 286
    FRAMEWORK: options.framework,                                                                                      // 287
    MONGO_URL: _getMongoUrl(options.framework),                                                                        // 288
    PARENT_URL: process.env.ROOT_URL,                                                                                  // 289
    IS_MIRROR: true,                                                                                                   // 290
    HANDSHAKE: options.handshake,                                                                                      // 291
    VELOCITY_MAIN_APP_PATH: Velocity.getAppPath(),                                                                     // 292
    METEOR_SETTINGS: JSON.stringify(_.extend({}, Meteor.settings))                                                     // 293
  };                                                                                                                   //
                                                                                                                       //
  if (options.env) {                                                                                                   // 296
    _.defaults(env, options.env);                                                                                      // 297
  }                                                                                                                    //
                                                                                                                       //
  _.defaults(env, process.env);                                                                                        // 300
                                                                                                                       //
  return env;                                                                                                          // 302
}                                                                                                                      //
                                                                                                                       //
/**                                                                                                                    //
 * Returns the MongoDB URL for the given database.                                                                     //
 *                                                                                                                     //
 * @method _getMongoUrl                                                                                                //
 * @param {Object} database                                                                                            //
 * @return {String} MongoDB Url                                                                                        //
 * @private                                                                                                            //
 */                                                                                                                    //
function _getMongoUrl(database) {                                                                                      // 314
  var parts = mongodbUri.parse(process.env.VELOCITY_MONGO_URL || process.env.MONGO_URL);                               // 315
  parts.database += '-' + database;                                                                                    // 316
  return mongodbUri.format(parts);                                                                                     // 317
}                                                                                                                      //
                                                                                                                       //
function _getMirrorChild(framework, processName) {                                                                     // 321
  var _processName = processName || framework;                                                                         // 322
  var mirrorChild = _mirrorChildProcesses[_processName];                                                               // 323
  if (!mirrorChild) {                                                                                                  // 324
    mirrorChild = new sanjo.LongRunningChildProcess(_processName);                                                     // 325
    _mirrorChildProcesses[_processName] = mirrorChild;                                                                 // 326
  }                                                                                                                    //
  return mirrorChild;                                                                                                  // 328
}                                                                                                                      //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/velocity_core/src/methods/mirrors/parentHandshake.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/**                                                                                                                    //
 * This is the best indicator of the mirror's ready status, so it's used                                               //
 * to inform the user when there may be delays                                                                         //
 *                                                                                                                     //
 * @method velocity/parentHandshake                                                                                    //
 * @for Meteor.methods                                                                                                 //
 */                                                                                                                    //
Velocity.Methods['velocity/parentHandshake'] = function () {                                                           // 8
  console.log('[velocity] Established connection with Velocity.');                                                     // 9
};                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/velocity_core/src/methods/options/getOption.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/**                                                                                                                    //
 * Get an option                                                                                                       //
 *                                                                                                                     //
 * @method velocity/getOption                                                                                          //
 * @param {String} name The name of the option.                                                                        //
 * @return {*} The value of the option or null.                                                                        //
 */                                                                                                                    //
Velocity.Methods['velocity/getOption'] = function (name) {                                                             // 8
  check(name, String);                                                                                                 // 9
                                                                                                                       //
  var option = Velocity.Collections.Options.findOne({ name: name });                                                   // 11
  return option ? option.value : null;                                                                                 // 12
};                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/velocity_core/src/methods/options/setOption.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/**                                                                                                                    //
 * Set an option.                                                                                                      //
 *                                                                                                                     //
 * @method velocity/setOption                                                                                          //
 * @for Meteor.methods                                                                                                 //
 * @param {String} name The name of the option.                                                                        //
 * @param {*} value The value of the option.                                                                           //
 */                                                                                                                    //
Velocity.Methods['velocity/setOption'] = function (name, value) {                                                      // 9
  check(name, String);                                                                                                 // 10
  check(value, Match.Any);                                                                                             // 11
                                                                                                                       //
  Velocity.Collections.Options.upsert({ name: name }, { $set: { name: name, value: value } });                         // 13
};                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/velocity_core/src/methods/options/setOptions.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/**                                                                                                                    //
 * Set multiple options.                                                                                               //
 *                                                                                                                     //
 * @method velocity/setOptions                                                                                         //
 * @param options Hash with options (name: value).                                                                     //
 */                                                                                                                    //
Velocity.Methods['velocity/setOptions'] = function (options) {                                                         // 7
  check(options, Object);                                                                                              // 8
                                                                                                                       //
  for (var name in babelHelpers.sanitizeForInObject(options)) {                                                        // 10
    if (options.hasOwnProperty(name)) {                                                                                // 11
      Meteor.call('velocity/setOption', name, options[name]);                                                          // 12
    }                                                                                                                  //
  }                                                                                                                    //
};                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/velocity_core/src/methods/reports/reports_completed.js                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/**                                                                                                                    //
 * Frameworks must call this method to inform Velocity they have completed                                             //
 * their current test runs. Velocity uses this flag when running in CI mode.                                           //
 *                                                                                                                     //
 * @method velocity/reports/completed                                                                                  //
 * @param {Object} data                                                                                                //
 *   @param {String} data.framework Name of a test framework.  Ex. 'jasmine'                                           //
 */                                                                                                                    //
Velocity.Methods['velocity/reports/completed'] = function (data) {                                                     // 9
  check(data, {                                                                                                        // 10
    framework: String                                                                                                  // 11
  });                                                                                                                  //
                                                                                                                       //
  Velocity.Collections.AggregateReports.upsert({ 'name': data.framework }, { $set: { 'result': 'completed' } });       // 14
  VelocityInternals.updateAggregateReports();                                                                          // 16
};                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/velocity_core/src/methods/reports/reports_reset.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/**                                                                                                                    //
 * Clear test and aggregate reports, either for a specific framework or for                                            //
 * all frameworks.                                                                                                     //
 *                                                                                                                     //
 * @method velocity/reports/reset                                                                                      //
 * @param {Object} [options]                                                                                           //
 *   @param {String} [options.framework] The name of a specific framework                                              //
 *                    to clear results for.  Ex. 'jasmine' or 'mocha'                                                  //
 *   @param {Array} [options.notIn] A list of test Ids which should be kept                                            //
 *                                  (not cleared).  These Ids must match the                                           //
 *                                  ones passed to `velocity/reports/submit`.                                          //
 */                                                                                                                    //
Velocity.Methods['velocity/reports/reset'] = function (options) {                                                      // 13
  var query = {};                                                                                                      // 14
                                                                                                                       //
  options = options || {};                                                                                             // 16
  check(options, {                                                                                                     // 17
    framework: Match.Optional(String),                                                                                 // 18
    notIn: Match.Optional([String])                                                                                    // 19
  });                                                                                                                  //
                                                                                                                       //
  if (options.framework) {                                                                                             // 22
    query.framework = options.framework;                                                                               // 23
    Velocity.Collections.AggregateReports.upsert({ name: options.framework }, { $set: { result: 'pending' } });        // 24
  }                                                                                                                    //
                                                                                                                       //
  if (options.notIn) {                                                                                                 // 28
    query = _.assign(query, { _id: { $nin: options.notIn } });                                                         // 29
  }                                                                                                                    //
                                                                                                                       //
  Velocity.Collections.TestReports.remove(query);                                                                      // 32
                                                                                                                       //
  VelocityInternals.updateAggregateReports();                                                                          // 34
};                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/velocity_core/src/methods/reports/reports_submit.js                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
//////////////////////////////////////////////////////////////////////                                                 //
// Reports                                                                                                             //
//                                                                                                                     //
                                                                                                                       //
/**                                                                                                                    //
 * Record the results of an individual test run; a simple collector of                                                 //
 * test data.                                                                                                          //
 *                                                                                                                     //
 * The `data` object is stored in its entirety; any field may be passed in.                                            //
 * The optional fields documented here are suggestions based on what the                                               //
 * standard html-reporter supports.  Whether or not a field is actually                                                //
 * used is up to the specific test reporter that the user has installed.                                               //
 *                                                                                                                     //
 * @method velocity/reports/submit                                                                                     //
 * @param {Object} data                                                                                                //
 *   @param {String} data.name Name of the test that was executed.                                                     //
 *   @param {String} data.framework Name of a testing framework.                                                       //
 *                                  For example, 'jasmine' or 'mocha'.                                                 //
 *   @param {String} data.result The results of the test.  Standard values                                             //
 *                               are 'passed' and 'failed'.  Different test                                            //
 *                               reporters can support other values.  For                                              //
 *                               example, the aggregate tests collection uses                                          //
 *                               'pending' to indicate that results are still                                          //
 *                               coming in.                                                                            //
 *   @param {String} [data.id] Used to update a specific test result.  If not                                          //
 *                             provided, frameworks can use the                                                        //
 *                             `velocity/reports/reset` Meteor method to                                               //
 *                             clear all tests.                                                                        //
 *   @param {Array} [data.ancestors] The hierarchy of suites and blocks above                                          //
 *                                   this test. For example,                                                           //
 *                                ['Template', 'leaderboard', 'selected_name']                                         //
 *   @param {Date} [data.timestamp] The time that the test started for this                                            //
 *                                  result.                                                                            //
 *   @param {Number} [data.duration] The test duration in milliseconds.                                                //
 *   @param {String} [data.browser] Which browser did the test run in?                                                 //
 *   @param {String} [data.failureType] For example, 'expect' or 'assert'                                              //
 *   @param {String} [data.failureMessage]                                                                             //
 *   @param {String} [data.failureStackTrace] The stack trace associated with                                          //
 *                                            the failure                                                              //
 */                                                                                                                    //
Velocity.Methods['velocity/reports/submit'] = function (data) {                                                        // 41
  check(data, Match.ObjectIncluding({                                                                                  // 42
    name: String,                                                                                                      // 43
    framework: String,                                                                                                 // 44
    result: String,                                                                                                    // 45
    id: Match.Optional(String),                                                                                        // 46
    ancestors: Match.Optional([String]),                                                                               // 47
    timestamp: Match.Optional(Match.OneOf(Date, String)),                                                              // 48
    duration: Match.Optional(Number),                                                                                  // 49
    browser: Match.Optional(String),                                                                                   // 50
    failureType: Match.Optional(Match.Any),                                                                            // 51
    failureMessage: Match.Optional(String),                                                                            // 52
    failureStackTrace: Match.Optional(Match.Any)                                                                       // 53
  }));                                                                                                                 //
                                                                                                                       //
  data.timestamp = data.timestamp ? new Date(data.timestamp) : new Date();                                             // 56
  data.id = data.id || Random.id();                                                                                    // 57
                                                                                                                       //
  Velocity.Collections.TestReports.upsert(data.id, { $set: data });                                                    // 59
                                                                                                                       //
  VelocityInternals.updateAggregateReports();                                                                          // 61
};                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/velocity_core/src/methods/copySampleTests.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var files = VelocityMeteorInternals.files;                                                                             // 1
var fs = Npm.require('fs-extra');                                                                                      // 2
var mkdirp = Meteor.wrapAsync(fs.mkdirp, fs);                                                                          // 3
                                                                                                                       //
/**                                                                                                                    //
 * Copy sample tests from frameworks `sample-tests` directories                                                        //
 * to the user's application's `tests` directory.                                                                      //
 *                                                                                                                     //
 * @method velocity/copySampleTests                                                                                    //
 *                                                                                                                     //
 * @param {Object} options                                                                                             //
 *   @param {String} options.framework Framework name. Ex. 'jasmine', 'mocha'                                          //
 */                                                                                                                    //
Velocity.Methods['velocity/copySampleTests'] = function (options) {                                                    // 14
  var sampleTestGenerator, sampleTests;                                                                                // 15
                                                                                                                       //
  options = options || {};                                                                                             // 18
  check(options, {                                                                                                     // 19
    framework: String                                                                                                  // 20
  });                                                                                                                  //
                                                                                                                       //
  this.unblock();                                                                                                      // 23
                                                                                                                       //
  sampleTestGenerator = VelocityInternals.frameworkConfigs[options.framework].sampleTestGenerator;                     // 25
  if (sampleTestGenerator) {                                                                                           // 26
    sampleTests = sampleTestGenerator(options);                                                                        // 27
                                                                                                                       //
    DEBUG && console.log('[velocity] found ', sampleTests.length, 'sample test files for', options.framework);         // 29
                                                                                                                       //
    sampleTests.forEach(function (testFile) {                                                                          // 32
      var fullTestPath = files.pathJoin(Velocity.getTestsPath(), testFile.path),                                       // 33
          testDir = files.pathDirname(fullTestPath);                                                                   //
                                                                                                                       //
      mkdirp(files.convertToOSPath(testDir));                                                                          // 36
      files.writeFile(fullTestPath, testFile.contents);                                                                // 37
    });                                                                                                                //
  }                                                                                                                    //
};                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/velocity_core/src/methods/featureTestDone.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/**                                                                                                                    //
 * Marks test file as DONE                                                                                             //
 *                                                                                                                     //
 * @method velocity/featureTestDone                                                                                    //
 *                                                                                                                     //
 * @param {Object} options                                                                                             //
 *   @param {String} options.featureId id of test                                                                      //
 */                                                                                                                    //
Velocity.Methods['velocity/featureTestDone'] = function (options) {                                                    // 9
  check(options, {                                                                                                     // 10
    featureId: String                                                                                                  // 11
  });                                                                                                                  //
                                                                                                                       //
  Velocity.Collections.TestFiles.update({                                                                              // 14
    _id: options.featureId                                                                                             // 15
  }, {                                                                                                                 //
    $set: { status: 'DONE' }                                                                                           // 17
  });                                                                                                                  //
};                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/velocity_core/src/methods/featureTestFailed.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/**                                                                                                                    //
 * Marks test file as TODO                                                                                             //
 *                                                                                                                     //
 * @method velocity/featureTestFailed                                                                                  //
 *                                                                                                                     //
 * @param {Object} options                                                                                             //
 *   @param {String} options.featureId id of test                                                                      //
 */                                                                                                                    //
Velocity.Methods['velocity/featureTestFailed'] = function (options) {                                                  // 9
  check(options, {                                                                                                     // 10
    featureId: String                                                                                                  // 11
  });                                                                                                                  //
                                                                                                                       //
  Velocity.Collections.TestFiles.update({                                                                              // 14
    _id: options.featureId                                                                                             // 15
  }, {                                                                                                                 //
    $set: {                                                                                                            // 17
      status: 'TODO',                                                                                                  // 18
      brokenPreviously: true                                                                                           // 19
    }                                                                                                                  //
  });                                                                                                                  //
};                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/velocity_core/src/methods/isEnabled.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/**                                                                                                                    //
 * Exposes the VELOCITY environment variable.                                                                          //
 *                                                                                                                     //
 * @method velocity/isEnabled                                                                                          //
 * @for Meteor.methods                                                                                                 //
 * @return {Boolean} true if VELOCITY environment variable is truthy.                                                  //
 *                   false if VELOCITY environment variable is falsy.                                                  //
 *                   Default: true                                                                                     //
 */                                                                                                                    //
Velocity.Methods['velocity/isEnabled'] = function () {                                                                 // 10
  var type = typeof process.env.VELOCITY;                                                                              // 11
                                                                                                                       //
  switch (type) {                                                                                                      // 13
    case 'undefined':                                                                                                  // 14
      return true;                                                                                                     // 15
    case 'string':                                                                                                     // 15
      if (process.env.VELOCITY.toLowerCase() === 'false' || parseInt(process.env.VELOCITY) === 0) {                    // 17
        return false;                                                                                                  // 19
      }                                                                                                                //
      return true;                                                                                                     // 21
    default:                                                                                                           // 21
      return !!process.env.VELOCITY;                                                                                   // 23
  }                                                                                                                    // 23
};                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/velocity_core/src/methods/isMirror.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/**                                                                                                                    //
 * Exposes the IS_MIRROR flag.                                                                                         //
 *                                                                                                                     //
 * @method velocity/isMirror                                                                                           //
 * @for Meteor.methods                                                                                                 //
 * @return {Boolean} true if currently running in mirror                                                               //
 */                                                                                                                    //
Velocity.Methods['velocity/isMirror'] = function () {                                                                  // 8
  return !!process.env.IS_MIRROR;                                                                                      // 9
};                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/velocity_core/src/methods/register_framework.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/**                                                                                                                    //
 * Registers a testing framework plugin via a Meteor method.                                                           //
 *                                                                                                                     //
 * @method velocity/register/framework                                                                                 //
 * @param {String} name The name of the testing framework.                                                             //
 * @param {Object} [options] Options for the testing framework.                                                        //
 *   @param {String} [options.regex] The regular expression for test files                                             //
 *                    that should be assigned to the testing framework.                                                //
 *                    The path relative to the tests folder is matched                                                 //
 *                    against it. Default: 'name/.+\.js$' (name is                                                     //
 *                    the testing framework name).                                                                     //
 *   @param {String} [options.disableAutoReset]   Velocity's reset cycle                                               //
 *                    will skip reports and logs for this framework.                                                   //
 *                    It is up to the framework to clean up its ****!                                                  //
 *   @param {Function} [options.sampleTestGenerator] sampleTestGenerator                                               //
 *                    returns an array of fileObjects with the following                                               //
 *                    fields:                                                                                          //
 *                      path - String - relative path to place test files                                              //
 *                                      (from PROJECT/tests)                                                           //
 *                      contents - String - contents to put in the test file                                           //
 *                                          at the corresponding path                                                  //
 */                                                                                                                    //
Velocity.Methods['velocity/register/framework'] = function (name, options) {                                           // 23
  options = options || {};                                                                                             // 24
  check(name, String);                                                                                                 // 25
  check(options, {                                                                                                     // 26
    disableAutoReset: Match.Optional(Boolean),                                                                         // 27
    regex: Match.Optional(RegExp),                                                                                     // 28
    sampleTestGenerator: Match.Optional(Function)                                                                      // 29
  });                                                                                                                  //
                                                                                                                       //
  VelocityInternals.frameworkConfigs[name] = VelocityInternals.parseTestingFrameworkOptions(name, options);            // 32
                                                                                                                       //
  // make sure the appropriate aggregate records are added                                                             //
  VelocityInternals.reset(name);                                                                                       // 35
};                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/velocity_core/src/methods/reset.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/**                                                                                                                    //
 * Clear all test reports, aggregate reports, and logs.                                                                //
 *                                                                                                                     //
 * @method velocity/reset                                                                                              //
 */                                                                                                                    //
Velocity.Methods['velocity/reset'] = function (name) {                                                                 // 6
  check(name, String);                                                                                                 // 7
  VelocityInternals.reset(name);                                                                                       // 8
};                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/velocity_core/src/methods/returnTODOTestAndMarkItAsDOING.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/**                                                                                                                    //
 * Finds a test file with TODO status                                                                                  //
 * changes the status to 'DOING', and returns it                                                                       //
 *                                                                                                                     //
 * @method velocity/returnTODOTestAndMarkItAsDOING                                                                     //
 *                                                                                                                     //
 * @param {Object} options                                                                                             //
 *   @param {String} options.framework Framework name. Ex. 'jasmine', 'mocha'                                          //
 */                                                                                                                    //
Velocity.Methods['velocity/returnTODOTestAndMarkItAsDOING'] = function (options) {                                     // 10
  check(options, {                                                                                                     // 11
    framework: String                                                                                                  // 12
  });                                                                                                                  //
                                                                                                                       //
  var _query = {                                                                                                       // 15
    targetFramework: options.framework,                                                                                // 16
    status: 'TODO'                                                                                                     // 17
  };                                                                                                                   //
                                                                                                                       //
  var _update = {                                                                                                      // 20
    $set: { status: 'DOING' }                                                                                          // 21
  };                                                                                                                   //
                                                                                                                       //
  var collectionObj = Velocity.Collections.TestFiles.rawCollection();                                                  // 25
  var wrappedFunc = Meteor.wrapAsync(collectionObj.findAndModify, collectionObj);                                      // 26
  var _TODOtest = wrappedFunc(_query, {}, _update, {});                                                                // 28
                                                                                                                       //
  return _TODOtest;                                                                                                    // 30
};                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/velocity_core/src/methods.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Meteor.methods(Velocity.Methods);                                                                                      // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/velocity_core/src/core.js                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/* globals                                                                                                             //
 DEBUG: true,                                                                                                          //
 CONTINUOUS_INTEGRATION: true                                                                                          //
 */                                                                                                                    //
                                                                                                                       //
DEBUG = !!process.env.VELOCITY_DEBUG;                                                                                  // 6
CONTINUOUS_INTEGRATION = process.env.VELOCITY_CI;                                                                      // 7
                                                                                                                       //
/**                                                                                                                    //
 * @module Velocity                                                                                                    //
 * @class Velocity                                                                                                     //
 */                                                                                                                    //
(function () {                                                                                                         // 13
  'use strict';                                                                                                        // 14
                                                                                                                       //
  //////////////////////////////////////////////////////////////////////                                               //
  // Init                                                                                                              //
  //                                                                                                                   //
                                                                                                                       //
  DEBUG && console.log('[velocity] adding velocity core');                                                             // 20
  CONTINUOUS_INTEGRATION && console.log('[velocity] is in continuous integration mode');                               // 21
                                                                                                                       //
  var _ = Npm.require('lodash');                                                                                       // 23
  var files = VelocityMeteorInternals.files;                                                                           // 24
  VelocityInternals.frameworkConfigs = {};                                                                             // 25
  var _watcher;                                                                                                        // 26
  var _velocityStarted = false;                                                                                        // 27
  var _velocityStartupFunctions = [];                                                                                  // 28
  var FIXTURE_REG_EXP = new RegExp('-fixture.(js|coffee)$');                                                           // 29
                                                                                                                       //
  _removeTerminatedMirrors();                                                                                          // 32
                                                                                                                       //
  _setReusableMirrors();                                                                                               // 34
                                                                                                                       //
  if (process.env.NODE_ENV === 'development' && process.env.VELOCITY !== '0' && !process.env.IS_MIRROR) {              // 36
    Meteor.startup((function () {                                                                                      // 40
      function initializeVelocity() {                                                                                  // 40
        DEBUG && console.log('[velocity] Server startup');                                                             // 41
        DEBUG && console.log('[velocity] app dir', Velocity.getAppPath());                                             // 42
        DEBUG && console.log('[velocity] config =', JSON.stringify(VelocityInternals.frameworkConfigs, null, 2));      // 43
                                                                                                                       //
        //kick-off everything                                                                                          //
        _resetAll();                                                                                                   // 46
                                                                                                                       //
        _initFileWatcher(VelocityInternals.frameworkConfigs, _triggerVelocityStartupFunctions);                        // 48
                                                                                                                       //
        _launchContinuousIntegration(VelocityInternals.frameworkConfigs);                                              // 50
      }                                                                                                                //
                                                                                                                       //
      return initializeVelocity;                                                                                       //
    })());                                                                                                             //
  }                                                                                                                    //
                                                                                                                       //
  //////////////////////////////////////////////////////////////////////                                               //
  // Public Methods                                                                                                    //
  //                                                                                                                   //
                                                                                                                       //
  _.extend(Velocity, {                                                                                                 // 59
                                                                                                                       //
    /**                                                                                                                //
     * Run code when Velocity is started.                                                                              //
     *                                                                                                                 //
     * Velocity is considered started when the file watcher has                                                        //
     * completed the scan of the file system.                                                                          //
     *                                                                                                                 //
     * @method startup                                                                                                 //
     * @return {function} A function to run on startup                                                                 //
     */                                                                                                                //
    startup: function (func) {                                                                                         // 70
      if (_velocityStarted) {                                                                                          // 71
        DEBUG && console.log('[velocity] Velocity already started. Immediately calling func');                         // 72
        func();                                                                                                        // 73
      } else {                                                                                                         //
        DEBUG && console.log('[velocity] Velocity not started. Queueing func');                                        // 75
        _velocityStartupFunctions.push(func);                                                                          // 76
      }                                                                                                                //
    },                                                                                                                 //
                                                                                                                       //
    /**                                                                                                                //
     * Get the application root path.                                                                                  //
     *                                                                                                                 //
     * @method getAppPath                                                                                              //
     * @return {String} app root path                                                                                  //
     */                                                                                                                //
    getAppPath: function () {                                                                                          // 86
      var appPath = files.findAppDir();                                                                                // 87
      if (appPath) {                                                                                                   // 88
        appPath = files.pathResolve(appPath);                                                                          // 89
      }                                                                                                                //
                                                                                                                       //
      return files.convertToOSPath(appPath);                                                                           // 92
    },                                                                                                                 //
                                                                                                                       //
    /**                                                                                                                //
     * Get path to application's or application package's 'tests' directory                                            //
     *                                                                                                                 //
     * @method getTestsPath                                                                                            //
     * @param {String} packageName optional package name                                                               //
     * @return {String} application's tests directory                                                                  //
     */                                                                                                                //
    getTestsPath: function (packageName) {                                                                             // 103
      return files.convertToOSPath(files.pathJoin(packageName ? Velocity.getPackagePath(packageName) : Velocity.getAppPath(), 'tests'));
    },                                                                                                                 //
                                                                                                                       //
    /**                                                                                                                //
     * Get path to application's 'packages' directory                                                                  //
     *                                                                                                                 //
     * @method getPackagesPath                                                                                         //
     * @return {String} application's packages directory                                                               //
     */                                                                                                                //
    getPackagesPath: function () {                                                                                     // 115
      return files.convertToOSPath(files.pathJoin(Velocity.getAppPath(), 'packages'));                                 // 116
    },                                                                                                                 //
                                                                                                                       //
    /**                                                                                                                //
     * Get path to application's package directory                                                                     //
     *                                                                                                                 //
     * @method getPackagesPath                                                                                         //
     * @param {String} packageName package name                                                                        //
     * @return {String} application's packages directory                                                               //
     */                                                                                                                //
    getPackagePath: function (packageName) {                                                                           // 126
      return files.convertToOSPath(files.pathJoin(Velocity.getPackagesPath(), packageName));                           // 127
    },                                                                                                                 //
                                                                                                                       //
    /**                                                                                                                //
     * A collection of callbacks to be executed after all tests have completed                                         //
     * and the aggregate test results have been reported.                                                              //
     *                                                                                                                 //
     * See {{#crossLink 'Velocity/addPostProcessor:method'}}{{/crossLink}}                                             //
     *                                                                                                                 //
     * @property postProcessors                                                                                        //
     * @type Array                                                                                                     //
     * @default []                                                                                                     //
     */                                                                                                                //
    postProcessors: [],                                                                                                // 141
                                                                                                                       //
    /**                                                                                                                //
     * Add a callback which will execute after all tests have completed                                                //
     * and after the aggregate test results have been reported.                                                        //
     *                                                                                                                 //
     * @method addPostProcessor                                                                                        //
     * @param {Function} processor                                                                                     //
     */                                                                                                                //
    addPostProcessor: function (processor) {                                                                           // 150
      Velocity.postProcessors.push(processor);                                                                         // 151
    },                                                                                                                 //
                                                                                                                       //
    /**                                                                                                                //
     * Get a message that displays where bugs in Velocity core itself should                                           //
     * be reported.                                                                                                    //
     *                                                                                                                 //
     * @method getReportGithubIssueMessage                                                                             //
     * @return {String} message with bug repo url                                                                      //
     */                                                                                                                //
    getReportGithubIssueMessage: function () {                                                                         // 161
      return 'Please report the issue here: ' + 'https://github.com/meteor-velocity/velocity/issues';                  // 162
    },                                                                                                                 //
                                                                                                                       //
    /**                                                                                                                //
     * Registers a testing framework plugin.                                                                           //
     *                                                                                                                 //
     * @method registerTestingFramework                                                                                //
     * @param {String} name The name of the testing framework.                                                         //
     * @param {Object} [options] Options for the testing framework.                                                    //
     *   @param {String} [options.regex] The regular expression for test files                                         //
     *                    that should be assigned to the testing framework.                                            //
     *                    The path relative to the tests folder is matched                                             //
     *                    against it. Default: 'name/.+\.js$' (name is                                                 //
     *                    the testing framework name).                                                                 //
     *   @param {String} [options.disableAutoReset]   Velocity's reset cycle                                           //
     *                    will skip reports and logs for this framework.                                               //
     *                    It is up to the framework to clean up its ****!                                              //
     *   @param {Function} [options.sampleTestGenerator] sampleTestGenerator                                           //
     *                    returns an array of fileObjects with the following                                           //
     *                    fields:                                                                                      //
     *                      path - String - relative path to place test files                                          //
     *                                      (from PROJECT/tests)                                                       //
     *                      contents - String - contents to put in the test file                                       //
     *                                          at the corresponding path                                              //
     */                                                                                                                //
    registerTestingFramework: function (name, options) {                                                               // 188
      DEBUG && console.log('[velocity] Register framework ' + name + ' with regex ' + options.regex);                  // 189
      VelocityInternals.frameworkConfigs[name] = VelocityInternals.parseTestingFrameworkOptions(name, options);        // 190
      // make sure the appropriate aggregate records are added                                                         //
      Velocity.Collections.AggregateReports.insert({                                                                   // 192
        name: name,                                                                                                    // 193
        result: 'pending'                                                                                              // 194
      });                                                                                                              //
    },                                                                                                                 //
                                                                                                                       //
    /**                                                                                                                //
     * Unregister a testing framework.  Mostly used for internal testing                                               //
     * of core Velocity functions.                                                                                     //
     *                                                                                                                 //
     * @method unregisterTestingFramework                                                                              //
     * @param {String} name Name of framework to unregister                                                            //
     */                                                                                                                //
    unregisterTestingFramework: function (name) {                                                                      // 205
      Velocity.Collections.TestReports.remove({ framework: name });                                                    // 206
      Velocity.Collections.Logs.remove({ framework: name });                                                           // 207
      Velocity.Collections.AggregateReports.remove({ name: name });                                                    // 208
      Velocity.Collections.TestFiles.remove({ targetFramework: name });                                                // 209
                                                                                                                       //
      delete VelocityInternals.frameworkConfigs[name];                                                                 // 211
    }                                                                                                                  //
  });                                                                                                                  //
                                                                                                                       //
  //////////////////////////////////////////////////////////////////////                                               //
  // Private functions                                                                                                 //
  //                                                                                                                   //
                                                                                                                       //
  function _triggerVelocityStartupFunctions() {                                                                        // 220
    _velocityStarted = true;                                                                                           // 221
    DEBUG && console.log('[velocity] Triggering queued startup functions');                                            // 222
                                                                                                                       //
    while (_velocityStartupFunctions.length) {                                                                         // 224
      var func = _velocityStartupFunctions.pop();                                                                      // 225
      func();                                                                                                          // 226
    }                                                                                                                  //
  }                                                                                                                    //
                                                                                                                       //
  VelocityInternals.parseTestingFrameworkOptions = function (name, options) {                                          // 230
    options = options || {};                                                                                           // 231
    _.defaults(options, {                                                                                              // 232
      name: name,                                                                                                      // 233
      regex: name + '/.+\\.js$'                                                                                        // 234
    });                                                                                                                //
                                                                                                                       //
    options._regexp = new RegExp(options.regex);                                                                       // 237
                                                                                                                       //
    return options;                                                                                                    // 239
  };                                                                                                                   //
                                                                                                                       //
  // Runs each test framework once when in continous integration mode.                                                 //
  function _launchContinuousIntegration() {                                                                            // 244
                                                                                                                       //
    if (CONTINUOUS_INTEGRATION) {                                                                                      // 246
      _.forEach(_getTestFrameworkNames(), function (testFramework) {                                                   // 247
        Meteor.call('velocity/logs/reset', { framework: testFramework }, function () {                                 // 248
                                                                                                                       //
          Meteor.call(testFramework + '/reset', function () {});                                                       // 250
          Meteor.call(testFramework + '/run', function () {});                                                         // 251
        });                                                                                                            //
      });                                                                                                              //
    }                                                                                                                  //
  }                                                                                                                    //
                                                                                                                       //
  /**                                                                                                                  //
   * Initialize the directory/file watcher.                                                                            //
   *                                                                                                                   //
   * @method _initFileWatcher                                                                                          //
   * @param {Object} config See {{#crossLink 'Velocity/registerTestingFramework:method'}}{{/crossLink}}                //
   * @param {function} callback  Called after the watcher completes its first scan and is ready                        //
   * @private                                                                                                          //
   */                                                                                                                  //
  function _initFileWatcher(config, callback) {                                                                        // 265
    var paths, packagesPath;                                                                                           // 266
                                                                                                                       //
    Velocity.Collections.TestFiles.remove({});                                                                         // 269
    Velocity.Collections.FixtureFiles.remove({});                                                                      // 270
                                                                                                                       //
    paths = [Velocity.getTestsPath()];                                                                                 // 272
    packagesPath = Velocity.getPackagesPath();                                                                         // 273
                                                                                                                       //
    if (VelocityInternals.isDirectory(packagesPath)) {                                                                 // 275
      var packageNames = files.readdir(packagesPath),                                                                  // 276
          packageTestsPaths = _.chain(packageNames).filter(_isPackageWithTests).map(Velocity.getTestsPath).value();    //
      paths.push.apply(paths, packageTestsPaths);                                                                      // 281
    }                                                                                                                  //
                                                                                                                       //
    paths = _.map(paths, files.convertToOSPath);                                                                       // 284
                                                                                                                       //
    DEBUG && console.log('[velocity] Add paths to watcher', paths);                                                    // 286
                                                                                                                       //
    _watcher = chokidar.watch(paths, {                                                                                 // 288
      ignored: /[\/\\](\.|node_modules)/,                                                                              // 289
      persistent: true                                                                                                 // 290
    });                                                                                                                //
    _watcher.on('add', Meteor.bindEnvironment(function (filePath) {                                                    // 292
      var relativePath, packageRelativePath, targetFramework, data;                                                    // 293
                                                                                                                       //
      filePath = files.convertToStandardPath(files.pathNormalize(filePath));                                           // 298
      relativePath = _getRelativePath(filePath);                                                                       // 299
                                                                                                                       //
      // if this is a fixture file, put it in the fixtures collection                                                  //
      if (FIXTURE_REG_EXP.test(relativePath)) {                                                                        // 302
        DEBUG && console.log('[velocity] Found fixture file', relativePath);                                           // 303
        Velocity.Collections.FixtureFiles.insert({                                                                     // 304
          _id: filePath,                                                                                               // 305
          absolutePath: filePath,                                                                                      // 306
          relativePath: relativePath,                                                                                  // 307
          lastModified: Date.now()                                                                                     // 308
        });                                                                                                            //
        // bail early                                                                                                  //
        return;                                                                                                        // 311
      }                                                                                                                //
                                                                                                                       //
      DEBUG && console.log('[velocity] Search framework for path', relativePath);                                      // 314
                                                                                                                       //
      packageRelativePath = relativePath.indexOf('packages') === 0 ? relativePath.split('/').slice(2).join('/') : relativePath;
                                                                                                                       //
      // test against each test framework's regexp matcher, use first one that matches                                 //
      targetFramework = _.find(config, function (framework) {                                                          // 321
        return framework._regexp.test(packageRelativePath);                                                            // 322
      });                                                                                                              //
                                                                                                                       //
      if (targetFramework) {                                                                                           // 325
        DEBUG && console.log('[velocity] Target framework for', relativePath, 'is', targetFramework.name);             // 326
                                                                                                                       //
        data = {                                                                                                       // 328
          _id: filePath,                                                                                               // 329
          name: files.pathBasename(filePath),                                                                          // 330
          absolutePath: filePath,                                                                                      // 331
          relativePath: relativePath,                                                                                  // 332
          targetFramework: targetFramework.name,                                                                       // 333
          lastModified: Date.now()                                                                                     // 334
        };                                                                                                             //
                                                                                                                       //
        Velocity.Collections.TestFiles.insert(data);                                                                   // 337
      } else {                                                                                                         //
        DEBUG && console.log('[velocity] No framework registered for', relativePath);                                  // 339
      }                                                                                                                //
    })); // end watcher.on 'add'                                                                                       //
                                                                                                                       //
    _watcher.on('change', Meteor.bindEnvironment(function (filePath) {                                                 // 343
      DEBUG && console.log('[velocity] File changed:', _getRelativePath(filePath));                                    // 344
                                                                                                                       //
      // Since we key on filePath and we only add files we're interested in,                                           //
      // we don't have to worry about inadvertently updating records for files                                         //
      // we don't care about.                                                                                          //
      filePath = files.convertToStandardPath(files.pathNormalize(filePath));                                           // 349
      Velocity.Collections.TestFiles.update(filePath, { $set: { lastModified: Date.now() } });                         // 350
    }));                                                                                                               //
                                                                                                                       //
    _watcher.on('unlink', Meteor.bindEnvironment(function (filePath) {                                                 // 353
      filePath = files.convertToStandardPath(files.pathNormalize(filePath));                                           // 354
      DEBUG && console.log('[velocity] File removed:', _getRelativePath(filePath));                                    // 355
                                                                                                                       //
      Velocity.Collections.TestFiles.remove(filePath);                                                                 // 358
    }));                                                                                                               //
                                                                                                                       //
    _watcher.on('ready', Meteor.bindEnvironment(function () {                                                          // 361
      DEBUG && console.log('[velocity] File scan complete, now watching', Velocity.getTestsPath().substring(Velocity.getAppPath().length));
                                                                                                                       //
      callback && callback();                                                                                          // 365
    }));                                                                                                               //
  } // end _initFileWatcher                                                                                            //
                                                                                                                       //
  function _isPackageWithTests(packageName) {                                                                          // 371
    return packageName !== 'tests-proxy' && VelocityInternals.isDirectory(Velocity.getTestsPath(packageName));         // 372
  }                                                                                                                    //
                                                                                                                       //
  /**                                                                                                                  //
   * Clear test reports, aggregate reports, and logs for a specific framework.                                         //
   *                                                                                                                   //
   * @method VelocityInternals.reset                                                                                   //
   * @param {String} name Framework to reset                                                                           //
   */                                                                                                                  //
  VelocityInternals.reset = function (name) {                                                                          // 383
    DEBUG && console.log('[velocity] resetting', name);                                                                // 384
                                                                                                                       //
    Velocity.Collections.Logs.remove({ framework: name });                                                             // 386
    Velocity.Collections.TestReports.remove({ framework: name });                                                      // 387
    Velocity.Collections.AggregateReports.remove({ name: name });                                                      // 388
                                                                                                                       //
    Velocity.Collections.AggregateReports.insert({                                                                     // 390
      name: name,                                                                                                      // 391
      result: 'pending'                                                                                                // 392
    });                                                                                                                //
  };                                                                                                                   //
                                                                                                                       //
  /**                                                                                                                  //
   * Clear all test reports, aggregate reports, and logs.                                                              //
   *                                                                                                                   //
   * @method _resetAll                                                                                                 //
   * @param {Object} config See {{#crossLink 'Velocity/registerTestingFramework:method'}}{{/crossLink}}                //
   * @private                                                                                                          //
   */                                                                                                                  //
  function _resetAll() {                                                                                               // 403
    var allFrameworks, frameworksToIgnore;                                                                             // 404
                                                                                                                       //
    DEBUG && console.log('[velocity] resetting the world');                                                            // 407
                                                                                                                       //
    allFrameworks = _getTestFrameworkNames();                                                                          // 409
                                                                                                                       //
    // ignore frameworks that have opted-out                                                                           //
    frameworksToIgnore = _(VelocityInternals.frameworkConfigs).where({ disableAutoReset: true }).pluck('_resetAllname').value();
                                                                                                                       //
    DEBUG && console.log('[velocity] frameworks with disable auto reset:', frameworksToIgnore);                        // 417
                                                                                                                       //
    Velocity.Collections.AggregateReports.remove({});                                                                  // 420
    Velocity.Collections.Logs.remove({ framework: { $nin: frameworksToIgnore } });                                     // 421
    Velocity.Collections.TestReports.remove({ framework: { $nin: frameworksToIgnore } });                              // 422
                                                                                                                       //
    _.forEach(allFrameworks, function (testFramework) {                                                                // 424
      Velocity.Collections.AggregateReports.insert({                                                                   // 425
        name: testFramework,                                                                                           // 426
        result: 'pending'                                                                                              // 427
      });                                                                                                              //
    });                                                                                                                //
  }                                                                                                                    //
                                                                                                                       //
  /**                                                                                                                  //
   * If any one test has failed, mark the aggregate test result as failed.                                             //
   *                                                                                                                   //
   * @method VelocityInternals.updateAggregateReports                                                                  //
   */                                                                                                                  //
  VelocityInternals.updateAggregateReports = function () {                                                             // 438
    var aggregateResult,                                                                                               // 439
        completedFrameworksCount,                                                                                      //
        allFrameworks = _getTestFrameworkNames();                                                                      //
                                                                                                                       //
    Velocity.Collections.AggregateReports.upsert({ name: 'aggregateResult' }, { $set: { result: 'pending' } });        // 443
    Velocity.Collections.AggregateReports.upsert({ name: 'aggregateComplete' }, { $set: { result: 'pending' } });      // 445
                                                                                                                       //
    // if all of our test reports have valid results                                                                   //
    if (!Velocity.Collections.TestReports.findOne({ result: '' })) {                                                   // 449
                                                                                                                       //
      // pessimistically set passed state, ensuring all other states                                                   //
      // take precedence in order below                                                                                //
      aggregateResult = Velocity.Collections.TestReports.findOne({ result: 'failed' }) || Velocity.Collections.TestReports.findOne({ result: 'undefined' }) || Velocity.Collections.TestReports.findOne({ result: 'skipped' }) || Velocity.Collections.TestReports.findOne({ result: 'pending' }) || Velocity.Collections.TestReports.findOne({ result: 'passed' }) || { result: 'pending' };
                                                                                                                       //
      // update the global status                                                                                      //
      Velocity.Collections.AggregateReports.update({ name: 'aggregateResult' }, { $set: { result: aggregateResult.result } });
    }                                                                                                                  //
                                                                                                                       //
    // Check if all test frameworks have completed successfully                                                        //
    completedFrameworksCount = Velocity.Collections.AggregateReports.find({                                            // 468
      name: { $in: allFrameworks },                                                                                    // 469
      result: 'completed'                                                                                              // 470
    }).count();                                                                                                        //
                                                                                                                       //
    if (allFrameworks.length === completedFrameworksCount) {                                                           // 473
      Velocity.Collections.AggregateReports.update({ name: 'aggregateComplete' }, { $set: { 'result': 'completed' } });
      _.each(Velocity.postProcessors, function (processor) {                                                           // 476
        processor();                                                                                                   // 477
      });                                                                                                              //
    }                                                                                                                  //
  };                                                                                                                   //
                                                                                                                       //
  function _getRelativePath(filePath) {                                                                                // 482
    var relativePath = filePath.substring(Velocity.getAppPath().length);                                               // 483
                                                                                                                       //
    if (relativePath[0] === '/') {                                                                                     // 485
      relativePath = relativePath.substring(1);                                                                        // 486
    }                                                                                                                  //
    return relativePath;                                                                                               // 488
  }                                                                                                                    //
                                                                                                                       //
  function _getTestFrameworkNames() {                                                                                  // 491
    return _.pluck(VelocityInternals.frameworkConfigs, 'name');                                                        // 492
  }                                                                                                                    //
                                                                                                                       //
  function _removeTerminatedMirrors() {                                                                                // 495
    // Remove terminated mirrors from previous runs                                                                    //
    // This is needed for `meteor --test` to work properly                                                             //
    Velocity.Collections.Mirrors.find({}).forEach(function (mirror) {                                                  // 498
      try {                                                                                                            // 499
        process.kill(mirror.pid, 0);                                                                                   // 500
      } catch (error) {                                                                                                //
        Velocity.Collections.Mirrors.remove({ pid: mirror.pid });                                                      // 502
      }                                                                                                                //
    });                                                                                                                //
  }                                                                                                                    //
                                                                                                                       //
  function _setReusableMirrors() {                                                                                     // 507
    Velocity.reusableMirrors = [];                                                                                     // 508
    Velocity.Collections.Mirrors.find({}).forEach(function (mirror) {                                                  // 509
      mirror.reused = false;                                                                                           // 510
      Velocity.reusableMirrors.push(mirror);                                                                           // 511
    });                                                                                                                //
  }                                                                                                                    //
})();                                                                                                                  //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/velocity_core/src/core-shared.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function () {                                                                                                         // 1
  'use strict';                                                                                                        // 2
                                                                                                                       //
  //////////////////////////////////////////////////////////////////////                                               //
  // Public Methods                                                                                                    //
  //                                                                                                                   //
                                                                                                                       //
  /**                                                                                                                  //
   * Mirrors can share the same codebase as the main process.                                                          //
   * This method will run provided code inside a mirror only.                                                          //
   *                                                                                                                   //
   * where: client / server                                                                                            //
   *                                                                                                                   //
   * @method onTest                                                                                                    //
   * @for Velocity                                                                                                     //
   * @param {Function} code                                                                                            //
   */                                                                                                                  //
  Velocity.onTest = function (code) {                                                                                  // 18
    Meteor.call('velocity/isMirror', function (err, res) {                                                             // 19
      if (res) {                                                                                                       // 20
        code();                                                                                                        // 21
      }                                                                                                                //
    });                                                                                                                //
  };                                                                                                                   //
                                                                                                                       //
  if (Meteor.isServer) {                                                                                               // 26
    /**                                                                                                                //
     * See <a href="Meteor.methods.html#method_velocity/setOption">velocity/setOption</a>                              //
     *                                                                                                                 //
     * @method setOption                                                                                               //
     */                                                                                                                //
    Velocity.setOption = function (name, value) {                                                                      // 32
      Meteor.call('velocity/setOption', name, value);                                                                  // 33
    };                                                                                                                 //
                                                                                                                       //
    /**                                                                                                                //
     * See <a href="Meteor.methods.html#method_velocity/setOptions">velocity/setOptions</a>                            //
     *                                                                                                                 //
     * @method setOptions                                                                                              //
     */                                                                                                                //
    Velocity.setOptions = function (options) {                                                                         // 41
      Meteor.call('velocity/setOptions', options);                                                                     // 42
    };                                                                                                                 //
                                                                                                                       //
    /**                                                                                                                //
     * See <a href="Meteor.methods.html#method_velocity/getOption">velocity/getOption</a>                              //
     *                                                                                                                 //
     * @method getOption                                                                                               //
     * @for Velocity                                                                                                   //
     */                                                                                                                //
    Velocity.getOption = function (name) {                                                                             // 51
      return Meteor.call('velocity/getOption', name);                                                                  // 52
    };                                                                                                                 //
  }                                                                                                                    //
})();                                                                                                                  //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/velocity_core/src/mirrors/mirrorRegistrar.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/* globals                                                                                                             //
 DEBUG: true,                                                                                                          //
 WebApp: false                                                                                                         //
 */                                                                                                                    //
                                                                                                                       //
DEBUG = !!process.env.VELOCITY_DEBUG;                                                                                  // 6
                                                                                                                       //
(function () {                                                                                                         // 8
  'use strict';                                                                                                        // 9
                                                                                                                       //
  //////////////////////////////////////////////////////////////////////                                               //
  // This code will run inside a mirror and connects the mirror to                                                     //
  // velocity via ddp once the mirror starts. Velocity will then                                                       //
  // inform frameworks this mirror is ready.                                                                           //
  //                                                                                                                   //
  if (process.env.IS_MIRROR) {                                                                                         // 16
    if (process.env.HANDSHAKE) {                                                                                       // 17
      WebApp.onListening(function () {                                                                                 // 18
        DEBUG && console.log('[velocity] Mirror started. Connecting via DDP to parent');                               // 19
                                                                                                                       //
        var velocityConnection = DDP.connect(process.env.PARENT_URL);                                                  // 21
        velocityConnection.onReconnect = function () {                                                                 // 22
          DEBUG && console.log('[velocity] Mirror connected to parent. Registering mirror...');                        // 23
          velocityConnection.call('velocity/mirrors/register', {                                                       // 24
            framework: process.env.FRAMEWORK,                                                                          // 25
            host: process.env.HOST,                                                                                    // 26
            port: process.env.MIRROR_PORT                                                                              // 27
          }, function (error) {                                                                                        //
            if (error) {                                                                                               // 29
              console.error('[velocity] Could not connect to parent via DDP. ' + 'Please restart your app and try again. ' + 'If this happens often please report it as issue to velocity:core.', error);
            }                                                                                                          //
            // Disconnect because we no longer need the connection                                                     //
            velocityConnection.disconnect();                                                                           // 38
          });                                                                                                          //
        };                                                                                                             //
      });                                                                                                              //
    } else {                                                                                                           //
      DEBUG && console.log('[velocity] Mirror', process.env.MIRROR_PORT, 'configured not to handshake');               // 44
    }                                                                                                                  //
  }                                                                                                                    //
})();                                                                                                                  //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['velocity:core'] = {
  Velocity: Velocity,
  VelocityTestFiles: VelocityTestFiles,
  VelocityFixtureFiles: VelocityFixtureFiles,
  VelocityTestReports: VelocityTestReports,
  VelocityAggregateReports: VelocityAggregateReports,
  VelocityLogs: VelocityLogs,
  VelocityMirrors: VelocityMirrors,
  VelocityOptions: VelocityOptions
};

})();

//# sourceMappingURL=velocity_core.js.map
