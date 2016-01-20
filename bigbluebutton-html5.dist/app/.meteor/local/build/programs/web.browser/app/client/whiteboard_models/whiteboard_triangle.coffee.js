(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/whiteboard_models/whiteboard_triangle.coffee.js              //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;                                         //
                                                                       //
this.WhiteboardTriangleModel = (function(superClass) {                 // 2
  extend(WhiteboardTriangleModel, superClass);                         // 4
                                                                       //
  function WhiteboardTriangleModel(paper) {                            // 4
    this.paper = paper;                                                // 5
    WhiteboardTriangleModel.__super__.constructor.call(this, this.paper);
    this.definition = [0, 0, 0, 0, "#000", "0px"];                     // 5
  }                                                                    //
                                                                       //
  WhiteboardTriangleModel.prototype.make = function(info) {            // 4
    var color, path, thickness, x, y;                                  // 17
    if ((info != null ? info.points : void 0) != null) {               // 17
      x = info.points[0];                                              // 18
      y = info.points[1];                                              // 18
      color = info.color;                                              // 18
      thickness = info.thickness;                                      // 18
      path = this._buildPath(x, y, x, y, x, y);                        // 18
      this.obj = this.paper.path(path);                                // 18
      this.obj.attr("stroke", formatColor(color));                     // 18
      this.obj.attr("stroke-width", zoomStroke(formatThickness(thickness)));
      this.obj.attr({                                                  // 18
        "stroke-linejoin": "round"                                     // 27
      });                                                              //
      this.definition = [x, y, x, y, this.obj.attrs["stroke"], this.obj.attrs["stroke-width"]];
    }                                                                  //
    return this.obj;                                                   //
  };                                                                   //
                                                                       //
  WhiteboardTriangleModel.prototype.update = function(info) {          // 4
    var path, ref, x1, x2, xBottomLeft, xBottomRight, xTop, y1, y2, yBottomLeft, yBottomRight, yTop;
    if ((info != null ? info.points : void 0) != null) {               // 39
      x1 = info.points[0];                                             // 40
      y1 = info.points[1];                                             // 40
      x2 = info.points[2];                                             // 40
      y2 = info.points[3];                                             // 40
      if (this.obj != null) {                                          // 45
        ref = this._getCornersFromPoints(x1, y1, x2, y2), xTop = ref[0], yTop = ref[1], xBottomLeft = ref[2], yBottomLeft = ref[3], xBottomRight = ref[4], yBottomRight = ref[5];
        path = this._buildPath(xTop * this.gw + this.xOffset, yTop * this.gh + this.yOffset, xBottomLeft * this.gw + this.xOffset, yBottomLeft * this.gh + this.yOffset, xBottomRight * this.gw + this.xOffset, yBottomRight * this.gh + this.yOffset);
        this.obj.attr({                                                // 46
          path: path                                                   // 51
        });                                                            //
        this.definition[0] = x1;                                       // 46
        this.definition[1] = y1;                                       // 46
        this.definition[2] = x2;                                       // 46
        return this.definition[3] = y2;                                //
      }                                                                //
    }                                                                  //
  };                                                                   //
                                                                       //
  WhiteboardTriangleModel.prototype.draw = function(x1, y1, x2, y2, colour, thickness) {
    var path, ref, triangle, xBottomLeft, xBottomRight, xTop, yBottomLeft, yBottomRight, yTop;
    ref = this._getCornersFromPoints(x1, y1, x2, y2), xTop = ref[0], yTop = ref[1], xBottomLeft = ref[2], yBottomLeft = ref[3], xBottomRight = ref[4], yBottomRight = ref[5];
    path = this._buildPath(xTop, yTop, xBottomLeft, yBottomLeft, xBottomRight, yBottomRight);
    path = this._scaleTrianglePath(path, this.gw, this.gh, this.xOffset, this.yOffset);
    triangle = this.paper.path(path);                                  // 66
    triangle.attr(Utils.strokeAndThickness(colour, thickness));        // 66
    triangle.attr({                                                    // 66
      "stroke-linejoin": "round"                                       // 71
    });                                                                //
    return triangle;                                                   //
  };                                                                   //
                                                                       //
  WhiteboardTriangleModel.prototype._getCornersFromPoints = function(x1, y1, x2, y2) {
    var xBottomLeft, xBottomRight, xTop, yBottomLeft, yBottomRight, yTop;
    xTop = ((x2 - x1) / 2) + x1;                                       // 75
    yTop = y1;                                                         // 75
    xBottomLeft = x1;                                                  // 75
    yBottomLeft = y2;                                                  // 75
    xBottomRight = x2;                                                 // 75
    yBottomRight = y2;                                                 // 75
    return [xTop, yTop, xBottomLeft, yBottomLeft, xBottomRight, yBottomRight];
  };                                                                   //
                                                                       //
  WhiteboardTriangleModel.prototype._buildPath = function(xTop, yTop, xBottomLeft, yBottomLeft, xBottomRight, yBottomRight) {
    return "M" + xTop + "," + yTop + "," + xBottomLeft + "," + yBottomLeft + "," + xBottomRight + "," + yBottomRight + "z";
  };                                                                   //
                                                                       //
  WhiteboardTriangleModel.prototype._scaleTrianglePath = function(string, w, h, xOffset, yOffset) {
    var j, len, path, points;                                          // 91
    if (xOffset == null) {                                             //
      xOffset = 0;                                                     //
    }                                                                  //
    if (yOffset == null) {                                             //
      yOffset = 0;                                                     //
    }                                                                  //
    path = null;                                                       // 91
    points = string.match(/(\d+[.]?\d*)/g);                            // 91
    len = points.length;                                               // 91
    j = 0;                                                             // 91
    path = "M";                                                        // 91
    while (j < len) {                                                  // 98
      if (j !== 0) {                                                   // 99
        path += ",";                                                   // 99
      }                                                                //
      path += "" + (points[j] * w + xOffset) + "," + (points[j + 1] * h + yOffset);
      j += 2;                                                          // 99
    }                                                                  //
    return path + "z";                                                 //
  };                                                                   //
                                                                       //
  return WhiteboardTriangleModel;                                      //
                                                                       //
})(WhiteboardToolModel);                                               //
                                                                       //
WhiteboardTriangleModel;                                               // 2
                                                                       //
/////////////////////////////////////////////////////////////////////////

}).call(this);
