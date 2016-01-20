(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/whiteboard_models/whiteboard_ellipse.coffee.js               //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;                                         //
                                                                       //
this.WhiteboardEllipseModel = (function(superClass) {                  // 2
  extend(WhiteboardEllipseModel, superClass);                          // 4
                                                                       //
  function WhiteboardEllipseModel(paper) {                             // 4
    this.paper = paper;                                                // 5
    WhiteboardEllipseModel.__super__.constructor.call(this, this.paper);
    this.definition = [0, 0, 0, 0, "#000", "0px"];                     // 5
  }                                                                    //
                                                                       //
  WhiteboardEllipseModel.prototype.make = function(info) {             // 4
    var color, thickness, x, y;                                        // 19
    if ((info != null ? info.points : void 0) != null) {               // 19
      x = info.points[0];                                              // 20
      y = info.points[1];                                              // 20
      color = info.color;                                              // 20
      thickness = info.thickness;                                      // 20
      this.obj = this.paper.ellipse(x * this.gw + this.xOffset, y * this.gh + this.yOffset, 0, 0);
      this.obj.attr("stroke", formatColor(color));                     // 20
      this.obj.attr("stroke-width", zoomStroke(formatThickness(thickness)));
      this.definition = [x, y, y, x, this.obj.attrs["stroke"], this.obj.attrs["stroke-width"]];
    }                                                                  //
    return this.obj;                                                   //
  };                                                                   //
                                                                       //
  WhiteboardEllipseModel.prototype.update = function(info) {           // 4
    var circle, coords, r, ref, ref1, reversed, rx, ry, x1, x2, y1, y2;
    if ((info != null ? info.points : void 0) != null) {               // 40
      x1 = info.points[0];                                             // 41
      y1 = info.points[1];                                             // 41
      x2 = info.points[2];                                             // 41
      y2 = info.points[3];                                             // 41
      circle = info.square;                                            // 41
      if (this.obj != null) {                                          // 48
        if (x2 < x1) {                                                 // 49
          ref = [x2, x1], x1 = ref[0], x2 = ref[1];                    // 49
        }                                                              //
        if (y2 < y1) {                                                 // 51
          ref1 = [y2, y1], y1 = ref1[0], y2 = ref1[1];                 // 52
          reversed = true;                                             // 52
        }                                                              //
        if (circle) {                                                  // 57
          if (reversed) {                                              // 58
            y1 = y2 - (x2 - x1) * this.gw / this.gh;                   // 59
          } else {                                                     //
            y2 = y1 + (x2 - x1) * this.gw / this.gh;                   // 61
          }                                                            //
        }                                                              //
        coords = {                                                     // 49
          x1: x1,                                                      // 64
          x2: x2,                                                      // 64
          y1: y1,                                                      // 64
          y2: y2                                                       // 64
        };                                                             //
        rx = (x2 - x1) / 2;                                            // 49
        ry = (y2 - y1) / 2;                                            // 49
        r = {                                                          // 49
          rx: rx * this.gw,                                            // 75
          ry: ry * this.gh,                                            // 75
          cx: (rx + x1) * this.gw + this.xOffset,                      // 75
          cy: (ry + y1) * this.gh + this.yOffset                       // 75
        };                                                             //
        this.obj.attr(r);                                              // 49
        this.definition[0] = x1;                                       // 49
        this.definition[1] = y1;                                       // 49
        this.definition[2] = x2;                                       // 49
        return this.definition[3] = y2;                                //
      }                                                                //
    }                                                                  //
  };                                                                   //
                                                                       //
  WhiteboardEllipseModel.prototype.draw = function(x1, y1, x2, y2, colour, thickness) {
    var elip, ref, ref1, rx, ry, x, y;                                 // 97
    if (x2 < x1) {                                                     // 97
      ref = [x2, x1], x1 = ref[0], x2 = ref[1];                        // 97
    }                                                                  //
    if (y2 < y1) {                                                     // 98
      ref1 = [y2, y1], y1 = ref1[0], y2 = ref1[1];                     // 98
    }                                                                  //
    rx = (x2 - x1) / 2;                                                // 97
    ry = (y2 - y1) / 2;                                                // 97
    x = (rx + x1) * this.gw + this.xOffset;                            // 97
    y = (ry + y1) * this.gh + this.yOffset;                            // 97
    elip = this.paper.ellipse(x, y, rx * this.gw, ry * this.gh);       // 97
    elip.attr(Utils.strokeAndThickness(colour, thickness));            // 97
    return elip;                                                       //
  };                                                                   //
                                                                       //
  WhiteboardEllipseModel.prototype.dragOnStart = function(x, y) {};    // 4
                                                                       //
  WhiteboardEllipseModel.prototype.dragOnMove = function(dx, dy, x, y, e) {};
                                                                       //
  WhiteboardEllipseModel.prototype.dragOnStop = function(e) {};        // 4
                                                                       //
  return WhiteboardEllipseModel;                                       //
                                                                       //
})(WhiteboardToolModel);                                               //
                                                                       //
/////////////////////////////////////////////////////////////////////////

}).call(this);
