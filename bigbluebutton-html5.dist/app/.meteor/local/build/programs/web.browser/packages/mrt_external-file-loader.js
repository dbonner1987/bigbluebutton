//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var _ = Package.underscore._;
var Template = Package.templating.Template;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// packages/mrt_external-file-loader/packages/mrt_external-file-loader.js                                     //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
(function () {                                                                                                // 1
                                                                                                              // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////    // 3
//                                                                                                      //    // 4
// packages/mrt:external-file-loader/lib/external-file-loader.js                                        //    // 5
//                                                                                                      //    // 6
//////////////////////////////////////////////////////////////////////////////////////////////////////////    // 7
                                                                                                        //    // 8
// external-file-loader.js                                                                              // 1  // 9
                                                                                                        // 2  // 10
(function() {                                                                                           // 3  // 11
                                                                                                        // 4  // 12
	var Loader = function() {                                                                              // 5  // 13
		this.loadedUrls = {};                                                                                 // 6  // 14
	}                                                                                                      // 7  // 15
                                                                                                        // 8  // 16
	// Callback must be of the jquery success callback form: function(data, textStatus, jqxhr)             // 9  // 17
	// timeoutDelay is the number of ms before the script request times out. Default is 5000               // 10
	// If the second arg is a number instead of a callback, it will be considered the timeoutDelay         // 11
	Loader.prototype.loadJs = function(url, callback, timeoutDelay) {                                      // 12
		var self = this,                                                                                      // 13
			timeoutId,                                                                                           // 14
			promise;                                                                                             // 15
                                                                                                        // 16
		if (typeof callback === 'number') {                                                                   // 17
			timeoutId = callback;                                                                                // 18
		} else if (typeof timeoutDelay !== 'number') {                                                        // 19
			timeoutDelay = 5000                                                                                  // 20
		}                                                                                                     // 21
                                                                                                        // 22
		// Prevent duplicate URLs from being loaded.                                                          // 23
		if (self.loaded(url)) {                                                                               // 24
			return false;                                                                                        // 25
		}                                                                                                     // 26
                                                                                                        // 27
		self.loadedUrls[url] = false;                                                                         // 28
                                                                                                        // 29
		promise = $.getScript(url, function(data, textStatus, jqxhr) {                                        // 30
			self.loadedUrls[url] = true;                                                                         // 31
			clearTimeout(timeoutId);                                                                             // 32
			if (callback) {                                                                                      // 33
				callback(data, textStatus, jqxhr);                                                                  // 34
			}                                                                                                    // 35
		});                                                                                                   // 36
                                                                                                        // 37
		// $.getScript doesn't reject promises with cross-domain so we need a timeout                         // 38
		// cf. http://stackoverflow.com/questions/1406537/handling-errors-in-jquery-getscript#answer-11741631 // 39
		timeoutId = setTimeout(function() {                                                                   // 40
			promise.abort("Timeout error: The script was not found or took too long to load.");                  // 41
		}, timeoutDelay);                                                                                     // 42
                                                                                                        // 43
		return promise;                                                                                       // 44
	}                                                                                                      // 45
                                                                                                        // 46
	Loader.prototype.loadCss = function(url) {                                                             // 47
		var self = this;                                                                                      // 48
		// Prevent duplicate URLs from being loaded.                                                          // 49
		if (self.loaded(url)) {                                                                               // 50
			return false;                                                                                        // 51
		}                                                                                                     // 52
                                                                                                        // 53
		var css = document.createElement('link');                                                             // 54
		css.setAttribute('rel', 'stylesheet');                                                                // 55
		css.setAttribute('type', 'text/css');                                                                 // 56
		css.setAttribute('href', url);                                                                        // 57
		document.getElementsByTagName("head")[0].appendChild(css);                                            // 58
                                                                                                        // 59
		self.loadedUrls[url] = true;                                                                          // 60
	}                                                                                                      // 61
	                                                                                                       // 62
	Loader.prototype.loadHtml = function(url,template_name) {                                              // 63
		if(Template[template_name]) {                                                                         // 64
			return Template[template_name];                                                                      // 65
		}                                                                                                     // 66
	                                                                                                       // 67
		var raw = '';                                                                                         // 68
		this.ajax({                                                                                           // 69
			url:    url,                                                                                         // 70
			success: function(html) {                                                                            // 71
				raw = html;                                                                                         // 72
			},                                                                                                   // 73
			async:false                                                                                          // 74
		});                                                                                                   // 75
			                                                                                                     // 76
		return Template.__define__(template_name, function() {                                                // 77
			return raw;                                                                                          // 78
		});                                                                                                   // 79
	}                                                                                                      // 80
                                                                                                        // 81
	Loader.prototype.loaded = function(url) {                                                              // 82
		var self = this;                                                                                      // 83
		return (_.has(self.loadedUrls, url) && self.loadedUrls[url]);                                         // 84
	}                                                                                                      // 85
                                                                                                        // 86
	// Only use this method for testing.                                                                   // 87
	Loader.prototype.resetUrls = function() {                                                              // 88
		this.loadedUrls = {};                                                                                 // 89
	}                                                                                                      // 90
	                                                                                                       // 91
	// Override for stub during testing                                                                    // 92
	Loader.prototype.ajax = jQuery.ajax                                                                    // 93
                                                                                                        // 94
	Meteor.Loader = new Loader();                                                                          // 95
                                                                                                        // 96
}());                                                                                                   // 97
//////////////////////////////////////////////////////////////////////////////////////////////////////////    // 106
                                                                                                              // 107
}).call(this);                                                                                                // 108
                                                                                                              // 109
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['mrt:external-file-loader'] = {};

})();
