(function(){
Template.__checkName("displayUserIcons");
Template["displayUserIcons"] = new Template("Template.displayUserIcons", (function() {
  var view = this;
  return [ HTML.Raw("<!-- audio, video, locking, presenter/moderator, hand raised -->\n  "), Blaze.If(function() {
    return Spacebars.dataMustache(view.lookup("isUserInAudio"), view.lookup("userId"));
  }, function() {
    return [ "\n    ", HTML.Comment(" if the user is listen only, only display the one icon "), "\n    ", Blaze.If(function() {
      return Spacebars.dataMustache(view.lookup("isUserListenOnlyAudio"), view.lookup("userId"));
    }, function() {
      return [ "\n      ", HTML.SPAN({
        rel: "tooltip",
        "data-placement": "bottom",
        title: function() {
          return [ Spacebars.mustache(Spacebars.dot(view.lookup("user"), "name")), " is only listening" ];
        }
      }, "\n        ", HTML.I({
        "class": "icon fi-volume-none usericon"
      }), "\n      "), "\n    " ];
    }, function() {
      return [ "\n      ", Blaze.If(function() {
        return Spacebars.dataMustache(view.lookup("isCurrentUser"), view.lookup("userId"));
      }, function() {
        return [ "\n        ", Blaze.If(function() {
          return Spacebars.dataMustache(view.lookup("isUserMuted"), view.lookup("userId"));
        }, function() {
          return [ "\n          ", HTML.SPAN({
            "class": "muteIcon",
            rel: "tooltip",
            "data-placement": "bottom",
            title: "Unmute yourself"
          }, "\n            ", HTML.I({
            "class": "ion-ios-mic-off usericon"
          }), "\n          "), "\n        " ];
        }, function() {
          return [ "\n          ", Blaze.If(function() {
            return Spacebars.call(view.lookup("isCurrentUserTalking"));
          }, function() {
            return [ "\n            ", HTML.SPAN({
              "class": "muteIcon",
              rel: "tooltip",
              "data-placement": "bottom",
              title: "you are talking"
            }, "\n              ", HTML.I({
              "class": "ion-ios-mic usericon"
            }), "\n            "), "\n          " ];
          }, function() {
            return [ "\n          ", HTML.SPAN({
              "class": "muteIcon",
              rel: "tooltip",
              "data-placement": "bottom",
              title: "you are talking"
            }, "\n            ", HTML.I({
              "class": "ion-ios-mic-outline usericon"
            }), "\n          "), "\n          " ];
          }), "\n        " ];
        }), "\n      " ];
      }, function() {
        return [ "\n        ", Blaze.If(function() {
          return Spacebars.dataMustache(view.lookup("isUserMuted"), view.lookup("userId"));
        }, function() {
          return [ "\n          ", HTML.SPAN({
            rel: "tooltip",
            "data-placement": "bottom",
            title: function() {
              return [ Spacebars.mustache(Spacebars.dot(view.lookup("user"), "name")), " is muted" ];
            }
          }, "\n            ", HTML.I({
            "class": "ion-ios-mic-off usericon"
          }), "\n          "), "\n        " ];
        }, function() {
          return [ "\n          ", Blaze.If(function() {
            return Spacebars.dataMustache(view.lookup("isUserTalking"), view.lookup("userId"));
          }, function() {
            return [ "\n          ", HTML.SPAN({
              rel: "tooltip",
              "data-placement": "bottom",
              title: function() {
                return [ Spacebars.mustache(Spacebars.dot(view.lookup("user"), "name")), " is talking" ];
              }
            }, "\n            ", HTML.I({
              "class": "ion-ios-mic usericon"
            }), "\n          "), "\n          " ];
          }, function() {
            return [ "\n          ", HTML.SPAN({
              rel: "tooltip",
              "data-placement": "bottom",
              title: function() {
                return [ Spacebars.mustache(Spacebars.dot(view.lookup("user"), "name")), " is not talking" ];
              }
            }, "\n            ", HTML.I({
              "class": "ion-ios-mic-outline usericon"
            }), "\n          "), "\n          " ];
          }), "\n        " ];
        }), "\n      " ];
      }), "\n    " ];
    }), "\n  " ];
  }), "\n\n  ", Blaze.If(function() {
    return Spacebars.dataMustache(view.lookup("isUserSharingVideo"), view.lookup("userId"));
  }, function() {
    return [ "\n    ", HTML.SPAN({
      rel: "tooltip",
      "data-placement": "bottom",
      title: function() {
        return [ Spacebars.mustache(Spacebars.dot(view.lookup("user"), "name")), " is sharing their webcam" ];
      }
    }, "\n      ", HTML.I({
      "class": "icon fi-video usericon"
    }), "\n    "), "\n  " ];
  }), "\n\n  ", Blaze.If(function() {
    return Spacebars.dataMustache(view.lookup("userLockedIconApplicable"), view.lookup("userId"));
  }, function() {
    return [ "\n    ", HTML.SPAN({
      rel: "tooltip",
      "data-placement": "bottom",
      title: function() {
        return [ Spacebars.mustache(Spacebars.dot(view.lookup("user"), "name")), " is locked" ];
      }
    }, "\n      ", HTML.I({
      "class": "icon fi-lock usericon"
    }), "\n    "), "\n  " ];
  }) ];
}));

Template.__checkName("usernameEntry");
Template["usernameEntry"] = new Template("Template.usernameEntry", (function() {
  var view = this;
  return [ HTML.DIV({
    "class": "status"
  }, "\n      ", Blaze.If(function() {
    return Spacebars.dataMustache(view.lookup("equals"), Spacebars.dot(view.lookup("user"), "emoji_status"), "happy");
  }, function() {
    return [ "\n        ", Blaze._TemplateWith(function() {
      return {
        name: Spacebars.call("happy-face"),
        size: Spacebars.call("25")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("icon"));
    }), "\n      " ];
  }, function() {
    return [ "\n        ", Blaze.If(function() {
      return Spacebars.dataMustache(view.lookup("equals"), Spacebars.dot(view.lookup("user"), "emoji_status"), "neutral");
    }, function() {
      return [ "\n          ", Blaze._TemplateWith(function() {
        return {
          name: Spacebars.call("neutral-face"),
          size: Spacebars.call("25")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("icon"));
      }), "\n        " ];
    }, function() {
      return [ "\n          ", Blaze.If(function() {
        return Spacebars.dataMustache(view.lookup("equals"), Spacebars.dot(view.lookup("user"), "emoji_status"), "confused");
      }, function() {
        return [ "\n            ", Blaze._TemplateWith(function() {
          return {
            name: Spacebars.call("confused-face"),
            size: Spacebars.call("25")
          };
        }, function() {
          return Spacebars.include(view.lookupTemplate("icon"));
        }), "\n          " ];
      }, function() {
        return [ "\n            ", Blaze.If(function() {
          return Spacebars.dataMustache(view.lookup("equals"), Spacebars.dot(view.lookup("user"), "emoji_status"), "sad");
        }, function() {
          return [ "\n              ", Blaze._TemplateWith(function() {
            return {
              name: Spacebars.call("sad-face"),
              size: Spacebars.call("25")
            };
          }, function() {
            return Spacebars.include(view.lookupTemplate("icon"));
          }), "\n            " ];
        }, function() {
          return [ "\n              ", Blaze.If(function() {
            return Spacebars.dataMustache(view.lookup("equals"), Spacebars.dot(view.lookup("user"), "emoji_status"), "away");
          }, function() {
            return [ "\n                ", Blaze._TemplateWith(function() {
              return {
                name: Spacebars.call("clock"),
                size: Spacebars.call("25")
              };
            }, function() {
              return Spacebars.include(view.lookupTemplate("icon"));
            }), "\n              " ];
          }, function() {
            return [ "\n                ", Blaze.If(function() {
              return Spacebars.dataMustache(view.lookup("equals"), Spacebars.dot(view.lookup("user"), "emoji_status"), "raiseHand");
            }, function() {
              return [ "\n                  ", HTML.SPAN({
                rel: "tooltip",
                "data-placement": "bottom",
                title: "Lower your hand"
              }, "\n                    ", HTML.I({
                "class": "icon ion-android-hand statusIcon"
              }), "\n                  "), "\n                " ];
            }, function() {
              return [ "\n                  ", Blaze.If(function() {
                return Spacebars.call(Spacebars.dot(view.lookup("user"), "presenter"));
              }, function() {
                return [ "\n                    ", HTML.SPAN({
                  rel: "tooltip",
                  "data-placement": "bottom",
                  title: function() {
                    return [ Spacebars.mustache(Spacebars.dot(view.lookup("user"), "name")), " is the presenter" ];
                  }
                }, "\n                      ", HTML.I({
                  "class": "icon fi-projection-screen statusIcon"
                }), "\n                    "), "\n                  " ];
              }, function() {
                return [ "\n                    ", Blaze.If(function() {
                  return Spacebars.dataMustache(view.lookup("equals"), Spacebars.dot(view.lookup("user"), "role"), "MODERATOR");
                }, function() {
                  return [ "\n                      ", HTML.SPAN({
                    rel: "tooltip",
                    "data-placement": "bottom",
                    title: function() {
                      return [ Spacebars.mustache(Spacebars.dot(view.lookup("user"), "name")), " is a moderator" ];
                    }
                  }, "\n                        ", HTML.I({
                    "class": "icon fi-torso statusIcon"
                  }), "\n                      "), "\n                    " ];
                }), "\n                  " ];
              }), "\n                " ];
            }), "\n              " ];
          }), "\n            " ];
        }), "\n          " ];
      }), "\n        " ];
    }), "\n      " ];
  }), "\n    "), "\n\n    ", Blaze.If(function() {
    return Spacebars.dataMustache(view.lookup("isCurrentUser"), view.lookup("userId"));
  }, function() {
    return [ "\n      ", HTML.SPAN({
      "class": function() {
        return [ "userCurrent usernameEntry ", Blaze.If(function() {
          return Spacebars.dataMustache(view.lookup("hasGotUnreadMailClass"), "PUBLIC_CHAT");
        }, function() {
          return "gotUnreadMail";
        }) ];
      },
      rel: "tooltip",
      "data-placement": "bottom",
      title: function() {
        return [ Spacebars.mustache(Spacebars.dot(view.lookup("user"), "name")), " (you)" ];
      }
    }, "\n        ", HTML.SPAN({
      "class": "userName"
    }, Blaze.View("lookup:user.name", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "name"));
    }), " ", Blaze.If(function() {
      return Spacebars.call(Spacebars.dot(view.lookup("user"), "presenter"));
    }, function() {
      return " (presenter) ";
    }), " (you)"), "\n      "), "\n      ", Blaze.If(function() {
      return Spacebars.dataMustache(view.lookup("hasGotUnreadMailClass"), "PUBLIC_CHAT");
    }, function() {
      return [ "\n        ", HTML.DIV({
        "class": "unreadChatNumber"
      }, Blaze.View("lookup:getNumberOfUnreadMessages", function() {
        return Spacebars.mustache(view.lookup("getNumberOfUnreadMessages"), "PUBLIC_CHAT");
      })), "\n      " ];
    }), "\n    " ];
  }, function() {
    return [ "\n      ", HTML.SPAN({
      "class": function() {
        return [ "usernameEntry ", Blaze.If(function() {
          return Spacebars.dataMustache(view.lookup("hasGotUnreadMailClass"), Spacebars.dot(view.lookup("user"), "userid"));
        }, function() {
          return "gotUnreadMail";
        }) ];
      },
      rel: "tooltip",
      "data-placement": "bottom",
      title: function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "name"));
      }
    }, "\n        ", HTML.SPAN({
      "class": "userName"
    }, " ", Blaze.View("lookup:user.name", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "name"));
    }), " ", Blaze.If(function() {
      return Spacebars.call(Spacebars.dot(view.lookup("user"), "presenter"));
    }, function() {
      return " (presenter) ";
    })), "\n      "), "\n      ", Blaze.If(function() {
      return Spacebars.dataMustache(view.lookup("hasGotUnreadMailClass"), Spacebars.dot(view.lookup("user"), "userid"));
    }, function() {
      return [ "\n        ", HTML.DIV({
        "class": "unreadChatNumber"
      }, Blaze.View("lookup:getNumberOfUnreadMessages", function() {
        return Spacebars.mustache(view.lookup("getNumberOfUnreadMessages"), Spacebars.dot(view.lookup("user"), "userid"));
      })), "\n      " ];
    }), "\n    " ];
  }) ];
}));

Template.__checkName("userItem");
Template["userItem"] = new Template("Template.userItem", (function() {
  var view = this;
  return [ Spacebars.include(view.lookupTemplate("usernameEntry")), "\n  ", HTML.DIV({
    id: "usericons"
  }, "\n    ", Spacebars.include(view.lookupTemplate("displayUserIcons")), "\n  ") ];
}));

}).call(this);
