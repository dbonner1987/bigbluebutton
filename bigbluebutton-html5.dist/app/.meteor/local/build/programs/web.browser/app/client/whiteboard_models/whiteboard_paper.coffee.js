(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/whiteboard_models/whiteboard_paper.coffee.js                 //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.WhiteboardPaperModel = (function() {                            // 3
  function WhiteboardPaperModel(container) {                           // 6
    this.container = container;                                        // 8
    this.cursor = null;                                                // 8
    this.slides = {};                                                  // 8
    this.panX = null;                                                  // 8
    this.panY = null;                                                  // 8
    this.current = {};                                                 // 8
    this.current.slide = null;                                         // 8
    this.current.shapes = null;                                        // 8
    this.current.shapeDefinitions = [];                                // 8
    this.zoomLevel = 1;                                                // 8
    this.shiftPressed = false;                                         // 8
    this.currentPathCount = 0;                                         // 8
    this._updateContainerDimensions();                                 // 8
    this.zoomObserver = null;                                          // 8
    this.adjustedWidth = 0;                                            // 8
    this.adjustedHeight = 0;                                           // 8
    this.widthRatio = 100;                                             // 8
    this.heightRatio = 100;                                            // 8
  }                                                                    //
                                                                       //
  WhiteboardPaperModel.prototype.create = function() {                 // 6
    var h, w;                                                          // 48
    h = $("#" + this.container).height();                              // 48
    w = $("#" + this.container).width();                               // 48
    if (this.raphaelObj == null) {                                     //
      this.raphaelObj = ScaleRaphael(this.container, w, h);            //
    }                                                                  //
    if (this.raphaelObj == null) {                                     //
      this.raphaelObj = ScaleRaphael(this.container, $container.innerHeight(), $container.innerWidth());
    }                                                                  //
    this.raphaelObj.canvas.setAttribute("preserveAspectRatio", "xMinYMin slice");
    this.createCursor();                                               // 48
    if (this.slides) {                                                 // 58
      this.rebuild();                                                  // 59
    } else {                                                           //
      this.slides = {};                                                // 61
    }                                                                  //
    if (navigator.userAgent.indexOf("Firefox") !== -1) {               // 62
      this.raphaelObj.renderfix();                                     // 63
    }                                                                  //
    return this.raphaelObj;                                            //
  };                                                                   //
                                                                       //
  WhiteboardPaperModel.prototype.rebuild = function() {                // 6
    var results, url;                                                  // 70
    this.current.slide = null;                                         // 70
    results = [];                                                      // 71
    for (url in this.slides) {                                         //
      if (this.slides.hasOwnProperty(url)) {                           // 72
        results.push(this.addImageToPaper(url, this.slides[url].getWidth(), this.slides[url].getHeight()));
      } else {                                                         //
        results.push(void 0);                                          //
      }                                                                //
    }                                                                  // 71
    return results;                                                    //
  };                                                                   //
                                                                       //
  WhiteboardPaperModel.prototype.scale = function(width, height) {     // 6
    var ref;                                                           // 76
    return (ref = this.raphaelObj) != null ? ref.changeSize(width, height) : void 0;
  };                                                                   //
                                                                       //
  WhiteboardPaperModel.prototype.addImageToPaper = function(url, width, height) {
    var cx, cy, img, max, sh, sw;                                      // 84
    this._updateContainerDimensions();                                 // 84
    max = Math.max(width / this.containerWidth, height / this.containerHeight);
    url = this._slideUrl(url);                                         // 84
    sw = width / max;                                                  // 84
    sh = height / max;                                                 // 84
    img = this.raphaelObj.image(url, cx = 0, cy = 0, width, height);   // 84
    this.slides[url] = new WhiteboardSlideModel(img.id, url, img, width, height, sw, sh, cx, cy);
    if (this.current.slide == null) {                                  // 102
      img.toBack();                                                    // 103
      this.current.slide = this.slides[url];                           // 103
    } else if (this.current.slide.url === url) {                       //
      img.toBack();                                                    // 106
    } else {                                                           //
      img.hide();                                                      // 108
    }                                                                  //
    this._updateContainerDimensions();                                 // 84
    this._updateZoomRatios();                                          // 84
    if (this.raphaelObj.w === 100) {                                   // 114
      this.cursor.setRadius(0.65 * this.widthRatio / 100);             // 115
    } else {                                                           //
      this.cursor.setRadius(6 * this.widthRatio / 100);                // 117
    }                                                                  //
    return img;                                                        //
  };                                                                   //
                                                                       //
  WhiteboardPaperModel.prototype.removeAllImagesFromPaper = function() {
    var ref, ref1, url;                                                // 123
    for (url in this.slides) {                                         // 123
      if (this.slides.hasOwnProperty(url)) {                           // 124
        if ((ref = this.raphaelObj.getById((ref1 = this.slides[url]) != null ? ref1.getId() : void 0)) != null) {
          ref.remove();                                                //
        }                                                              //
      }                                                                //
    }                                                                  // 123
    this.slides = {};                                                  // 123
    return this.current.slide = null;                                  //
  };                                                                   //
                                                                       //
  WhiteboardPaperModel.prototype.setCurrentTool = function(tool) {     // 6
    this.currentTool = tool;                                           // 136
    console.log("setting current tool to", tool);                      // 136
    switch (tool) {                                                    // 138
      case "line":                                                     // 138
        this.cursor.undrag();                                          // 140
        this.current.line = this._createTool(tool);                    // 140
        return this.cursor.drag(this.current.line.dragOnMove, this.current.line.dragOnStart, this.current.line.dragOnEnd);
      case "rectangle":                                                // 138
        this.cursor.undrag();                                          // 144
        this.current.rectangle = this._createTool(tool);               // 144
        return this.cursor.drag(this.current.rectangle.dragOnMove, this.current.rectangle.dragOnStart, this.current.rectangle.dragOnEnd);
      default:                                                         // 138
        return console.log("ERROR: Cannot set invalid tool:", tool);   //
    }                                                                  // 138
  };                                                                   //
                                                                       //
  WhiteboardPaperModel.prototype.clearShapes = function() {            // 6
    if (this.current.shapes != null) {                                 // 152
      this.current.shapes.forEach(function(element) {                  // 153
        return element.remove();                                       //
      });                                                              //
      this.current.shapeDefinitions = [];                              // 153
      this.current.shapes.clear();                                     // 153
    }                                                                  //
    this.clearCursor();                                                // 152
    return this.createCursor();                                        //
  };                                                                   //
                                                                       //
  WhiteboardPaperModel.prototype.clearCursor = function() {            // 6
    var ref;                                                           // 161
    return (ref = this.cursor) != null ? ref.remove() : void 0;        //
  };                                                                   //
                                                                       //
  WhiteboardPaperModel.prototype.createCursor = function() {           // 6
    if (this.raphaelObj.w === 100) {                                   // 164
      this.cursor = new WhiteboardCursorModel(this.raphaelObj, 0.65);  // 165
      this.cursor.setRadius(0.65 * this.widthRatio / 100);             // 165
    } else {                                                           //
      this.cursor = new WhiteboardCursorModel(this.raphaelObj);        // 168
      this.cursor.setRadius(6 * this.widthRatio / 100);                // 168
    }                                                                  //
    return this.cursor.draw();                                         //
  };                                                                   //
                                                                       //
  WhiteboardPaperModel.prototype.updateShape = function(shape, data) {
    return this.current[shape].update(data);                           //
  };                                                                   //
                                                                       //
  WhiteboardPaperModel.prototype.makeShape = function(shape, data) {   // 6
    var base, base1, i, len, obj, tool, toolModel;                     // 179
    data.thickness *= this.adjustedWidth / 1000;                       // 179
    tool = null;                                                       // 179
    this.current[shape] = this._createTool(shape);                     // 179
    toolModel = this.current[shape];                                   // 179
    tool = this.current[shape].make(data);                             // 179
    if ((tool != null) && shape !== "poll_result") {                   // 189
      if ((base = this.current).shapes == null) {                      //
        base.shapes = this.raphaelObj.set();                           //
      }                                                                //
      this.current.shapes.push(tool);                                  // 190
      this.current.shapeDefinitions.push(toolModel.getDefinition());   // 190
    }                                                                  //
    if ((tool != null) && shape === "poll_result") {                   // 195
      if ((base1 = this.current).shapes == null) {                     //
        base1.shapes = this.raphaelObj.set();                          //
      }                                                                //
      for (i = 0, len = tool.length; i < len; i++) {                   // 197
        obj = tool[i];                                                 //
        this.current.shapes.push(obj);                                 // 198
      }                                                                // 197
      return this.current.shapeDefinitions.push(toolModel.getDefinition());
    }                                                                  //
  };                                                                   //
                                                                       //
  WhiteboardPaperModel.prototype.moveCursor = function(x, y) {         // 6
    var cx, cy, ref, ref1, slideHeight, slideWidth;                    // 205
    ref = this._currentSlideOffsets(), cx = ref[0], cy = ref[1];       // 205
    ref1 = this._currentSlideOriginalDimensions(), slideWidth = ref1[0], slideHeight = ref1[1];
    this.cursor.setPosition(x * slideWidth + cx, y * slideHeight + cy);
    if ((this.viewBoxXpos != null) && (this.viewBoxYPos != null) && (this.viewBoxWidth != null) && (this.viewBoxHeight != null)) {
      return this.cursor.setPosition(this.viewBoxXpos + x * this.viewBoxWidth, this.viewBoxYPos + y * this.viewBoxHeight);
    }                                                                  //
  };                                                                   //
                                                                       //
  WhiteboardPaperModel.prototype.zoomAndPan = function(widthRatio, heightRatio, xOffset, yOffset) {
    var newHeight, newWidth, newX, newY;                               // 215
    newX = -xOffset * 2 * this.adjustedWidth / 100;                    // 215
    newY = -yOffset * 2 * this.adjustedHeight / 100;                   // 215
    newWidth = this.adjustedWidth * widthRatio / 100;                  // 215
    newHeight = this.adjustedHeight * heightRatio / 100;               // 215
    return this.raphaelObj.setViewBox(newX, newY, newWidth, newHeight);
  };                                                                   //
                                                                       //
  WhiteboardPaperModel.prototype.setAdjustedDimensions = function(width, height) {
    this.adjustedWidth = width;                                        // 222
    return this.adjustedHeight = height;                               //
  };                                                                   //
                                                                       //
  WhiteboardPaperModel.prototype._updateContainerDimensions = function() {
    var $container, containerDimensions, ref, ref1;                    // 227
    $container = $('#whiteboard-paper');                               // 227
    containerDimensions = scaleSlide(getInSession('slideOriginalWidth'), getInSession('slideOriginalHeight'));
    if ($container.innerWidth() === 0) {                               // 230
      this.containerWidth = containerDimensions.boardWidth;            // 231
    } else {                                                           //
      this.containerWidth = $container.innerWidth();                   // 233
    }                                                                  //
    if ($container.innerHeight() === 0) {                              // 234
      this.containerHeight = containerDimensions.boardHeight;          // 235
    } else {                                                           //
      this.containerHeight = $container.innerHeight();                 // 237
    }                                                                  //
    this.containerOffsetLeft = (ref = $container.offset()) != null ? ref.left : void 0;
    return this.containerOffsetTop = (ref1 = $container.offset()) != null ? ref1.top : void 0;
  };                                                                   //
                                                                       //
  WhiteboardPaperModel.prototype._updateZoomRatios = function() {      // 6
    var currentSlideDoc;                                               // 243
    currentSlideDoc = getCurrentSlideDoc();                            // 243
    this.widthRatio = currentSlideDoc.slide.width_ratio;               // 243
    return this.heightRatio = currentSlideDoc.slide.height_ratio;      //
  };                                                                   //
                                                                       //
  WhiteboardPaperModel.prototype._getImageFromPaper = function(url) {  // 6
    var id;                                                            // 252
    if (this.slides[url]) {                                            // 252
      id = this.slides[url].getId();                                   // 253
      if (id != null) {                                                // 254
        return this.raphaelObj.getById(id);                            // 254
      }                                                                //
    }                                                                  //
    return null;                                                       //
  };                                                                   //
                                                                       //
  WhiteboardPaperModel.prototype._currentSlideDimensions = function() {
    if (this.current.slide != null) {                                  // 258
      return this.current.slide.getDimensions();                       //
    } else {                                                           //
      return [0, 0];                                                   //
    }                                                                  //
  };                                                                   //
                                                                       //
  WhiteboardPaperModel.prototype._currentSlideOriginalDimensions = function() {
    if (this.current.slide != null) {                                  // 261
      return this.current.slide.getOriginalDimensions();               //
    } else {                                                           //
      return [0, 0];                                                   //
    }                                                                  //
  };                                                                   //
                                                                       //
  WhiteboardPaperModel.prototype._currentSlideOffsets = function() {   // 6
    if (this.current.slide != null) {                                  // 264
      return this.current.slide.getOffsets();                          //
    } else {                                                           //
      return [0, 0];                                                   //
    }                                                                  //
  };                                                                   //
                                                                       //
  WhiteboardPaperModel.prototype._createTool = function(type) {        // 6
    var height, model, ref, ref1, ref2, slideHeight, slideWidth, tool, width, xOffset, yOffset;
    switch (type) {                                                    // 268
      case "pencil":                                                   // 268
        model = WhiteboardLineModel;                                   // 270
        break;                                                         // 269
      case "path":                                                     // 268
      case "line":                                                     // 268
        model = WhiteboardLineModel;                                   // 272
        break;                                                         // 271
      case "rectangle":                                                // 268
        model = WhiteboardRectModel;                                   // 274
        break;                                                         // 273
      case "ellipse":                                                  // 268
        model = WhiteboardEllipseModel;                                // 276
        break;                                                         // 275
      case "triangle":                                                 // 268
        model = WhiteboardTriangleModel;                               // 278
        break;                                                         // 277
      case "text":                                                     // 268
        model = WhiteboardTextModel;                                   // 280
        break;                                                         // 279
      case "poll_result":                                              // 268
        model = WhiteboardPollModel;                                   // 282
    }                                                                  // 268
    if (model != null) {                                               // 284
      ref = this._currentSlideOriginalDimensions(), slideWidth = ref[0], slideHeight = ref[1];
      ref1 = this._currentSlideOffsets(), xOffset = ref1[0], yOffset = ref1[1];
      ref2 = this._currentSlideDimensions(), width = ref2[0], height = ref2[1];
      tool = new model(this.raphaelObj);                               // 285
      tool.setPaperSize(slideHeight, slideWidth);                      // 285
      tool.setOffsets(xOffset, yOffset);                               // 285
      tool.setPaperDimensions(width, height);                          // 285
      return tool;                                                     //
    } else {                                                           //
      return null;                                                     //
    }                                                                  //
  };                                                                   //
                                                                       //
  WhiteboardPaperModel.prototype._slideUrl = function(url) {           // 6
    if (url != null ? url.match(/http[s]?:/) : void 0) {               // 300
      return url;                                                      //
    } else {                                                           //
      return console.log("The url '" + url + "'' did not match the expected format of: http/s");
    }                                                                  //
  };                                                                   //
                                                                       //
  WhiteboardPaperModel.prototype._displayPage = function(data, originalWidth, originalHeight) {
    var _this, boardHeight, boardWidth, currentPresentation, currentSlide, currentSlideCursor, presentationId, ref;
    this.removeAllImagesFromPaper();                                   // 309
    this._updateContainerDimensions();                                 // 309
    boardWidth = this.containerWidth;                                  // 309
    boardHeight = this.containerHeight;                                // 309
    currentSlide = getCurrentSlideDoc();                               // 309
    currentPresentation = Meteor.Presentations.findOne({               // 309
      "presentation.current": true                                     // 316
    });                                                                //
    presentationId = currentPresentation != null ? (ref = currentPresentation.presentation) != null ? ref.id : void 0 : void 0;
    currentSlideCursor = Meteor.Slides.find({                          // 309
      "presentationId": presentationId,                                // 318
      "slide.current": true                                            // 318
    });                                                                //
    if (this.zoomObserver !== null) {                                  // 320
      this.zoomObserver.stop();                                        // 321
    }                                                                  //
    _this = this;                                                      // 309
    this.zoomObserver = currentSlideCursor.observe({                   // 309
      changed: function(newDoc, oldDoc) {                              // 324
        var newRatio, oldRatio, ref1, ref2;                            // 325
        if (originalWidth <= originalHeight) {                         // 325
          this.adjustedWidth = boardHeight * originalWidth / originalHeight;
          this.adjustedHeight = boardHeight;                           // 326
        } else {                                                       //
          this.adjustedHeight = boardWidth * originalHeight / originalWidth;
          this.adjustedWidth = boardWidth;                             // 329
        }                                                              //
        _this.zoomAndPan(newDoc.slide.width_ratio, newDoc.slide.height_ratio, newDoc.slide.x_offset, newDoc.slide.y_offset);
        oldRatio = (oldDoc.slide.width_ratio + oldDoc.slide.height_ratio) / 2;
        newRatio = (newDoc.slide.width_ratio + newDoc.slide.height_ratio) / 2;
        if (_this != null) {                                           //
          if ((ref1 = _this.current) != null) {                        //
            if ((ref2 = ref1.shapes) != null) {                        //
              ref2.forEach(function(shape) {                           //
                return shape.attr("stroke-width", shape.attr('stroke-width') * oldRatio / newRatio);
              });                                                      //
            }                                                          //
          }                                                            //
        }                                                              //
        if (_this.raphaelObj === 100) {                                // 341
          return _this.cursor.setRadius(0.65 * newDoc.slide.width_ratio / 100);
        } else {                                                       //
          return _this.cursor.setRadius(6 * newDoc.slide.width_ratio / 100);
        }                                                              //
      }                                                                //
    });                                                                //
    if (originalWidth <= originalHeight) {                             // 346
      this.adjustedWidth = boardHeight * originalWidth / originalHeight;
      $('#whiteboard-paper').width(this.adjustedWidth);                // 348
      this.addImageToPaper(data, this.adjustedWidth, boardHeight);     // 348
      this.adjustedHeight = boardHeight;                               // 348
    } else {                                                           //
      this.adjustedHeight = boardWidth * originalHeight / originalWidth;
      $('#whiteboard-paper').height(this.adjustedHeight);              // 353
      this.addImageToPaper(data, boardWidth, this.adjustedHeight);     // 353
      this.adjustedWidth = boardWidth;                                 // 353
    }                                                                  //
    return this.zoomAndPan(currentSlide.slide.width_ratio, currentSlide.slide.height_ratio, currentSlide.slide.x_offset, currentSlide.slide.y_offset);
  };                                                                   //
                                                                       //
  return WhiteboardPaperModel;                                         //
                                                                       //
})();                                                                  //
                                                                       //
/////////////////////////////////////////////////////////////////////////

}).call(this);
