(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/whiteboard_models/whiteboard_slide.coffee.js                 //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
this.WhiteboardSlideModel = (function() {                              // 2
  function WhiteboardSlideModel(id, url, img, originalWidth, originalHeight, displayWidth, displayHeight, xOffset, yOffset) {
    this.id = id;                                                      // 5
    this.url = url;                                                    // 5
    this.img = img;                                                    // 5
    this.originalWidth = originalWidth;                                // 5
    this.originalHeight = originalHeight;                              // 5
    this.displayWidth = displayWidth;                                  // 5
    this.displayHeight = displayHeight;                                // 5
    this.xOffset = xOffset != null ? xOffset : 0;                      // 5
    this.yOffset = yOffset != null ? yOffset : 0;                      // 5
  }                                                                    //
                                                                       //
  WhiteboardSlideModel.prototype.getWidth = function() {               // 5
    return this.displayWidth;                                          //
  };                                                                   //
                                                                       //
  WhiteboardSlideModel.prototype.getHeight = function() {              // 5
    return this.displayHeight;                                         //
  };                                                                   //
                                                                       //
  WhiteboardSlideModel.prototype.getOriginalWidth = function() {       // 5
    return this.originalWidth;                                         //
  };                                                                   //
                                                                       //
  WhiteboardSlideModel.prototype.getOriginalHeight = function() {      // 5
    return this.originalHeight;                                        //
  };                                                                   //
                                                                       //
  WhiteboardSlideModel.prototype.getId = function() {                  // 5
    return this.id;                                                    //
  };                                                                   //
                                                                       //
  WhiteboardSlideModel.prototype.getDimensions = function() {          // 5
    return [this.getWidth(), this.getHeight()];                        //
  };                                                                   //
                                                                       //
  WhiteboardSlideModel.prototype.getOriginalDimensions = function() {  // 5
    return [this.getOriginalWidth(), this.getOriginalHeight()];        //
  };                                                                   //
                                                                       //
  WhiteboardSlideModel.prototype.getOffsets = function() {             // 5
    return [this.xOffset, this.yOffset];                               //
  };                                                                   //
                                                                       //
  return WhiteboardSlideModel;                                         //
                                                                       //
})();                                                                  //
                                                                       //
/////////////////////////////////////////////////////////////////////////

}).call(this);
