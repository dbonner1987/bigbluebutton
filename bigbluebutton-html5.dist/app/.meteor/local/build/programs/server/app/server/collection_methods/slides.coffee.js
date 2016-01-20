(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/collection_methods/slides.coffee.js                          //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
this.displayThisSlide = function(meetingId, newSlideId, slideObject) {
  var presentationId;                                                  // 5
  presentationId = newSlideId.split("/")[0];                           // 5
  Meteor.Slides.update({                                               // 5
    presentationId: presentationId,                                    // 7
    "slide.current": true                                              // 7
  }, {                                                                 //
    $set: {                                                            // 7
      "slide.current": false                                           // 7
    }                                                                  //
  });                                                                  //
  removeSlideFromCollection(meetingId, newSlideId);                    // 5
  return addSlideToCollection(meetingId, presentationId, slideObject);
};                                                                     // 4
                                                                       //
this.addSlideToCollection = function(meetingId, presentationId, slideObject) {
  var entry, id;                                                       // 16
  if (Meteor.Slides.findOne({                                          // 16
    meetingId: meetingId,                                              //
    "slide.id": slideObject.id                                         //
  }) == null) {                                                        //
    entry = {                                                          // 17
      meetingId: meetingId,                                            // 18
      presentationId: presentationId,                                  // 18
      slide: {                                                         // 18
        height_ratio: slideObject.height_ratio,                        // 21
        y_offset: slideObject.y_offset,                                // 21
        num: slideObject.num,                                          // 21
        x_offset: slideObject.x_offset,                                // 21
        current: slideObject.current,                                  // 21
        img_uri: slideObject.svg_uri !== void 0 ? slideObject.svg_uri : slideObject.png_uri,
        txt_uri: slideObject.txt_uri,                                  // 21
        id: slideObject.id,                                            // 21
        width_ratio: slideObject.width_ratio,                          // 21
        swf_uri: slideObject.swf_uri,                                  // 21
        thumb_uri: slideObject.thumb_uri                               // 21
      }                                                                //
    };                                                                 //
    return id = Meteor.Slides.insert(entry);                           //
  }                                                                    //
};                                                                     // 15
                                                                       //
this.removeSlideFromCollection = function(meetingId, slideId) {        // 4
  var id;                                                              // 37
  if ((meetingId != null) && (slideId != null) && (Meteor.Slides.findOne({
    meetingId: meetingId,                                              //
    "slide.id": slideId                                                //
  }) != null)) {                                                       //
    id = Meteor.Slides.findOne({                                       // 38
      meetingId: meetingId,                                            // 38
      "slide.id": slideId                                              // 38
    });                                                                //
    if (id != null) {                                                  // 39
      Meteor.Slides.remove(id._id);                                    // 40
      return Meteor.log.info("----removed slide[" + slideId + "] from " + meetingId);
    }                                                                  //
  }                                                                    //
};                                                                     // 36
                                                                       //
this.clearSlidesCollection = function(meetingId) {                     // 4
  if (meetingId != null) {                                             // 45
    return Meteor.Slides.remove({                                      //
      meetingId: meetingId                                             // 46
    }, Meteor.log.info("cleared Slides Collection (meetingId: " + meetingId + "!"));
  } else {                                                             //
    return Meteor.Slides.remove({}, Meteor.log.info("cleared Slides Collection (all meetings)!"));
  }                                                                    //
};                                                                     // 44
                                                                       //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=slides.coffee.js.map
