(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/main.coffee.js                                               //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var loadLib;                                                           // 2
                                                                       //
loadLib = function(libname) {                                          // 2
  var retryMessageCallback, successCallback;                           // 3
  successCallback = function() {};                                     // 3
  retryMessageCallback = function(param) {                             // 3
    return console.log("Failed to load library", param);               //
  };                                                                   //
  return Meteor.Loader.loadJs(window.location.origin + "/client/lib/" + libname, successCallback, 10000).fail(retryMessageCallback);
};                                                                     // 2
                                                                       //
Meteor.startup(function() {                                            // 2
  loadLib('sip.js');                                                   // 14
  loadLib('bbb_webrtc_bridge_sip.js');                                 // 14
  loadLib('bbblogger.js');                                             // 14
  return this.SessionAmplify = _.extend({}, Session, {                 //
    keys: _.object(_.map(amplify.store.sessionStorage(), function(value, key) {
      return [key, JSON.stringify(value)];                             //
    })),                                                               //
    set: function(key, value) {                                        // 19
      Session.set.apply(this, arguments);                              // 26
      amplify.store.sessionStorage(key, value);                        // 26
    }                                                                  //
  });                                                                  //
});                                                                    // 12
                                                                       //
Template.header.events({                                               // 2
  "click .chatBarIcon": function(event) {                              // 32
    $(".tooltip").hide();                                              // 33
    return toggleChatbar();                                            //
  },                                                                   //
  "click .hideNavbarIcon": function(event) {                           // 32
    $(".tooltip").hide();                                              // 37
    return toggleNavbar();                                             //
  },                                                                   //
  "click .leaveAudioButton": function(event) {                         // 32
    return exitVoiceCall(event);                                       //
  },                                                                   //
  "click .muteIcon": function(event) {                                 // 32
    $(".tooltip").hide();                                              // 44
    return toggleMic(this);                                            //
  },                                                                   //
  "click .hideNavbarIcon": function(event) {                           // 32
    $(".tooltip").hide();                                              // 48
    return toggleNavbar();                                             //
  },                                                                   //
  "click .videoFeedIcon": function(event) {                            // 32
    $(".tooltip").hide();                                              // 52
    return toggleCam(this);                                            //
  },                                                                   //
  "click .toggleUserlistButton": function(event) {                     // 32
    if (isLandscape() || isLandscapeMobile()) {                        // 56
      return toggleUsersList();                                        //
    } else {                                                           //
      if ($('.settingsMenu').hasClass('menuOut')) {                    // 59
        toggleSettingsMenu();                                          // 60
        toggleRightHamburderIcon();                                    // 60
      } else {                                                         //
        toggleShield();                                                // 63
      }                                                                //
      toggleUserlistMenu();                                            // 59
      return toggleLeftHamburderIcon();                                //
    }                                                                  //
  },                                                                   //
  "click .toggleMenuButton": function(event) {                         // 32
    if ($('.userlistMenu').hasClass('menuOut')) {                      // 68
      toggleUserlistMenu();                                            // 69
      toggleLeftHamburderIcon();                                       // 69
    } else {                                                           //
      toggleShield();                                                  // 72
    }                                                                  //
    toggleSettingsMenu();                                              // 68
    return toggleRightHamburderIcon();                                 //
  },                                                                   //
  "click .btn": function(event) {                                      // 32
    return $(".ui-tooltip").hide();                                    //
  }                                                                    //
});                                                                    //
                                                                       //
Template.menu.events({                                                 // 2
  'click .slideButton': function(event) {                              // 80
    toggleShield();                                                    // 81
    toggleSettingsMenu();                                              // 81
    toggleRightHamburderIcon();                                        // 81
    return $('.slideButton').blur();                                   //
  },                                                                   //
  'click .toggleChatButton': function(event) {                         // 80
    return toggleChatbar();                                            //
  }                                                                    //
});                                                                    //
                                                                       //
Template.main.rendered = function() {                                  // 2
  var lastOrientationWasLandscape;                                     // 90
  $("#dialog").dialog({                                                // 90
    modal: true,                                                       // 91
    draggable: false,                                                  // 91
    resizable: false,                                                  // 91
    autoOpen: false,                                                   // 91
    dialogClass: 'no-close logout-dialog',                             // 91
    buttons: [                                                         // 91
      {                                                                //
        text: 'Yes',                                                   // 97
        click: function() {                                            // 97
          userLogout(BBB.getMeetingId(), getInSession("userId"), true);
          return $(this).dialog("close");                              //
        },                                                             //
        "class": 'btn btn-xs btn-primary active'                       // 97
      }, {                                                             //
        text: 'No',                                                    // 104
        click: function() {                                            // 104
          $(this).dialog("close");                                     // 107
          return $(".tooltip").hide();                                 //
        },                                                             //
        "class": 'btn btn-xs btn-default'                              // 104
      }                                                                //
    ],                                                                 //
    open: function(event, ui) {                                        // 91
      return $('.ui-widget-overlay').bind('click', function() {        //
        if (isMobile()) {                                              // 114
          return $("#dialog").dialog('close');                         //
        }                                                              //
      });                                                              //
    },                                                                 //
    position: {                                                        // 91
      my: 'right top',                                                 // 117
      at: 'right bottom',                                              // 117
      of: '.signOutIcon'                                               // 117
    }                                                                  //
  });                                                                  //
  lastOrientationWasLandscape = isLandscape();                         // 90
  $(window).resize(function() {                                        // 90
    $('#dialog').dialog('close');                                      // 125
    if (isLandscape() && !lastOrientationWasLandscape) {               // 128
      orientationBecameLandscape();                                    // 129
      return lastOrientationWasLandscape = true;                       //
    } else if (isPortrait() && lastOrientationWasLandscape) {          //
      orientationBecamePortrait();                                     // 132
      return lastOrientationWasLandscape = false;                      //
    }                                                                  //
  });                                                                  //
  $('#shield').click(function() {                                      // 90
    return toggleSlidingMenu();                                        //
  });                                                                  //
  if (Meteor.config.app.autoJoinAudio) {                               // 139
    return onAudioJoinHelper();                                        //
  }                                                                    //
};                                                                     // 89
                                                                       //
Template.main.events({                                                 // 2
  'click .shield': function(event) {                                   // 143
    $(".tooltip").hide();                                              // 144
    toggleShield();                                                    // 144
    return closeMenus();                                               //
  },                                                                   //
  'click .settingsIcon': function(event) {                             // 143
    return $("#settingsModal").foundation('reveal', 'open');           //
  },                                                                   //
  'click .signOutIcon': function(event) {                              // 143
    $('.signOutIcon').blur();                                          // 152
    return $("#logoutModal").foundation('reveal', 'open');             //
  }                                                                    //
});                                                                    //
                                                                       //
Template.main.gestures({                                               // 2
  'panstart #container': function(event, template) {                   // 156
    var initTransformValue, menuPanned, panIsValid, screenWidth;       // 157
    if (isPortraitMobile() && isPanHorizontal(event)) {                // 157
      panIsValid = getInSession('panIsValid');                         // 158
      initTransformValue = getInSession('initTransform');              // 158
      menuPanned = getInSession('menuPanned');                         // 158
      screenWidth = $('#container').width();                           // 158
      setInSession('panStarted', true);                                // 158
      if (panIsValid && menuPanned === 'left' && initTransformValue + event.deltaX >= 0 && initTransformValue + event.deltaX <= $('.left-drawer').width()) {
        return $('.left-drawer').css('transform', 'translateX(' + (initTransformValue + event.deltaX) + 'px)');
      } else if (panIsValid && menuPanned === 'right' && initTransformValue + event.deltaX >= screenWidth - $('.right-drawer').width() && initTransformValue + event.deltaX <= screenWidth) {
        return $('.right-drawer').css('transform', 'translateX(' + (initTransformValue + event.deltaX) + 'px)');
      }                                                                //
    }                                                                  //
  },                                                                   //
  'panend #container': function(event, template) {                     // 156
    var leftDrawerWidth, menuPanned, panIsValid, screenWidth;          // 178
    if (isPortraitMobile()) {                                          // 178
      panIsValid = getInSession('panIsValid');                         // 179
      menuPanned = getInSession('menuPanned');                         // 179
      leftDrawerWidth = $('.left-drawer').width();                     // 179
      screenWidth = $('#container').width();                           // 179
      setInSession('panStarted', false);                               // 179
      if (panIsValid && menuPanned === 'left' && $('.left-drawer').css('transform') !== 'none') {
        if (parseInt($('.left-drawer').css('transform').split(',')[4]) < leftDrawerWidth / 2) {
          $('.shield').removeClass('animatedShield');                  // 191
          $('.shield').css('opacity', '');                             // 191
          $('.left-drawer').removeClass('menuOut');                    // 191
          $('.left-drawer').css('transform', '');                      // 191
          $('.toggleUserlistButton').removeClass('hamburgerToggledOn');
          $('.shield').removeClass('darken');                          // 191
        } else {                                                       //
          $('.left-drawer').css('transform', 'translateX(' + leftDrawerWidth + 'px)');
          $('.shield').css('opacity', 0.5);                            // 198
          $('.left-drawer').addClass('menuOut');                       // 198
          $('.left-drawer').css('transform', '');                      // 198
          $('.toggleUserlistButton').addClass('hamburgerToggledOn');   // 198
        }                                                              //
      }                                                                //
      if (panIsValid && menuPanned === 'right' && parseInt($('.right-drawer').css('transform').split(',')[4]) !== leftDrawerWidth) {
        if (parseInt($('.right-drawer').css('transform').split(',')[4]) > screenWidth - $('.right-drawer').width() / 2) {
          $('.shield').removeClass('animatedShield');                  // 209
          $('.shield').css('opacity', '');                             // 209
          $('.right-drawer').css('transform', 'translateX(' + screenWidth + 'px)');
          $('.right-drawer').removeClass('menuOut');                   // 209
          $('.right-drawer').css('transform', '');                     // 209
          $('.toggleMenuButton').removeClass('hamburgerToggledOn');    // 209
          $('.shield').removeClass('darken');                          // 209
        } else {                                                       //
          $('.shield').css('opacity', 0.5);                            // 217
          $('.right-drawer').css('transform', 'translateX(' + (screenWidth - $('.right-drawer').width()) + 'px)');
          $('.right-drawer').addClass('menuOut');                      // 217
          $('.right-drawer').css('transform', '');                     // 217
          $('.toggleMenuButton').addClass('hamburgerToggledOn');       // 217
        }                                                              //
      }                                                                //
      $('.left-drawer').addClass('userlistMenu');                      // 179
      $('.userlistMenu').removeClass('left-drawer');                   // 179
      $('.right-drawer').addClass('settingsMenu');                     // 179
      return $('.settingsMenu').removeClass('right-drawer');           //
    }                                                                  //
  },                                                                   //
  'panright #container, panleft #container': function(event, template) {
    var initTransformValue, leftDrawerWidth, menuPanned, panIsValid, rightDrawerWidth, screenWidth;
    if (isPortraitMobile() && isPanHorizontal(event)) {                // 230
      if (!getInSession('panStarted')) {                               // 233
        if (event.type === 'panright' && event.center.x <= $('#container').width() * 0.1) {
          setInSession('panIsValid', true);                            // 238
          setInSession('menuPanned', 'left');                          // 238
        } else if (event.type === 'panleft' && event.center.x < $('#container').width() * 0.9) {
          setInSession('panIsValid', true);                            // 244
          setInSession('menuPanned', 'left');                          // 244
        } else if (event.type === 'panleft' && event.center.x >= $('#container').width() * 0.9) {
          setInSession('panIsValid', true);                            // 250
          setInSession('menuPanned', 'right');                         // 250
        } else if (event.type === 'panright' && event.center.x > $('#container').width() * 0.1) {
          setInSession('panIsValid', true);                            // 256
          setInSession('menuPanned', 'right');                         // 256
        } else {                                                       //
          setInSession('panIsValid', false);                           // 260
        }                                                              //
        setInSession('eventType', event.type);                         // 236
        if (getInSession('menuPanned') === 'left') {                   // 264
          if ($('.userlistMenu').css('transform') !== 'none') {        // 265
            setInSession('initTransform', parseInt($('.userlistMenu').css('transform').split(',')[4]));
          } else if ($('.userlistMenu').hasClass('menuOut')) {         //
            setInSession('initTransform', $('.userlistMenu').width());
          } else {                                                     //
            setInSession('initTransform', 0);                          // 270
          }                                                            //
          $('.userlistMenu').addClass('left-drawer');                  // 265
          $('.left-drawer').removeClass('userlistMenu');               // 265
        } else if (getInSession('menuPanned') === 'right') {           //
          if ($('.settingsMenu').css('transform') !== 'none') {        // 275
            setInSession('initTransform', parseInt($('.settingsMenu').css('transform').split(',')[4]));
          } else if ($('.settingsMenu').hasClass('menuOut')) {         //
            setInSession('initTransform', $('.settingsMenu').width());
          } else {                                                     //
            setInSession('initTransform', 0);                          // 280
          }                                                            //
          $('.settingsMenu').addClass('right-drawer');                 // 275
          $('.right-drawer').removeClass('settingsMenu');              // 275
        }                                                              //
      }                                                                //
      initTransformValue = getInSession('initTransform');              // 233
      panIsValid = getInSession('panIsValid');                         // 233
      menuPanned = getInSession('menuPanned');                         // 233
      leftDrawerWidth = $('.left-drawer').width();                     // 233
      rightDrawerWidth = $('.right-drawer').width();                   // 233
      screenWidth = $('#container').width();                           // 233
      if (panIsValid && menuPanned === 'left' && initTransformValue + event.deltaX >= 0 && initTransformValue + event.deltaX <= leftDrawerWidth) {
        if ($('.settingsMenu').hasClass('menuOut')) {                  // 297
          toggleSettingsMenu();                                        // 298
          toggleRightHamburderIcon();                                  // 298
        }                                                              //
        $('.left-drawer').css('transform', 'translateX(' + (initTransformValue + event.deltaX) + 'px)');
        if (!getInSession('panStarted')) {                             // 303
          $('.shield').addClass('animatedShield');                     // 304
        }                                                              //
        return $('.shield').css('opacity', 0.5 * (initTransformValue + event.deltaX) / leftDrawerWidth);
      } else if (panIsValid && menuPanned === 'right' && initTransformValue + event.deltaX >= screenWidth - rightDrawerWidth && initTransformValue + event.deltaX <= screenWidth) {
        if ($('.userlistMenu').hasClass('menuOut')) {                  // 314
          toggleUserlistMenu();                                        // 315
          toggleLeftHamburderIcon();                                   // 315
        }                                                              //
        $('.right-drawer').css('transform', 'translateX(' + (initTransformValue + event.deltaX) + 'px)');
        if (!getInSession('panStarted')) {                             // 320
          $('.shield').addClass('animatedShield');                     // 321
        }                                                              //
        return $('.shield').css('opacity', 0.5 * (screenWidth - initTransformValue - event.deltaX) / rightDrawerWidth);
      }                                                                //
    }                                                                  //
  }                                                                    //
});                                                                    //
                                                                       //
Template.makeButton.rendered = function() {                            // 2
  return $('button[rel=tooltip]').tooltip();                           //
};                                                                     // 325
                                                                       //
/////////////////////////////////////////////////////////////////////////

}).call(this);
