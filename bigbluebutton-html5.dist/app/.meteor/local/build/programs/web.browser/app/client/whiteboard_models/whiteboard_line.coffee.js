(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/whiteboard_models/whiteboard_line.coffee.js                  //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var MAX_PATHS_IN_SEQUENCE,                                             // 1
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;                                         //
                                                                       //
MAX_PATHS_IN_SEQUENCE = 30;                                            // 1
                                                                       //
this.WhiteboardLineModel = (function(superClass) {                     // 1
  extend(WhiteboardLineModel, superClass);                             // 10
                                                                       //
  function WhiteboardLineModel(paper) {                                // 10
    this.paper = paper;                                                // 11
    WhiteboardLineModel.__super__.constructor.call(this, this.paper);  // 11
    this.definition = ["", "#000", "0px"];                             // 11
  }                                                                    //
                                                                       //
  WhiteboardLineModel.prototype.make = function(info) {                // 10
    var color, path, pathPercent, thickness, x, x1, y, y1;             // 24
    if ((info != null ? info.points : void 0) != null) {               // 24
      x = info.points[0];                                              // 25
      y = info.points[1];                                              // 25
      color = info.color;                                              // 25
      thickness = info.thickness;                                      // 25
      x1 = x * this.gw + this.xOffset;                                 // 25
      y1 = y * this.gh + this.yOffset;                                 // 25
      path = "M" + x1 + " " + y1 + " L" + x1 + " " + y1;               // 25
      pathPercent = "M" + x + " " + y + " L" + x + " " + y;            // 25
      this.obj = this.paper.path(path);                                // 25
      this.obj.attr("stroke", formatColor(color));                     // 25
      this.obj.attr("stroke-width", zoomStroke(formatThickness(thickness)));
      this.obj.attr({                                                  // 25
        "stroke-linejoin": "round"                                     // 37
      });                                                              //
      this.obj.attr("stroke-linecap", "round");                        // 25
      this.definition = [pathPercent, this.obj.attrs["stroke"], this.obj.attrs["stroke-width"]];
    }                                                                  //
    return this.obj;                                                   //
  };                                                                   //
                                                                       //
  WhiteboardLineModel.prototype.update = function(info) {              // 10
    var path, x1, x2, y1, y2;                                          // 56
    if ((info != null ? info.points : void 0) != null) {               // 56
      x1 = info.points[0];                                             // 57
      y1 = info.points[1];                                             // 57
      x2 = info.points[2];                                             // 57
      y2 = info.points[3];                                             // 57
      if (this.obj != null) {                                          // 62
        path = this._buildPath(info.points);                           // 63
        this.definition[0] = path;                                     // 63
        path = this._scaleLinePath(path, this.gw, this.gh, this.xOffset, this.yOffset);
        return this.obj.attr({                                         //
          path: path                                                   // 68
        });                                                            //
      }                                                                //
    }                                                                  //
  };                                                                   //
                                                                       //
  WhiteboardLineModel.prototype.draw = function(x1, y1, x2, y2, colour, thickness) {};
                                                                       //
  WhiteboardLineModel.prototype.dragOnStart = function(x, y) {};       // 10
                                                                       //
  WhiteboardLineModel.prototype.dragOnMove = function(dx, dy, x, y) {};
                                                                       //
  WhiteboardLineModel.prototype.dragOnEnd = function(e) {};            // 10
                                                                       //
  WhiteboardLineModel.prototype._buildPath = function(points) {        // 10
    var i, path;                                                       // 162
    path = "";                                                         // 162
    if (points && points.length >= 2) {                                // 164
      path += "M " + points[0] + " " + points[1];                      // 165
      i = 2;                                                           // 165
      while (i < points.length) {                                      // 168
        path += "L" + points[i] + " " + points[i + 1];                 // 169
        i += 2;                                                        // 169
      }                                                                //
      path += "Z";                                                     // 165
      return path;                                                     //
    }                                                                  //
  };                                                                   //
                                                                       //
  WhiteboardLineModel.prototype._scaleLinePath = function(string, w, h, xOffset, yOffset) {
    var j, len, path, points;                                          // 180
    if (xOffset == null) {                                             //
      xOffset = 0;                                                     //
    }                                                                  //
    if (yOffset == null) {                                             //
      yOffset = 0;                                                     //
    }                                                                  //
    path = null;                                                       // 180
    points = string.match(/(\d+[.]?\d*)/g);                            // 180
    len = points.length;                                               // 180
    j = 0;                                                             // 180
    while (j < len) {                                                  // 186
      if (j !== 0) {                                                   // 187
        path += "L" + (points[j] * w + xOffset) + "," + (points[j + 1] * h + yOffset);
      } else {                                                         //
        path = "M" + (points[j] * w + xOffset) + "," + (points[j + 1] * h + yOffset);
      }                                                                //
      j += 2;                                                          // 187
    }                                                                  //
    return path;                                                       //
  };                                                                   //
                                                                       //
  return WhiteboardLineModel;                                          //
                                                                       //
})(WhiteboardToolModel);                                               //
                                                                       //
/////////////////////////////////////////////////////////////////////////

}).call(this);
