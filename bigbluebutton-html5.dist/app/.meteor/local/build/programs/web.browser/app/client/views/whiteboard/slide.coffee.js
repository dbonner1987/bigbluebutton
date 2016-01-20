(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/views/whiteboard/slide.coffee.js                             //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Template.slide.rendered = function() {                                 // 1
  var currentSlide, pic, ref;                                          // 2
  currentSlide = getCurrentSlideDoc();                                 // 2
  pic = new Image();                                                   // 2
  pic.onload = function() {                                            // 2
    var ref;                                                           // 6
    setInSession('slideOriginalWidth', this.width);                    // 6
    setInSession('slideOriginalHeight', this.height);                  // 6
    $(window).resize(function() {                                      // 6
      if (!$('.panel-footer').hasClass('ui-resizable-resizing')) {     // 10
        return scaleWhiteboard();                                      //
      }                                                                //
    });                                                                //
    if ((currentSlide != null ? (ref = currentSlide.slide) != null ? ref.img_uri : void 0 : void 0) != null) {
      return createWhiteboardPaper(function(wpm) {                     //
        return displaySlide(wpm);                                      //
      });                                                              //
    }                                                                  //
  };                                                                   //
  return pic.src = currentSlide != null ? (ref = currentSlide.slide) != null ? ref.img_uri : void 0 : void 0;
};                                                                     // 1
                                                                       //
this.createWhiteboardPaper = (function(_this) {                        // 1
  return function(callback) {                                          //
    _this.whiteboardPaperModel = new Meteor.WhiteboardPaperModel('whiteboard-paper');
    return callback(_this.whiteboardPaperModel);                       //
  };                                                                   //
})(this);                                                              // 18
                                                                       //
this.displaySlide = function(wpm) {                                    // 1
  var adjustedDimensions, currentSlide, ref;                           // 23
  currentSlide = getCurrentSlideDoc();                                 // 23
  wpm.create();                                                        // 23
  adjustedDimensions = scaleSlide(getInSession('slideOriginalWidth'), getInSession('slideOriginalHeight'));
  wpm._displayPage(currentSlide != null ? (ref = currentSlide.slide) != null ? ref.img_uri : void 0 : void 0, getInSession('slideOriginalWidth'), getInSession('slideOriginalHeight'));
  manuallyDisplayShapes();                                             // 23
  return wpm.scale(adjustedDimensions.width, adjustedDimensions.height);
};                                                                     // 22
                                                                       //
this.manuallyDisplayShapes = function() {                              // 1
  var currentSlide, i, j, len, len1, num, ref, ref1, ref2, results, s, shapeInfo, shapeType, shapes, wpm;
  if (Meteor.WhiteboardCleanStatus.findOne({                           // 33
    in_progress: true                                                  //
  }) != null) {                                                        //
    return;                                                            // 33
  }                                                                    //
  currentSlide = getCurrentSlideDoc();                                 // 33
  wpm = this.whiteboardPaperModel;                                     // 33
  shapes = Meteor.Shapes.find({                                        // 33
    whiteboardId: currentSlide != null ? (ref = currentSlide.slide) != null ? ref.id : void 0 : void 0
  }).fetch();                                                          //
  results = [];                                                        // 38
  for (i = 0, len1 = shapes.length; i < len1; i++) {                   //
    s = shapes[i];                                                     //
    shapeInfo = ((ref1 = s.shape) != null ? ref1.shape : void 0) || (s != null ? s.shape : void 0);
    shapeType = shapeInfo != null ? shapeInfo.type : void 0;           // 39
    if (shapeType !== "text") {                                        // 42
      len = shapeInfo.points.length;                                   // 43
      for (num = j = 0, ref2 = len; 0 <= ref2 ? j <= ref2 : j >= ref2; num = 0 <= ref2 ? ++j : --j) {
        if (shapeInfo != null) {                                       //
          shapeInfo.points[num] = (shapeInfo != null ? shapeInfo.points[num] : void 0) / 100;
        }                                                              //
      }                                                                // 44
    }                                                                  //
    if (wpm != null) {                                                 //
      wpm.makeShape(shapeType, shapeInfo);                             //
    }                                                                  //
    results.push(wpm != null ? wpm.updateShape(shapeType, shapeInfo) : void 0);
  }                                                                    // 38
  return results;                                                      //
};                                                                     // 31
                                                                       //
this.scaleSlide = function(originalWidth, originalHeight) {            // 1
  var adjustedHeight, adjustedWidth, boardHeight, boardWidth;          // 55
  if (window.matchMedia('(orientation: landscape)').matches) {         // 55
    boardWidth = $("#whiteboard-container").width();                   // 58
    boardHeight = $("#whiteboard-container").height();                 // 58
  } else {                                                             //
    boardWidth = $("#whiteboard-container").width();                   // 63
    boardHeight = 1.4 * $("#whiteboard-container").width();            // 63
  }                                                                    //
  adjustedWidth = null;                                                // 55
  adjustedHeight = null;                                               // 55
  if (originalWidth <= originalHeight) {                               // 72
    adjustedWidth = boardHeight * originalWidth / originalHeight;      // 73
    if (boardWidth < adjustedWidth) {                                  // 74
      adjustedHeight = boardHeight * boardWidth / adjustedWidth;       // 75
      adjustedWidth = boardWidth;                                      // 75
    } else {                                                           //
      adjustedHeight = boardHeight;                                    // 78
    }                                                                  //
  } else {                                                             //
    adjustedHeight = boardWidth * originalHeight / originalWidth;      // 82
    if (boardHeight < adjustedHeight) {                                // 83
      adjustedWidth = boardWidth * boardHeight / adjustedHeight;       // 84
      adjustedHeight = boardHeight;                                    // 84
    } else {                                                           //
      adjustedWidth = boardWidth;                                      // 87
    }                                                                  //
  }                                                                    //
  return {                                                             //
    width: adjustedWidth,                                              // 89
    height: adjustedHeight,                                            // 89
    boardWidth: boardWidth,                                            // 89
    boardHeight: boardHeight                                           // 89
  };                                                                   //
};                                                                     // 52
                                                                       //
Template.slide.helpers({                                               // 1
  updatePointerLocation: function(pointer) {                           // 92
    var wpm;                                                           // 93
    if (typeof whiteboardPaperModel !== "undefined" && whiteboardPaperModel !== null) {
      wpm = whiteboardPaperModel;                                      // 94
      return wpm != null ? wpm.moveCursor(pointer.x, pointer.y) : void 0;
    }                                                                  //
  }                                                                    //
});                                                                    //
                                                                       //
Template.shape.rendered = function() {                                 // 1
  var i, len, num, ref, ref1, shapeInfo, shapeType, wpm;               // 100
  shapeInfo = ((ref = this.data.shape) != null ? ref.shape : void 0) || this.data.shape;
  shapeType = shapeInfo != null ? shapeInfo.type : void 0;             // 100
  if (shapeType !== "text") {                                          // 103
    len = shapeInfo.points.length;                                     // 104
    for (num = i = 0, ref1 = len; 0 <= ref1 ? i <= ref1 : i >= ref1; num = 0 <= ref1 ? ++i : --i) {
      shapeInfo.points[num] = shapeInfo.points[num] / 100;             // 106
    }                                                                  // 105
  }                                                                    //
  if (typeof whiteboardPaperModel !== "undefined" && whiteboardPaperModel !== null) {
    wpm = whiteboardPaperModel;                                        // 109
    if (wpm != null) {                                                 //
      wpm.makeShape(shapeType, shapeInfo);                             //
    }                                                                  //
    return wpm != null ? wpm.updateShape(shapeType, shapeInfo) : void 0;
  }                                                                    //
};                                                                     // 98
                                                                       //
Template.shape.destroyed = function() {                                // 1
  var wpm;                                                             // 114
  if (typeof whiteboardPaperModel !== "undefined" && whiteboardPaperModel !== null) {
    wpm = whiteboardPaperModel;                                        // 115
    wpm.clearShapes();                                                 // 115
    return manuallyDisplayShapes();                                    //
  }                                                                    //
};                                                                     // 113
                                                                       //
/////////////////////////////////////////////////////////////////////////

}).call(this);
