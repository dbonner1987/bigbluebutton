(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/views/modals/modals.coffee.js                                //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Template.settingsModal.helpers({                                       // 1
  getBBBSettingsInfo: function() {                                     // 2
    var info, result;                                                  // 3
    info = getBuildInformation();                                      // 3
    return result = "(c) " + info.copyrightYear + " BigBlueButton Inc. [build " + info.html5ClientBuild + "] - For more information visit " + info.link;
  }                                                                    //
});                                                                    //
                                                                       //
Template.logoutModal.events({                                          // 1
  "click #yes": function() {                                           // 7
    return userLogout(getInSession("meetingId"), getInSession("userId"));
  },                                                                   //
  "click #no": function() {                                            // 7
    return $("#logoutModal").foundation('reveal', 'close');            //
  },                                                                   //
  "click .logoutButton": function() {                                  // 7
    return $(".tooltip").hide();                                       //
  }                                                                    //
});                                                                    //
                                                                       //
Template.settingsAudio.events({                                        // 1
  "click #exitAudio": function() {                                     // 12
    return exitVoiceCall();                                            //
  },                                                                   //
  "click .joinAudioButton": function(event) {                          // 12
    return $("#settingsModal").foundation('reveal', 'close');          //
  },                                                                   //
  "click #joinListenOnly": function(event) {                           // 12
    return joinVoiceCall(this, {                                       //
      isListenOnly: true                                               // 16
    });                                                                //
  },                                                                   //
  "click #joinMicrophone": function(event) {                           // 12
    return joinVoiceCall(this, {                                       //
      isListenOnly: false                                              // 18
    });                                                                //
  }                                                                    //
});                                                                    //
                                                                       //
Template.settingsModal.events({                                        // 1
  "click #closeSettings": function() {                                 // 21
    return $("#settingsModal").foundation('reveal', 'close');          //
  }                                                                    //
});                                                                    //
                                                                       //
Template.optionsFontSize.events({                                      // 1
  "click #decreaseFontSize": function(event) {                         // 24
    if (getInSession("messageFontSize") === 8) {                       // 25
      $('#decreaseFontSize').disabled = true;                          // 26
      $('#decreaseFontSize').removeClass('icon fi-minus');             // 26
      return $('#decreaseFontSize').html('MIN');                       //
    } else {                                                           //
      setInSession("messageFontSize", getInSession("messageFontSize") - 2);
      adjustChatInputHeight();                                         // 30
      setTimeout(scrollChatDown, 0);                                   // 30
      if ($('#increaseFontSize').html() === 'MAX') {                   // 33
        $('#increaseFontSize').html('');                               // 34
        return $('#increaseFontSize').addClass('icon fi-plus');        //
      }                                                                //
    }                                                                  //
  },                                                                   //
  "click #increaseFontSize": function(event) {                         // 24
    if (getInSession("messageFontSize") === 40) {                      // 38
      $('#increaseFontSize').disabled = true;                          // 39
      $('#increaseFontSize').removeClass('icon fi-plus');              // 39
      return $('#increaseFontSize').html('MAX');                       //
    } else {                                                           //
      setInSession("messageFontSize", getInSession("messageFontSize") + 2);
      adjustChatInputHeight();                                         // 43
      setTimeout(scrollChatDown, 0);                                   // 43
      if ($('#decreaseFontSize').html() === 'MIN') {                   // 47
        $('#decreaseFontSize').html('');                               // 48
        return $('#decreaseFontSize').addClass('icon fi-minus');       //
      }                                                                //
    }                                                                  //
  }                                                                    //
});                                                                    //
                                                                       //
/////////////////////////////////////////////////////////////////////////

}).call(this);
