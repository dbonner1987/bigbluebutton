(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/whiteboard_models/whiteboard_cursor.coffee.js                //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
                                                                       //
this.WhiteboardCursorModel = (function() {                             // 2
  function WhiteboardCursorModel(paper, radius, color) {               // 4
    this.paper = paper;                                                // 5
    this.radius = radius != null ? radius : null;                      // 5
    this.color = color != null ? color : null;                         // 5
    this.draw = bind(this.draw, this);                                 // 5
    if (this.radius == null) {                                         //
      this.radius = 6;                                                 //
    }                                                                  //
    if (this.color == null) {                                          //
      this.color = "#ff6666";                                          //
    }                                                                  //
    this.cursor = null;                                                // 5
    this.paper;                                                        // 5
  }                                                                    //
                                                                       //
  WhiteboardCursorModel.prototype.draw = function() {                  // 4
    this.cursor = this.paper.circle(0, 0, this.radius);                // 11
    this.cursor.attr({                                                 // 11
      "fill": this.color,                                              // 13
      "stroke": this.color,                                            // 13
      "opacity": "0.8"                                                 // 13
    });                                                                //
    return $(this.cursor.node).on("mousewheel", _.bind(this._onMouseWheel, this));
  };                                                                   //
                                                                       //
  WhiteboardCursorModel.prototype.toFront = function() {               // 4
    if (this.cursor != null) {                                         // 19
      return this.cursor.toFront();                                    //
    }                                                                  //
  };                                                                   //
                                                                       //
  WhiteboardCursorModel.prototype.setRadius = function(value) {        // 4
    if (this.cursor != null) {                                         // 22
      return this.cursor.attr({                                        //
        r: value                                                       // 23
      });                                                              //
    }                                                                  //
  };                                                                   //
                                                                       //
  WhiteboardCursorModel.prototype.setPosition = function(x, y) {       // 4
    if (this.cursor != null) {                                         // 26
      return this.cursor.attr({                                        //
        cx: x,                                                         // 28
        cy: y                                                          // 28
      });                                                              //
    }                                                                  //
  };                                                                   //
                                                                       //
  WhiteboardCursorModel.prototype.undrag = function() {                // 4
    if (this.cursor != null) {                                         // 32
      return this.cursor.undrag();                                     //
    }                                                                  //
  };                                                                   //
                                                                       //
  WhiteboardCursorModel.prototype.drag = function(onMove, onStart, onEnd, target) {
    if (target == null) {                                              //
      target = null;                                                   //
    }                                                                  //
    if (this.cursor != null) {                                         // 35
      target || (target = this);                                       // 36
      return this.cursor.drag(_.bind(onMove, target), _.bind(onStart, target), _.bind(onEnd, target));
    }                                                                  //
  };                                                                   //
                                                                       //
  WhiteboardCursorModel.prototype._onMouseWheel = function(e, delta) {
    return this.trigger("cursor:mousewheel", e, delta);                //
  };                                                                   //
                                                                       //
  WhiteboardCursorModel.prototype.remove = function() {                // 4
    return this.cursor.remove();                                       //
  };                                                                   //
                                                                       //
  return WhiteboardCursorModel;                                        //
                                                                       //
})();                                                                  //
                                                                       //
/////////////////////////////////////////////////////////////////////////

}).call(this);
