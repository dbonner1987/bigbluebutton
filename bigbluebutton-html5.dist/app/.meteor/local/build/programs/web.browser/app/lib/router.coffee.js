(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/router.coffee.js                                                //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
this.Router.configure({                                                // 1
  layoutTemplate: 'layout'                                             // 1
});                                                                    //
                                                                       //
this.Router.map(function() {                                           // 1
  this.route("main", {                                                 // 5
    path: "/html5client/:meeting_id/:user_id/:auth_token",             // 6
    onBeforeAction: function() {                                       // 6
      var applyNewSessionVars, authToken, meetingId, userId;           // 8
      meetingId = this.params.meeting_id;                              // 8
      userId = this.params.user_id;                                    // 8
      authToken = this.params.auth_token;                              // 8
      if ((authToken == null) || (meetingId == null) || (userId == null)) {
        document.location = getInSession('logoutURL');                 // 15
      } else {                                                         //
        Meteor.call("validateAuthToken", meetingId, userId, authToken);
        applyNewSessionVars = function() {                             // 18
          setInSession("authToken", authToken);                        // 21
          setInSession("meetingId", meetingId);                        // 21
          setInSession("userId", userId);                              // 21
          return Router.go('/html5client');                            //
        };                                                             //
        clearSessionVar(applyNewSessionVars);                          // 18
      }                                                                //
      return this.next();                                              //
    }                                                                  //
  });                                                                  //
  this.route("signedin", {                                             // 5
    path: "/html5client",                                              // 33
    action: function() {                                               // 33
      var authToken, meetingId, onErrorFunction, userId;               // 35
      meetingId = getInSession("meetingId");                           // 35
      userId = getInSession("userId");                                 // 35
      authToken = getInSession("authToken");                           // 35
      onErrorFunction = function(error, result) {                      // 35
        console.log("ONERRORFUNCTION");                                // 40
        Meteor.call("userLogout", meetingId, userId, authToken);       // 40
        clearSessionVar(alert("Please sign in again"));                // 40
        document.location = getInSession('logoutURL') || '/';          // 40
      };                                                               //
      Meteor.subscribe('chat', meetingId, userId, authToken, {         // 35
        onError: onErrorFunction,                                      // 52
        onReady: (function(_this) {                                    // 52
          return function() {                                          //
            return Meteor.subscribe('shapes', meetingId, {             //
              onReady: function() {                                    // 53
                return Meteor.subscribe('slides', meetingId, {         //
                  onReady: function() {                                // 54
                    return Meteor.subscribe('meetings', meetingId, {   //
                      onReady: function() {                            // 55
                        return Meteor.subscribe('presentations', meetingId, {
                          onReady: function() {                        // 56
                            return Meteor.subscribe('users', meetingId, userId, authToken, {
                              onError: onErrorFunction,                // 57
                              onReady: function() {                    // 57
                                return Meteor.subscribe('whiteboard-clean-status', meetingId, {
                                  onReady: function() {                // 58
                                    var a, handleLogourUrlError;       // 59
                                    Meteor.subscribe('bbb_poll', meetingId, userId, authToken, {
                                      onReady: function() {}           // 59
                                    });                                //
                                    _this.render('main');              // 59
                                    onLoadComplete();                  // 59
                                    handleLogourUrlError = function() {
                                      alert("Error: could not find the logoutURL");
                                      setInSession("logoutURL", document.location.hostname);
                                    };                                 //
                                    a = $.ajax({                       // 59
                                      dataType: 'json',                // 70
                                      url: '/bigbluebutton/api/enter'  // 70
                                    });                                //
                                    a.done(function(data) {            // 59
                                      if (data.response.logoutURL != null) {
                                        setInSession("logoutURL", data.response.logoutURL);
                                      } else {                         //
                                        if (data.response.logoutUrl != null) {
                                          setInSession("logoutURL", data.response.logoutUrl);
                                        } else {                       //
                                          return handleLogourUrlError();
                                        }                              //
                                      }                                //
                                    });                                //
                                    return a.fail(function(data, textStatus, errorThrown) {
                                      return handleLogourUrlError();   //
                                    });                                //
                                  }                                    //
                                });                                    //
                              }                                        //
                            });                                        //
                          }                                            //
                        });                                            //
                      }                                                //
                    });                                                //
                  }                                                    //
                });                                                    //
              }                                                        //
            });                                                        //
          };                                                           //
        })(this)                                                       //
      });                                                              //
      return this.render('loading');                                   //
    }                                                                  //
  });                                                                  //
  this.route('meteorEndpoint', {                                       // 5
    path: '/check',                                                    // 90
    where: 'server',                                                   // 90
    action: function() {                                               // 90
      this.response.writeHead(200, {                                   // 93
        'Content-Type': 'application/json'                             // 93
      });                                                              //
      this.response.end(JSON.stringify({                               // 93
        "html5clientStatus": "running"                                 // 96
      }));                                                             //
    }                                                                  //
  });                                                                  //
});                                                                    // 3
                                                                       //
/////////////////////////////////////////////////////////////////////////

}).call(this);
