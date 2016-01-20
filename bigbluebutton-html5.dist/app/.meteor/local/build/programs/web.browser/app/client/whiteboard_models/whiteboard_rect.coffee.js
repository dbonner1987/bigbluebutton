(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/whiteboard_models/whiteboard_rect.coffee.js                  //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;                                         //
                                                                       //
this.WhiteboardRectModel = (function(superClass) {                     // 2
  extend(WhiteboardRectModel, superClass);                             // 3
                                                                       //
  function WhiteboardRectModel(paper) {                                // 3
    this.paper = paper;                                                // 4
    this.make = bind(this.make, this);                                 // 4
    WhiteboardRectModel.__super__.constructor.call(this, this.paper);  // 4
    this.definition = [0, 0, 0, 0, "#000", "0px"];                     // 4
    this.paper;                                                        // 4
  }                                                                    //
                                                                       //
  WhiteboardRectModel.prototype.make = function(startingData) {        // 3
    var color, thickness, x, y;                                        // 17
    x = startingData.points[0];                                        // 17
    y = startingData.points[1];                                        // 17
    color = startingData.color;                                        // 17
    thickness = startingData.thickness;                                // 17
    this.obj = this.paper.rect(x * this.gw + this.xOffset, y * this.gh + this.yOffset, 0, 0, 1);
    this.obj.attr("stroke", formatColor(color));                       // 17
    this.obj.attr("stroke-width", zoomStroke(formatThickness(thickness)));
    this.definition = {                                                // 17
      shape: "rect",                                                   // 26
      data: [x, y, 0, 0, this.obj.attrs["stroke"], this.obj.attrs["stroke-width"]]
    };                                                                 //
    return this.obj;                                                   //
  };                                                                   //
                                                                       //
  WhiteboardRectModel.prototype.update = function(startingData) {      // 3
    var height, ref, ref1, reversed, square, width, x, x1, x2, y, y1, y2;
    x1 = startingData.points[0];                                       // 38
    y1 = startingData.points[1];                                       // 38
    x2 = startingData.points[2];                                       // 38
    y2 = startingData.points[3];                                       // 38
    square = startingData.square;                                      // 38
    if (this.obj != null) {                                            // 44
      if (x2 < x1) {                                                   // 45
        ref = [x2, x1], x1 = ref[0], x2 = ref[1];                      // 45
      }                                                                //
      if (y2 < y1) {                                                   // 47
        ref1 = [y2, y1], y1 = ref1[0], y2 = ref1[1];                   // 48
        reversed = true;                                               // 48
      }                                                                //
      if (square) {                                                    // 51
        if (reversed) {                                                // 52
          y1 = y2 - (x2 - x1) * this.gw / this.gh;                     // 53
        } else {                                                       //
          y2 = y1 + (x2 - x1) * this.gw / this.gh;                     // 55
        }                                                              //
      }                                                                //
      x = x1 * this.gw + this.xOffset;                                 // 45
      y = y1 * this.gh + this.yOffset;                                 // 45
      width = (x2 * this.gw + this.xOffset) - x;                       // 45
      height = (y2 * this.gh + this.yOffset) - y;                      // 45
      this.obj.attr({                                                  // 45
        x: x,                                                          // 63
        y: y,                                                          // 63
        width: width,                                                  // 63
        height: height                                                 // 63
      });                                                              //
                                                                       // 67
      /*else                                                           // 67
        @obj.attr                                                      //
          x: x                                                         //
          y: y                                                         //
          width: width                                                 //
          height: width                                                //
       */                                                              //
      this.definition.data[0] = x1;                                    // 45
      this.definition.data[1] = y1;                                    // 45
      this.definition.data[2] = x2;                                    // 45
      return this.definition.data[3] = y2;                             //
    }                                                                  //
  };                                                                   //
                                                                       //
  WhiteboardRectModel.prototype.draw = function(x1, y1, x2, y2, colour, thickness) {
    var r, ref, ref1, x, y;                                            // 88
    if (x2 < x1) {                                                     // 88
      ref = [x2, x1], x1 = ref[0], x2 = ref[1];                        // 88
    }                                                                  //
    if (y2 < y1) {                                                     // 89
      ref1 = [y2, y1], y1 = ref1[0], y2 = ref1[1];                     // 89
    }                                                                  //
    x = x1 * this.gw;                                                  // 88
    y = y1 * this.gh;                                                  // 88
    r = this.paper.rect(x + this.xOffset, y + this.yOffset, (x2 * this.gw) - x, (y2 * this.gh) - y, 1);
    r.attr(Meteor.call("strokeAndThickness", colour, thickness));      // 88
    return r;                                                          //
  };                                                                   //
                                                                       //
  WhiteboardRectModel.prototype.dragOnStart = function(x, y) {};       // 3
                                                                       //
  WhiteboardRectModel.prototype.dragOnMove = function(dx, dy, x, y, e) {};
                                                                       //
  WhiteboardRectModel.prototype.dragOnEnd = function(e) {};            // 3
                                                                       //
  return WhiteboardRectModel;                                          //
                                                                       //
})(WhiteboardToolModel);                                               //
                                                                       //
/////////////////////////////////////////////////////////////////////////

}).call(this);
