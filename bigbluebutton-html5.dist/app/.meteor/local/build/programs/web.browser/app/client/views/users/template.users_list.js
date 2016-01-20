(function(){
Template.__checkName("usersList");
Template["usersList"] = new Template("Template.usersList", (function() {
  var view = this;
  return HTML.DIV(HTML.Attrs({
    id: function() {
      return Spacebars.mustache(view.lookup("id"));
    },
    "class": function() {
      return [ "component ", Spacebars.mustache(view.lookup("class")) ];
    }
  }, function() {
    return Spacebars.attrMustache(view.lookup("visibility"), view.lookup("name"));
  }), "\n    ", HTML.H3({
    "class": "meetingTitle"
  }, "\n      ", Blaze.View("lookup:getMeetingName", function() {
    return Spacebars.mustache(view.lookup("getMeetingName"));
  }), "\n    "), "\n    ", HTML.DIV({
    id: "user-contents"
  }, "\n      ", HTML.DIV({
    "class": "userlist ScrollableWindowY"
  }, "\n        ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("getUsersInMeeting"));
  }, function() {
    return [ "\n          ", HTML.DIV({
      id: "content",
      "class": "userItem"
    }, Spacebars.include(view.lookupTemplate("userItem"))), "\n        " ];
  }), "\n      "), "\n    "), "\n  ");
}));

}).call(this);
