(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// collections/collections.coffee.js                                   //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.Users = new Meteor.Collection("bbb_users");                     // 1
                                                                       //
Meteor.Chat = new Meteor.Collection("bbb_chat");                       // 1
                                                                       //
Meteor.Meetings = new Meteor.Collection("meetings");                   // 1
                                                                       //
Meteor.Presentations = new Meteor.Collection("presentations");         // 1
                                                                       //
Meteor.Shapes = new Meteor.Collection("shapes");                       // 1
                                                                       //
Meteor.Slides = new Meteor.Collection("slides");                       // 1
                                                                       //
Meteor.Polls = new Meteor.Collection("bbb_poll");                      // 1
                                                                       //
Meteor.WhiteboardCleanStatus = new Meteor.Collection("whiteboard-clean-status");
                                                                       //
/////////////////////////////////////////////////////////////////////////

}).call(this);
