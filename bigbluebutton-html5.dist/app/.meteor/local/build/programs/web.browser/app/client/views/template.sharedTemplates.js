(function(){
Template.__checkName("makeButton");
Template["makeButton"] = new Template("Template.makeButton", (function() {
  var view = this;
  return HTML.BUTTON(HTML.Attrs({
    type: "submit",
    id: function() {
      return Spacebars.mustache(view.lookup("id"));
    },
    "class": function() {
      return [ "btn ", Spacebars.mustache(view.lookup("btn_class")) ];
    },
    rel: function() {
      return Spacebars.mustache(view.lookup("rel"));
    },
    "data-placement": function() {
      return Spacebars.mustache(view.lookup("data_placement"));
    },
    title: function() {
      return Spacebars.mustache(view.lookup("title"));
    },
    style: function() {
      return Spacebars.mustache(view.lookup("style"));
    }
  }, function() {
    return Spacebars.attrMustache(view.lookup("isDisabled"));
  }), "\n    ", Blaze.If(function() {
    return Spacebars.call(view.lookup("notification"));
  }, function() {
    return [ "\n      ", Blaze.If(function() {
      return Spacebars.dataMustache(view.lookup("hasGotUnreadMail"), view.lookup("notification"));
    }, function() {
      return [ "\n        ", HTML.DIV({
        "class": function() {
          return Spacebars.mustache(view.lookup("getNotificationClass"), view.lookup("notification"));
        }
      }, Blaze.View("lookup:getNumberOfUnreadMessages", function() {
        return Spacebars.mustache(view.lookup("getNumberOfUnreadMessages"), view.lookup("notification"));
      })), "\n      " ];
    }), "\n    " ];
  }), "\n    ", Blaze.If(function() {
    return Spacebars.call(view.lookup("i_class"));
  }, function() {
    return [ "\n      ", HTML.I({
      "class": function() {
        return Spacebars.mustache(view.lookup("i_class"));
      }
    }), "\n    " ];
  }), "\n    ", Blaze.If(function() {
    return Spacebars.call(view.lookup("label"));
  }, function() {
    return [ "\n      ", HTML.SPAN(Blaze.View("lookup:label", function() {
      return Spacebars.mustache(view.lookup("label"));
    })), "\n    " ];
  }), "\n    ", Blaze.If(function() {
    return Spacebars.call(view.lookup("span"));
  }, function() {
    return [ "\n      ", HTML.SPAN(), "\n    " ];
  }), "\n  ");
}));

}).call(this);
