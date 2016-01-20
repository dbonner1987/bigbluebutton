(function(){
Template.__checkName("settingsAudio");
Template["settingsAudio"] = new Template("Template.settingsAudio", (function() {
  var view = this;
  return HTML.FIELDSET({
    "class": "desktopSettingsFieldset"
  }, HTML.Raw('\n    <legend align="center">Audio Options</legend>\n      '), HTML.DIV({
    id: "audioButtonContainer"
  }, "\n      ", Blaze.If(function() {
    return Spacebars.call(view.lookup("amIInAudio"));
  }, function() {
    return [ "\n        ", Blaze.If(function() {
      return Spacebars.call(view.lookup("amIListenOnlyAudio"));
    }, function() {
      return [ "\n          ", HTML.Comment(" display listen only with exit "), "\n          ", Blaze._TemplateWith(function() {
        return {
          id: Spacebars.call("exitAudio"),
          btn_class: Spacebars.call("exitAudio settingsButton joinAudioButton"),
          i_class: Spacebars.call("ion-volume-mute"),
          rel: Spacebars.call("tooltip"),
          data_placement: Spacebars.call("bottom"),
          title: Spacebars.call("Leave Audio Call")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("makeButton"));
      }), "\n        " ];
    }, function() {
      return [ "\n          ", HTML.Comment(" display microphone with exit "), "\n          ", Blaze._TemplateWith(function() {
        return {
          id: Spacebars.call("exitAudio"),
          btn_class: Spacebars.call("exitAudio settingsButton joinAudioButton"),
          i_class: Spacebars.call("ion-volume-mute"),
          rel: Spacebars.call("tooltip"),
          data_placement: Spacebars.call("bottom"),
          title: Spacebars.call("Leave Audio Call")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("makeButton"));
      }), "\n        " ];
    }), "\n      " ];
  }, function() {
    return [ "\n        ", HTML.Comment(" display both with join "), "\n        ", Blaze.Unless(function() {
      return Spacebars.call(view.lookup("isMyMicLocked"));
    }, function() {
      return [ "\n          ", Blaze._TemplateWith(function() {
        return {
          id: Spacebars.call("joinMicrophone"),
          btn_class: Spacebars.call("joinMicrophone settingsButton joinAudioButton"),
          i_class: Spacebars.call("fi-microphone"),
          rel: Spacebars.call("tooltip"),
          data_placement: Spacebars.call("bottom"),
          title: Spacebars.call("Join Microphone")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("makeButton"));
      }), "\n        " ];
    }), "\n        ", Blaze._TemplateWith(function() {
      return {
        id: Spacebars.call("joinListenOnly"),
        btn_class: Spacebars.call("joinListenOnly settingsButton joinAudioButton"),
        i_class: Spacebars.call("fi-volume"),
        rel: Spacebars.call("tooltip"),
        data_placement: Spacebars.call("bottom"),
        title: Spacebars.call("Join Listen only")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("makeButton"));
    }), "\n      " ];
  }), "\n    "), "\n  ");
}));

Template.__checkName("settingsModal");
Template["settingsModal"] = new Template("Template.settingsModal", (function() {
  var view = this;
  return [ HTML.Raw('<div class="bar topBar">\n    <p>\n        <span class="modalTitle">BigBlueButton Settings</span>\n    </p>\n  </div>\n\n  '), HTML.DIV({
    "class": "settingsBody"
  }, "\n    ", Spacebars.include(view.lookupTemplate("settingsAudio")), "\n    ", Spacebars.include(view.lookupTemplate("optionsFontSize")), "\n    ", Blaze.View("lookup:getBBBSettingsInfo", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("getBBBSettingsInfo")));
  }), "\n  "), "\n\n  ", HTML.DIV({
    "class": "bar bottomBar"
  }, "\n    ", Blaze._TemplateWith(function() {
    return {
      id: Spacebars.call("closeSettings"),
      btn_class: Spacebars.call("settingsButton vertically-centered"),
      rel: Spacebars.call("tooltip"),
      title: Spacebars.call("Close"),
      label: Spacebars.call("Close")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("makeButton"));
  }), "\n  ") ];
}));

Template.__checkName("logoutModal");
Template["logoutModal"] = new Template("Template.logoutModal", (function() {
  var view = this;
  return [ HTML.Raw("<p>Are you sure you want to logout?</p>\n  "), Blaze._TemplateWith(function() {
    return {
      id: Spacebars.call("yes"),
      btn_class: Spacebars.call("logoutButton"),
      label: Spacebars.call("Yes")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("makeButton"));
  }), "\n  ", Blaze._TemplateWith(function() {
    return {
      id: Spacebars.call("no"),
      btn_class: Spacebars.call("logoutButton"),
      label: Spacebars.call("No")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("makeButton"));
  }) ];
}));

Template.__checkName("optionsFontSize");
Template["optionsFontSize"] = new Template("Template.optionsFontSize", (function() {
  var view = this;
  return HTML.FIELDSET({
    "class": "desktopSettingsFieldset"
  }, HTML.Raw('\n    <legend align="center"><span class="chatOptionsText">Chat Message Font Size</span><br></legend>\n    '), HTML.TABLE({
    id: "fontSizeTable",
    align: "center"
  }, "\n      ", HTML.TR("\n        ", HTML.TD(Blaze._TemplateWith(function() {
    return {
      id: Spacebars.call("decreaseFontSize"),
      btn_class: Spacebars.call("displayButtons"),
      i_class: Spacebars.call("fi-minus"),
      rel: Spacebars.call("tooltip"),
      title: Spacebars.call("Decrease Font Size")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("makeButton"));
  })), "\n        ", HTML.TD({
    id: "displayLabel"
  }, HTML.LABEL(HTML.Attrs({
    "class": "fontSizeLabel"
  }, function() {
    return Spacebars.attrMustache(view.lookup("messageFontSize"));
  }), "Size(", Blaze.View("lookup:getInSession", function() {
    return Spacebars.mustache(view.lookup("getInSession"), "messageFontSize");
  }), ")")), "\n        ", HTML.TD(Blaze._TemplateWith(function() {
    return {
      id: Spacebars.call("increaseFontSize"),
      btn_class: Spacebars.call("displayButtons"),
      i_class: Spacebars.call("fi-plus"),
      rel: Spacebars.call("tooltip"),
      title: Spacebars.call("Increase Font Size")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("makeButton"));
  })), "\n      "), "\n    "), "\n  ");
}));

}).call(this);
