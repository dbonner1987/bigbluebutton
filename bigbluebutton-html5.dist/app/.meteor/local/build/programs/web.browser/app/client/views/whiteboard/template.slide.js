(function(){
Template.__checkName("slide");
Template["slide"] = new Template("Template.slide", (function() {
  var view = this;
  return [ Blaze.Each(function() {
    return Spacebars.call(view.lookup("getShapesForSlide"));
  }, function() {
    return [ "\n		", Spacebars.include(view.lookupTemplate("shape")), "\n	" ];
  }), "\n	", Blaze.View("lookup:updatePointerLocation", function() {
    return Spacebars.mustache(view.lookup("updatePointerLocation"), view.lookup("pointerLocation"));
  }) ];
}));

Template.__checkName("shape");
Template["shape"] = new Template("Template.shape", (function() {
  var view = this;
  return "";
}));

}).call(this);
