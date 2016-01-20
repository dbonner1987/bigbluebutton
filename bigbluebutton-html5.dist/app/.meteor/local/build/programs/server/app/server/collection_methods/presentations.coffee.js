(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/collection_methods/presentations.coffee.js                   //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.methods({                                                       // 2
  publishSwitchToPreviousSlideMessage: function(meetingId, userId, authToken) {
    var currentPresentationDoc, currentSlideDoc, message, previousSlideDoc;
    currentPresentationDoc = Meteor.Presentations.findOne({            // 4
      "meetingId": meetingId,                                          // 4
      "presentation.current": true                                     // 4
    });                                                                //
    currentSlideDoc = Meteor.Slides.findOne({                          // 4
      "meetingId": meetingId,                                          // 7
      "presentationId": currentPresentationDoc != null ? currentPresentationDoc.presentation.id : void 0,
      "slide.current": true                                            // 7
    });                                                                //
    previousSlideDoc = Meteor.Slides.findOne({                         // 4
      "meetingId": meetingId,                                          // 11
      "presentationId": currentPresentationDoc != null ? currentPresentationDoc.presentation.id : void 0,
      "slide.num": (currentSlideDoc != null ? currentSlideDoc.slide.num : void 0) - 1
    });                                                                //
    if ((previousSlideDoc != null) && isAllowedTo('switchSlide', meetingId, userId, authToken)) {
      message = {                                                      // 17
        "payload": {                                                   // 18
          "page": previousSlideDoc.slide.id,                           // 19
          "meeting_id": meetingId                                      // 19
        },                                                             //
        "header": {                                                    // 18
          "name": "go_to_slide"                                        // 22
        }                                                              //
      };                                                               //
      return publish(Meteor.config.redis.channels.toBBBApps.presentation, message);
    }                                                                  //
  },                                                                   //
  publishSwitchToNextSlideMessage: function(meetingId, userId, authToken) {
    var currentPresentationDoc, currentSlideDoc, message, nextSlideDoc;
    currentPresentationDoc = Meteor.Presentations.findOne({            // 28
      "meetingId": meetingId,                                          // 28
      "presentation.current": true                                     // 28
    });                                                                //
    currentSlideDoc = Meteor.Slides.findOne({                          // 28
      "meetingId": meetingId,                                          // 31
      "presentationId": currentPresentationDoc != null ? currentPresentationDoc.presentation.id : void 0,
      "slide.current": true                                            // 31
    });                                                                //
    nextSlideDoc = Meteor.Slides.findOne({                             // 28
      "meetingId": meetingId,                                          // 35
      "presentationId": currentPresentationDoc != null ? currentPresentationDoc.presentation.id : void 0,
      "slide.num": (currentSlideDoc != null ? currentSlideDoc.slide.num : void 0) + 1
    });                                                                //
    if ((nextSlideDoc != null) && isAllowedTo('switchSlide', meetingId, userId, authToken)) {
      message = {                                                      // 41
        "payload": {                                                   // 42
          "page": nextSlideDoc.slide.id,                               // 43
          "meeting_id": meetingId                                      // 43
        },                                                             //
        "header": {                                                    // 42
          "name": "go_to_slide"                                        // 46
        }                                                              //
      };                                                               //
      return publish(Meteor.config.redis.channels.toBBBApps.presentation, message);
    }                                                                  //
  }                                                                    //
});                                                                    //
                                                                       //
this.addPresentationToCollection = function(meetingId, presentationObject) {
  var entry, id;                                                       // 56
  if (Meteor.Presentations.findOne({                                   // 56
    meetingId: meetingId,                                              //
    'presentation.id': presentationObject.id                           //
  }) == null) {                                                        //
    entry = {                                                          // 57
      meetingId: meetingId,                                            // 58
      presentation: {                                                  // 58
        id: presentationObject.id,                                     // 60
        name: presentationObject.name,                                 // 60
        current: presentationObject.current                            // 60
      },                                                               //
      pointer: {                                                       // 58
        x: 0.0,                                                        // 65
        y: 0.0                                                         // 65
      }                                                                //
    };                                                                 //
    return id = Meteor.Presentations.insert(entry);                    //
  }                                                                    //
};                                                                     // 54
                                                                       //
this.removePresentationFromCollection = function(meetingId, presentationId) {
  var id;                                                              // 72
  if ((meetingId != null) && (presentationId != null) && (Meteor.Presentations.findOne({
    meetingId: meetingId,                                              //
    "presentation.id": presentationId                                  //
  }) != null)) {                                                       //
    id = Meteor.Presentations.findOne({                                // 73
      meetingId: meetingId,                                            // 73
      "presentation.id": presentationId                                // 73
    });                                                                //
    if (id != null) {                                                  // 74
      Meteor.Slides.remove({                                           // 75
        presentationId: presentationId                                 // 75
      }, Meteor.log.info("cleared Slides Collection (presentationId: " + presentationId + "!"));
      Meteor.Presentations.remove(id._id);                             // 75
      return Meteor.log.info("----removed presentation[" + presentationId + "] from " + meetingId);
    }                                                                  //
  }                                                                    //
};                                                                     // 71
                                                                       //
this.clearPresentationsCollection = function(meetingId) {              // 2
  if (meetingId != null) {                                             // 82
    return Meteor.Presentations.remove({                               //
      meetingId: meetingId                                             // 83
    }, Meteor.log.info("cleared Presentations Collection (meetingId: " + meetingId + "!"));
  } else {                                                             //
    return Meteor.Presentations.remove({}, Meteor.log.info("cleared Presentations Collection (all meetings)!"));
  }                                                                    //
};                                                                     // 81
                                                                       //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=presentations.coffee.js.map
