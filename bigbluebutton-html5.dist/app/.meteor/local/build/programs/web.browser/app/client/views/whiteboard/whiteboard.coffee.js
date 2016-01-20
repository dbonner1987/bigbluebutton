(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/views/whiteboard/whiteboard.coffee.js                        //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var fakeUpload;                                                        // 2
                                                                       //
this.scaleWhiteboard = function(callback) {                            // 2
  var adjustedDimensions, wpm;                                         // 3
  adjustedDimensions = scaleSlide(getInSession('slideOriginalWidth'), getInSession('slideOriginalHeight'));
  wpm = whiteboardPaperModel;                                          // 3
  wpm.scale(adjustedDimensions.width, adjustedDimensions.height);      // 3
  if (callback) {                                                      // 6
    return callback();                                                 //
  }                                                                    //
};                                                                     // 2
                                                                       //
Template.whiteboard.helpers({                                          // 2
  presentationProgress: function() {                                   // 10
    var currentPresentation, currentSlideNum, ref, ref1, totalSlideNum;
    currentPresentation = Meteor.Presentations.findOne({               // 11
      'presentation.current': true                                     // 11
    });                                                                //
    currentSlideNum = (ref = Meteor.Slides.findOne({                   // 11
      'presentationId': currentPresentation != null ? currentPresentation.presentation.id : void 0,
      'slide.current': true                                            //
    })) != null ? ref.slide.num : void 0;                              //
    totalSlideNum = (ref1 = Meteor.Slides.find({                       // 11
      'presentationId': currentPresentation != null ? currentPresentation.presentation.id : void 0
    })) != null ? ref1.count() : void 0;                               //
    console.log('slide', currentSlideNum);                             // 11
    if (currentSlideNum !== void 0) {                                  // 15
      return currentSlideNum + "/" + totalSlideNum;                    // 16
    } else {                                                           //
      return '';                                                       // 18
    }                                                                  //
  },                                                                   //
  isPollStarted: function() {                                          // 10
    if (BBB.isPollGoing(getInSession('userId'))) {                     // 20
      return true;                                                     // 21
    } else {                                                           //
      return false;                                                    // 23
    }                                                                  //
  },                                                                   //
  hasNoPresentation: function() {                                      // 10
    return Meteor.Presentations.findOne({                              //
      'presentation.current': true                                     // 26
    });                                                                //
  }                                                                    //
});                                                                    //
                                                                       //
Template.whiteboard.events({                                           // 2
  'click .whiteboardFullscreenButton': function(event, template) {     // 29
    return enterWhiteboardFullscreen();                                //
  },                                                                   //
  'click .exitFullscreenButton': function(event, template) {           // 29
    if (document.exitFullscreen) {                                     // 33
      return document.exitFullscreen();                                //
    } else if (document.mozCancelFullScreen) {                         //
      return document.mozCancelFullScreen();                           //
    } else if (document.webkitExitFullscreen) {                        //
      return document.webkitExitFullscreen();                          //
    }                                                                  //
  },                                                                   //
  'click .sadEmojiButton.inactiveEmojiButton': function(event) {       // 29
    if ($('.sadEmojiButton').css('opacity') === '1') {                 // 41
      BBB.setEmojiStatus(BBB.getMeetingId(), getInSession('userId'), getInSession('userId'), getInSession('authToken'), "sad");
      $('.FABTriggerButton').blur();                                   // 42
      return toggleEmojisFAB();                                        //
    }                                                                  //
  },                                                                   //
  'click .happyEmojiButton.inactiveEmojiButton': function(event) {     // 29
    if ($('.happyEmojiButton').css('opacity') === '1') {               // 47
      BBB.setEmojiStatus(BBB.getMeetingId(), getInSession('userId'), getInSession('userId'), getInSession('authToken'), "happy");
      $('.FABTriggerButton').blur();                                   // 48
      return toggleEmojisFAB();                                        //
    }                                                                  //
  },                                                                   //
  'click .confusedEmojiButton.inactiveEmojiButton': function(event) {  // 29
    if ($('.confusedEmojiButton').css('opacity') === '1') {            // 53
      BBB.setEmojiStatus(BBB.getMeetingId(), getInSession('userId'), getInSession('userId'), getInSession('authToken'), "confused");
      $('.FABTriggerButton').blur();                                   // 54
      return toggleEmojisFAB();                                        //
    }                                                                  //
  },                                                                   //
  'click .neutralEmojiButton.inactiveEmojiButton': function(event) {   // 29
    if ($('.neutralEmojiButton').css('opacity') === '1') {             // 59
      BBB.setEmojiStatus(BBB.getMeetingId(), getInSession('userId'), getInSession('userId'), getInSession('authToken'), "neutral");
      $('.FABTriggerButton').blur();                                   // 60
      return toggleEmojisFAB();                                        //
    }                                                                  //
  },                                                                   //
  'click .awayEmojiButton.inactiveEmojiButton': function(event) {      // 29
    if ($('.awayEmojiButton').css('opacity') === '1') {                // 65
      BBB.setEmojiStatus(BBB.getMeetingId(), getInSession('userId'), getInSession('userId'), getInSession('authToken'), "away");
      $('.FABTriggerButton').blur();                                   // 66
      return toggleEmojisFAB();                                        //
    }                                                                  //
  },                                                                   //
  'click .raiseHandEmojiButton.inactiveEmojiButton': function(event) {
    if ($('.raiseHandEmojiButton').css('opacity') === '1') {           // 71
      BBB.setEmojiStatus(BBB.getMeetingId(), getInSession('userId'), getInSession('userId'), getInSession('authToken'), "raiseHand");
      $('.FABTriggerButton').blur();                                   // 72
      return toggleEmojisFAB();                                        //
    }                                                                  //
  },                                                                   //
  'click .activeEmojiButton': function(event) {                        // 29
    if ($('.activeEmojiButton').css('opacity') === '1') {              // 77
      BBB.setEmojiStatus(BBB.getMeetingId(), getInSession('userId'), getInSession('userId'), getInSession('authToken'), "none");
      $('.FABTriggerButton').blur();                                   // 78
      return toggleEmojisFAB();                                        //
    }                                                                  //
  },                                                                   //
  'click .FABTriggerButton': function(event) {                         // 29
    $('.FABTriggerButton').blur();                                     // 83
    return toggleEmojisFAB();                                          //
  }                                                                    //
});                                                                    //
                                                                       //
Template.whiteboardControls.events({                                   // 2
  'click .whiteboard-buttons-slide > .prev': function(event) {         // 87
    return BBB.goToPreviousPage();                                     //
  },                                                                   //
  'click .whiteboard-buttons-slide > .next': function(event) {         // 87
    return BBB.goToNextPage();                                         //
  },                                                                   //
  'click .switchSlideButton': function(event) {                        // 87
    return $('.tooltip').hide();                                       //
  }                                                                    //
});                                                                    //
                                                                       //
Template.polling.events({                                              // 2
  'click .pollButtons': function(event) {                              // 97
    var _id, _key;                                                     // 98
    _key = this.label;                                                 // 98
    _id = this.answer;                                                 // 98
    return BBB.sendPollResponseMessage(_key, _id);                     //
  }                                                                    //
});                                                                    //
                                                                       //
Template.polling.rendered = function() {                               // 2
  return scaleWhiteboard();                                            //
};                                                                     // 102
                                                                       //
Template.polling.destroyed = function() {                              // 2
  return setTimeout(scaleWhiteboard, 0);                               //
};                                                                     // 105
                                                                       //
Template.whiteboardControls.rendered = function() {                    // 2
  return scaleWhiteboard();                                            //
};                                                                     // 108
                                                                       //
Template.whiteboardControls.destroyed = function() {                   // 2
  return setTimeout(scaleWhiteboard, 0);                               //
};                                                                     // 111
                                                                       //
Template.whiteboard.rendered = function() {                            // 2
  $('#whiteboard').resizable({                                         // 115
    handles: 'e',                                                      // 116
    minWidth: 150,                                                     // 116
    resize: function() {                                               // 116
      return adjustChatInputHeight();                                  //
    },                                                                 //
    start: function() {                                                // 116
      if ($('#chat').width() / $('#panels').width() > 0.2) {           // 121
        return $('#whiteboard').resizable('option', 'maxWidth', $('#panels').width() - 200);
      } else {                                                         //
        return $('#whiteboard').resizable('option', 'maxWidth', $('#whiteboard').width());
      }                                                                //
    },                                                                 //
    stop: function() {                                                 // 116
      $('#whiteboard').css('width', 100 * $('#whiteboard').width() / $('#panels').width() + '%');
      return $('#whiteboard').resizable('option', 'maxWidth', null);   //
    }                                                                  //
  });                                                                  //
  Meteor.NotificationControl = new NotificationControl('notificationArea');
  return $(document).foundation();                                     //
};                                                                     // 114
                                                                       //
Template.presenterUploaderControl.created = function() {               // 2
  this.isOpen = new ReactiveVar(false);                                // 135
  this.files = new ReactiveList({                                      // 135
    sort: function(a, b) {                                             // 136
      var ref, ref1;                                                   // 139
      return (ref = a.isUploading === b.isUploading) != null ? ref : {
        0: (ref1 = a.isUploading) != null ? ref1 : -{                  // 139
          1: 1                                                         // 139
        }                                                              //
      };                                                               //
    }                                                                  //
  });                                                                  //
  return this.presentations = Meteor.Presentations.find({}, {          //
    sort: {                                                            // 142
      'presentation.current': -1,                                      // 143
      'presentation.name': 1                                           // 143
    },                                                                 //
    fields: {                                                          // 142
      'presentation': 1                                                // 144
    }                                                                  //
  });                                                                  //
};                                                                     // 134
                                                                       //
fakeUpload = function(file, list) {                                    // 2
  return setTimeout((function() {                                      //
    file.uploadedSize = file.uploadedSize + (Math.floor(Math.random() * file.size + file.uploadedSize) / 10);
    if (!(file.size > file.uploadedSize)) {                            // 150
      file.uploadedSize = file.size;                                   // 151
      file.isUploading = false;                                        // 151
    }                                                                  //
    list.update(file.name, file);                                      // 149
    if (file.isUploading === true) {                                   // 156
      return fakeUpload(file, list);                                   //
    } else {                                                           //
      return list.remove(file.name);                                   //
    }                                                                  //
  }), 200);                                                            //
};                                                                     // 147
                                                                       //
Template.presenterUploaderControl.events({                             // 2
  'click .js-open': function(event, template) {                        // 164
    return template.isOpen.set(true);                                  //
  },                                                                   //
  'click .js-close': function(event, template) {                       // 164
    return template.isOpen.set(false);                                 //
  },                                                                   //
  'dragover [data-dropzone]': function(e) {                            // 164
    e.preventDefault();                                                // 171
    return $(e.currentTarget).addClass('hover');                       //
  },                                                                   //
  'dragleave [data-dropzone]': function(e) {                           // 164
    e.preventDefault();                                                // 175
    return $(e.currentTarget).removeClass('hover');                    //
  },                                                                   //
  'drop [data-dropzone], change [data-dropzone] > input[type="file"]': function(e, template) {
    var files;                                                         // 179
    e.preventDefault();                                                // 179
    files = (e.originalEvent.dataTransfer || e.originalEvent.target).files;
    return _.each(files, function(file) {                              //
      file.isUploading = true;                                         // 183
      file.uploadedSize = 0;                                           // 183
      file.percUploaded = 0;                                           // 183
      template.files.insert(file.name, file);                          // 183
      return fakeUpload(file, template.files);                         //
    });                                                                //
  }                                                                    //
});                                                                    //
                                                                       //
Template.presenterUploaderControl.helpers({                            // 2
  isOpen: function() {                                                 // 192
    return Template.instance().isOpen.get();                           //
  },                                                                   //
  files: function() {                                                  // 192
    return Template.instance().files.fetch();                          //
  },                                                                   //
  presentations: function() {                                          // 192
    return Template.instance().presentations.fetch().map(function(x) {
      return x.presentation;                                           //
    });                                                                //
  }                                                                    //
});                                                                    //
                                                                       //
Template.presenterUploaderControlFileListItem.helpers({                // 2
  percUploaded: function() {                                           // 197
    return Math.round((this.uploadedSize / this.size) * 100);          //
  }                                                                    //
});                                                                    //
                                                                       //
Template.presenterUploaderControlPresentationListItem.events({         // 2
  'click [data-action-show]': function(event, template) {              // 200
    return console.info('Should show the file `' + this.name + '`');   //
  },                                                                   //
  'click [data-action-delete]': function(event, template) {            // 200
    return console.info('Should delete the file `' + this.name + '`');
  }                                                                    //
});                                                                    //
                                                                       //
/////////////////////////////////////////////////////////////////////////

}).call(this);
