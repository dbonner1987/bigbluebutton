(function(){
Template.__checkName("header");
Template["header"] = new Template("Template.header", (function() {
  var view = this;
  return HTML.NAV({
    id: "navbar",
    "class": "myNavbar top-bar",
    role: "navigation"
  }, "\n    ", Blaze._TemplateWith(function() {
    return {
      btn_class: Spacebars.call("btn toggleUserlistButton navbarButton leftHamburgerButton"),
      rel: Spacebars.call("tooltip"),
      title: Spacebars.call("Toggle Userlist"),
      span: Spacebars.call(true),
      notification: Spacebars.call("all_chats")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("makeButton"));
  }), "\n\n      ", Blaze.If(function() {
    return Spacebars.call(view.lookup("amIInAudio"));
  }, function() {
    return [ "\n        ", HTML.DIV({
      "class": "audioNavbarSection"
    }, "\n          ", Blaze.If(function() {
      return Spacebars.call(view.lookup("amIListenOnlyAudio"));
    }, function() {
      return [ "\n            ", Blaze._TemplateWith(function() {
        return {
          btn_class: Spacebars.call("navbarButton leaveAudioButton"),
          i_class: Spacebars.call("icon fi-volume-none"),
          rel: Spacebars.call("tooltip"),
          title: Spacebars.call("Exit Audio")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("makeButton"));
      }), "\n          " ];
    }, function() {
      return [ "\n            ", Blaze.If(function() {
        return Spacebars.call(view.lookup("isCurrentUserMuted"));
      }, function() {
        return [ "\n              ", HTML.Comment(" if you are muted the button representing your status will show volume off "), "\n              ", Blaze._TemplateWith(function() {
          return {
            btn_class: Spacebars.call("navbarButton muteIcon"),
            i_class: Spacebars.call("ion-ios-mic-off"),
            rel: Spacebars.call("tooltip"),
            title: Spacebars.call("Unmute")
          };
        }, function() {
          return Spacebars.include(view.lookupTemplate("makeButton"));
        }), "\n            " ];
      }, function() {
        return [ "\n              ", Blaze.If(function() {
          return Spacebars.call(view.lookup("isCurrentUserTalking"));
        }, function() {
          return [ "\n                ", HTML.Comment(" you are talking. Display a high volume/volume up representing voice activity "), "\n                ", Blaze._TemplateWith(function() {
            return {
              btn_class: Spacebars.call("navbarButton muteIcon"),
              i_class: Spacebars.call("ion-ios-mic"),
              rel: Spacebars.call("tooltip"),
              title: Spacebars.call("Mute")
            };
          }, function() {
            return Spacebars.include(view.lookupTemplate("makeButton"));
          }), "\n              " ];
        }, function() {
          return [ "\n                ", HTML.Comment(" you are not talking. Display low volume/volume down representing no voice activity "), "\n                ", Blaze._TemplateWith(function() {
            return {
              btn_class: Spacebars.call("navbarButton muteIcon"),
              i_class: Spacebars.call("ion-ios-mic-outline"),
              rel: Spacebars.call("tooltip"),
              title: Spacebars.call("Mute")
            };
          }, function() {
            return Spacebars.include(view.lookupTemplate("makeButton"));
          }), "\n              " ];
        }), "\n            " ];
      }), "\n          " ];
    }), "\n        "), "\n        ", HTML.SPAN({
      "class": "navbarTitle shiftedTitle"
    }, "\n          ", Blaze.View("lookup:getWhiteboardTitle", function() {
      return Spacebars.mustache(view.lookup("getWhiteboardTitle"));
    }), "\n        "), "\n      " ];
  }, function() {
    return [ "\n        ", HTML.SPAN({
      "class": "navbarTitle defaultTitle"
    }, "\n          ", Blaze.View("lookup:getWhiteboardTitle", function() {
      return Spacebars.mustache(view.lookup("getWhiteboardTitle"));
    }), "\n        "), "\n      " ];
  }), "\n\n    ", HTML.DIV({
    "class": "rightNavbarSection"
  }, "\n      ", Blaze._TemplateWith(function() {
    return {
      id: Spacebars.call("settingsIcon"),
      btn_class: Spacebars.call("settingsIcon navbarButton"),
      i_class: Spacebars.call("ion-gear-b"),
      rel: Spacebars.call("tooltip"),
      title: Spacebars.call("BigBlueButton Settings")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("makeButton"));
  }), "\n\n      ", Blaze._TemplateWith(function() {
    return {
      id: Spacebars.call("logout"),
      btn_class: Spacebars.call("signOutIcon navbarButton"),
      i_class: Spacebars.call("ion-log-out"),
      rel: Spacebars.call("tooltip"),
      title: Spacebars.call("Logout")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("makeButton"));
  }), "\n    "), "\n    ", Blaze._TemplateWith(function() {
    return {
      btn_class: Spacebars.call("btn toggleMenuButton navbarButton rightHamburgerButton"),
      rel: Spacebars.call("tooltip"),
      title: Spacebars.call("Toggle Menu"),
      span: Spacebars.call(true)
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("makeButton"));
  }), "\n  ");
}));

Template.__checkName("main");
Template["main"] = new Template("Template.main", (function() {
  var view = this;
  return HTML.DIV({
    id: "container",
    "class": function() {
      return Spacebars.mustache(view.lookup("containerPosition"));
    }
  }, "\n    ", Blaze.If(function() {
    return Spacebars.call(view.lookup("isDisconnected"));
  }, function() {
    return [ "\n      ", Spacebars.include(view.lookupTemplate("status")), "\n    " ];
  }, function() {
    return [ "\n      ", HTML.DIV({
      "class": "userlistMenu"
    }, "\n        ", Blaze._TemplateWith(function() {
      return {
        id: Spacebars.call("users"),
        name: Spacebars.call("usersList")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("usersList"));
    }), "\n      "), "\n      ", HTML.DIV({
      "class": "settingsMenu"
    }, "\n        ", HTML.DIV({
      "class": "titleArea"
    }), "\n        ", Blaze._TemplateWith(function() {
      return {
        id: Spacebars.call("menu")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("menu"));
    }), "\n      "), "\n      ", HTML.DIV({
      id: "main"
    }, "\n        ", Spacebars.include(view.lookupTemplate("header")), "\n        ", HTML.DIV({
      id: "panels"
    }, "\n          ", HTML.DIV({
      "class": "shield"
    }), "\n          ", Blaze._TemplateWith(function() {
      return {
        id: Spacebars.call("whiteboard"),
        name: Spacebars.call("whiteboard")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("whiteboard"));
    }), "\n          ", Blaze.If(function() {
      return Spacebars.dataMustache(view.lookup("getInSession"), "display_chatbar");
    }, function() {
      return [ "\n            ", Blaze._TemplateWith(function() {
        return {
          id: Spacebars.call("chat"),
          title: Spacebars.call("Chat"),
          name: Spacebars.call("chatbar")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("chatbar"));
      }), "\n          " ];
    }), "\n        "), "\n        ", Spacebars.include(view.lookupTemplate("modals")), "\n      "), "\n    " ];
  }), "\n  ");
}));

Template.__checkName("modals");
Template["modals"] = new Template("Template.modals", (function() {
  var view = this;
  return [ HTML.DIV({
    id: "settingsModal",
    "class": "reveal-modal small",
    "data-reveal": "",
    "aria-labelledby": "modalTitle",
    "aria-hidden": "true",
    role: "dialog",
    "data-options": "close_on_background_click:false"
  }, "\n    ", Spacebars.include(view.lookupTemplate("settingsModal")), "\n  "), "\n  ", HTML.DIV({
    id: "logoutModal",
    "class": "reveal-modal tiny",
    "data-reveal": "",
    "aria-labelledby": "modalTitle",
    "aria-hidden": "true",
    role: "dialog",
    "data-options": "close_on_background_click:false"
  }, "\n    ", Spacebars.include(view.lookupTemplate("logoutModal")), "\n  "), HTML.Raw('\n  <audio id="remote-media" autoplay="autoplay"></audio>') ];
}));

Template.__checkName("recordingStatus");
Template["recordingStatus"] = new Template("Template.recordingStatus", (function() {
  var view = this;
  return "";
}));

Template.__checkName("menu");
Template["menu"] = new Template("Template.menu", (function() {
  var view = this;
  return HTML.DIV({
    id: function() {
      return Spacebars.mustache(view.lookup("id"));
    }
  }, "\n    ", Blaze._TemplateWith(function() {
    return {
      btn_class: Spacebars.call("slideButton toggleChatButton"),
      i_class: Spacebars.call("ion-chatbubble"),
      label: Spacebars.call("Chat")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("makeButton"));
  }), "\n    ", Blaze._TemplateWith(function() {
    return {
      btn_class: Spacebars.call("slideButton settingsIcon"),
      i_class: Spacebars.call("ion-gear-b"),
      label: Spacebars.call("Settings")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("makeButton"));
  }), "\n    ", Blaze._TemplateWith(function() {
    return {
      btn_class: Spacebars.call("slideButton signOutIcon"),
      i_class: Spacebars.call("ion-log-out"),
      label: Spacebars.call("Log out")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("makeButton"));
  }), "\n  ");
}));

Template.__checkName("loading");
Template["loading"] = new Template("Template.loading", (function() {
  var view = this;
  return HTML.Raw('<div id="floatingCirclesG">\n  <div class="f_circleG" id="frotateG_01"></div>\n  <div class="f_circleG" id="frotateG_02"></div>\n  <div class="f_circleG" id="frotateG_03"></div>\n  <div class="f_circleG" id="frotateG_04"></div>\n  <div class="f_circleG" id="frotateG_05"></div>\n  <div class="f_circleG" id="frotateG_06"></div>\n  <div class="f_circleG" id="frotateG_07"></div>\n  <div class="f_circleG" id="frotateG_08"></div>\n</div>');
}));

Template.__checkName("icon");
Template["icon"] = new Template("Template.icon", (function() {
  var view = this;
  return HTML.SVG({
    width: function() {
      return Spacebars.mustache(view.lookup("size"));
    },
    height: function() {
      return Spacebars.mustache(view.lookup("size"));
    },
    viewBox: "0 0 50 50"
  }, "\n    ", Blaze.If(function() {
    return Spacebars.dataMustache(view.lookup("equals"), view.lookup("name"), "happy-face");
  }, function() {
    return [ "\n      ", HTML.CIRCLE({
      cx: "25",
      cy: "25",
      r: "14",
      stroke: "white",
      "stroke-width": "3",
      fill: "transparent"
    }), "\n      ", HTML.CIRCLE({
      cx: "19",
      cy: "22",
      r: "1",
      stroke: "white",
      "stroke-width": "2",
      fill: "white"
    }), "\n      ", HTML.CIRCLE({
      cx: "31",
      cy: "22",
      r: "1",
      stroke: "white",
      "stroke-width": "2",
      fill: "white"
    }), "\n      ", HTML.PATH({
      d: "m18 30 C 21 33, 29 33, 32 30",
      stroke: "white",
      "stroke-width": "3",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      fill: "none"
    }), "\n    " ];
  }, function() {
    return [ "\n      ", Blaze.If(function() {
      return Spacebars.dataMustache(view.lookup("equals"), view.lookup("name"), "neutral-face");
    }, function() {
      return [ "\n        ", HTML.CIRCLE({
        cx: "25",
        cy: "25",
        r: "14",
        stroke: "white",
        "stroke-width": "3",
        fill: "transparent"
      }), "\n        ", HTML.CIRCLE({
        cx: "19",
        cy: "22",
        r: "1",
        stroke: "white",
        "stroke-width": "2",
        fill: "white"
      }), "\n        ", HTML.CIRCLE({
        cx: "31",
        cy: "22",
        r: "1",
        stroke: "white",
        "stroke-width": "2",
        fill: "white"
      }), "\n        ", HTML.PATH({
        d: "m18 30 l 14 0",
        stroke: "white",
        "stroke-width": "3",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }), "\n      " ];
    }, function() {
      return [ "\n        ", Blaze.If(function() {
        return Spacebars.dataMustache(view.lookup("equals"), view.lookup("name"), "confused-face");
      }, function() {
        return [ "\n          ", HTML.CIRCLE({
          cx: "25",
          cy: "25",
          r: "14",
          stroke: "white",
          "stroke-width": "3",
          fill: "transparent"
        }), "\n          ", HTML.CIRCLE({
          cx: "19",
          cy: "22",
          r: "1",
          stroke: "white",
          "stroke-width": "2",
          fill: "white"
        }), "\n          ", HTML.CIRCLE({
          cx: "31",
          cy: "22",
          r: "1",
          stroke: "white",
          "stroke-width": "2",
          fill: "white"
        }), "\n          ", HTML.PATH({
          d: "M18 30 C 20 28, 22 28, 25 30 S 30 32, 32 30",
          stroke: "white",
          "stroke-width": "3",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }), "\n        " ];
      }, function() {
        return [ "\n          ", Blaze.If(function() {
          return Spacebars.dataMustache(view.lookup("equals"), view.lookup("name"), "sad-face");
        }, function() {
          return [ "\n            ", HTML.CIRCLE({
            cx: "25",
            cy: "25",
            r: "14",
            stroke: "white",
            "stroke-width": "3",
            fill: "transparent"
          }), "\n            ", HTML.CIRCLE({
            cx: "19",
            cy: "22",
            r: "1",
            stroke: "white",
            "stroke-width": "2",
            fill: "white"
          }), "\n            ", HTML.CIRCLE({
            cx: "31",
            cy: "22",
            r: "1",
            stroke: "white",
            "stroke-width": "2",
            fill: "white"
          }), "\n            ", HTML.PATH({
            d: "m18 30 C 21 27, 29 27, 32 30",
            stroke: "white",
            "stroke-width": "3",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            fill: "none"
          }), "\n          " ];
        }, function() {
          return [ "\n            ", Blaze.If(function() {
            return Spacebars.dataMustache(view.lookup("equals"), view.lookup("name"), "clock");
          }, function() {
            return [ "\n              ", HTML.CIRCLE({
              cx: "25",
              cy: "25",
              r: "14",
              stroke: "white",
              "stroke-width": "3",
              fill: "transparent"
            }), "\n              ", HTML.PATH({
              d: "m25 25 l 0 -8",
              stroke: "white",
              "stroke-width": "3",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }), "\n              ", HTML.PATH({
              d: "m25 25 l 5 5",
              stroke: "white",
              "stroke-width": "3",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }), "\n            " ];
          }, function() {
            return [ "\n              ", Blaze.If(function() {
              return Spacebars.dataMustache(view.lookup("equals"), view.lookup("name"), "plus");
            }, function() {
              return [ "\n                ", HTML.PATH({
                d: "m25 18 l 0 14",
                stroke: "white",
                "stroke-width": "3",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }), "\n                ", HTML.PATH({
                d: "m18 25 l 14 0",
                stroke: "white",
                "stroke-width": "3",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }), "\n              " ];
            }), "\n            " ];
          }), "\n          " ];
        }), "\n        " ];
      }), "\n      " ];
    }), "\n    " ];
  }), "\n  ");
}));

}).call(this);
