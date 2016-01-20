(function(){
Template.__checkName("whiteboard");
Template["whiteboard"] = new Template("Template.whiteboard", (function() {
  var view = this;
  return HTML.DIV(HTML.Attrs({
    id: function() {
      return Spacebars.mustache(view.lookup("id"));
    },
    "class": "component"
  }, function() {
    return Spacebars.attrMustache(view.lookup("visibility"), view.lookup("name"));
  }), "\n    ", Blaze.If(function() {
    return Spacebars.call(view.lookup("getCurrentSlide"));
  }, function() {
    return [ "\n      ", Spacebars.include(view.lookupTemplate("slide")), "\n    " ];
  }), "\n    ", HTML.DIV({
    id: "whiteboard-container",
    "class": function() {
      return Spacebars.mustache(view.lookup("whiteboardSize"));
    }
  }, "\n      ", HTML.Raw('<div id="whiteboard-paper">\n      </div>'), "\n      ", HTML.Raw("<!-- TODO: Move this to the whiteboardControls -->"), "\n      ", HTML.DIV({
    "class": function() {
      return [ "FABContainer ", Blaze.Unless(function() {
        return Spacebars.call(view.lookup("hasNoPresentation"));
      }, function() {
        return "noPresentation";
      }) ];
    }
  }, "\n        ", HTML.Raw('<button type="submit" class="FABTriggerButton">\n          <i class="ion-android-hand"></i>\n        </button>'), "\n        ", HTML.BUTTON({
    type: "submit",
    "class": function() {
      return [ "sadEmojiButton ", Blaze.If(function() {
        return Spacebars.dataMustache(view.lookup("equals"), view.lookup("getCurrentUserEmojiStatus"), "sad");
      }, function() {
        return "activeEmojiButton";
      }, function() {
        return "inactiveEmojiButton";
      }) ];
    }
  }, "\n          ", Blaze._TemplateWith(function() {
    return {
      name: Spacebars.call("sad-face"),
      size: Spacebars.call("50")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("icon"));
  }), "\n        "), "\n        ", HTML.BUTTON({
    type: "submit",
    "class": function() {
      return [ "happyEmojiButton ", Blaze.If(function() {
        return Spacebars.dataMustache(view.lookup("equals"), view.lookup("getCurrentUserEmojiStatus"), "happy");
      }, function() {
        return "activeEmojiButton";
      }, function() {
        return "inactiveEmojiButton";
      }) ];
    }
  }, "\n          ", Blaze._TemplateWith(function() {
    return {
      name: Spacebars.call("happy-face"),
      size: Spacebars.call("50")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("icon"));
  }), "\n        "), "\n        ", HTML.BUTTON({
    type: "submit",
    "class": function() {
      return [ "confusedEmojiButton ", Blaze.If(function() {
        return Spacebars.dataMustache(view.lookup("equals"), view.lookup("getCurrentUserEmojiStatus"), "confused");
      }, function() {
        return "activeEmojiButton";
      }, function() {
        return "inactiveEmojiButton";
      }) ];
    }
  }, "\n          ", Blaze._TemplateWith(function() {
    return {
      name: Spacebars.call("confused-face"),
      size: Spacebars.call("50")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("icon"));
  }), "\n        "), "\n        ", HTML.BUTTON({
    type: "submit",
    "class": function() {
      return [ "neutralEmojiButton ", Blaze.If(function() {
        return Spacebars.dataMustache(view.lookup("equals"), view.lookup("getCurrentUserEmojiStatus"), "neutral");
      }, function() {
        return "activeEmojiButton";
      }, function() {
        return "inactiveEmojiButton";
      }) ];
    }
  }, "\n          ", Blaze._TemplateWith(function() {
    return {
      name: Spacebars.call("neutral-face"),
      size: Spacebars.call("50")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("icon"));
  }), "\n        "), "\n        ", HTML.BUTTON({
    type: "submit",
    "class": function() {
      return [ "awayEmojiButton ", Blaze.If(function() {
        return Spacebars.dataMustache(view.lookup("equals"), view.lookup("getCurrentUserEmojiStatus"), "away");
      }, function() {
        return "activeEmojiButton";
      }, function() {
        return "inactiveEmojiButton";
      }) ];
    }
  }, "\n          ", Blaze._TemplateWith(function() {
    return {
      name: Spacebars.call("clock"),
      size: Spacebars.call("50")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("icon"));
  }), "\n        "), "\n        ", HTML.BUTTON({
    type: "submit",
    "class": function() {
      return [ "raiseHandEmojiButton ", Blaze.If(function() {
        return Spacebars.dataMustache(view.lookup("equals"), view.lookup("getCurrentUserEmojiStatus"), "raiseHand");
      }, function() {
        return "activeEmojiButton";
      }, function() {
        return "inactiveEmojiButton";
      }) ];
    }
  }, "\n          ", HTML.Raw('<i class="ion-android-hand"></i>'), "\n        "), "\n      "), "\n\n      ", Blaze.If(function() {
    return Spacebars.call(view.lookup("isMobile"));
  }, function() {
    return [ "\n        ", Blaze._TemplateWith(function() {
      return {
        btn_class: Spacebars.call("soaringButton fullscreenButton whiteboardFullscreenButton"),
        i_class: Spacebars.call("ion-arrow-expand")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("makeButton"));
    }), "\n      " ];
  }), "\n\n      ", Spacebars.include(view.lookupTemplate("whiteboardControls")), "\n    "), "\n    ", Blaze.If(function() {
    return Spacebars.call(view.lookup("isPollStarted"));
  }, function() {
    return [ "\n      ", Spacebars.include(view.lookupTemplate("polling")), "\n    " ];
  }), "\n  ");
}));

Template.__checkName("whiteboardControls");
Template["whiteboardControls"] = new Template("Template.whiteboardControls", (function() {
  var view = this;
  return HTML.DIV({
    id: "whiteboard-controls"
  }, "\n    ", HTML.DIV({
    "class": "whiteboard-buttons-left"
  }, "\n      ", HTML.Raw("<!-- TODO: Adjust the presenter uploader for mobile views on iOS devices\n                 you cant upload PDFs, only images from camera/gallery -->"), "\n      ", Blaze.Unless(function() {
    return Spacebars.call(view.lookup("isMobile"));
  }, function() {
    return [ "\n        ", Spacebars.include(view.lookupTemplate("presenterUploaderControl")), "\n      " ];
  }), "\n    "), "\n    ", HTML.DIV({
    "class": "whiteboard-buttons-center"
  }, "\n      ", Blaze.If(function() {
    return Spacebars.call(view.lookup("isCurrentUserPresenter"));
  }, function() {
    return [ "\n        ", HTML.DIV({
      "class": "whiteboard-buttons-slide"
    }, "\n          ", Blaze._TemplateWith(function() {
      return {
        btn_class: Spacebars.call("prev"),
        i_class: Spacebars.call("ion-arrow-left-a"),
        rel: Spacebars.call("tooltip"),
        data_placement: Spacebars.call("top"),
        title: Spacebars.call("Previous")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("makeButton"));
    }), "\n          ", HTML.SPAN({
      "class": "current"
    }, "\n            ", Blaze.View("lookup:presentationProgress", function() {
      return Spacebars.mustache(view.lookup("presentationProgress"));
    }), "\n          "), "\n          ", Blaze._TemplateWith(function() {
      return {
        btn_class: Spacebars.call("next"),
        i_class: Spacebars.call("ion-arrow-right-a"),
        rel: Spacebars.call("tooltip"),
        data_placement: Spacebars.call("top"),
        title: Spacebars.call("Next")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("makeButton"));
    }), "\n        "), "\n      " ];
  }), "\n    "), HTML.Raw('\n    <div class="whiteboard-buttons-right">\n    </div>\n  '));
}));

Template.__checkName("presenterUploaderControl");
Template["presenterUploaderControl"] = new Template("Template.presenterUploaderControl", (function() {
  var view = this;
  return Blaze.If(function() {
    return Spacebars.call(view.lookup("isCurrentUserPresenter"));
  }, function() {
    return [ "\n    ", HTML.DIV({
      "class": function() {
        return [ "presenter-uploader-control ", Blaze.If(function() {
          return Spacebars.call(view.lookup("isOpen"));
        }, function() {
          return "is-open";
        }) ];
      }
    }, "\n      ", HTML.DIV({
      "class": "presenter-uploader-container"
    }, "\n        ", HTML.UL({
      "class": "presenter-uploader-file-list"
    }, "\n          ", Blaze.Each(function() {
      return Spacebars.call(view.lookup("files"));
    }, function() {
      return [ "\n            ", Spacebars.include(view.lookupTemplate("presenterUploaderControlFileListItem")), "\n          " ];
    }), "\n          ", Blaze.Each(function() {
      return Spacebars.call(view.lookup("presentations"));
    }, function() {
      return [ "\n            ", Spacebars.include(view.lookupTemplate("presenterUploaderControlPresentationListItem")), "\n          " ];
    }), "\n        "), "\n        ", HTML.DIV({
      "class": "presenter-uploader-dropzone",
      "data-dropzone": ""
    }, "\n          ", HTML.INPUT({
      type: "file",
      "class": "presenter-uploader-dropzone-fileinput",
      multiple: ""
    }), "\n          ", HTML.I({
      "class": "presenter-uploader-dropzone-icon ion-archive"
    }), "\n          ", HTML.SPAN({
      "class": "presenter-uploader-dropzone-label"
    }, "Drop files here ", HTML.BR(), "or click to upload"), "\n        "), "\n        ", HTML.DIV({
      "class": "presenter-uploader-tip"
    }, "\n          Upload any office document or Portable Document Format (PDF) file.\n          ", HTML.BR(), "\n          For best results upload PDF.\n        "), "\n        ", Blaze._TemplateWith(function() {
      return {
        btn_class: Spacebars.call("presenter-uploader-control-btn js-close"),
        i_class: Spacebars.call("ion-ios-close-outline")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("makeButton"));
    }), "\n      "), "\n\n      ", Blaze.Unless(function() {
      return Spacebars.call(view.lookup("isOpen"));
    }, function() {
      return [ "\n        ", Blaze._TemplateWith(function() {
        return {
          btn_class: Spacebars.call("presenter-uploader-control-btn js-open"),
          i_class: Spacebars.call("ion-ios-upload-outline")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("makeButton"));
      }), "\n      " ];
    }), "\n    "), "\n  " ];
  });
}));

Template.__checkName("presenterUploaderControlFileListItem");
Template["presenterUploaderControlFileListItem"] = new Template("Template.presenterUploaderControlFileListItem", (function() {
  var view = this;
  return HTML.LI({
    "class": "presenter-uploader-file-item is-uploading"
  }, "\n    ", HTML.SPAN({
    "class": "presenter-uploader-file-item-name"
  }, "\n      ", Blaze.View("lookup:name", function() {
    return Spacebars.mustache(view.lookup("name"));
  }), "\n    "), "\n    ", HTML.SPAN({
    "class": "presenter-uploader-file-item-progress"
  }, "\n      ", Blaze.View("lookup:percUploaded", function() {
    return Spacebars.mustache(view.lookup("percUploaded"));
  }), "%\n    "), "\n  ");
}));

Template.__checkName("presenterUploaderControlPresentationListItem");
Template["presenterUploaderControlPresentationListItem"] = new Template("Template.presenterUploaderControlPresentationListItem", (function() {
  var view = this;
  return HTML.LI({
    "class": function() {
      return [ "presenter-uploader-file-item ", Blaze.If(function() {
        return Spacebars.call(view.lookup("current"));
      }, function() {
        return "current";
      }) ];
    }
  }, "\n    ", HTML.SPAN({
    "class": "presenter-uploader-file-item-name",
    "data-action-show": ""
  }, "\n      ", Blaze.View("lookup:name", function() {
    return Spacebars.mustache(view.lookup("name"));
  }), "\n    "), "\n    ", HTML.SPAN({
    "class": "presenter-uploader-file-item-actions"
  }, "\n      ", Blaze.Unless(function() {
    return Spacebars.call(view.lookup("current"));
  }, function() {
    return [ "\n        ", HTML.I({
      "class": "ion-ios-eye-outline",
      "data-action-show": ""
    }), "\n      " ];
  }), "\n      ", HTML.Raw('<i class="ion-ios-trash-outline" data-action-delete=""></i>'), "\n    "), "\n  ");
}));

Template.__checkName("polling");
Template["polling"] = new Template("Template.polling", (function() {
  var view = this;
  return HTML.DIV({
    "class": "polling"
  }, "\n    ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("getPollQuestions"));
  }, function() {
    return [ "\n      ", Blaze._TemplateWith(function() {
      return {
        btn_class: Spacebars.call("pollButtons"),
        rel: Spacebars.call("tooltip"),
        data_placement: Spacebars.call("top"),
        label: Spacebars.call(view.lookup("key")),
        answer: Spacebars.call(view.lookup("id")),
        style: Spacebars.call(view.lookup("style"))
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("makeButton"));
    }), "\n    " ];
  }), "\n  ");
}));

}).call(this);
