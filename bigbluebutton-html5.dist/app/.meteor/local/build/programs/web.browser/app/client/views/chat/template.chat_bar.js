(function(){
Template.__checkName("chatbar");
Template["chatbar"] = new Template("Template.chatbar", (function() {
  var view = this;
  return HTML.DIV(HTML.Attrs({
    id: function() {
      return Spacebars.mustache(view.lookup("id"));
    },
    "class": "component"
  }, function() {
    return Spacebars.attrMustache(view.lookup("visibility"), view.lookup("name"));
  }), "\n    ", HTML.DIV({
    "class": "chatBodyContainer"
  }, "\n      ", Blaze.If(function() {
    return Spacebars.call(view.lookup("inPrivateChat"));
  }, function() {
    return [ "\n        ", Spacebars.include(view.lookupTemplate("privateChatTab")), "\n      " ];
  }), "\n      ", HTML.DIV({
    id: "chatbody"
  }, "\n        ", HTML.UL(HTML.Attrs({
    "class": "chat"
  }, function() {
    return Spacebars.attrMustache(view.lookup("messageFontSize"));
  }), "\n          ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("getCombinedMessagesForChat"));
  }, function() {
    return [ "\n            ", Blaze.If(function() {
      return Spacebars.call(view.lookup("message"));
    }, function() {
      return [ "\n              ", HTML.LI(Spacebars.include(view.lookupTemplate("message"))), "\n            " ];
    }), "\n          " ];
  }), "\n          ", Blaze.Unless(function() {
    return Spacebars.call(view.lookup("userExists"));
  }, function() {
    return HTML.LI("The user has left");
  }), "\n        "), "\n      "), "\n    "), "\n    ", Blaze.If(function() {
    return Spacebars.call(view.lookup("userExists"));
  }, function() {
    return [ "\n      ", HTML.DIV({
      "class": "panel-footer"
    }, Spacebars.include(view.lookupTemplate("chatInput"))), "\n    " ];
  }), "\n  ");
}));

Template.__checkName("privateChatTab");
Template["privateChatTab"] = new Template("Template.privateChatTab", (function() {
  var view = this;
  return HTML.DIV({
    "class": "privateChatTab"
  }, "\n    ", Blaze._TemplateWith(function() {
    return {
      id: Spacebars.call("close"),
      btn_class: Spacebars.call("secondary tiny toPublic "),
      i_class: Spacebars.call("ion-ios-arrow-left"),
      rel: Spacebars.call("tooltip"),
      data_placement: Spacebars.call("bottom"),
      title: Spacebars.call("Back to public"),
      label: Spacebars.call("Public"),
      notification: Spacebars.call("PUBLIC_CHAT")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("makeButton"));
  }), "\n    ", HTML.DIV({
    "class": "privateChatName"
  }, "\n      ", Blaze.View("lookup:privateChatName", function() {
    return Spacebars.mustache(view.lookup("privateChatName"));
  }), "\n    "), "\n  ");
}));

Template.__checkName("chatInput");
Template["chatInput"] = new Template("Template.chatInput", (function() {
  var view = this;
  return HTML.DIV({
    id: "chatInput",
    "class": "chat-input-wrapper"
  }, "\n    ", Blaze.If(function() {
    return Spacebars.call(view.lookup("inPrivateChat"));
  }, function() {
    return [ "\n      ", Blaze.If(function() {
      return Spacebars.call(view.lookup("privateChatDisabled"));
    }, function() {
      return [ "\n        ", HTML.TEXTAREA(HTML.Attrs({
        id: "newMessageInput",
        "class": "disabledChat",
        placeholder: "Private chat is temporarily locked (disabled)",
        rel: "tooltip",
        "data-placement": "top",
        title: "Private chat is temporarily locked",
        disabled: ""
      }, function() {
        return Spacebars.attrMustache(view.lookup("messageFontSize"));
      })), "\n      " ];
    }, function() {
      return [ "\n        ", Spacebars.include(view.lookupTemplate("chatInputControls")), "\n      " ];
    }), "\n    " ];
  }, function() {
    return [ "\n      ", Blaze.If(function() {
      return Spacebars.call(view.lookup("publicChatDisabled"));
    }, function() {
      return [ "\n        ", HTML.TEXTAREA(HTML.Attrs({
        id: "newMessageInput",
        "class": "disabledChat",
        placeholder: "Public chat is temporarily locked (disabled)",
        rel: "tooltip",
        "data-placement": "top",
        title: "Public chat is temporarily locked",
        disabled: ""
      }, function() {
        return Spacebars.attrMustache(view.lookup("messageFontSize"));
      })), "\n      " ];
    }, function() {
      return [ "\n        ", Spacebars.include(view.lookupTemplate("chatInputControls")), "\n      " ];
    }), "\n    " ];
  }), "\n  ");
}));

Template.__checkName("chatInputControls");
Template["chatInputControls"] = new Template("Template.chatInputControls", (function() {
  var view = this;
  return HTML.DIV({
    "class": "button-group radius"
  }, "\n    ", HTML.TEXTAREA(HTML.Attrs({
    id: "newMessageInput",
    rel: "tooltip",
    "data-placement": "top",
    title: "Write a new message"
  }, function() {
    return Spacebars.attrMustache(view.lookup("messageFontSize"));
  })), HTML.Raw('\n    <input type="submit" id="sendMessageButton" class="button radius" rel="tooltip" data-placement="top" value="Send">\n  '));
}));

Template.__checkName("message");
Template["message"] = new Template("Template.message", (function() {
  var view = this;
  return [ HTML.SPAN({
    style: "float:left;"
  }, "\n    ", Blaze.If(function() {
    return Spacebars.call(Spacebars.dot(view.lookup("message"), "from_username"));
  }, function() {
    return [ "\n      ", HTML.SPAN({
      "class": "userNameEntry",
      rel: "tooltip",
      "data-placement": "bottom",
      title: function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("message"), "from_username"));
      }
    }, "\n        ", Blaze.View("lookup:message.from_username", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("message"), "from_username"));
    }), "\n      "), "\n    " ];
  }), "\n  "), "\n  ", HTML.SPAN({
    style: "float:right;"
  }, "\n    ", Blaze.If(function() {
    return Spacebars.call(Spacebars.dot(view.lookup("message"), "from_time"));
  }, function() {
    return [ "\n      ", HTML.SPAN(HTML.Attrs(function() {
      return Spacebars.attrMustache(view.lookup("messageFontSize"));
    }), Blaze.View("lookup:toClockTime", function() {
      return Spacebars.mustache(view.lookup("toClockTime"), Spacebars.dot(view.lookup("message"), "from_time"));
    })), "\n      ", HTML.SPAN(HTML.Attrs({
      "class": "glyphicon glyphicon-time"
    }, function() {
      return Spacebars.attrMustache(view.lookup("messageFontSize"));
    })), "\n    " ];
  }), "\n  "), HTML.Raw("\n  <br>\n  "), HTML.DIV({
    style: function() {
      return [ "color:", Spacebars.mustache(view.lookup("colourToHex"), Spacebars.dot(view.lookup("message"), "from_color")) ];
    }
  }, Blaze.View("lookup:sanitizeAndFormat", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("sanitizeAndFormat"), Spacebars.dot(view.lookup("message"), "message")));
  })), "\n  ", Blaze.View("lookup:autoscroll", function() {
    return Spacebars.mustache(view.lookup("autoscroll"));
  }) ];
}));

}).call(this);
