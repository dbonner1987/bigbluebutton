(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/views/users/user_list.coffee.js                              //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Template.usersList.helpers({                                           // 1
  getInfoNumberOfUsers: function() {                                   // 2
    var numberUsers;                                                   // 3
    numberUsers = BBB.getNumberOfUsers();                              // 3
    if (numberUsers > 8) {                                             // 4
      return "Users: " + numberUsers;                                  // 5
    }                                                                  //
  }                                                                    //
});                                                                    //
                                                                       //
Template.usersList.rendered = function() {                             // 1
  $('.userlistMenu').resizable({                                       // 9
    handles: 'e',                                                      // 10
    maxWidth: 600,                                                     // 10
    minWidth: 200,                                                     // 10
    resize: function() {                                               // 10
      return adjustChatInputHeight();                                  //
    }                                                                  //
  });                                                                  //
  Tracker.autorun(function(comp) {                                     // 9
    setInSession('userListRenderedTime', TimeSync.serverTime());       // 17
    if (getInSession('userListRenderedTime') !== void 0) {             // 18
      return comp.stop();                                              //
    }                                                                  //
  });                                                                  //
  if (isPhone()) {                                                     // 21
    return $('.userlistMenu').addClass('hiddenInLandscape');           //
  }                                                                    //
};                                                                     // 8
                                                                       //
/////////////////////////////////////////////////////////////////////////

}).call(this);
