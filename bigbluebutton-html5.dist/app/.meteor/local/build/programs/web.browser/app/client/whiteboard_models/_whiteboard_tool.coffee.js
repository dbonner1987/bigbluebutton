(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/whiteboard_models/_whiteboard_tool.coffee.js                 //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
this.WhiteboardToolModel = (function() {                               // 2
  function WhiteboardToolModel() {}                                    //
                                                                       //
  WhiteboardToolModel.prototype.initialize = function(paper) {         // 4
    this.paper = paper;                                                // 5
    console.log("paper:" + this.paper);                                // 5
    this.gh = 0;                                                       // 5
    this.gw = 0;                                                       // 5
    this.obj = 0;                                                      // 5
    return this.definition = [];                                       //
  };                                                                   //
                                                                       //
  WhiteboardToolModel.prototype.setPaperSize = function(gh, gw) {      // 4
    this.gh = gh;                                                      // 15
    this.gw = gw;                                                      // 15
  };                                                                   //
                                                                       //
  WhiteboardToolModel.prototype.setOffsets = function(xOffset, yOffset) {
    this.xOffset = xOffset;                                            // 17
    this.yOffset = yOffset;                                            // 17
  };                                                                   //
                                                                       //
  WhiteboardToolModel.prototype.setPaperDimensions = function(paperWidth, paperHeight) {
    this.paperWidth = paperWidth;                                      // 19
    this.paperHeight = paperHeight;                                    // 19
  };                                                                   //
                                                                       //
  WhiteboardToolModel.prototype.getDefinition = function() {           // 4
    return this.definition;                                            //
  };                                                                   //
                                                                       //
  WhiteboardToolModel.prototype.hide = function() {                    // 4
    if (this.obj != null) {                                            // 26
      return this.obj.hide();                                          //
    }                                                                  //
  };                                                                   //
                                                                       //
  return WhiteboardToolModel;                                          //
                                                                       //
})();                                                                  //
                                                                       //
/////////////////////////////////////////////////////////////////////////

}).call(this);
