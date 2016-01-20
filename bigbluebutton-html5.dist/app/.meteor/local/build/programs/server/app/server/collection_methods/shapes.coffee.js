(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/collection_methods/shapes.coffee.js                          //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
this.addShapeToCollection = function(meetingId, whiteboardId, shapeObject) {
  var entry, id, removeTempTextShape;                                  // 5
  if ((shapeObject != null ? shapeObject.shape_type : void 0) === "text") {
    Meteor.log.info("we are dealing with a text shape and the event is:" + shapeObject.status);
    entry = {                                                          // 6
      meetingId: meetingId,                                            // 9
      whiteboardId: whiteboardId,                                      // 9
      shape: {                                                         // 9
        type: shapeObject.shape.type,                                  // 12
        textBoxHeight: shapeObject.shape.textBoxHeight,                // 12
        backgroundColor: shapeObject.shape.backgroundColor,            // 12
        fontColor: shapeObject.shape.fontColor,                        // 12
        status: shapeObject.shape.status,                              // 12
        dataPoints: shapeObject.shape.dataPoints,                      // 12
        x: shapeObject.shape.x,                                        // 12
        textBoxWidth: shapeObject.shape.textBoxWidth,                  // 12
        whiteboardId: shapeObject.shape.whiteboardId,                  // 12
        fontSize: shapeObject.shape.fontSize,                          // 12
        id: shapeObject.shape.id,                                      // 12
        y: shapeObject.shape.y,                                        // 12
        calcedFontSize: shapeObject.shape.calcedFontSize,              // 12
        text: shapeObject.shape.text,                                  // 12
        background: shapeObject.shape.background                       // 12
      }                                                                //
    };                                                                 //
    if (shapeObject.status === "textEdited" || shapeObject.status === "textPublished") {
      removeTempTextShape = function(callback) {                       // 30
        Meteor.Shapes.remove({                                         // 31
          'shape.id': shapeObject.shape.id                             // 31
        });                                                            //
        return callback();                                             //
      };                                                               //
      return removeTempTextShape(function() {                          //
        var id;                                                        // 38
        id = Meteor.Shapes.insert(entry);                              // 38
        return Meteor.log.info(shapeObject.status + " substituting the temp shapes with the newer one");
      });                                                              //
    }                                                                  //
  } else {                                                             //
    if ((shapeObject != null ? shapeObject.status : void 0) === "DRAW_END" || ((shapeObject != null ? shapeObject.status : void 0) === "DRAW_START" && (shapeObject != null ? shapeObject.shape_type : void 0) === "pencil")) {
      entry = {                                                        // 46
        meetingId: meetingId,                                          // 47
        whiteboardId: whiteboardId,                                    // 47
        shape: {                                                       // 47
          wb_id: shapeObject.wb_id,                                    // 50
          shape_type: shapeObject.shape_type,                          // 50
          status: shapeObject.status,                                  // 50
          id: shapeObject.id,                                          // 50
          shape: {                                                     // 50
            type: shapeObject.shape.type,                              // 55
            status: shapeObject.shape.status,                          // 55
            points: shapeObject.shape.points,                          // 55
            whiteboardId: shapeObject.shape.whiteboardId,              // 55
            id: shapeObject.shape.id,                                  // 55
            square: shapeObject.shape.square,                          // 55
            transparency: shapeObject.shape.transparency,              // 55
            thickness: shapeObject.shape.thickness,                    // 55
            color: shapeObject.shape.color,                            // 55
            result: shapeObject.shape.result,                          // 55
            num_respondents: shapeObject.shape.num_respondents,        // 55
            num_responders: shapeObject.shape.num_responders           // 55
          }                                                            //
        }                                                              //
      };                                                               //
      return id = Meteor.Shapes.insert(entry);                         //
    }                                                                  //
  }                                                                    //
};                                                                     // 4
                                                                       //
this.removeAllShapesFromSlide = function(meetingId, whiteboardId) {    // 4
  Meteor.log.info("removeAllShapesFromSlide__" + whiteboardId);        // 71
  if ((meetingId != null) && (whiteboardId != null) && (Meteor.Shapes.find({
    meetingId: meetingId,                                              //
    whiteboardId: whiteboardId                                         //
  }) != null)) {                                                       //
    return Meteor.Shapes.remove({                                      //
      meetingId: meetingId,                                            // 73
      whiteboardId: whiteboardId                                       // 73
    }, function() {                                                    //
      Meteor.log.info("clearing all shapes from slide");               // 74
      return Meteor.setTimeout(function() {                            //
        return Meteor.WhiteboardCleanStatus.update({                   //
          meetingId: meetingId                                         // 78
        }, {                                                           //
          $set: {                                                      // 78
            in_progress: false                                         // 78
          }                                                            //
        });                                                            //
      }, 1000);                                                        //
    });                                                                //
  }                                                                    //
};                                                                     // 70
                                                                       //
this.removeShapeFromSlide = function(meetingId, whiteboardId, shapeId) {
  var shapeToRemove;                                                   // 82
  shapeToRemove = Meteor.Shapes.findOne({                              // 82
    meetingId: meetingId,                                              // 82
    whiteboardId: whiteboardId,                                        // 82
    "shape.id": shapeId                                                // 82
  });                                                                  //
  if ((meetingId != null) && (whiteboardId != null) && (shapeId != null) && (shapeToRemove != null)) {
    Meteor.Shapes.remove(shapeToRemove._id);                           // 84
    Meteor.log.info("----removed shape[" + shapeId + "] from " + whiteboardId);
    return Meteor.log.info("remaining shapes on the slide:" + Meteor.Shapes.find({
      meetingId: meetingId,                                            // 86
      whiteboardId: whiteboardId                                       // 86
    }).count());                                                       //
  }                                                                    //
};                                                                     // 81
                                                                       //
this.clearShapesCollection = function(meetingId) {                     // 4
  if (meetingId != null) {                                             // 91
    return Meteor.Shapes.remove({}, function() {                       //
      Meteor.log.info("cleared Shapes Collection (meetingId: " + meetingId + "!");
      return Meteor.WhiteboardCleanStatus.update({                     //
        meetingId: meetingId                                           // 94
      }, {                                                             //
        $set: {                                                        // 94
          in_progress: false                                           // 94
        }                                                              //
      });                                                              //
    });                                                                //
  } else {                                                             //
    return Meteor.Shapes.remove({}, function() {                       //
      Meteor.log.info("cleared Shapes Collection (all meetings)!");    // 97
      return Meteor.WhiteboardCleanStatus.update({                     //
        meetingId: meetingId                                           // 98
      }, {                                                             //
        $set: {                                                        // 98
          in_progress: false                                           // 98
        }                                                              //
      });                                                              //
    });                                                                //
  }                                                                    //
};                                                                     // 90
                                                                       //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=shapes.coffee.js.map
