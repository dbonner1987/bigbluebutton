(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/whiteboard_models/utils.coffee.js                            //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.methods({                                                       // 3
  postToUrl: function(path, params, method) {                          // 9
    var $hiddenField, form, key;                                       // 10
    method = method || "post";                                         // 10
    form = $("<form></form>");                                         // 10
    form.attr({                                                        // 10
      "method": method,                                                // 13
      "action": path                                                   // 13
    });                                                                //
    for (key in params) {                                              // 15
      if (params.hasOwnProperty(key)) {                                // 16
        $hiddenField = $("input");                                     // 17
        $hiddenField.attr({                                            // 17
          "type": "hidden",                                            // 19
          "name": key,                                                 // 19
          "value": params[key]                                         // 19
        });                                                            //
        form.append($hiddenField);                                     // 17
      }                                                                //
    }                                                                  // 15
    $('body').append(form);                                            // 10
    return form.submit();                                              //
  }                                                                    //
});                                                                    //
                                                                       //
this.formatThickness = function(thickness) {                           // 3
  if (thickness == null) {                                             //
    thickness = "1";                                                   //
  }                                                                    //
  if (!thickness.toString().match(/.*px$/)) {                          // 30
    "#" + thickness + "px";                                            // 31
  }                                                                    //
  return thickness;                                                    //
};                                                                     // 28
                                                                       //
this.zoomStroke = function(thickness) {                                // 3
  var currentSlide, ratio;                                             // 36
  currentSlide = this.getCurrentSlideDoc();                            // 36
  ratio = ((currentSlide != null ? currentSlide.slide.width_ratio : void 0) + (currentSlide != null ? currentSlide.slide.height_ratio : void 0)) / 2;
  return thickness * 100 / ratio;                                      //
};                                                                     // 35
                                                                       //
/////////////////////////////////////////////////////////////////////////

}).call(this);
