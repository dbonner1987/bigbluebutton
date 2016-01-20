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

(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/ewall_foundation/packages/ewall_foundation.js            //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
(function () {                                                       // 1
                                                                     // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ewall:foundation/js/vendor/modernizr.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/*!                                                                                                                    // 1
 * Modernizr v2.8.3                                                                                                    // 2
 * www.modernizr.com                                                                                                   // 3
 *                                                                                                                     // 4
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton                                                                   // 5
 * Available under the BSD and MIT licenses: www.modernizr.com/license/                                                // 6
 */                                                                                                                    // 7
window.Modernizr=function(a,b,c){function d(a){t.cssText=a}function e(a,b){return d(x.join(a+";")+(b||""))}function f(a,b){return typeof a===b}function g(a,b){return!!~(""+a).indexOf(b)}function h(a,b){for(var d in a){var e=a[d];if(!g(e,"-")&&t[e]!==c)return"pfx"==b?e:!0}return!1}function i(a,b,d){for(var e in a){var g=b[a[e]];if(g!==c)return d===!1?a[e]:f(g,"function")?g.bind(d||b):g}return!1}function j(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+z.join(d+" ")+d).split(" ");return f(b,"string")||f(b,"undefined")?h(e,b):(e=(a+" "+A.join(d+" ")+d).split(" "),i(e,b,c))}function k(){o.input=function(c){for(var d=0,e=c.length;e>d;d++)E[c[d]]=!!(c[d]in u);return E.list&&(E.list=!(!b.createElement("datalist")||!a.HTMLDataListElement)),E}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),o.inputtypes=function(a){for(var d,e,f,g=0,h=a.length;h>g;g++)u.setAttribute("type",e=a[g]),d="text"!==u.type,d&&(u.value=v,u.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(e)&&u.style.WebkitAppearance!==c?(q.appendChild(u),f=b.defaultView,d=f.getComputedStyle&&"textfield"!==f.getComputedStyle(u,null).WebkitAppearance&&0!==u.offsetHeight,q.removeChild(u)):/^(search|tel)$/.test(e)||(d=/^(url|email)$/.test(e)?u.checkValidity&&u.checkValidity()===!1:u.value!=v)),D[a[g]]=!!d;return D}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var l,m,n="2.8.3",o={},p=!0,q=b.documentElement,r="modernizr",s=b.createElement(r),t=s.style,u=b.createElement("input"),v=":)",w={}.toString,x=" -webkit- -moz- -o- -ms- ".split(" "),y="Webkit Moz O ms",z=y.split(" "),A=y.toLowerCase().split(" "),B={svg:"http://www.w3.org/2000/svg"},C={},D={},E={},F=[],G=F.slice,H=function(a,c,d,e){var f,g,h,i,j=b.createElement("div"),k=b.body,l=k||b.createElement("body");if(parseInt(d,10))for(;d--;)h=b.createElement("div"),h.id=e?e[d]:r+(d+1),j.appendChild(h);return f=["&#173;",'<style id="s',r,'">',a,"</style>"].join(""),j.id=r,(k?j:l).innerHTML+=f,l.appendChild(j),k||(l.style.background="",l.style.overflow="hidden",i=q.style.overflow,q.style.overflow="hidden",q.appendChild(l)),g=c(j,a),k?j.parentNode.removeChild(j):(l.parentNode.removeChild(l),q.style.overflow=i),!!g},I=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b)&&c(b).matches||!1;var d;return H("@media "+b+" { #"+r+" { position: absolute; } }",function(b){d="absolute"==(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle).position}),d},J=function(){function a(a,e){e=e||b.createElement(d[a]||"div"),a="on"+a;var g=a in e;return g||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(a,""),g=f(e[a],"function"),f(e[a],"undefined")||(e[a]=c),e.removeAttribute(a))),e=null,g}var d={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return a}(),K={}.hasOwnProperty;m=f(K,"undefined")||f(K.call,"undefined")?function(a,b){return b in a&&f(a.constructor.prototype[b],"undefined")}:function(a,b){return K.call(a,b)},Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if("function"!=typeof b)throw new TypeError;var c=G.call(arguments,1),d=function(){if(this instanceof d){var e=function(){};e.prototype=b.prototype;var f=new e,g=b.apply(f,c.concat(G.call(arguments)));return Object(g)===g?g:f}return b.apply(a,c.concat(G.call(arguments)))};return d}),C.flexbox=function(){return j("flexWrap")},C.flexboxlegacy=function(){return j("boxDirection")},C.canvas=function(){var a=b.createElement("canvas");return!(!a.getContext||!a.getContext("2d"))},C.canvastext=function(){return!(!o.canvas||!f(b.createElement("canvas").getContext("2d").fillText,"function"))},C.webgl=function(){return!!a.WebGLRenderingContext},C.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:H(["@media (",x.join("touch-enabled),("),r,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=9===a.offsetTop}),c},C.geolocation=function(){return"geolocation"in navigator},C.postmessage=function(){return!!a.postMessage},C.websqldatabase=function(){return!!a.openDatabase},C.indexedDB=function(){return!!j("indexedDB",a)},C.hashchange=function(){return J("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},C.history=function(){return!(!a.history||!history.pushState)},C.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},C.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},C.rgba=function(){return d("background-color:rgba(150,255,150,.5)"),g(t.backgroundColor,"rgba")},C.hsla=function(){return d("background-color:hsla(120,40%,100%,.5)"),g(t.backgroundColor,"rgba")||g(t.backgroundColor,"hsla")},C.multiplebgs=function(){return d("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(t.background)},C.backgroundsize=function(){return j("backgroundSize")},C.borderimage=function(){return j("borderImage")},C.borderradius=function(){return j("borderRadius")},C.boxshadow=function(){return j("boxShadow")},C.textshadow=function(){return""===b.createElement("div").style.textShadow},C.opacity=function(){return e("opacity:.55"),/^0.55$/.test(t.opacity)},C.cssanimations=function(){return j("animationName")},C.csscolumns=function(){return j("columnCount")},C.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return d((a+"-webkit- ".split(" ").join(b+a)+x.join(c+a)).slice(0,-a.length)),g(t.backgroundImage,"gradient")},C.cssreflections=function(){return j("boxReflect")},C.csstransforms=function(){return!!j("transform")},C.csstransforms3d=function(){var a=!!j("perspective");return a&&"webkitPerspective"in q.style&&H("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=9===b.offsetLeft&&3===b.offsetHeight}),a},C.csstransitions=function(){return j("transition")},C.fontface=function(){var a;return H('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&0===g.indexOf(d.split(" ")[0])}),a},C.generatedcontent=function(){var a;return H(["#",r,"{font:0/0 a}#",r,':after{content:"',v,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},C.video=function(){var a=b.createElement("video"),c=!1;try{(c=!!a.canPlayType)&&(c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(d){}return c},C.audio=function(){var a=b.createElement("audio"),c=!1;try{(c=!!a.canPlayType)&&(c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(d){}return c},C.localstorage=function(){try{return localStorage.setItem(r,r),localStorage.removeItem(r),!0}catch(a){return!1}},C.sessionstorage=function(){try{return sessionStorage.setItem(r,r),sessionStorage.removeItem(r),!0}catch(a){return!1}},C.webworkers=function(){return!!a.Worker},C.applicationcache=function(){return!!a.applicationCache},C.svg=function(){return!!b.createElementNS&&!!b.createElementNS(B.svg,"svg").createSVGRect},C.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==B.svg},C.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(w.call(b.createElementNS(B.svg,"animate")))},C.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(w.call(b.createElementNS(B.svg,"clipPath")))};for(var L in C)m(C,L)&&(l=L.toLowerCase(),o[l]=C[L](),F.push((o[l]?"":"no-")+l));return o.input||k(),o.addTest=function(a,b){if("object"==typeof a)for(var d in a)m(a,d)&&o.addTest(d,a[d]);else{if(a=a.toLowerCase(),o[a]!==c)return o;b="function"==typeof b?b():b,"undefined"!=typeof p&&p&&(q.className+=" "+(b?"":"no-")+a),o[a]=b}return o},d(""),s=u=null,function(a,b){function c(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function d(){var a=s.elements;return"string"==typeof a?a.split(" "):a}function e(a){var b=r[a[p]];return b||(b={},q++,a[p]=q,r[q]=b),b}function f(a,c,d){if(c||(c=b),k)return c.createElement(a);d||(d=e(c));var f;return f=d.cache[a]?d.cache[a].cloneNode():o.test(a)?(d.cache[a]=d.createElem(a)).cloneNode():d.createElem(a),!f.canHaveChildren||n.test(a)||f.tagUrn?f:d.frag.appendChild(f)}function g(a,c){if(a||(a=b),k)return a.createDocumentFragment();c=c||e(a);for(var f=c.frag.cloneNode(),g=0,h=d(),i=h.length;i>g;g++)f.createElement(h[g]);return f}function h(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?f(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+d().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function i(a){a||(a=b);var d=e(a);return!s.shivCSS||j||d.hasCSS||(d.hasCSS=!!c(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||h(a,d),a}var j,k,l="3.7.0",m=a.html5||{},n=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,o=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,p="_html5shiv",q=0,r={};!function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",j="hidden"in a,k=1==a.childNodes.length||function(){b.createElement("a");var a=b.createDocumentFragment();return"undefined"==typeof a.cloneNode||"undefined"==typeof a.createDocumentFragment||"undefined"==typeof a.createElement}()}catch(c){j=!0,k=!0}}();var s={elements:m.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:l,shivCSS:m.shivCSS!==!1,supportsUnknownElements:k,shivMethods:m.shivMethods!==!1,type:"default",shivDocument:i,createElement:f,createDocumentFragment:g};a.html5=s,i(b)}(this,b),o._version=n,o._prefixes=x,o._domPrefixes=A,o._cssomPrefixes=z,o.mq=I,o.hasEvent=J,o.testProp=function(a){return h([a])},o.testAllProps=j,o.testStyles=H,o.prefixed=function(a,b,c){return b?j(a,b,c):j(a,"pfx")},q.className=q.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(p?" js "+F.join(" "):""),o}(this,this.document);
                                                                                                                       // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 19
}).call(this);                                                       // 20
                                                                     // 21
                                                                     // 22
                                                                     // 23
                                                                     // 24
                                                                     // 25
                                                                     // 26
(function () {                                                       // 27
                                                                     // 28
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ewall:foundation/js/vendor/fastclick.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
!function(){"use strict";/**                                                                                           // 1
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.                                   // 2
	 *                                                                                                                    // 3
	 * @codingstandard ftlabs-jsv2                                                                                        // 4
	 * @copyright The Financial Times Limited [All Rights Reserved]                                                       // 5
	 * @license MIT License (see LICENSE.txt)                                                                             // 6
	 */                                                                                                                   // 7
function a(b,d){function e(a,b){return function(){return a.apply(b,arguments)}}var f;if(d=d||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=d.touchBoundary||10,this.layer=b,this.tapDelay=d.tapDelay||200,this.tapTimeout=d.tapTimeout||700,!a.notNeeded(b)){for(var g=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],h=this,i=0,j=g.length;j>i;i++)h[g[i]]=e(h[g[i]],h);c&&(b.addEventListener("mouseover",this.onMouse,!0),b.addEventListener("mousedown",this.onMouse,!0),b.addEventListener("mouseup",this.onMouse,!0)),b.addEventListener("click",this.onClick,!0),b.addEventListener("touchstart",this.onTouchStart,!1),b.addEventListener("touchmove",this.onTouchMove,!1),b.addEventListener("touchend",this.onTouchEnd,!1),b.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(b.removeEventListener=function(a,c,d){var e=Node.prototype.removeEventListener;"click"===a?e.call(b,a,c.hijacked||c,d):e.call(b,a,c,d)},b.addEventListener=function(a,c,d){var e=Node.prototype.addEventListener;"click"===a?e.call(b,a,c.hijacked||(c.hijacked=function(a){a.propagationStopped||c(a)}),d):e.call(b,a,c,d)}),"function"==typeof b.onclick&&(f=b.onclick,b.addEventListener("click",function(a){f(a)},!1),b.onclick=null)}}var b=navigator.userAgent.indexOf("Windows Phone")>=0,c=navigator.userAgent.indexOf("Android")>0&&!b,d=/iP(ad|hone|od)/.test(navigator.userAgent)&&!b,e=d&&/OS 4_\d(_\d)?/.test(navigator.userAgent),f=d&&/OS [6-7]_\d/.test(navigator.userAgent),g=navigator.userAgent.indexOf("BB10")>0;a.prototype.needsClick=function(a){switch(a.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(a.disabled)return!0;break;case"input":if(d&&"file"===a.type||a.disabled)return!0;break;case"label":case"iframe":case"video":return!0}return/\bneedsclick\b/.test(a.className)},a.prototype.needsFocus=function(a){switch(a.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!c;case"input":switch(a.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!a.disabled&&!a.readOnly;default:return/\bneedsfocus\b/.test(a.className)}},a.prototype.sendClick=function(a,b){var c,d;document.activeElement&&document.activeElement!==a&&document.activeElement.blur(),d=b.changedTouches[0],c=document.createEvent("MouseEvents"),c.initMouseEvent(this.determineEventType(a),!0,!0,window,1,d.screenX,d.screenY,d.clientX,d.clientY,!1,!1,!1,!1,0,null),c.forwardedTouchEvent=!0,a.dispatchEvent(c)},a.prototype.determineEventType=function(a){return c&&"select"===a.tagName.toLowerCase()?"mousedown":"click"},a.prototype.focus=function(a){var b;d&&a.setSelectionRange&&0!==a.type.indexOf("date")&&"time"!==a.type&&"month"!==a.type?(b=a.value.length,a.setSelectionRange(b,b)):a.focus()},a.prototype.updateScrollParent=function(a){var b,c;if(b=a.fastClickScrollParent,!b||!b.contains(a)){c=a;do{if(c.scrollHeight>c.offsetHeight){b=c,a.fastClickScrollParent=c;break}c=c.parentElement}while(c)}b&&(b.fastClickLastScrollTop=b.scrollTop)},a.prototype.getTargetElementFromEventTarget=function(a){return a.nodeType===Node.TEXT_NODE?a.parentNode:a},a.prototype.onTouchStart=function(a){var b,c,f;if(a.targetTouches.length>1)return!0;if(b=this.getTargetElementFromEventTarget(a.target),c=a.targetTouches[0],d){if(f=window.getSelection(),f.rangeCount&&!f.isCollapsed)return!0;if(!e){if(c.identifier&&c.identifier===this.lastTouchIdentifier)return a.preventDefault(),!1;this.lastTouchIdentifier=c.identifier,this.updateScrollParent(b)}}return this.trackingClick=!0,this.trackingClickStart=a.timeStamp,this.targetElement=b,this.touchStartX=c.pageX,this.touchStartY=c.pageY,a.timeStamp-this.lastClickTime<this.tapDelay&&a.preventDefault(),!0},a.prototype.touchHasMoved=function(a){var b=a.changedTouches[0],c=this.touchBoundary;return Math.abs(b.pageX-this.touchStartX)>c||Math.abs(b.pageY-this.touchStartY)>c?!0:!1},a.prototype.onTouchMove=function(a){return this.trackingClick?((this.targetElement!==this.getTargetElementFromEventTarget(a.target)||this.touchHasMoved(a))&&(this.trackingClick=!1,this.targetElement=null),!0):!0},a.prototype.findControl=function(a){return void 0!==a.control?a.control:a.htmlFor?document.getElementById(a.htmlFor):a.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},a.prototype.onTouchEnd=function(a){var b,g,h,i,j,k=this.targetElement;if(!this.trackingClick)return!0;if(a.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(a.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;if(this.cancelNextClick=!1,this.lastClickTime=a.timeStamp,g=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,f&&(j=a.changedTouches[0],k=document.elementFromPoint(j.pageX-window.pageXOffset,j.pageY-window.pageYOffset)||k,k.fastClickScrollParent=this.targetElement.fastClickScrollParent),h=k.tagName.toLowerCase(),"label"===h){if(b=this.findControl(k)){if(this.focus(k),c)return!1;k=b}}else if(this.needsFocus(k))return a.timeStamp-g>100||d&&window.top!==window&&"input"===h?(this.targetElement=null,!1):(this.focus(k),this.sendClick(k,a),d&&"select"===h||(this.targetElement=null,a.preventDefault()),!1);return d&&!e&&(i=k.fastClickScrollParent,i&&i.fastClickLastScrollTop!==i.scrollTop)?!0:(this.needsClick(k)||(a.preventDefault(),this.sendClick(k,a)),!1)},a.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},a.prototype.onMouse=function(a){return this.targetElement?a.forwardedTouchEvent?!0:a.cancelable&&(!this.needsClick(this.targetElement)||this.cancelNextClick)?(a.stopImmediatePropagation?a.stopImmediatePropagation():a.propagationStopped=!0,a.stopPropagation(),a.preventDefault(),!1):!0:!0},a.prototype.onClick=function(a){var b;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===a.target.type&&0===a.detail?!0:(b=this.onMouse(a),b||(this.targetElement=null),b)},a.prototype.destroy=function(){var a=this.layer;c&&(a.removeEventListener("mouseover",this.onMouse,!0),a.removeEventListener("mousedown",this.onMouse,!0),a.removeEventListener("mouseup",this.onMouse,!0)),a.removeEventListener("click",this.onClick,!0),a.removeEventListener("touchstart",this.onTouchStart,!1),a.removeEventListener("touchmove",this.onTouchMove,!1),a.removeEventListener("touchend",this.onTouchEnd,!1),a.removeEventListener("touchcancel",this.onTouchCancel,!1)},a.notNeeded=function(a){var b,d,e,f;if("undefined"==typeof window.ontouchstart)return!0;if(d=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!c)return!0;if(b=document.querySelector("meta[name=viewport]")){if(-1!==b.content.indexOf("user-scalable=no"))return!0;if(d>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(g&&(e=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),e[1]>=10&&e[2]>=3&&(b=document.querySelector("meta[name=viewport]")))){if(-1!==b.content.indexOf("user-scalable=no"))return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===a.style.msTouchAction||"manipulation"===a.style.touchAction?!0:(f=+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1],f>=27&&(b=document.querySelector("meta[name=viewport]"),b&&(-1!==b.content.indexOf("user-scalable=no")||document.documentElement.scrollWidth<=window.outerWidth))?!0:"none"===a.style.touchAction||"manipulation"===a.style.touchAction?!0:!1)},a.attach=function(b,c){return new a(b,c)},"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return a}):"undefined"!=typeof module&&module.exports?(module.exports=a.attach,module.exports.FastClick=a):window.FastClick=a}();
                                                                                                                       // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 45
}).call(this);                                                       // 46
                                                                     // 47
                                                                     // 48
                                                                     // 49
                                                                     // 50
                                                                     // 51
                                                                     // 52
(function () {                                                       // 53
                                                                     // 54
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ewall:foundation/js/vendor/jquery.cookie.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/*!                                                                                                                    // 1
 * jQuery Cookie Plugin v1.4.1                                                                                         // 2
 * https://github.com/carhartl/jquery-cookie                                                                           // 3
 *                                                                                                                     // 4
 * Copyright 2013 Klaus Hartl                                                                                          // 5
 * Released under the MIT license                                                                                      // 6
 */                                                                                                                    // 7
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){function b(a){return h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):String(a))}function e(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(g," ")),h.json?JSON.parse(a):a}catch(b){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,i){if(void 0!==g&&!a.isFunction(g)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[b(e),"=",d(g),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=e?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(e&&e===q){l=f(r,g);break}e||void 0===(r=f(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0===a.cookie(b)?!1:(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}});
                                                                                                                       // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 71
}).call(this);                                                       // 72
                                                                     // 73
                                                                     // 74
                                                                     // 75
                                                                     // 76
                                                                     // 77
                                                                     // 78
(function () {                                                       // 79
                                                                     // 80
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ewall:foundation/js/vendor/placeholder.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/*! http://mths.be/placeholder v2.0.9 by @mathias */                                                                   // 1
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){function b(b){var c={},d=/^jQuery\d+$/;return a.each(b.attributes,function(a,b){b.specified&&!d.test(b.name)&&(c[b.name]=b.value)}),c}function c(b,c){var d=this,f=a(d);if(d.value==f.attr("placeholder")&&f.hasClass("placeholder"))if(f.data("placeholder-password")){if(f=f.hide().nextAll('input[type="password"]:first').show().attr("id",f.removeAttr("id").data("placeholder-id")),b===!0)return f[0].value=c;f.focus()}else d.value="",f.removeClass("placeholder"),d==e()&&d.select()}function d(){var d,e=this,f=a(e),g=this.id;if(""===e.value){if("password"===e.type){if(!f.data("placeholder-textinput")){try{d=f.clone().attr({type:"text"})}catch(h){d=a("<input>").attr(a.extend(b(this),{type:"text"}))}d.removeAttr("name").data({"placeholder-password":f,"placeholder-id":g}).bind("focus.placeholder",c),f.data({"placeholder-textinput":d,"placeholder-id":g}).before(d)}f=f.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id",g).show()}f.addClass("placeholder"),f[0].value=f.attr("placeholder")}else f.removeClass("placeholder")}function e(){try{return document.activeElement}catch(a){}}var f,g,h="[object OperaMini]"==Object.prototype.toString.call(window.operamini),i="placeholder"in document.createElement("input")&&!h,j="placeholder"in document.createElement("textarea")&&!h,k=a.valHooks,l=a.propHooks;i&&j?(g=a.fn.placeholder=function(){return this},g.input=g.textarea=!0):(g=a.fn.placeholder=function(){var a=this;return a.filter((i?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":c,"blur.placeholder":d}).data("placeholder-enabled",!0).trigger("blur.placeholder"),a},g.input=i,g.textarea=j,f={get:function(b){var c=a(b),d=c.data("placeholder-password");return d?d[0].value:c.data("placeholder-enabled")&&c.hasClass("placeholder")?"":b.value},set:function(b,f){var g=a(b),h=g.data("placeholder-password");return h?h[0].value=f:g.data("placeholder-enabled")?(""===f?(b.value=f,b!=e()&&d.call(b)):g.hasClass("placeholder")?c.call(b,!0,f)||(b.value=f):b.value=f,g):b.value=f}},i||(k.input=f,l.value=f),j||(k.textarea=f,l.value=f),a(function(){a(document).delegate("form","submit.placeholder",function(){var b=a(".placeholder",this).each(c);setTimeout(function(){b.each(d)},10)})}),a(window).bind("beforeunload.placeholder",function(){a(".placeholder").each(function(){this.value=""})}))});
                                                                                                                       // 3
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 91
}).call(this);                                                       // 92
                                                                     // 93
                                                                     // 94
                                                                     // 95
                                                                     // 96
                                                                     // 97
                                                                     // 98
(function () {                                                       // 99
                                                                     // 100
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ewall:foundation/js/foundation.min.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/*                                                                                                                     // 1
 * Foundation Responsive Library                                                                                       // 2
 * http://foundation.zurb.com                                                                                          // 3
 * Copyright 2014, ZURB                                                                                                // 4
 * Free to use under the MIT license.                                                                                  // 5
 * http://www.opensource.org/licenses/mit-license.php                                                                  // 6
*/                                                                                                                     // 7
                                                                                                                       // 8
(function ($, window, document, undefined) {                                                                           // 9
  'use strict';                                                                                                        // 10
                                                                                                                       // 11
  var header_helpers = function (class_array) {                                                                        // 12
    var i = class_array.length;                                                                                        // 13
    var head = $('head');                                                                                              // 14
                                                                                                                       // 15
    while (i--) {                                                                                                      // 16
      if (head.has('.' + class_array[i]).length === 0) {                                                               // 17
        head.append('<meta class="' + class_array[i] + '" />');                                                        // 18
      }                                                                                                                // 19
    }                                                                                                                  // 20
  };                                                                                                                   // 21
                                                                                                                       // 22
  header_helpers([                                                                                                     // 23
    'foundation-mq-small',                                                                                             // 24
    'foundation-mq-small-only',                                                                                        // 25
    'foundation-mq-medium',                                                                                            // 26
    'foundation-mq-medium-only',                                                                                       // 27
    'foundation-mq-large',                                                                                             // 28
    'foundation-mq-large-only',                                                                                        // 29
    'foundation-mq-xlarge',                                                                                            // 30
    'foundation-mq-xlarge-only',                                                                                       // 31
    'foundation-mq-xxlarge',                                                                                           // 32
    'foundation-data-attribute-namespace']);                                                                           // 33
                                                                                                                       // 34
  // Enable FastClick if present                                                                                       // 35
                                                                                                                       // 36
  $(function () {                                                                                                      // 37
    if (typeof FastClick !== 'undefined') {                                                                            // 38
      // Don't attach to body if undefined                                                                             // 39
      if (typeof document.body !== 'undefined') {                                                                      // 40
        FastClick.attach(document.body);                                                                               // 41
      }                                                                                                                // 42
    }                                                                                                                  // 43
  });                                                                                                                  // 44
                                                                                                                       // 45
  // private Fast Selector wrapper,                                                                                    // 46
  // returns jQuery object. Only use where                                                                             // 47
  // getElementById is not available.                                                                                  // 48
  var S = function (selector, context) {                                                                               // 49
    if (typeof selector === 'string') {                                                                                // 50
      if (context) {                                                                                                   // 51
        var cont;                                                                                                      // 52
        if (context.jquery) {                                                                                          // 53
          cont = context[0];                                                                                           // 54
          if (!cont) {                                                                                                 // 55
            return context;                                                                                            // 56
          }                                                                                                            // 57
        } else {                                                                                                       // 58
          cont = context;                                                                                              // 59
        }                                                                                                              // 60
        return $(cont.querySelectorAll(selector));                                                                     // 61
      }                                                                                                                // 62
                                                                                                                       // 63
      return $(document.querySelectorAll(selector));                                                                   // 64
    }                                                                                                                  // 65
                                                                                                                       // 66
    return $(selector, context);                                                                                       // 67
  };                                                                                                                   // 68
                                                                                                                       // 69
  // Namespace functions.                                                                                              // 70
                                                                                                                       // 71
  var attr_name = function (init) {                                                                                    // 72
    var arr = [];                                                                                                      // 73
    if (!init) {                                                                                                       // 74
      arr.push('data');                                                                                                // 75
    }                                                                                                                  // 76
    if (this.namespace.length > 0) {                                                                                   // 77
      arr.push(this.namespace);                                                                                        // 78
    }                                                                                                                  // 79
    arr.push(this.name);                                                                                               // 80
                                                                                                                       // 81
    return arr.join('-');                                                                                              // 82
  };                                                                                                                   // 83
                                                                                                                       // 84
  var add_namespace = function (str) {                                                                                 // 85
    var parts = str.split('-'),                                                                                        // 86
        i = parts.length,                                                                                              // 87
        arr = [];                                                                                                      // 88
                                                                                                                       // 89
    while (i--) {                                                                                                      // 90
      if (i !== 0) {                                                                                                   // 91
        arr.push(parts[i]);                                                                                            // 92
      } else {                                                                                                         // 93
        if (this.namespace.length > 0) {                                                                               // 94
          arr.push(this.namespace, parts[i]);                                                                          // 95
        } else {                                                                                                       // 96
          arr.push(parts[i]);                                                                                          // 97
        }                                                                                                              // 98
      }                                                                                                                // 99
    }                                                                                                                  // 100
                                                                                                                       // 101
    return arr.reverse().join('-');                                                                                    // 102
  };                                                                                                                   // 103
                                                                                                                       // 104
  // Event binding and data-options updating.                                                                          // 105
                                                                                                                       // 106
  var bindings = function (method, options) {                                                                          // 107
    var self = this,                                                                                                   // 108
        bind = function(){                                                                                             // 109
          var $this = S(this),                                                                                         // 110
              should_bind_events = !$this.data(self.attr_name(true) + '-init');                                        // 111
          $this.data(self.attr_name(true) + '-init', $.extend({}, self.settings, (options || method), self.data_options($this)));
                                                                                                                       // 113
          if (should_bind_events) {                                                                                    // 114
            self.events(this);                                                                                         // 115
          }                                                                                                            // 116
        };                                                                                                             // 117
                                                                                                                       // 118
    if (S(this.scope).is('[' + this.attr_name() +']')) {                                                               // 119
      bind.call(this.scope);                                                                                           // 120
    } else {                                                                                                           // 121
      S('[' + this.attr_name() +']', this.scope).each(bind);                                                           // 122
    }                                                                                                                  // 123
    // # Patch to fix #5043 to move this *after* the if/else clause in order for Backbone and similar frameworks to have improved control over event binding and data-options updating.
    if (typeof method === 'string') {                                                                                  // 125
      return this[method].call(this, options);                                                                         // 126
    }                                                                                                                  // 127
                                                                                                                       // 128
  };                                                                                                                   // 129
                                                                                                                       // 130
  var single_image_loaded = function (image, callback) {                                                               // 131
    function loaded () {                                                                                               // 132
      callback(image[0]);                                                                                              // 133
    }                                                                                                                  // 134
                                                                                                                       // 135
    function bindLoad () {                                                                                             // 136
      this.one('load', loaded);                                                                                        // 137
                                                                                                                       // 138
      if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {                                                              // 139
        var src = this.attr( 'src' ),                                                                                  // 140
            param = src.match( /\?/ ) ? '&' : '?';                                                                     // 141
                                                                                                                       // 142
        param += 'random=' + (new Date()).getTime();                                                                   // 143
        this.attr('src', src + param);                                                                                 // 144
      }                                                                                                                // 145
    }                                                                                                                  // 146
                                                                                                                       // 147
    if (!image.attr('src')) {                                                                                          // 148
      loaded();                                                                                                        // 149
      return;                                                                                                          // 150
    }                                                                                                                  // 151
                                                                                                                       // 152
    if (image[0].complete || image[0].readyState === 4) {                                                              // 153
      loaded();                                                                                                        // 154
    } else {                                                                                                           // 155
      bindLoad.call(image);                                                                                            // 156
    }                                                                                                                  // 157
  };                                                                                                                   // 158
                                                                                                                       // 159
  /*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */
                                                                                                                       // 161
  window.matchMedia || (window.matchMedia = function() {                                                               // 162
      "use strict";                                                                                                    // 163
                                                                                                                       // 164
      // For browsers that support matchMedium api such as IE 9 and webkit                                             // 165
      var styleMedia = (window.styleMedia || window.media);                                                            // 166
                                                                                                                       // 167
      // For those that don't support matchMedium                                                                      // 168
      if (!styleMedia) {                                                                                               // 169
          var style       = document.createElement('style'),                                                           // 170
              script      = document.getElementsByTagName('script')[0],                                                // 171
              info        = null;                                                                                      // 172
                                                                                                                       // 173
          style.type  = 'text/css';                                                                                    // 174
          style.id    = 'matchmediajs-test';                                                                           // 175
                                                                                                                       // 176
          script.parentNode.insertBefore(style, script);                                                               // 177
                                                                                                                       // 178
          // 'style.currentStyle' is used by IE <= 8 and 'window.getComputedStyle' for all other browsers              // 179
          info = ('getComputedStyle' in window) && window.getComputedStyle(style, null) || style.currentStyle;         // 180
                                                                                                                       // 181
          styleMedia = {                                                                                               // 182
              matchMedium: function(media) {                                                                           // 183
                  var text = '@media ' + media + '{ #matchmediajs-test { width: 1px; } }';                             // 184
                                                                                                                       // 185
                  // 'style.styleSheet' is used by IE <= 8 and 'style.textContent' for all other browsers              // 186
                  if (style.styleSheet) {                                                                              // 187
                      style.styleSheet.cssText = text;                                                                 // 188
                  } else {                                                                                             // 189
                      style.textContent = text;                                                                        // 190
                  }                                                                                                    // 191
                                                                                                                       // 192
                  // Test if media query is true or false                                                              // 193
                  return info.width === '1px';                                                                         // 194
              }                                                                                                        // 195
          };                                                                                                           // 196
      }                                                                                                                // 197
                                                                                                                       // 198
      return function(media) {                                                                                         // 199
          return {                                                                                                     // 200
              matches: styleMedia.matchMedium(media || 'all'),                                                         // 201
              media: media || 'all'                                                                                    // 202
          };                                                                                                           // 203
      };                                                                                                               // 204
  }());                                                                                                                // 205
                                                                                                                       // 206
  /*                                                                                                                   // 207
   * jquery.requestAnimationFrame                                                                                      // 208
   * https://github.com/gnarf37/jquery-requestAnimationFrame                                                           // 209
   * Requires jQuery 1.8+                                                                                              // 210
   *                                                                                                                   // 211
   * Copyright (c) 2012 Corey Frang                                                                                    // 212
   * Licensed under the MIT license.                                                                                   // 213
   */                                                                                                                  // 214
                                                                                                                       // 215
  (function(jQuery) {                                                                                                  // 216
                                                                                                                       // 217
                                                                                                                       // 218
  // requestAnimationFrame polyfill adapted from Erik Möller                                                           // 219
  // fixes from Paul Irish and Tino Zijdel                                                                             // 220
  // http://paulirish.com/2011/requestanimationframe-for-smart-animating/                                              // 221
  // http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating                          // 222
                                                                                                                       // 223
  var animating,                                                                                                       // 224
      lastTime = 0,                                                                                                    // 225
      vendors = ['webkit', 'moz'],                                                                                     // 226
      requestAnimationFrame = window.requestAnimationFrame,                                                            // 227
      cancelAnimationFrame = window.cancelAnimationFrame,                                                              // 228
      jqueryFxAvailable = 'undefined' !== typeof jQuery.fx;                                                            // 229
                                                                                                                       // 230
  for (; lastTime < vendors.length && !requestAnimationFrame; lastTime++) {                                            // 231
    requestAnimationFrame = window[ vendors[lastTime] + 'RequestAnimationFrame' ];                                     // 232
    cancelAnimationFrame = cancelAnimationFrame ||                                                                     // 233
      window[ vendors[lastTime] + 'CancelAnimationFrame' ] ||                                                          // 234
      window[ vendors[lastTime] + 'CancelRequestAnimationFrame' ];                                                     // 235
  }                                                                                                                    // 236
                                                                                                                       // 237
  function raf() {                                                                                                     // 238
    if (animating) {                                                                                                   // 239
      requestAnimationFrame(raf);                                                                                      // 240
                                                                                                                       // 241
      if (jqueryFxAvailable) {                                                                                         // 242
        jQuery.fx.tick();                                                                                              // 243
      }                                                                                                                // 244
    }                                                                                                                  // 245
  }                                                                                                                    // 246
                                                                                                                       // 247
  if (requestAnimationFrame) {                                                                                         // 248
    // use rAF                                                                                                         // 249
    window.requestAnimationFrame = requestAnimationFrame;                                                              // 250
    window.cancelAnimationFrame = cancelAnimationFrame;                                                                // 251
                                                                                                                       // 252
    if (jqueryFxAvailable) {                                                                                           // 253
      jQuery.fx.timer = function (timer) {                                                                             // 254
        if (timer() && jQuery.timers.push(timer) && !animating) {                                                      // 255
          animating = true;                                                                                            // 256
          raf();                                                                                                       // 257
        }                                                                                                              // 258
      };                                                                                                               // 259
                                                                                                                       // 260
      jQuery.fx.stop = function () {                                                                                   // 261
        animating = false;                                                                                             // 262
      };                                                                                                               // 263
    }                                                                                                                  // 264
  } else {                                                                                                             // 265
    // polyfill                                                                                                        // 266
    window.requestAnimationFrame = function (callback) {                                                               // 267
      var currTime = new Date().getTime(),                                                                             // 268
        timeToCall = Math.max(0, 16 - (currTime - lastTime)),                                                          // 269
        id = window.setTimeout(function () {                                                                           // 270
          callback(currTime + timeToCall);                                                                             // 271
        }, timeToCall);                                                                                                // 272
      lastTime = currTime + timeToCall;                                                                                // 273
      return id;                                                                                                       // 274
    };                                                                                                                 // 275
                                                                                                                       // 276
    window.cancelAnimationFrame = function (id) {                                                                      // 277
      clearTimeout(id);                                                                                                // 278
    };                                                                                                                 // 279
                                                                                                                       // 280
  }                                                                                                                    // 281
                                                                                                                       // 282
  }( $ ));                                                                                                             // 283
                                                                                                                       // 284
  function removeQuotes (string) {                                                                                     // 285
    if (typeof string === 'string' || string instanceof String) {                                                      // 286
      string = string.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g, '');                                                    // 287
    }                                                                                                                  // 288
                                                                                                                       // 289
    return string;                                                                                                     // 290
  }                                                                                                                    // 291
                                                                                                                       // 292
  window.Foundation = {                                                                                                // 293
    name : 'Foundation',                                                                                               // 294
                                                                                                                       // 295
    version : '5.5.2',                                                                                                 // 296
                                                                                                                       // 297
    media_queries : {                                                                                                  // 298
      'small'       : S('.foundation-mq-small').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),     // 299
      'small-only'  : S('.foundation-mq-small-only').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
      'medium'      : S('.foundation-mq-medium').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),    // 301
      'medium-only' : S('.foundation-mq-medium-only').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
      'large'       : S('.foundation-mq-large').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),     // 303
      'large-only'  : S('.foundation-mq-large-only').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
      'xlarge'      : S('.foundation-mq-xlarge').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),    // 305
      'xlarge-only' : S('.foundation-mq-xlarge-only').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
      'xxlarge'     : S('.foundation-mq-xxlarge').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, '')    // 307
    },                                                                                                                 // 308
                                                                                                                       // 309
    stylesheet : $('<style></style>').appendTo('head')[0].sheet,                                                       // 310
                                                                                                                       // 311
    global : {                                                                                                         // 312
      namespace : undefined                                                                                            // 313
    },                                                                                                                 // 314
                                                                                                                       // 315
    init : function (scope, libraries, method, options, response) {                                                    // 316
      var args = [scope, method, options, response],                                                                   // 317
          responses = [];                                                                                              // 318
                                                                                                                       // 319
      // check RTL                                                                                                     // 320
      this.rtl = /rtl/i.test(S('html').attr('dir'));                                                                   // 321
                                                                                                                       // 322
      // set foundation global scope                                                                                   // 323
      this.scope = scope || this.scope;                                                                                // 324
                                                                                                                       // 325
      this.set_namespace();                                                                                            // 326
                                                                                                                       // 327
      if (libraries && typeof libraries === 'string' && !/reflow/i.test(libraries)) {                                  // 328
        if (this.libs.hasOwnProperty(libraries)) {                                                                     // 329
          responses.push(this.init_lib(libraries, args));                                                              // 330
        }                                                                                                              // 331
      } else {                                                                                                         // 332
        for (var lib in this.libs) {                                                                                   // 333
          responses.push(this.init_lib(lib, libraries));                                                               // 334
        }                                                                                                              // 335
      }                                                                                                                // 336
                                                                                                                       // 337
      S(window).load(function () {                                                                                     // 338
        S(window)                                                                                                      // 339
          .trigger('resize.fndtn.clearing')                                                                            // 340
          .trigger('resize.fndtn.dropdown')                                                                            // 341
          .trigger('resize.fndtn.equalizer')                                                                           // 342
          .trigger('resize.fndtn.interchange')                                                                         // 343
          .trigger('resize.fndtn.joyride')                                                                             // 344
          .trigger('resize.fndtn.magellan')                                                                            // 345
          .trigger('resize.fndtn.topbar')                                                                              // 346
          .trigger('resize.fndtn.slider');                                                                             // 347
      });                                                                                                              // 348
                                                                                                                       // 349
      return scope;                                                                                                    // 350
    },                                                                                                                 // 351
                                                                                                                       // 352
    init_lib : function (lib, args) {                                                                                  // 353
      if (this.libs.hasOwnProperty(lib)) {                                                                             // 354
        this.patch(this.libs[lib]);                                                                                    // 355
                                                                                                                       // 356
        if (args && args.hasOwnProperty(lib)) {                                                                        // 357
            if (typeof this.libs[lib].settings !== 'undefined') {                                                      // 358
              $.extend(true, this.libs[lib].settings, args[lib]);                                                      // 359
            } else if (typeof this.libs[lib].defaults !== 'undefined') {                                               // 360
              $.extend(true, this.libs[lib].defaults, args[lib]);                                                      // 361
            }                                                                                                          // 362
          return this.libs[lib].init.apply(this.libs[lib], [this.scope, args[lib]]);                                   // 363
        }                                                                                                              // 364
                                                                                                                       // 365
        args = args instanceof Array ? args : new Array(args);                                                         // 366
        return this.libs[lib].init.apply(this.libs[lib], args);                                                        // 367
      }                                                                                                                // 368
                                                                                                                       // 369
      return function () {};                                                                                           // 370
    },                                                                                                                 // 371
                                                                                                                       // 372
    patch : function (lib) {                                                                                           // 373
      lib.scope = this.scope;                                                                                          // 374
      lib.namespace = this.global.namespace;                                                                           // 375
      lib.rtl = this.rtl;                                                                                              // 376
      lib['data_options'] = this.utils.data_options;                                                                   // 377
      lib['attr_name'] = attr_name;                                                                                    // 378
      lib['add_namespace'] = add_namespace;                                                                            // 379
      lib['bindings'] = bindings;                                                                                      // 380
      lib['S'] = this.utils.S;                                                                                         // 381
    },                                                                                                                 // 382
                                                                                                                       // 383
    inherit : function (scope, methods) {                                                                              // 384
      var methods_arr = methods.split(' '),                                                                            // 385
          i = methods_arr.length;                                                                                      // 386
                                                                                                                       // 387
      while (i--) {                                                                                                    // 388
        if (this.utils.hasOwnProperty(methods_arr[i])) {                                                               // 389
          scope[methods_arr[i]] = this.utils[methods_arr[i]];                                                          // 390
        }                                                                                                              // 391
      }                                                                                                                // 392
    },                                                                                                                 // 393
                                                                                                                       // 394
    set_namespace : function () {                                                                                      // 395
                                                                                                                       // 396
      // Description:                                                                                                  // 397
      //    Don't bother reading the namespace out of the meta tag                                                     // 398
      //    if the namespace has been set globally in javascript                                                       // 399
      //                                                                                                               // 400
      // Example:                                                                                                      // 401
      //    Foundation.global.namespace = 'my-namespace';                                                              // 402
      // or make it an empty string:                                                                                   // 403
      //    Foundation.global.namespace = '';                                                                          // 404
      //                                                                                                               // 405
      //                                                                                                               // 406
                                                                                                                       // 407
      // If the namespace has not been set (is undefined), try to read it out of the meta element.                     // 408
      // Otherwise use the globally defined namespace, even if it's empty ('')                                         // 409
      var namespace = ( this.global.namespace === undefined ) ? $('.foundation-data-attribute-namespace').css('font-family') : this.global.namespace;
                                                                                                                       // 411
      // Finally, if the namsepace is either undefined or false, set it to an empty string.                            // 412
      // Otherwise use the namespace value.                                                                            // 413
      this.global.namespace = ( namespace === undefined || /false/i.test(namespace) ) ? '' : namespace;                // 414
    },                                                                                                                 // 415
                                                                                                                       // 416
    libs : {},                                                                                                         // 417
                                                                                                                       // 418
    // methods that can be inherited in libraries                                                                      // 419
    utils : {                                                                                                          // 420
                                                                                                                       // 421
      // Description:                                                                                                  // 422
      //    Fast Selector wrapper returns jQuery object. Only use where getElementById                                 // 423
      //    is not available.                                                                                          // 424
      //                                                                                                               // 425
      // Arguments:                                                                                                    // 426
      //    Selector (String): CSS selector describing the element(s) to be                                            // 427
      //    returned as a jQuery object.                                                                               // 428
      //                                                                                                               // 429
      //    Scope (String): CSS selector describing the area to be searched. Default                                   // 430
      //    is document.                                                                                               // 431
      //                                                                                                               // 432
      // Returns:                                                                                                      // 433
      //    Element (jQuery Object): jQuery object containing elements matching the                                    // 434
      //    selector within the scope.                                                                                 // 435
      S : S,                                                                                                           // 436
                                                                                                                       // 437
      // Description:                                                                                                  // 438
      //    Executes a function a max of once every n milliseconds                                                     // 439
      //                                                                                                               // 440
      // Arguments:                                                                                                    // 441
      //    Func (Function): Function to be throttled.                                                                 // 442
      //                                                                                                               // 443
      //    Delay (Integer): Function execution threshold in milliseconds.                                             // 444
      //                                                                                                               // 445
      // Returns:                                                                                                      // 446
      //    Lazy_function (Function): Function with throttling applied.                                                // 447
      throttle : function (func, delay) {                                                                              // 448
        var timer = null;                                                                                              // 449
                                                                                                                       // 450
        return function () {                                                                                           // 451
          var context = this, args = arguments;                                                                        // 452
                                                                                                                       // 453
          if (timer == null) {                                                                                         // 454
            timer = setTimeout(function () {                                                                           // 455
              func.apply(context, args);                                                                               // 456
              timer = null;                                                                                            // 457
            }, delay);                                                                                                 // 458
          }                                                                                                            // 459
        };                                                                                                             // 460
      },                                                                                                               // 461
                                                                                                                       // 462
      // Description:                                                                                                  // 463
      //    Executes a function when it stops being invoked for n seconds                                              // 464
      //    Modified version of _.debounce() http://underscorejs.org                                                   // 465
      //                                                                                                               // 466
      // Arguments:                                                                                                    // 467
      //    Func (Function): Function to be debounced.                                                                 // 468
      //                                                                                                               // 469
      //    Delay (Integer): Function execution threshold in milliseconds.                                             // 470
      //                                                                                                               // 471
      //    Immediate (Bool): Whether the function should be called at the beginning                                   // 472
      //    of the delay instead of the end. Default is false.                                                         // 473
      //                                                                                                               // 474
      // Returns:                                                                                                      // 475
      //    Lazy_function (Function): Function with debouncing applied.                                                // 476
      debounce : function (func, delay, immediate) {                                                                   // 477
        var timeout, result;                                                                                           // 478
        return function () {                                                                                           // 479
          var context = this, args = arguments;                                                                        // 480
          var later = function () {                                                                                    // 481
            timeout = null;                                                                                            // 482
            if (!immediate) {                                                                                          // 483
              result = func.apply(context, args);                                                                      // 484
            }                                                                                                          // 485
          };                                                                                                           // 486
          var callNow = immediate && !timeout;                                                                         // 487
          clearTimeout(timeout);                                                                                       // 488
          timeout = setTimeout(later, delay);                                                                          // 489
          if (callNow) {                                                                                               // 490
            result = func.apply(context, args);                                                                        // 491
          }                                                                                                            // 492
          return result;                                                                                               // 493
        };                                                                                                             // 494
      },                                                                                                               // 495
                                                                                                                       // 496
      // Description:                                                                                                  // 497
      //    Parses data-options attribute                                                                              // 498
      //                                                                                                               // 499
      // Arguments:                                                                                                    // 500
      //    El (jQuery Object): Element to be parsed.                                                                  // 501
      //                                                                                                               // 502
      // Returns:                                                                                                      // 503
      //    Options (Javascript Object): Contents of the element's data-options                                        // 504
      //    attribute.                                                                                                 // 505
      data_options : function (el, data_attr_name) {                                                                   // 506
        data_attr_name = data_attr_name || 'options';                                                                  // 507
        var opts = {}, ii, p, opts_arr,                                                                                // 508
            data_options = function (el) {                                                                             // 509
              var namespace = Foundation.global.namespace;                                                             // 510
                                                                                                                       // 511
              if (namespace.length > 0) {                                                                              // 512
                return el.data(namespace + '-' + data_attr_name);                                                      // 513
              }                                                                                                        // 514
                                                                                                                       // 515
              return el.data(data_attr_name);                                                                          // 516
            };                                                                                                         // 517
                                                                                                                       // 518
        var cached_options = data_options(el);                                                                         // 519
                                                                                                                       // 520
        if (typeof cached_options === 'object') {                                                                      // 521
          return cached_options;                                                                                       // 522
        }                                                                                                              // 523
                                                                                                                       // 524
        opts_arr = (cached_options || ':').split(';');                                                                 // 525
        ii = opts_arr.length;                                                                                          // 526
                                                                                                                       // 527
        function isNumber (o) {                                                                                        // 528
          return !isNaN (o - 0) && o !== null && o !== '' && o !== false && o !== true;                                // 529
        }                                                                                                              // 530
                                                                                                                       // 531
        function trim (str) {                                                                                          // 532
          if (typeof str === 'string') {                                                                               // 533
            return $.trim(str);                                                                                        // 534
          }                                                                                                            // 535
          return str;                                                                                                  // 536
        }                                                                                                              // 537
                                                                                                                       // 538
        while (ii--) {                                                                                                 // 539
          p = opts_arr[ii].split(':');                                                                                 // 540
          p = [p[0], p.slice(1).join(':')];                                                                            // 541
                                                                                                                       // 542
          if (/true/i.test(p[1])) {                                                                                    // 543
            p[1] = true;                                                                                               // 544
          }                                                                                                            // 545
          if (/false/i.test(p[1])) {                                                                                   // 546
            p[1] = false;                                                                                              // 547
          }                                                                                                            // 548
          if (isNumber(p[1])) {                                                                                        // 549
            if (p[1].indexOf('.') === -1) {                                                                            // 550
              p[1] = parseInt(p[1], 10);                                                                               // 551
            } else {                                                                                                   // 552
              p[1] = parseFloat(p[1]);                                                                                 // 553
            }                                                                                                          // 554
          }                                                                                                            // 555
                                                                                                                       // 556
          if (p.length === 2 && p[0].length > 0) {                                                                     // 557
            opts[trim(p[0])] = trim(p[1]);                                                                             // 558
          }                                                                                                            // 559
        }                                                                                                              // 560
                                                                                                                       // 561
        return opts;                                                                                                   // 562
      },                                                                                                               // 563
                                                                                                                       // 564
      // Description:                                                                                                  // 565
      //    Adds JS-recognizable media queries                                                                         // 566
      //                                                                                                               // 567
      // Arguments:                                                                                                    // 568
      //    Media (String): Key string for the media query to be stored as in                                          // 569
      //    Foundation.media_queries                                                                                   // 570
      //                                                                                                               // 571
      //    Class (String): Class name for the generated <meta> tag                                                    // 572
      register_media : function (media, media_class) {                                                                 // 573
        if (Foundation.media_queries[media] === undefined) {                                                           // 574
          $('head').append('<meta class="' + media_class + '"/>');                                                     // 575
          Foundation.media_queries[media] = removeQuotes($('.' + media_class).css('font-family'));                     // 576
        }                                                                                                              // 577
      },                                                                                                               // 578
                                                                                                                       // 579
      // Description:                                                                                                  // 580
      //    Add custom CSS within a JS-defined media query                                                             // 581
      //                                                                                                               // 582
      // Arguments:                                                                                                    // 583
      //    Rule (String): CSS rule to be appended to the document.                                                    // 584
      //                                                                                                               // 585
      //    Media (String): Optional media query string for the CSS rule to be                                         // 586
      //    nested under.                                                                                              // 587
      add_custom_rule : function (rule, media) {                                                                       // 588
        if (media === undefined && Foundation.stylesheet) {                                                            // 589
          Foundation.stylesheet.insertRule(rule, Foundation.stylesheet.cssRules.length);                               // 590
        } else {                                                                                                       // 591
          var query = Foundation.media_queries[media];                                                                 // 592
                                                                                                                       // 593
          if (query !== undefined) {                                                                                   // 594
            Foundation.stylesheet.insertRule('@media ' +                                                               // 595
              Foundation.media_queries[media] + '{ ' + rule + ' }', Foundation.stylesheet.cssRules.length);            // 596
          }                                                                                                            // 597
        }                                                                                                              // 598
      },                                                                                                               // 599
                                                                                                                       // 600
      // Description:                                                                                                  // 601
      //    Performs a callback function when an image is fully loaded                                                 // 602
      //                                                                                                               // 603
      // Arguments:                                                                                                    // 604
      //    Image (jQuery Object): Image(s) to check if loaded.                                                        // 605
      //                                                                                                               // 606
      //    Callback (Function): Function to execute when image is fully loaded.                                       // 607
      image_loaded : function (images, callback) {                                                                     // 608
        var self = this,                                                                                               // 609
            unloaded = images.length;                                                                                  // 610
                                                                                                                       // 611
        function pictures_has_height(images) {                                                                         // 612
          var pictures_number = images.length;                                                                         // 613
                                                                                                                       // 614
          for (var i = pictures_number - 1; i >= 0; i--) {                                                             // 615
            if(images.attr('height') === undefined) {                                                                  // 616
              return false;                                                                                            // 617
            };                                                                                                         // 618
          };                                                                                                           // 619
                                                                                                                       // 620
          return true;                                                                                                 // 621
        }                                                                                                              // 622
                                                                                                                       // 623
        if (unloaded === 0 || pictures_has_height(images)) {                                                           // 624
          callback(images);                                                                                            // 625
        }                                                                                                              // 626
                                                                                                                       // 627
        images.each(function () {                                                                                      // 628
          single_image_loaded(self.S(this), function () {                                                              // 629
            unloaded -= 1;                                                                                             // 630
            if (unloaded === 0) {                                                                                      // 631
              callback(images);                                                                                        // 632
            }                                                                                                          // 633
          });                                                                                                          // 634
        });                                                                                                            // 635
      },                                                                                                               // 636
                                                                                                                       // 637
      // Description:                                                                                                  // 638
      //    Returns a random, alphanumeric string                                                                      // 639
      //                                                                                                               // 640
      // Arguments:                                                                                                    // 641
      //    Length (Integer): Length of string to be generated. Defaults to random                                     // 642
      //    integer.                                                                                                   // 643
      //                                                                                                               // 644
      // Returns:                                                                                                      // 645
      //    Rand (String): Pseudo-random, alphanumeric string.                                                         // 646
      random_str : function () {                                                                                       // 647
        if (!this.fidx) {                                                                                              // 648
          this.fidx = 0;                                                                                               // 649
        }                                                                                                              // 650
        this.prefix = this.prefix || [(this.name || 'F'), (+new Date).toString(36)].join('-');                         // 651
                                                                                                                       // 652
        return this.prefix + (this.fidx++).toString(36);                                                               // 653
      },                                                                                                               // 654
                                                                                                                       // 655
      // Description:                                                                                                  // 656
      //    Helper for window.matchMedia                                                                               // 657
      //                                                                                                               // 658
      // Arguments:                                                                                                    // 659
      //    mq (String): Media query                                                                                   // 660
      //                                                                                                               // 661
      // Returns:                                                                                                      // 662
      //    (Boolean): Whether the media query passes or not                                                           // 663
      match : function (mq) {                                                                                          // 664
        return window.matchMedia(mq).matches;                                                                          // 665
      },                                                                                                               // 666
                                                                                                                       // 667
      // Description:                                                                                                  // 668
      //    Helpers for checking Foundation default media queries with JS                                              // 669
      //                                                                                                               // 670
      // Returns:                                                                                                      // 671
      //    (Boolean): Whether the media query passes or not                                                           // 672
                                                                                                                       // 673
      is_small_up : function () {                                                                                      // 674
        return this.match(Foundation.media_queries.small);                                                             // 675
      },                                                                                                               // 676
                                                                                                                       // 677
      is_medium_up : function () {                                                                                     // 678
        return this.match(Foundation.media_queries.medium);                                                            // 679
      },                                                                                                               // 680
                                                                                                                       // 681
      is_large_up : function () {                                                                                      // 682
        return this.match(Foundation.media_queries.large);                                                             // 683
      },                                                                                                               // 684
                                                                                                                       // 685
      is_xlarge_up : function () {                                                                                     // 686
        return this.match(Foundation.media_queries.xlarge);                                                            // 687
      },                                                                                                               // 688
                                                                                                                       // 689
      is_xxlarge_up : function () {                                                                                    // 690
        return this.match(Foundation.media_queries.xxlarge);                                                           // 691
      },                                                                                                               // 692
                                                                                                                       // 693
      is_small_only : function () {                                                                                    // 694
        return !this.is_medium_up() && !this.is_large_up() && !this.is_xlarge_up() && !this.is_xxlarge_up();           // 695
      },                                                                                                               // 696
                                                                                                                       // 697
      is_medium_only : function () {                                                                                   // 698
        return this.is_medium_up() && !this.is_large_up() && !this.is_xlarge_up() && !this.is_xxlarge_up();            // 699
      },                                                                                                               // 700
                                                                                                                       // 701
      is_large_only : function () {                                                                                    // 702
        return this.is_medium_up() && this.is_large_up() && !this.is_xlarge_up() && !this.is_xxlarge_up();             // 703
      },                                                                                                               // 704
                                                                                                                       // 705
      is_xlarge_only : function () {                                                                                   // 706
        return this.is_medium_up() && this.is_large_up() && this.is_xlarge_up() && !this.is_xxlarge_up();              // 707
      },                                                                                                               // 708
                                                                                                                       // 709
      is_xxlarge_only : function () {                                                                                  // 710
        return this.is_medium_up() && this.is_large_up() && this.is_xlarge_up() && this.is_xxlarge_up();               // 711
      }                                                                                                                // 712
    }                                                                                                                  // 713
  };                                                                                                                   // 714
                                                                                                                       // 715
  $.fn.foundation = function () {                                                                                      // 716
    var args = Array.prototype.slice.call(arguments, 0);                                                               // 717
                                                                                                                       // 718
    return this.each(function () {                                                                                     // 719
      Foundation.init.apply(Foundation, [this].concat(args));                                                          // 720
      return this;                                                                                                     // 721
    });                                                                                                                // 722
  };                                                                                                                   // 723
                                                                                                                       // 724
}(jQuery, window, window.document));                                                                                   // 725
;(function ($, window, document, undefined) {                                                                          // 726
  'use strict';                                                                                                        // 727
                                                                                                                       // 728
  Foundation.libs.slider = {                                                                                           // 729
    name : 'slider',                                                                                                   // 730
                                                                                                                       // 731
    version : '5.5.2',                                                                                                 // 732
                                                                                                                       // 733
    settings : {                                                                                                       // 734
      start : 0,                                                                                                       // 735
      end : 100,                                                                                                       // 736
      step : 1,                                                                                                        // 737
      precision : null,                                                                                                // 738
      initial : null,                                                                                                  // 739
      display_selector : '',                                                                                           // 740
      vertical : false,                                                                                                // 741
      trigger_input_change : false,                                                                                    // 742
      on_change : function () {}                                                                                       // 743
    },                                                                                                                 // 744
                                                                                                                       // 745
    cache : {},                                                                                                        // 746
                                                                                                                       // 747
    init : function (scope, method, options) {                                                                         // 748
      Foundation.inherit(this, 'throttle');                                                                            // 749
      this.bindings(method, options);                                                                                  // 750
      this.reflow();                                                                                                   // 751
    },                                                                                                                 // 752
                                                                                                                       // 753
    events : function () {                                                                                             // 754
      var self = this;                                                                                                 // 755
                                                                                                                       // 756
      $(this.scope)                                                                                                    // 757
        .off('.slider')                                                                                                // 758
        .on('mousedown.fndtn.slider touchstart.fndtn.slider pointerdown.fndtn.slider',                                 // 759
        '[' + self.attr_name() + ']:not(.disabled, [disabled]) .range-slider-handle', function (e) {                   // 760
          if (!self.cache.active) {                                                                                    // 761
            e.preventDefault();                                                                                        // 762
            self.set_active_slider($(e.target));                                                                       // 763
          }                                                                                                            // 764
        })                                                                                                             // 765
        .on('mousemove.fndtn.slider touchmove.fndtn.slider pointermove.fndtn.slider', function (e) {                   // 766
          if (!!self.cache.active) {                                                                                   // 767
            e.preventDefault();                                                                                        // 768
            if ($.data(self.cache.active[0], 'settings').vertical) {                                                   // 769
              var scroll_offset = 0;                                                                                   // 770
              if (!e.pageY) {                                                                                          // 771
                scroll_offset = window.scrollY;                                                                        // 772
              }                                                                                                        // 773
              self.calculate_position(self.cache.active, self.get_cursor_position(e, 'y') + scroll_offset);            // 774
            } else {                                                                                                   // 775
              self.calculate_position(self.cache.active, self.get_cursor_position(e, 'x'));                            // 776
            }                                                                                                          // 777
          }                                                                                                            // 778
        })                                                                                                             // 779
        .on('mouseup.fndtn.slider touchend.fndtn.slider pointerup.fndtn.slider', function (e) {                        // 780
          self.remove_active_slider();                                                                                 // 781
        })                                                                                                             // 782
        .on('change.fndtn.slider', function (e) {                                                                      // 783
          self.settings.on_change();                                                                                   // 784
        });                                                                                                            // 785
                                                                                                                       // 786
      self.S(window)                                                                                                   // 787
        .on('resize.fndtn.slider', self.throttle(function (e) {                                                        // 788
          self.reflow();                                                                                               // 789
        }, 300));                                                                                                      // 790
                                                                                                                       // 791
      // update slider value as users change input value                                                               // 792
      this.S('[' + this.attr_name() + ']').each(function () {                                                          // 793
        var slider = $(this),                                                                                          // 794
            handle = slider.children('.range-slider-handle')[0],                                                       // 795
            settings = self.initialize_settings(handle);                                                               // 796
                                                                                                                       // 797
        if (settings.display_selector != '') {                                                                         // 798
          $(settings.display_selector).each(function(){                                                                // 799
            if (this.hasOwnProperty('value')) {                                                                        // 800
              $(this).change(function(){                                                                               // 801
                // is there a better way to do this?                                                                   // 802
                slider.foundation("slider", "set_value", $(this).val());                                               // 803
              });                                                                                                      // 804
            }                                                                                                          // 805
          });                                                                                                          // 806
        }                                                                                                              // 807
      });                                                                                                              // 808
    },                                                                                                                 // 809
                                                                                                                       // 810
    get_cursor_position : function (e, xy) {                                                                           // 811
      var pageXY = 'page' + xy.toUpperCase(),                                                                          // 812
          clientXY = 'client' + xy.toUpperCase(),                                                                      // 813
          position;                                                                                                    // 814
                                                                                                                       // 815
      if (typeof e[pageXY] !== 'undefined') {                                                                          // 816
        position = e[pageXY];                                                                                          // 817
      } else if (typeof e.originalEvent[clientXY] !== 'undefined') {                                                   // 818
        position = e.originalEvent[clientXY];                                                                          // 819
      } else if (e.originalEvent.touches && e.originalEvent.touches[0] && typeof e.originalEvent.touches[0][clientXY] !== 'undefined') {
        position = e.originalEvent.touches[0][clientXY];                                                               // 821
      } else if (e.currentPoint && typeof e.currentPoint[xy] !== 'undefined') {                                        // 822
        position = e.currentPoint[xy];                                                                                 // 823
      }                                                                                                                // 824
                                                                                                                       // 825
      return position;                                                                                                 // 826
    },                                                                                                                 // 827
                                                                                                                       // 828
    set_active_slider : function ($handle) {                                                                           // 829
      this.cache.active = $handle;                                                                                     // 830
    },                                                                                                                 // 831
                                                                                                                       // 832
    remove_active_slider : function () {                                                                               // 833
      this.cache.active = null;                                                                                        // 834
    },                                                                                                                 // 835
                                                                                                                       // 836
    calculate_position : function ($handle, cursor_x) {                                                                // 837
      var self = this,                                                                                                 // 838
          settings = $.data($handle[0], 'settings'),                                                                   // 839
          handle_l = $.data($handle[0], 'handle_l'),                                                                   // 840
          handle_o = $.data($handle[0], 'handle_o'),                                                                   // 841
          bar_l = $.data($handle[0], 'bar_l'),                                                                         // 842
          bar_o = $.data($handle[0], 'bar_o');                                                                         // 843
                                                                                                                       // 844
      requestAnimationFrame(function () {                                                                              // 845
        var pct;                                                                                                       // 846
                                                                                                                       // 847
        if (Foundation.rtl && !settings.vertical) {                                                                    // 848
          pct = self.limit_to(((bar_o + bar_l - cursor_x) / bar_l), 0, 1);                                             // 849
        } else {                                                                                                       // 850
          pct = self.limit_to(((cursor_x - bar_o) / bar_l), 0, 1);                                                     // 851
        }                                                                                                              // 852
                                                                                                                       // 853
        pct = settings.vertical ? 1 - pct : pct;                                                                       // 854
                                                                                                                       // 855
        var norm = self.normalized_value(pct, settings.start, settings.end, settings.step, settings.precision);        // 856
                                                                                                                       // 857
        self.set_ui($handle, norm);                                                                                    // 858
      });                                                                                                              // 859
    },                                                                                                                 // 860
                                                                                                                       // 861
    set_ui : function ($handle, value) {                                                                               // 862
      var settings = $.data($handle[0], 'settings'),                                                                   // 863
          handle_l = $.data($handle[0], 'handle_l'),                                                                   // 864
          bar_l = $.data($handle[0], 'bar_l'),                                                                         // 865
          norm_pct = this.normalized_percentage(value, settings.start, settings.end),                                  // 866
          handle_offset = norm_pct * (bar_l - handle_l) - 1,                                                           // 867
          progress_bar_length = norm_pct * 100,                                                                        // 868
          $handle_parent = $handle.parent(),                                                                           // 869
          $hidden_inputs = $handle.parent().children('input[type=hidden]');                                            // 870
                                                                                                                       // 871
      if (Foundation.rtl && !settings.vertical) {                                                                      // 872
        handle_offset = -handle_offset;                                                                                // 873
      }                                                                                                                // 874
                                                                                                                       // 875
      handle_offset = settings.vertical ? -handle_offset + bar_l - handle_l + 1 : handle_offset;                       // 876
      this.set_translate($handle, handle_offset, settings.vertical);                                                   // 877
                                                                                                                       // 878
      if (settings.vertical) {                                                                                         // 879
        $handle.siblings('.range-slider-active-segment').css('height', progress_bar_length + '%');                     // 880
      } else {                                                                                                         // 881
        $handle.siblings('.range-slider-active-segment').css('width', progress_bar_length + '%');                      // 882
      }                                                                                                                // 883
                                                                                                                       // 884
      $handle_parent.attr(this.attr_name(), value).trigger('change.fndtn.slider');                                     // 885
                                                                                                                       // 886
      $hidden_inputs.val(value);                                                                                       // 887
      if (settings.trigger_input_change) {                                                                             // 888
          $hidden_inputs.trigger('change.fndtn.slider');                                                               // 889
      }                                                                                                                // 890
                                                                                                                       // 891
      if (!$handle[0].hasAttribute('aria-valuemin')) {                                                                 // 892
        $handle.attr({                                                                                                 // 893
          'aria-valuemin' : settings.start,                                                                            // 894
          'aria-valuemax' : settings.end                                                                               // 895
        });                                                                                                            // 896
      }                                                                                                                // 897
      $handle.attr('aria-valuenow', value);                                                                            // 898
                                                                                                                       // 899
      if (settings.display_selector != '') {                                                                           // 900
        $(settings.display_selector).each(function () {                                                                // 901
          if (this.hasAttribute('value')) {                                                                            // 902
            $(this).val(value);                                                                                        // 903
          } else {                                                                                                     // 904
            $(this).text(value);                                                                                       // 905
          }                                                                                                            // 906
        });                                                                                                            // 907
      }                                                                                                                // 908
                                                                                                                       // 909
    },                                                                                                                 // 910
                                                                                                                       // 911
    normalized_percentage : function (val, start, end) {                                                               // 912
      return Math.min(1, (val - start) / (end - start));                                                               // 913
    },                                                                                                                 // 914
                                                                                                                       // 915
    normalized_value : function (val, start, end, step, precision) {                                                   // 916
      var range = end - start,                                                                                         // 917
          point = val * range,                                                                                         // 918
          mod = (point - (point % step)) / step,                                                                       // 919
          rem = point % step,                                                                                          // 920
          round = ( rem >= step * 0.5 ? step : 0);                                                                     // 921
      return ((mod * step + round) + start).toFixed(precision);                                                        // 922
    },                                                                                                                 // 923
                                                                                                                       // 924
    set_translate : function (ele, offset, vertical) {                                                                 // 925
      if (vertical) {                                                                                                  // 926
        $(ele)                                                                                                         // 927
          .css('-webkit-transform', 'translateY(' + offset + 'px)')                                                    // 928
          .css('-moz-transform', 'translateY(' + offset + 'px)')                                                       // 929
          .css('-ms-transform', 'translateY(' + offset + 'px)')                                                        // 930
          .css('-o-transform', 'translateY(' + offset + 'px)')                                                         // 931
          .css('transform', 'translateY(' + offset + 'px)');                                                           // 932
      } else {                                                                                                         // 933
        $(ele)                                                                                                         // 934
          .css('-webkit-transform', 'translateX(' + offset + 'px)')                                                    // 935
          .css('-moz-transform', 'translateX(' + offset + 'px)')                                                       // 936
          .css('-ms-transform', 'translateX(' + offset + 'px)')                                                        // 937
          .css('-o-transform', 'translateX(' + offset + 'px)')                                                         // 938
          .css('transform', 'translateX(' + offset + 'px)');                                                           // 939
      }                                                                                                                // 940
    },                                                                                                                 // 941
                                                                                                                       // 942
    limit_to : function (val, min, max) {                                                                              // 943
      return Math.min(Math.max(val, min), max);                                                                        // 944
    },                                                                                                                 // 945
                                                                                                                       // 946
    initialize_settings : function (handle) {                                                                          // 947
      var settings = $.extend({}, this.settings, this.data_options($(handle).parent())),                               // 948
          decimal_places_match_result;                                                                                 // 949
                                                                                                                       // 950
      if (settings.precision === null) {                                                                               // 951
        decimal_places_match_result = ('' + settings.step).match(/\.([\d]*)/);                                         // 952
        settings.precision = decimal_places_match_result && decimal_places_match_result[1] ? decimal_places_match_result[1].length : 0;
      }                                                                                                                // 954
                                                                                                                       // 955
      if (settings.vertical) {                                                                                         // 956
        $.data(handle, 'bar_o', $(handle).parent().offset().top);                                                      // 957
        $.data(handle, 'bar_l', $(handle).parent().outerHeight());                                                     // 958
        $.data(handle, 'handle_o', $(handle).offset().top);                                                            // 959
        $.data(handle, 'handle_l', $(handle).outerHeight());                                                           // 960
      } else {                                                                                                         // 961
        $.data(handle, 'bar_o', $(handle).parent().offset().left);                                                     // 962
        $.data(handle, 'bar_l', $(handle).parent().outerWidth());                                                      // 963
        $.data(handle, 'handle_o', $(handle).offset().left);                                                           // 964
        $.data(handle, 'handle_l', $(handle).outerWidth());                                                            // 965
      }                                                                                                                // 966
                                                                                                                       // 967
      $.data(handle, 'bar', $(handle).parent());                                                                       // 968
      return $.data(handle, 'settings', settings);                                                                     // 969
    },                                                                                                                 // 970
                                                                                                                       // 971
    set_initial_position : function ($ele) {                                                                           // 972
      var settings = $.data($ele.children('.range-slider-handle')[0], 'settings'),                                     // 973
          initial = ((typeof settings.initial == 'number' && !isNaN(settings.initial)) ? settings.initial : Math.floor((settings.end - settings.start) * 0.5 / settings.step) * settings.step + settings.start),
          $handle = $ele.children('.range-slider-handle');                                                             // 975
      this.set_ui($handle, initial);                                                                                   // 976
    },                                                                                                                 // 977
                                                                                                                       // 978
    set_value : function (value) {                                                                                     // 979
      var self = this;                                                                                                 // 980
      $('[' + self.attr_name() + ']', this.scope).each(function () {                                                   // 981
        $(this).attr(self.attr_name(), value);                                                                         // 982
      });                                                                                                              // 983
      if (!!$(this.scope).attr(self.attr_name())) {                                                                    // 984
        $(this.scope).attr(self.attr_name(), value);                                                                   // 985
      }                                                                                                                // 986
      self.reflow();                                                                                                   // 987
    },                                                                                                                 // 988
                                                                                                                       // 989
    reflow : function () {                                                                                             // 990
      var self = this;                                                                                                 // 991
      self.S('[' + this.attr_name() + ']').each(function () {                                                          // 992
        var handle = $(this).children('.range-slider-handle')[0],                                                      // 993
            val = $(this).attr(self.attr_name());                                                                      // 994
        self.initialize_settings(handle);                                                                              // 995
                                                                                                                       // 996
        if (val) {                                                                                                     // 997
          self.set_ui($(handle), parseFloat(val));                                                                     // 998
        } else {                                                                                                       // 999
          self.set_initial_position($(this));                                                                          // 1000
        }                                                                                                              // 1001
      });                                                                                                              // 1002
    }                                                                                                                  // 1003
  };                                                                                                                   // 1004
                                                                                                                       // 1005
}(jQuery, window, window.document));                                                                                   // 1006
;(function ($, window, document, undefined) {                                                                          // 1007
  'use strict';                                                                                                        // 1008
                                                                                                                       // 1009
  var Modernizr = Modernizr || false;                                                                                  // 1010
                                                                                                                       // 1011
  Foundation.libs.joyride = {                                                                                          // 1012
    name : 'joyride',                                                                                                  // 1013
                                                                                                                       // 1014
    version : '5.5.2',                                                                                                 // 1015
                                                                                                                       // 1016
    defaults : {                                                                                                       // 1017
      expose                   : false,     // turn on or off the expose feature                                       // 1018
      modal                    : true,      // Whether to cover page with modal during the tour                        // 1019
      keyboard                 : true,      // enable left, right and esc keystrokes                                   // 1020
      tip_location             : 'bottom',  // 'top' or 'bottom' in relation to parent                                 // 1021
      nub_position             : 'auto',    // override on a per tooltip bases                                         // 1022
      scroll_speed             : 1500,      // Page scrolling speed in milliseconds, 0 = no scroll animation           // 1023
      scroll_animation         : 'linear',  // supports 'swing' and 'linear', extend with jQuery UI.                   // 1024
      timer                    : 0,         // 0 = no timer , all other numbers = timer in milliseconds                // 1025
      start_timer_on_click     : true,      // true or false - true requires clicking the first button start the timer // 1026
      start_offset             : 0,         // the index of the tooltip you want to start on (index of the li)         // 1027
      next_button              : true,      // true or false to control whether a next button is used                  // 1028
      prev_button              : true,      // true or false to control whether a prev button is used                  // 1029
      tip_animation            : 'fade',    // 'pop' or 'fade' in each tip                                             // 1030
      pause_after              : [],        // array of indexes where to pause the tour after                          // 1031
      exposed                  : [],        // array of expose elements                                                // 1032
      tip_animation_fade_speed : 300,       // when tipAnimation = 'fade' this is speed in milliseconds for the transition
      cookie_monster           : false,     // true or false to control whether cookies are used                       // 1034
      cookie_name              : 'joyride', // Name the cookie you'll use                                              // 1035
      cookie_domain            : false,     // Will this cookie be attached to a domain, ie. '.notableapp.com'         // 1036
      cookie_expires           : 365,       // set when you would like the cookie to expire.                           // 1037
      tip_container            : 'body',    // Where will the tip be attached                                          // 1038
      abort_on_close           : true,      // When true, the close event will not fire any callback                   // 1039
      tip_location_patterns    : {                                                                                     // 1040
        top : ['bottom'],                                                                                              // 1041
        bottom : [], // bottom should not need to be repositioned                                                      // 1042
        left : ['right', 'top', 'bottom'],                                                                             // 1043
        right : ['left', 'top', 'bottom']                                                                              // 1044
      },                                                                                                               // 1045
      post_ride_callback     : function () {},    // A method to call once the tour closes (canceled or complete)      // 1046
      post_step_callback     : function () {},    // A method to call after each step                                  // 1047
      pre_step_callback      : function () {},    // A method to call before each step                                 // 1048
      pre_ride_callback      : function () {},    // A method to call before the tour starts (passed index, tip, and cloned exposed element)
      post_expose_callback   : function () {},    // A method to call after an element has been exposed                // 1050
      template : { // HTML segments for tip layout                                                                     // 1051
        link          : '<a href="#close" class="joyride-close-tip">&times;</a>',                                      // 1052
        timer         : '<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',
        tip           : '<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',                      // 1054
        wrapper       : '<div class="joyride-content-wrapper"></div>',                                                 // 1055
        button        : '<a href="#" class="small button joyride-next-tip"></a>',                                      // 1056
        prev_button   : '<a href="#" class="small button joyride-prev-tip"></a>',                                      // 1057
        modal         : '<div class="joyride-modal-bg"></div>',                                                        // 1058
        expose        : '<div class="joyride-expose-wrapper"></div>',                                                  // 1059
        expose_cover  : '<div class="joyride-expose-cover"></div>'                                                     // 1060
      },                                                                                                               // 1061
      expose_add_class : '' // One or more space-separated class names to be added to exposed element                  // 1062
    },                                                                                                                 // 1063
                                                                                                                       // 1064
    init : function (scope, method, options) {                                                                         // 1065
      Foundation.inherit(this, 'throttle random_str');                                                                 // 1066
                                                                                                                       // 1067
      this.settings = this.settings || $.extend({}, this.defaults, (options || method));                               // 1068
                                                                                                                       // 1069
      this.bindings(method, options)                                                                                   // 1070
    },                                                                                                                 // 1071
                                                                                                                       // 1072
    go_next : function () {                                                                                            // 1073
      if (this.settings.$li.next().length < 1) {                                                                       // 1074
        this.end();                                                                                                    // 1075
      } else if (this.settings.timer > 0) {                                                                            // 1076
        clearTimeout(this.settings.automate);                                                                          // 1077
        this.hide();                                                                                                   // 1078
        this.show();                                                                                                   // 1079
        this.startTimer();                                                                                             // 1080
      } else {                                                                                                         // 1081
        this.hide();                                                                                                   // 1082
        this.show();                                                                                                   // 1083
      }                                                                                                                // 1084
    },                                                                                                                 // 1085
                                                                                                                       // 1086
    go_prev : function () {                                                                                            // 1087
      if (this.settings.$li.prev().length < 1) {                                                                       // 1088
        // Do nothing if there are no prev element                                                                     // 1089
      } else if (this.settings.timer > 0) {                                                                            // 1090
        clearTimeout(this.settings.automate);                                                                          // 1091
        this.hide();                                                                                                   // 1092
        this.show(null, true);                                                                                         // 1093
        this.startTimer();                                                                                             // 1094
      } else {                                                                                                         // 1095
        this.hide();                                                                                                   // 1096
        this.show(null, true);                                                                                         // 1097
      }                                                                                                                // 1098
    },                                                                                                                 // 1099
                                                                                                                       // 1100
    events : function () {                                                                                             // 1101
      var self = this;                                                                                                 // 1102
                                                                                                                       // 1103
      $(this.scope)                                                                                                    // 1104
        .off('.joyride')                                                                                               // 1105
        .on('click.fndtn.joyride', '.joyride-next-tip, .joyride-modal-bg', function (e) {                              // 1106
          e.preventDefault();                                                                                          // 1107
          this.go_next()                                                                                               // 1108
        }.bind(this))                                                                                                  // 1109
        .on('click.fndtn.joyride', '.joyride-prev-tip', function (e) {                                                 // 1110
          e.preventDefault();                                                                                          // 1111
          this.go_prev();                                                                                              // 1112
        }.bind(this))                                                                                                  // 1113
                                                                                                                       // 1114
        .on('click.fndtn.joyride', '.joyride-close-tip', function (e) {                                                // 1115
          e.preventDefault();                                                                                          // 1116
          this.end(this.settings.abort_on_close);                                                                      // 1117
        }.bind(this))                                                                                                  // 1118
                                                                                                                       // 1119
        .on('keyup.fndtn.joyride', function (e) {                                                                      // 1120
          // Don't do anything if keystrokes are disabled                                                              // 1121
          // or if the joyride is not being shown                                                                      // 1122
          if (!this.settings.keyboard || !this.settings.riding) {                                                      // 1123
            return;                                                                                                    // 1124
          }                                                                                                            // 1125
                                                                                                                       // 1126
          switch (e.which) {                                                                                           // 1127
            case 39: // right arrow                                                                                    // 1128
              e.preventDefault();                                                                                      // 1129
              this.go_next();                                                                                          // 1130
              break;                                                                                                   // 1131
            case 37: // left arrow                                                                                     // 1132
              e.preventDefault();                                                                                      // 1133
              this.go_prev();                                                                                          // 1134
              break;                                                                                                   // 1135
            case 27: // escape                                                                                         // 1136
              e.preventDefault();                                                                                      // 1137
              this.end(this.settings.abort_on_close);                                                                  // 1138
          }                                                                                                            // 1139
        }.bind(this));                                                                                                 // 1140
                                                                                                                       // 1141
      $(window)                                                                                                        // 1142
        .off('.joyride')                                                                                               // 1143
        .on('resize.fndtn.joyride', self.throttle(function () {                                                        // 1144
          if ($('[' + self.attr_name() + ']').length > 0 && self.settings.$next_tip && self.settings.riding) {         // 1145
            if (self.settings.exposed.length > 0) {                                                                    // 1146
              var $els = $(self.settings.exposed);                                                                     // 1147
                                                                                                                       // 1148
              $els.each(function () {                                                                                  // 1149
                var $this = $(this);                                                                                   // 1150
                self.un_expose($this);                                                                                 // 1151
                self.expose($this);                                                                                    // 1152
              });                                                                                                      // 1153
            }                                                                                                          // 1154
                                                                                                                       // 1155
            if (self.is_phone()) {                                                                                     // 1156
              self.pos_phone();                                                                                        // 1157
            } else {                                                                                                   // 1158
              self.pos_default(false);                                                                                 // 1159
            }                                                                                                          // 1160
          }                                                                                                            // 1161
        }, 100));                                                                                                      // 1162
    },                                                                                                                 // 1163
                                                                                                                       // 1164
    start : function () {                                                                                              // 1165
      var self = this,                                                                                                 // 1166
          $this = $('[' + this.attr_name() + ']', this.scope),                                                         // 1167
          integer_settings = ['timer', 'scrollSpeed', 'startOffset', 'tipAnimationFadeSpeed', 'cookieExpires'],        // 1168
          int_settings_count = integer_settings.length;                                                                // 1169
                                                                                                                       // 1170
      if (!$this.length > 0) {                                                                                         // 1171
        return;                                                                                                        // 1172
      }                                                                                                                // 1173
                                                                                                                       // 1174
      if (!this.settings.init) {                                                                                       // 1175
        this.events();                                                                                                 // 1176
      }                                                                                                                // 1177
                                                                                                                       // 1178
      this.settings = $this.data(this.attr_name(true) + '-init');                                                      // 1179
                                                                                                                       // 1180
      // non configureable settings                                                                                    // 1181
      this.settings.$content_el = $this;                                                                               // 1182
      this.settings.$body = $(this.settings.tip_container);                                                            // 1183
      this.settings.body_offset = $(this.settings.tip_container).position();                                           // 1184
      this.settings.$tip_content = this.settings.$content_el.find('> li');                                             // 1185
      this.settings.paused = false;                                                                                    // 1186
      this.settings.attempts = 0;                                                                                      // 1187
      this.settings.riding = true;                                                                                     // 1188
                                                                                                                       // 1189
      // can we create cookies?                                                                                        // 1190
      if (typeof $.cookie !== 'function') {                                                                            // 1191
        this.settings.cookie_monster = false;                                                                          // 1192
      }                                                                                                                // 1193
                                                                                                                       // 1194
      // generate the tips and insert into dom.                                                                        // 1195
      if (!this.settings.cookie_monster || this.settings.cookie_monster && !$.cookie(this.settings.cookie_name)) {     // 1196
        this.settings.$tip_content.each(function (index) {                                                             // 1197
          var $this = $(this);                                                                                         // 1198
          this.settings = $.extend({}, self.defaults, self.data_options($this));                                       // 1199
                                                                                                                       // 1200
          // Make sure that settings parsed from data_options are integers where necessary                             // 1201
          var i = int_settings_count;                                                                                  // 1202
          while (i--) {                                                                                                // 1203
            self.settings[integer_settings[i]] = parseInt(self.settings[integer_settings[i]], 10);                     // 1204
          }                                                                                                            // 1205
          self.create({$li : $this, index : index});                                                                   // 1206
        });                                                                                                            // 1207
                                                                                                                       // 1208
        // show first tip                                                                                              // 1209
        if (!this.settings.start_timer_on_click && this.settings.timer > 0) {                                          // 1210
          this.show('init');                                                                                           // 1211
          this.startTimer();                                                                                           // 1212
        } else {                                                                                                       // 1213
          this.show('init');                                                                                           // 1214
        }                                                                                                              // 1215
                                                                                                                       // 1216
      }                                                                                                                // 1217
    },                                                                                                                 // 1218
                                                                                                                       // 1219
    resume : function () {                                                                                             // 1220
      this.set_li();                                                                                                   // 1221
      this.show();                                                                                                     // 1222
    },                                                                                                                 // 1223
                                                                                                                       // 1224
    tip_template : function (opts) {                                                                                   // 1225
      var $blank, content;                                                                                             // 1226
                                                                                                                       // 1227
      opts.tip_class = opts.tip_class || '';                                                                           // 1228
                                                                                                                       // 1229
      $blank = $(this.settings.template.tip).addClass(opts.tip_class);                                                 // 1230
      content = $.trim($(opts.li).html()) +                                                                            // 1231
        this.prev_button_text(opts.prev_button_text, opts.index) +                                                     // 1232
        this.button_text(opts.button_text) +                                                                           // 1233
        this.settings.template.link +                                                                                  // 1234
        this.timer_instance(opts.index);                                                                               // 1235
                                                                                                                       // 1236
      $blank.append($(this.settings.template.wrapper));                                                                // 1237
      $blank.first().attr(this.add_namespace('data-index'), opts.index);                                               // 1238
      $('.joyride-content-wrapper', $blank).append(content);                                                           // 1239
                                                                                                                       // 1240
      return $blank[0];                                                                                                // 1241
    },                                                                                                                 // 1242
                                                                                                                       // 1243
    timer_instance : function (index) {                                                                                // 1244
      var txt;                                                                                                         // 1245
                                                                                                                       // 1246
      if ((index === 0 && this.settings.start_timer_on_click && this.settings.timer > 0) || this.settings.timer === 0) {
        txt = '';                                                                                                      // 1248
      } else {                                                                                                         // 1249
        txt = $(this.settings.template.timer)[0].outerHTML;                                                            // 1250
      }                                                                                                                // 1251
      return txt;                                                                                                      // 1252
    },                                                                                                                 // 1253
                                                                                                                       // 1254
    button_text : function (txt) {                                                                                     // 1255
      if (this.settings.tip_settings.next_button) {                                                                    // 1256
        txt = $.trim(txt) || 'Next';                                                                                   // 1257
        txt = $(this.settings.template.button).append(txt)[0].outerHTML;                                               // 1258
      } else {                                                                                                         // 1259
        txt = '';                                                                                                      // 1260
      }                                                                                                                // 1261
      return txt;                                                                                                      // 1262
    },                                                                                                                 // 1263
                                                                                                                       // 1264
    prev_button_text : function (txt, idx) {                                                                           // 1265
      if (this.settings.tip_settings.prev_button) {                                                                    // 1266
        txt = $.trim(txt) || 'Previous';                                                                               // 1267
                                                                                                                       // 1268
        // Add the disabled class to the button if it's the first element                                              // 1269
        if (idx == 0) {                                                                                                // 1270
          txt = $(this.settings.template.prev_button).append(txt).addClass('disabled')[0].outerHTML;                   // 1271
        } else {                                                                                                       // 1272
          txt = $(this.settings.template.prev_button).append(txt)[0].outerHTML;                                        // 1273
        }                                                                                                              // 1274
      } else {                                                                                                         // 1275
        txt = '';                                                                                                      // 1276
      }                                                                                                                // 1277
      return txt;                                                                                                      // 1278
    },                                                                                                                 // 1279
                                                                                                                       // 1280
    create : function (opts) {                                                                                         // 1281
      this.settings.tip_settings = $.extend({}, this.settings, this.data_options(opts.$li));                           // 1282
      var buttonText = opts.$li.attr(this.add_namespace('data-button')) || opts.$li.attr(this.add_namespace('data-text')),
          prevButtonText = opts.$li.attr(this.add_namespace('data-button-prev')) || opts.$li.attr(this.add_namespace('data-prev-text')),
        tipClass = opts.$li.attr('class'),                                                                             // 1285
        $tip_content = $(this.tip_template({                                                                           // 1286
          tip_class : tipClass,                                                                                        // 1287
          index : opts.index,                                                                                          // 1288
          button_text : buttonText,                                                                                    // 1289
          prev_button_text : prevButtonText,                                                                           // 1290
          li : opts.$li                                                                                                // 1291
        }));                                                                                                           // 1292
                                                                                                                       // 1293
      $(this.settings.tip_container).append($tip_content);                                                             // 1294
    },                                                                                                                 // 1295
                                                                                                                       // 1296
    show : function (init, is_prev) {                                                                                  // 1297
      var $timer = null;                                                                                               // 1298
                                                                                                                       // 1299
      // are we paused?                                                                                                // 1300
      if (this.settings.$li === undefined || ($.inArray(this.settings.$li.index(), this.settings.pause_after) === -1)) {
                                                                                                                       // 1302
        // don't go to the next li if the tour was paused                                                              // 1303
        if (this.settings.paused) {                                                                                    // 1304
          this.settings.paused = false;                                                                                // 1305
        } else {                                                                                                       // 1306
          this.set_li(init, is_prev);                                                                                  // 1307
        }                                                                                                              // 1308
                                                                                                                       // 1309
        this.settings.attempts = 0;                                                                                    // 1310
                                                                                                                       // 1311
        if (this.settings.$li.length && this.settings.$target.length > 0) {                                            // 1312
          if (init) { //run when we first start                                                                        // 1313
            this.settings.pre_ride_callback(this.settings.$li.index(), this.settings.$next_tip);                       // 1314
            if (this.settings.modal) {                                                                                 // 1315
              this.show_modal();                                                                                       // 1316
            }                                                                                                          // 1317
          }                                                                                                            // 1318
                                                                                                                       // 1319
          this.settings.pre_step_callback(this.settings.$li.index(), this.settings.$next_tip);                         // 1320
                                                                                                                       // 1321
          if (this.settings.modal && this.settings.expose) {                                                           // 1322
            this.expose();                                                                                             // 1323
          }                                                                                                            // 1324
                                                                                                                       // 1325
          this.settings.tip_settings = $.extend({}, this.settings, this.data_options(this.settings.$li));              // 1326
                                                                                                                       // 1327
          this.settings.timer = parseInt(this.settings.timer, 10);                                                     // 1328
                                                                                                                       // 1329
          this.settings.tip_settings.tip_location_pattern = this.settings.tip_location_patterns[this.settings.tip_settings.tip_location];
                                                                                                                       // 1331
          // scroll and hide bg if not modal                                                                           // 1332
          if (!/body/i.test(this.settings.$target.selector)) {                                                         // 1333
            var joyridemodalbg = $('.joyride-modal-bg');                                                               // 1334
            if (/pop/i.test(this.settings.tipAnimation)) {                                                             // 1335
                joyridemodalbg.hide();                                                                                 // 1336
            } else {                                                                                                   // 1337
                joyridemodalbg.fadeOut(this.settings.tipAnimationFadeSpeed);                                           // 1338
            }                                                                                                          // 1339
            this.scroll_to();                                                                                          // 1340
          }                                                                                                            // 1341
                                                                                                                       // 1342
          if (this.is_phone()) {                                                                                       // 1343
            this.pos_phone(true);                                                                                      // 1344
          } else {                                                                                                     // 1345
            this.pos_default(true);                                                                                    // 1346
          }                                                                                                            // 1347
                                                                                                                       // 1348
          $timer = this.settings.$next_tip.find('.joyride-timer-indicator');                                           // 1349
                                                                                                                       // 1350
          if (/pop/i.test(this.settings.tip_animation)) {                                                              // 1351
                                                                                                                       // 1352
            $timer.width(0);                                                                                           // 1353
                                                                                                                       // 1354
            if (this.settings.timer > 0) {                                                                             // 1355
                                                                                                                       // 1356
              this.settings.$next_tip.show();                                                                          // 1357
                                                                                                                       // 1358
              setTimeout(function () {                                                                                 // 1359
                $timer.animate({                                                                                       // 1360
                  width : $timer.parent().width()                                                                      // 1361
                }, this.settings.timer, 'linear');                                                                     // 1362
              }.bind(this), this.settings.tip_animation_fade_speed);                                                   // 1363
                                                                                                                       // 1364
            } else {                                                                                                   // 1365
              this.settings.$next_tip.show();                                                                          // 1366
                                                                                                                       // 1367
            }                                                                                                          // 1368
                                                                                                                       // 1369
          } else if (/fade/i.test(this.settings.tip_animation)) {                                                      // 1370
                                                                                                                       // 1371
            $timer.width(0);                                                                                           // 1372
                                                                                                                       // 1373
            if (this.settings.timer > 0) {                                                                             // 1374
                                                                                                                       // 1375
              this.settings.$next_tip                                                                                  // 1376
                .fadeIn(this.settings.tip_animation_fade_speed)                                                        // 1377
                .show();                                                                                               // 1378
                                                                                                                       // 1379
              setTimeout(function () {                                                                                 // 1380
                $timer.animate({                                                                                       // 1381
                  width : $timer.parent().width()                                                                      // 1382
                }, this.settings.timer, 'linear');                                                                     // 1383
              }.bind(this), this.settings.tip_animation_fade_speed);                                                   // 1384
                                                                                                                       // 1385
            } else {                                                                                                   // 1386
              this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed);                                  // 1387
            }                                                                                                          // 1388
          }                                                                                                            // 1389
                                                                                                                       // 1390
          this.settings.$current_tip = this.settings.$next_tip;                                                        // 1391
                                                                                                                       // 1392
        // skip non-existant targets                                                                                   // 1393
        } else if (this.settings.$li && this.settings.$target.length < 1) {                                            // 1394
                                                                                                                       // 1395
          this.show(init, is_prev);                                                                                    // 1396
                                                                                                                       // 1397
        } else {                                                                                                       // 1398
                                                                                                                       // 1399
          this.end();                                                                                                  // 1400
                                                                                                                       // 1401
        }                                                                                                              // 1402
      } else {                                                                                                         // 1403
                                                                                                                       // 1404
        this.settings.paused = true;                                                                                   // 1405
                                                                                                                       // 1406
      }                                                                                                                // 1407
                                                                                                                       // 1408
    },                                                                                                                 // 1409
                                                                                                                       // 1410
    is_phone : function () {                                                                                           // 1411
      return matchMedia(Foundation.media_queries.small).matches &&                                                     // 1412
        !matchMedia(Foundation.media_queries.medium).matches;                                                          // 1413
    },                                                                                                                 // 1414
                                                                                                                       // 1415
    hide : function () {                                                                                               // 1416
      if (this.settings.modal && this.settings.expose) {                                                               // 1417
        this.un_expose();                                                                                              // 1418
      }                                                                                                                // 1419
                                                                                                                       // 1420
      if (!this.settings.modal) {                                                                                      // 1421
        $('.joyride-modal-bg').hide();                                                                                 // 1422
      }                                                                                                                // 1423
                                                                                                                       // 1424
      // Prevent scroll bouncing...wait to remove from layout                                                          // 1425
      this.settings.$current_tip.css('visibility', 'hidden');                                                          // 1426
      setTimeout($.proxy(function () {                                                                                 // 1427
        this.hide();                                                                                                   // 1428
        this.css('visibility', 'visible');                                                                             // 1429
      }, this.settings.$current_tip), 0);                                                                              // 1430
      this.settings.post_step_callback(this.settings.$li.index(),                                                      // 1431
        this.settings.$current_tip);                                                                                   // 1432
    },                                                                                                                 // 1433
                                                                                                                       // 1434
    set_li : function (init, is_prev) {                                                                                // 1435
      if (init) {                                                                                                      // 1436
        this.settings.$li = this.settings.$tip_content.eq(this.settings.start_offset);                                 // 1437
        this.set_next_tip();                                                                                           // 1438
        this.settings.$current_tip = this.settings.$next_tip;                                                          // 1439
      } else {                                                                                                         // 1440
        if (is_prev) {                                                                                                 // 1441
          this.settings.$li = this.settings.$li.prev();                                                                // 1442
        } else {                                                                                                       // 1443
          this.settings.$li = this.settings.$li.next();                                                                // 1444
        }                                                                                                              // 1445
        this.set_next_tip();                                                                                           // 1446
      }                                                                                                                // 1447
                                                                                                                       // 1448
      this.set_target();                                                                                               // 1449
    },                                                                                                                 // 1450
                                                                                                                       // 1451
    set_next_tip : function () {                                                                                       // 1452
      this.settings.$next_tip = $('.joyride-tip-guide').eq(this.settings.$li.index());                                 // 1453
      this.settings.$next_tip.data('closed', '');                                                                      // 1454
    },                                                                                                                 // 1455
                                                                                                                       // 1456
    set_target : function () {                                                                                         // 1457
      var cl = this.settings.$li.attr(this.add_namespace('data-class')),                                               // 1458
          id = this.settings.$li.attr(this.add_namespace('data-id')),                                                  // 1459
          $sel = function () {                                                                                         // 1460
            if (id) {                                                                                                  // 1461
              return $(document.getElementById(id));                                                                   // 1462
            } else if (cl) {                                                                                           // 1463
              return $('.' + cl).first();                                                                              // 1464
            } else {                                                                                                   // 1465
              return $('body');                                                                                        // 1466
            }                                                                                                          // 1467
          };                                                                                                           // 1468
                                                                                                                       // 1469
      this.settings.$target = $sel();                                                                                  // 1470
    },                                                                                                                 // 1471
                                                                                                                       // 1472
    scroll_to : function () {                                                                                          // 1473
      var window_half, tipOffset;                                                                                      // 1474
                                                                                                                       // 1475
      window_half = $(window).height() / 2;                                                                            // 1476
      tipOffset = Math.ceil(this.settings.$target.offset().top - window_half + this.settings.$next_tip.outerHeight()); // 1477
                                                                                                                       // 1478
      if (tipOffset != 0) {                                                                                            // 1479
        $('html, body').stop().animate({                                                                               // 1480
          scrollTop : tipOffset                                                                                        // 1481
        }, this.settings.scroll_speed, 'swing');                                                                       // 1482
      }                                                                                                                // 1483
    },                                                                                                                 // 1484
                                                                                                                       // 1485
    paused : function () {                                                                                             // 1486
      return ($.inArray((this.settings.$li.index() + 1), this.settings.pause_after) === -1);                           // 1487
    },                                                                                                                 // 1488
                                                                                                                       // 1489
    restart : function () {                                                                                            // 1490
      this.hide();                                                                                                     // 1491
      this.settings.$li = undefined;                                                                                   // 1492
      this.show('init');                                                                                               // 1493
    },                                                                                                                 // 1494
                                                                                                                       // 1495
    pos_default : function (init) {                                                                                    // 1496
      var $nub = this.settings.$next_tip.find('.joyride-nub'),                                                         // 1497
          nub_width = Math.ceil($nub.outerWidth() / 2),                                                                // 1498
          nub_height = Math.ceil($nub.outerHeight() / 2),                                                              // 1499
          toggle = init || false;                                                                                      // 1500
                                                                                                                       // 1501
      // tip must not be "display: none" to calculate position                                                         // 1502
      if (toggle) {                                                                                                    // 1503
        this.settings.$next_tip.css('visibility', 'hidden');                                                           // 1504
        this.settings.$next_tip.show();                                                                                // 1505
      }                                                                                                                // 1506
                                                                                                                       // 1507
      if (!/body/i.test(this.settings.$target.selector)) {                                                             // 1508
          var topAdjustment = this.settings.tip_settings.tipAdjustmentY ? parseInt(this.settings.tip_settings.tipAdjustmentY) : 0,
              leftAdjustment = this.settings.tip_settings.tipAdjustmentX ? parseInt(this.settings.tip_settings.tipAdjustmentX) : 0;
                                                                                                                       // 1511
          if (this.bottom()) {                                                                                         // 1512
            if (this.rtl) {                                                                                            // 1513
              this.settings.$next_tip.css({                                                                            // 1514
                top : (this.settings.$target.offset().top + nub_height + this.settings.$target.outerHeight() + topAdjustment),
                left : this.settings.$target.offset().left + this.settings.$target.outerWidth() - this.settings.$next_tip.outerWidth() + leftAdjustment});
            } else {                                                                                                   // 1517
              this.settings.$next_tip.css({                                                                            // 1518
                top : (this.settings.$target.offset().top + nub_height + this.settings.$target.outerHeight() + topAdjustment),
                left : this.settings.$target.offset().left + leftAdjustment});                                         // 1520
            }                                                                                                          // 1521
                                                                                                                       // 1522
            this.nub_position($nub, this.settings.tip_settings.nub_position, 'top');                                   // 1523
                                                                                                                       // 1524
          } else if (this.top()) {                                                                                     // 1525
            if (this.rtl) {                                                                                            // 1526
              this.settings.$next_tip.css({                                                                            // 1527
                top : (this.settings.$target.offset().top - this.settings.$next_tip.outerHeight() - nub_height + topAdjustment),
                left : this.settings.$target.offset().left + this.settings.$target.outerWidth() - this.settings.$next_tip.outerWidth()});
            } else {                                                                                                   // 1530
              this.settings.$next_tip.css({                                                                            // 1531
                top : (this.settings.$target.offset().top - this.settings.$next_tip.outerHeight() - nub_height + topAdjustment),
                left : this.settings.$target.offset().left + leftAdjustment});                                         // 1533
            }                                                                                                          // 1534
                                                                                                                       // 1535
            this.nub_position($nub, this.settings.tip_settings.nub_position, 'bottom');                                // 1536
                                                                                                                       // 1537
          } else if (this.right()) {                                                                                   // 1538
                                                                                                                       // 1539
            this.settings.$next_tip.css({                                                                              // 1540
              top : this.settings.$target.offset().top + topAdjustment,                                                // 1541
              left : (this.settings.$target.outerWidth() + this.settings.$target.offset().left + nub_width + leftAdjustment)});
                                                                                                                       // 1543
            this.nub_position($nub, this.settings.tip_settings.nub_position, 'left');                                  // 1544
                                                                                                                       // 1545
          } else if (this.left()) {                                                                                    // 1546
                                                                                                                       // 1547
            this.settings.$next_tip.css({                                                                              // 1548
              top : this.settings.$target.offset().top + topAdjustment,                                                // 1549
              left : (this.settings.$target.offset().left - this.settings.$next_tip.outerWidth() - nub_width + leftAdjustment)});
                                                                                                                       // 1551
            this.nub_position($nub, this.settings.tip_settings.nub_position, 'right');                                 // 1552
                                                                                                                       // 1553
          }                                                                                                            // 1554
                                                                                                                       // 1555
          if (!this.visible(this.corners(this.settings.$next_tip)) && this.settings.attempts < this.settings.tip_settings.tip_location_pattern.length) {
                                                                                                                       // 1557
            $nub.removeClass('bottom')                                                                                 // 1558
              .removeClass('top')                                                                                      // 1559
              .removeClass('right')                                                                                    // 1560
              .removeClass('left');                                                                                    // 1561
                                                                                                                       // 1562
            this.settings.tip_settings.tip_location = this.settings.tip_settings.tip_location_pattern[this.settings.attempts];
                                                                                                                       // 1564
            this.settings.attempts++;                                                                                  // 1565
                                                                                                                       // 1566
            this.pos_default();                                                                                        // 1567
                                                                                                                       // 1568
          }                                                                                                            // 1569
                                                                                                                       // 1570
      } else if (this.settings.$li.length) {                                                                           // 1571
                                                                                                                       // 1572
        this.pos_modal($nub);                                                                                          // 1573
                                                                                                                       // 1574
      }                                                                                                                // 1575
                                                                                                                       // 1576
      if (toggle) {                                                                                                    // 1577
        this.settings.$next_tip.hide();                                                                                // 1578
        this.settings.$next_tip.css('visibility', 'visible');                                                          // 1579
      }                                                                                                                // 1580
                                                                                                                       // 1581
    },                                                                                                                 // 1582
                                                                                                                       // 1583
    pos_phone : function (init) {                                                                                      // 1584
      var tip_height = this.settings.$next_tip.outerHeight(),                                                          // 1585
          tip_offset = this.settings.$next_tip.offset(),                                                               // 1586
          target_height = this.settings.$target.outerHeight(),                                                         // 1587
          $nub = $('.joyride-nub', this.settings.$next_tip),                                                           // 1588
          nub_height = Math.ceil($nub.outerHeight() / 2),                                                              // 1589
          toggle = init || false;                                                                                      // 1590
                                                                                                                       // 1591
      $nub.removeClass('bottom')                                                                                       // 1592
        .removeClass('top')                                                                                            // 1593
        .removeClass('right')                                                                                          // 1594
        .removeClass('left');                                                                                          // 1595
                                                                                                                       // 1596
      if (toggle) {                                                                                                    // 1597
        this.settings.$next_tip.css('visibility', 'hidden');                                                           // 1598
        this.settings.$next_tip.show();                                                                                // 1599
      }                                                                                                                // 1600
                                                                                                                       // 1601
      if (!/body/i.test(this.settings.$target.selector)) {                                                             // 1602
                                                                                                                       // 1603
        if (this.top()) {                                                                                              // 1604
                                                                                                                       // 1605
            this.settings.$next_tip.offset({top : this.settings.$target.offset().top - tip_height - nub_height});      // 1606
            $nub.addClass('bottom');                                                                                   // 1607
                                                                                                                       // 1608
        } else {                                                                                                       // 1609
                                                                                                                       // 1610
          this.settings.$next_tip.offset({top : this.settings.$target.offset().top + target_height + nub_height});     // 1611
          $nub.addClass('top');                                                                                        // 1612
                                                                                                                       // 1613
        }                                                                                                              // 1614
                                                                                                                       // 1615
      } else if (this.settings.$li.length) {                                                                           // 1616
        this.pos_modal($nub);                                                                                          // 1617
      }                                                                                                                // 1618
                                                                                                                       // 1619
      if (toggle) {                                                                                                    // 1620
        this.settings.$next_tip.hide();                                                                                // 1621
        this.settings.$next_tip.css('visibility', 'visible');                                                          // 1622
      }                                                                                                                // 1623
    },                                                                                                                 // 1624
                                                                                                                       // 1625
    pos_modal : function ($nub) {                                                                                      // 1626
      this.center();                                                                                                   // 1627
      $nub.hide();                                                                                                     // 1628
                                                                                                                       // 1629
      this.show_modal();                                                                                               // 1630
    },                                                                                                                 // 1631
                                                                                                                       // 1632
    show_modal : function () {                                                                                         // 1633
      if (!this.settings.$next_tip.data('closed')) {                                                                   // 1634
        var joyridemodalbg =  $('.joyride-modal-bg');                                                                  // 1635
        if (joyridemodalbg.length < 1) {                                                                               // 1636
          var joyridemodalbg = $(this.settings.template.modal);                                                        // 1637
          joyridemodalbg.appendTo('body');                                                                             // 1638
        }                                                                                                              // 1639
                                                                                                                       // 1640
        if (/pop/i.test(this.settings.tip_animation)) {                                                                // 1641
            joyridemodalbg.show();                                                                                     // 1642
        } else {                                                                                                       // 1643
            joyridemodalbg.fadeIn(this.settings.tip_animation_fade_speed);                                             // 1644
        }                                                                                                              // 1645
      }                                                                                                                // 1646
    },                                                                                                                 // 1647
                                                                                                                       // 1648
    expose : function () {                                                                                             // 1649
      var expose,                                                                                                      // 1650
          exposeCover,                                                                                                 // 1651
          el,                                                                                                          // 1652
          origCSS,                                                                                                     // 1653
          origClasses,                                                                                                 // 1654
          randId = 'expose-' + this.random_str(6);                                                                     // 1655
                                                                                                                       // 1656
      if (arguments.length > 0 && arguments[0] instanceof $) {                                                         // 1657
        el = arguments[0];                                                                                             // 1658
      } else if (this.settings.$target && !/body/i.test(this.settings.$target.selector)) {                             // 1659
        el = this.settings.$target;                                                                                    // 1660
      } else {                                                                                                         // 1661
        return false;                                                                                                  // 1662
      }                                                                                                                // 1663
                                                                                                                       // 1664
      if (el.length < 1) {                                                                                             // 1665
        if (window.console) {                                                                                          // 1666
          console.error('element not valid', el);                                                                      // 1667
        }                                                                                                              // 1668
        return false;                                                                                                  // 1669
      }                                                                                                                // 1670
                                                                                                                       // 1671
      expose = $(this.settings.template.expose);                                                                       // 1672
      this.settings.$body.append(expose);                                                                              // 1673
      expose.css({                                                                                                     // 1674
        top : el.offset().top,                                                                                         // 1675
        left : el.offset().left,                                                                                       // 1676
        width : el.outerWidth(true),                                                                                   // 1677
        height : el.outerHeight(true)                                                                                  // 1678
      });                                                                                                              // 1679
                                                                                                                       // 1680
      exposeCover = $(this.settings.template.expose_cover);                                                            // 1681
                                                                                                                       // 1682
      origCSS = {                                                                                                      // 1683
        zIndex : el.css('z-index'),                                                                                    // 1684
        position : el.css('position')                                                                                  // 1685
      };                                                                                                               // 1686
                                                                                                                       // 1687
      origClasses = el.attr('class') == null ? '' : el.attr('class');                                                  // 1688
                                                                                                                       // 1689
      el.css('z-index', parseInt(expose.css('z-index')) + 1);                                                          // 1690
                                                                                                                       // 1691
      if (origCSS.position == 'static') {                                                                              // 1692
        el.css('position', 'relative');                                                                                // 1693
      }                                                                                                                // 1694
                                                                                                                       // 1695
      el.data('expose-css', origCSS);                                                                                  // 1696
      el.data('orig-class', origClasses);                                                                              // 1697
      el.attr('class', origClasses + ' ' + this.settings.expose_add_class);                                            // 1698
                                                                                                                       // 1699
      exposeCover.css({                                                                                                // 1700
        top : el.offset().top,                                                                                         // 1701
        left : el.offset().left,                                                                                       // 1702
        width : el.outerWidth(true),                                                                                   // 1703
        height : el.outerHeight(true)                                                                                  // 1704
      });                                                                                                              // 1705
                                                                                                                       // 1706
      if (this.settings.modal) {                                                                                       // 1707
        this.show_modal();                                                                                             // 1708
      }                                                                                                                // 1709
                                                                                                                       // 1710
      this.settings.$body.append(exposeCover);                                                                         // 1711
      expose.addClass(randId);                                                                                         // 1712
      exposeCover.addClass(randId);                                                                                    // 1713
      el.data('expose', randId);                                                                                       // 1714
      this.settings.post_expose_callback(this.settings.$li.index(), this.settings.$next_tip, el);                      // 1715
      this.add_exposed(el);                                                                                            // 1716
    },                                                                                                                 // 1717
                                                                                                                       // 1718
    un_expose : function () {                                                                                          // 1719
      var exposeId,                                                                                                    // 1720
          el,                                                                                                          // 1721
          expose,                                                                                                      // 1722
          origCSS,                                                                                                     // 1723
          origClasses,                                                                                                 // 1724
          clearAll = false;                                                                                            // 1725
                                                                                                                       // 1726
      if (arguments.length > 0 && arguments[0] instanceof $) {                                                         // 1727
        el = arguments[0];                                                                                             // 1728
      } else if (this.settings.$target && !/body/i.test(this.settings.$target.selector)) {                             // 1729
        el = this.settings.$target;                                                                                    // 1730
      } else {                                                                                                         // 1731
        return false;                                                                                                  // 1732
      }                                                                                                                // 1733
                                                                                                                       // 1734
      if (el.length < 1) {                                                                                             // 1735
        if (window.console) {                                                                                          // 1736
          console.error('element not valid', el);                                                                      // 1737
        }                                                                                                              // 1738
        return false;                                                                                                  // 1739
      }                                                                                                                // 1740
                                                                                                                       // 1741
      exposeId = el.data('expose');                                                                                    // 1742
      expose = $('.' + exposeId);                                                                                      // 1743
                                                                                                                       // 1744
      if (arguments.length > 1) {                                                                                      // 1745
        clearAll = arguments[1];                                                                                       // 1746
      }                                                                                                                // 1747
                                                                                                                       // 1748
      if (clearAll === true) {                                                                                         // 1749
        $('.joyride-expose-wrapper,.joyride-expose-cover').remove();                                                   // 1750
      } else {                                                                                                         // 1751
        expose.remove();                                                                                               // 1752
      }                                                                                                                // 1753
                                                                                                                       // 1754
      origCSS = el.data('expose-css');                                                                                 // 1755
                                                                                                                       // 1756
      if (origCSS.zIndex == 'auto') {                                                                                  // 1757
        el.css('z-index', '');                                                                                         // 1758
      } else {                                                                                                         // 1759
        el.css('z-index', origCSS.zIndex);                                                                             // 1760
      }                                                                                                                // 1761
                                                                                                                       // 1762
      if (origCSS.position != el.css('position')) {                                                                    // 1763
        if (origCSS.position == 'static') {// this is default, no need to set it.                                      // 1764
          el.css('position', '');                                                                                      // 1765
        } else {                                                                                                       // 1766
          el.css('position', origCSS.position);                                                                        // 1767
        }                                                                                                              // 1768
      }                                                                                                                // 1769
                                                                                                                       // 1770
      origClasses = el.data('orig-class');                                                                             // 1771
      el.attr('class', origClasses);                                                                                   // 1772
      el.removeData('orig-classes');                                                                                   // 1773
                                                                                                                       // 1774
      el.removeData('expose');                                                                                         // 1775
      el.removeData('expose-z-index');                                                                                 // 1776
      this.remove_exposed(el);                                                                                         // 1777
    },                                                                                                                 // 1778
                                                                                                                       // 1779
    add_exposed : function (el) {                                                                                      // 1780
      this.settings.exposed = this.settings.exposed || [];                                                             // 1781
      if (el instanceof $ || typeof el === 'object') {                                                                 // 1782
        this.settings.exposed.push(el[0]);                                                                             // 1783
      } else if (typeof el == 'string') {                                                                              // 1784
        this.settings.exposed.push(el);                                                                                // 1785
      }                                                                                                                // 1786
    },                                                                                                                 // 1787
                                                                                                                       // 1788
    remove_exposed : function (el) {                                                                                   // 1789
      var search, i;                                                                                                   // 1790
      if (el instanceof $) {                                                                                           // 1791
        search = el[0]                                                                                                 // 1792
      } else if (typeof el == 'string') {                                                                              // 1793
        search = el;                                                                                                   // 1794
      }                                                                                                                // 1795
                                                                                                                       // 1796
      this.settings.exposed = this.settings.exposed || [];                                                             // 1797
      i = this.settings.exposed.length;                                                                                // 1798
                                                                                                                       // 1799
      while (i--) {                                                                                                    // 1800
        if (this.settings.exposed[i] == search) {                                                                      // 1801
          this.settings.exposed.splice(i, 1);                                                                          // 1802
          return;                                                                                                      // 1803
        }                                                                                                              // 1804
      }                                                                                                                // 1805
    },                                                                                                                 // 1806
                                                                                                                       // 1807
    center : function () {                                                                                             // 1808
      var $w = $(window);                                                                                              // 1809
                                                                                                                       // 1810
      this.settings.$next_tip.css({                                                                                    // 1811
        top : ((($w.height() - this.settings.$next_tip.outerHeight()) / 2) + $w.scrollTop()),                          // 1812
        left : ((($w.width() - this.settings.$next_tip.outerWidth()) / 2) + $w.scrollLeft())                           // 1813
      });                                                                                                              // 1814
                                                                                                                       // 1815
      return true;                                                                                                     // 1816
    },                                                                                                                 // 1817
                                                                                                                       // 1818
    bottom : function () {                                                                                             // 1819
      return /bottom/i.test(this.settings.tip_settings.tip_location);                                                  // 1820
    },                                                                                                                 // 1821
                                                                                                                       // 1822
    top : function () {                                                                                                // 1823
      return /top/i.test(this.settings.tip_settings.tip_location);                                                     // 1824
    },                                                                                                                 // 1825
                                                                                                                       // 1826
    right : function () {                                                                                              // 1827
      return /right/i.test(this.settings.tip_settings.tip_location);                                                   // 1828
    },                                                                                                                 // 1829
                                                                                                                       // 1830
    left : function () {                                                                                               // 1831
      return /left/i.test(this.settings.tip_settings.tip_location);                                                    // 1832
    },                                                                                                                 // 1833
                                                                                                                       // 1834
    corners : function (el) {                                                                                          // 1835
      var w = $(window),                                                                                               // 1836
          window_half = w.height() / 2,                                                                                // 1837
          //using this to calculate since scroll may not have finished yet.                                            // 1838
          tipOffset = Math.ceil(this.settings.$target.offset().top - window_half + this.settings.$next_tip.outerHeight()),
          right = w.width() + w.scrollLeft(),                                                                          // 1840
          offsetBottom =  w.height() + tipOffset,                                                                      // 1841
          bottom = w.height() + w.scrollTop(),                                                                         // 1842
          top = w.scrollTop();                                                                                         // 1843
                                                                                                                       // 1844
      if (tipOffset < top) {                                                                                           // 1845
        if (tipOffset < 0) {                                                                                           // 1846
          top = 0;                                                                                                     // 1847
        } else {                                                                                                       // 1848
          top = tipOffset;                                                                                             // 1849
        }                                                                                                              // 1850
      }                                                                                                                // 1851
                                                                                                                       // 1852
      if (offsetBottom > bottom) {                                                                                     // 1853
        bottom = offsetBottom;                                                                                         // 1854
      }                                                                                                                // 1855
                                                                                                                       // 1856
      return [                                                                                                         // 1857
        el.offset().top < top,                                                                                         // 1858
        right < el.offset().left + el.outerWidth(),                                                                    // 1859
        bottom < el.offset().top + el.outerHeight(),                                                                   // 1860
        w.scrollLeft() > el.offset().left                                                                              // 1861
      ];                                                                                                               // 1862
    },                                                                                                                 // 1863
                                                                                                                       // 1864
    visible : function (hidden_corners) {                                                                              // 1865
      var i = hidden_corners.length;                                                                                   // 1866
                                                                                                                       // 1867
      while (i--) {                                                                                                    // 1868
        if (hidden_corners[i]) {                                                                                       // 1869
          return false;                                                                                                // 1870
        }                                                                                                              // 1871
      }                                                                                                                // 1872
                                                                                                                       // 1873
      return true;                                                                                                     // 1874
    },                                                                                                                 // 1875
                                                                                                                       // 1876
    nub_position : function (nub, pos, def) {                                                                          // 1877
      if (pos === 'auto') {                                                                                            // 1878
        nub.addClass(def);                                                                                             // 1879
      } else {                                                                                                         // 1880
        nub.addClass(pos);                                                                                             // 1881
      }                                                                                                                // 1882
    },                                                                                                                 // 1883
                                                                                                                       // 1884
    startTimer : function () {                                                                                         // 1885
      if (this.settings.$li.length) {                                                                                  // 1886
        this.settings.automate = setTimeout(function () {                                                              // 1887
          this.hide();                                                                                                 // 1888
          this.show();                                                                                                 // 1889
          this.startTimer();                                                                                           // 1890
        }.bind(this), this.settings.timer);                                                                            // 1891
      } else {                                                                                                         // 1892
        clearTimeout(this.settings.automate);                                                                          // 1893
      }                                                                                                                // 1894
    },                                                                                                                 // 1895
                                                                                                                       // 1896
    end : function (abort) {                                                                                           // 1897
      if (this.settings.cookie_monster) {                                                                              // 1898
        $.cookie(this.settings.cookie_name, 'ridden', {expires : this.settings.cookie_expires, domain : this.settings.cookie_domain});
      }                                                                                                                // 1900
                                                                                                                       // 1901
      if (this.settings.timer > 0) {                                                                                   // 1902
        clearTimeout(this.settings.automate);                                                                          // 1903
      }                                                                                                                // 1904
                                                                                                                       // 1905
      if (this.settings.modal && this.settings.expose) {                                                               // 1906
        this.un_expose();                                                                                              // 1907
      }                                                                                                                // 1908
                                                                                                                       // 1909
      // Unplug keystrokes listener                                                                                    // 1910
      $(this.scope).off('keyup.joyride')                                                                               // 1911
                                                                                                                       // 1912
      this.settings.$next_tip.data('closed', true);                                                                    // 1913
      this.settings.riding = false;                                                                                    // 1914
                                                                                                                       // 1915
      $('.joyride-modal-bg').hide();                                                                                   // 1916
      this.settings.$current_tip.hide();                                                                               // 1917
                                                                                                                       // 1918
      if (typeof abort === 'undefined' || abort === false) {                                                           // 1919
        this.settings.post_step_callback(this.settings.$li.index(), this.settings.$current_tip);                       // 1920
        this.settings.post_ride_callback(this.settings.$li.index(), this.settings.$current_tip);                       // 1921
      }                                                                                                                // 1922
                                                                                                                       // 1923
      $('.joyride-tip-guide').remove();                                                                                // 1924
    },                                                                                                                 // 1925
                                                                                                                       // 1926
    off : function () {                                                                                                // 1927
      $(this.scope).off('.joyride');                                                                                   // 1928
      $(window).off('.joyride');                                                                                       // 1929
      $('.joyride-close-tip, .joyride-next-tip, .joyride-modal-bg').off('.joyride');                                   // 1930
      $('.joyride-tip-guide, .joyride-modal-bg').remove();                                                             // 1931
      clearTimeout(this.settings.automate);                                                                            // 1932
      this.settings = {};                                                                                              // 1933
    },                                                                                                                 // 1934
                                                                                                                       // 1935
    reflow : function () {}                                                                                            // 1936
  };                                                                                                                   // 1937
}(jQuery, window, window.document));                                                                                   // 1938
;(function ($, window, document, undefined) {                                                                          // 1939
  'use strict';                                                                                                        // 1940
                                                                                                                       // 1941
  Foundation.libs.equalizer = {                                                                                        // 1942
    name : 'equalizer',                                                                                                // 1943
                                                                                                                       // 1944
    version : '5.5.2',                                                                                                 // 1945
                                                                                                                       // 1946
    settings : {                                                                                                       // 1947
      use_tallest : true,                                                                                              // 1948
      before_height_change : $.noop,                                                                                   // 1949
      after_height_change : $.noop,                                                                                    // 1950
      equalize_on_stack : false,                                                                                       // 1951
      act_on_hidden_el: false                                                                                          // 1952
    },                                                                                                                 // 1953
                                                                                                                       // 1954
    init : function (scope, method, options) {                                                                         // 1955
      Foundation.inherit(this, 'image_loaded');                                                                        // 1956
      this.bindings(method, options);                                                                                  // 1957
      this.reflow();                                                                                                   // 1958
    },                                                                                                                 // 1959
                                                                                                                       // 1960
    events : function () {                                                                                             // 1961
      this.S(window).off('.equalizer').on('resize.fndtn.equalizer', function (e) {                                     // 1962
        this.reflow();                                                                                                 // 1963
      }.bind(this));                                                                                                   // 1964
    },                                                                                                                 // 1965
                                                                                                                       // 1966
    equalize : function (equalizer) {                                                                                  // 1967
      var isStacked = false,                                                                                           // 1968
          group = equalizer.data('equalizer'),                                                                         // 1969
          settings = equalizer.data(this.attr_name(true)+'-init') || this.settings,                                    // 1970
          vals,                                                                                                        // 1971
          firstTopOffset;                                                                                              // 1972
                                                                                                                       // 1973
      if (settings.act_on_hidden_el) {                                                                                 // 1974
        vals = group ? equalizer.find('['+this.attr_name()+'-watch="'+group+'"]') : equalizer.find('['+this.attr_name()+'-watch]');
      }                                                                                                                // 1976
      else {                                                                                                           // 1977
        vals = group ? equalizer.find('['+this.attr_name()+'-watch="'+group+'"]:visible') : equalizer.find('['+this.attr_name()+'-watch]:visible');
      }                                                                                                                // 1979
                                                                                                                       // 1980
      if (vals.length === 0) {                                                                                         // 1981
        return;                                                                                                        // 1982
      }                                                                                                                // 1983
                                                                                                                       // 1984
      settings.before_height_change();                                                                                 // 1985
      equalizer.trigger('before-height-change.fndth.equalizer');                                                       // 1986
      vals.height('inherit');                                                                                          // 1987
                                                                                                                       // 1988
      if (settings.equalize_on_stack === false) {                                                                      // 1989
        firstTopOffset = vals.first().offset().top;                                                                    // 1990
        vals.each(function () {                                                                                        // 1991
          if ($(this).offset().top !== firstTopOffset) {                                                               // 1992
            isStacked = true;                                                                                          // 1993
            return false;                                                                                              // 1994
          }                                                                                                            // 1995
        });                                                                                                            // 1996
        if (isStacked) {                                                                                               // 1997
          return;                                                                                                      // 1998
        }                                                                                                              // 1999
      }                                                                                                                // 2000
                                                                                                                       // 2001
      var heights = vals.map(function () { return $(this).outerHeight(false) }).get();                                 // 2002
                                                                                                                       // 2003
      if (settings.use_tallest) {                                                                                      // 2004
        var max = Math.max.apply(null, heights);                                                                       // 2005
        vals.css('height', max);                                                                                       // 2006
      } else {                                                                                                         // 2007
        var min = Math.min.apply(null, heights);                                                                       // 2008
        vals.css('height', min);                                                                                       // 2009
      }                                                                                                                // 2010
                                                                                                                       // 2011
      settings.after_height_change();                                                                                  // 2012
      equalizer.trigger('after-height-change.fndtn.equalizer');                                                        // 2013
    },                                                                                                                 // 2014
                                                                                                                       // 2015
    reflow : function () {                                                                                             // 2016
      var self = this;                                                                                                 // 2017
                                                                                                                       // 2018
      this.S('[' + this.attr_name() + ']', this.scope).each(function () {                                              // 2019
        var $eq_target = $(this),                                                                                      // 2020
            media_query = $eq_target.data('equalizer-mq'),                                                             // 2021
            ignore_media_query = true;                                                                                 // 2022
                                                                                                                       // 2023
        if (media_query) {                                                                                             // 2024
          media_query = 'is_' + media_query.replace(/-/g, '_');                                                        // 2025
          if (Foundation.utils.hasOwnProperty(media_query)) {                                                          // 2026
            ignore_media_query = false;                                                                                // 2027
          }                                                                                                            // 2028
        }                                                                                                              // 2029
                                                                                                                       // 2030
        self.image_loaded(self.S('img', this), function () {                                                           // 2031
          if (ignore_media_query || Foundation.utils[media_query]()) {                                                 // 2032
            self.equalize($eq_target)                                                                                  // 2033
          } else {                                                                                                     // 2034
            var vals = $eq_target.find('[' + self.attr_name() + '-watch]:visible');                                    // 2035
            vals.css('height', 'auto');                                                                                // 2036
          }                                                                                                            // 2037
        });                                                                                                            // 2038
      });                                                                                                              // 2039
    }                                                                                                                  // 2040
  };                                                                                                                   // 2041
})(jQuery, window, window.document);                                                                                   // 2042
;(function ($, window, document, undefined) {                                                                          // 2043
  'use strict';                                                                                                        // 2044
                                                                                                                       // 2045
  Foundation.libs.dropdown = {                                                                                         // 2046
    name : 'dropdown',                                                                                                 // 2047
                                                                                                                       // 2048
    version : '5.5.2',                                                                                                 // 2049
                                                                                                                       // 2050
    settings : {                                                                                                       // 2051
      active_class : 'open',                                                                                           // 2052
      disabled_class : 'disabled',                                                                                     // 2053
      mega_class : 'mega',                                                                                             // 2054
      align : 'bottom',                                                                                                // 2055
      is_hover : false,                                                                                                // 2056
      hover_timeout : 150,                                                                                             // 2057
      opened : function () {},                                                                                         // 2058
      closed : function () {}                                                                                          // 2059
    },                                                                                                                 // 2060
                                                                                                                       // 2061
    init : function (scope, method, options) {                                                                         // 2062
      Foundation.inherit(this, 'throttle');                                                                            // 2063
                                                                                                                       // 2064
      $.extend(true, this.settings, method, options);                                                                  // 2065
      this.bindings(method, options);                                                                                  // 2066
    },                                                                                                                 // 2067
                                                                                                                       // 2068
    events : function (scope) {                                                                                        // 2069
      var self = this,                                                                                                 // 2070
          S = self.S;                                                                                                  // 2071
                                                                                                                       // 2072
      S(this.scope)                                                                                                    // 2073
        .off('.dropdown')                                                                                              // 2074
        .on('click.fndtn.dropdown', '[' + this.attr_name() + ']', function (e) {                                       // 2075
          var settings = S(this).data(self.attr_name(true) + '-init') || self.settings;                                // 2076
          if (!settings.is_hover || Modernizr.touch) {                                                                 // 2077
            e.preventDefault();                                                                                        // 2078
            if (S(this).parent('[data-reveal-id]').length) {                                                           // 2079
              e.stopPropagation();                                                                                     // 2080
            }                                                                                                          // 2081
            self.toggle($(this));                                                                                      // 2082
          }                                                                                                            // 2083
        })                                                                                                             // 2084
        .on('mouseenter.fndtn.dropdown', '[' + this.attr_name() + '], [' + this.attr_name() + '-content]', function (e) {
          var $this = S(this),                                                                                         // 2086
              dropdown,                                                                                                // 2087
              target;                                                                                                  // 2088
                                                                                                                       // 2089
          clearTimeout(self.timeout);                                                                                  // 2090
                                                                                                                       // 2091
          if ($this.data(self.data_attr())) {                                                                          // 2092
            dropdown = S('#' + $this.data(self.data_attr()));                                                          // 2093
            target = $this;                                                                                            // 2094
          } else {                                                                                                     // 2095
            dropdown = $this;                                                                                          // 2096
            target = S('[' + self.attr_name() + '="' + dropdown.attr('id') + '"]');                                    // 2097
          }                                                                                                            // 2098
                                                                                                                       // 2099
          var settings = target.data(self.attr_name(true) + '-init') || self.settings;                                 // 2100
                                                                                                                       // 2101
          if (S(e.currentTarget).data(self.data_attr()) && settings.is_hover) {                                        // 2102
            self.closeall.call(self);                                                                                  // 2103
          }                                                                                                            // 2104
                                                                                                                       // 2105
          if (settings.is_hover) {                                                                                     // 2106
            self.open.apply(self, [dropdown, target]);                                                                 // 2107
          }                                                                                                            // 2108
        })                                                                                                             // 2109
        .on('mouseleave.fndtn.dropdown', '[' + this.attr_name() + '], [' + this.attr_name() + '-content]', function (e) {
          var $this = S(this);                                                                                         // 2111
          var settings;                                                                                                // 2112
                                                                                                                       // 2113
          if ($this.data(self.data_attr())) {                                                                          // 2114
              settings = $this.data(self.data_attr(true) + '-init') || self.settings;                                  // 2115
          } else {                                                                                                     // 2116
              var target   = S('[' + self.attr_name() + '="' + S(this).attr('id') + '"]'),                             // 2117
                  settings = target.data(self.attr_name(true) + '-init') || self.settings;                             // 2118
          }                                                                                                            // 2119
                                                                                                                       // 2120
          self.timeout = setTimeout(function () {                                                                      // 2121
            if ($this.data(self.data_attr())) {                                                                        // 2122
              if (settings.is_hover) {                                                                                 // 2123
                self.close.call(self, S('#' + $this.data(self.data_attr())));                                          // 2124
              }                                                                                                        // 2125
            } else {                                                                                                   // 2126
              if (settings.is_hover) {                                                                                 // 2127
                self.close.call(self, $this);                                                                          // 2128
              }                                                                                                        // 2129
            }                                                                                                          // 2130
          }.bind(this), settings.hover_timeout);                                                                       // 2131
        })                                                                                                             // 2132
        .on('click.fndtn.dropdown', function (e) {                                                                     // 2133
          var parent = S(e.target).closest('[' + self.attr_name() + '-content]');                                      // 2134
          var links  = parent.find('a');                                                                               // 2135
                                                                                                                       // 2136
          if (links.length > 0 && parent.attr('aria-autoclose') !== 'false') {                                         // 2137
              self.close.call(self, S('[' + self.attr_name() + '-content]'));                                          // 2138
          }                                                                                                            // 2139
                                                                                                                       // 2140
          if (e.target !== document && !$.contains(document.documentElement, e.target)) {                              // 2141
            return;                                                                                                    // 2142
          }                                                                                                            // 2143
                                                                                                                       // 2144
          if (S(e.target).closest('[' + self.attr_name() + ']').length > 0) {                                          // 2145
            return;                                                                                                    // 2146
          }                                                                                                            // 2147
                                                                                                                       // 2148
          if (!(S(e.target).data('revealId')) &&                                                                       // 2149
            (parent.length > 0 && (S(e.target).is('[' + self.attr_name() + '-content]') ||                             // 2150
              $.contains(parent.first()[0], e.target)))) {                                                             // 2151
            e.stopPropagation();                                                                                       // 2152
            return;                                                                                                    // 2153
          }                                                                                                            // 2154
                                                                                                                       // 2155
          self.close.call(self, S('[' + self.attr_name() + '-content]'));                                              // 2156
        })                                                                                                             // 2157
        .on('opened.fndtn.dropdown', '[' + self.attr_name() + '-content]', function () {                               // 2158
          self.settings.opened.call(this);                                                                             // 2159
        })                                                                                                             // 2160
        .on('closed.fndtn.dropdown', '[' + self.attr_name() + '-content]', function () {                               // 2161
          self.settings.closed.call(this);                                                                             // 2162
        });                                                                                                            // 2163
                                                                                                                       // 2164
      S(window)                                                                                                        // 2165
        .off('.dropdown')                                                                                              // 2166
        .on('resize.fndtn.dropdown', self.throttle(function () {                                                       // 2167
          self.resize.call(self);                                                                                      // 2168
        }, 50));                                                                                                       // 2169
                                                                                                                       // 2170
      this.resize();                                                                                                   // 2171
    },                                                                                                                 // 2172
                                                                                                                       // 2173
    close : function (dropdown) {                                                                                      // 2174
      var self = this;                                                                                                 // 2175
      dropdown.each(function (idx) {                                                                                   // 2176
        var original_target = $('[' + self.attr_name() + '=' + dropdown[idx].id + ']') || $('aria-controls=' + dropdown[idx].id + ']');
        original_target.attr('aria-expanded', 'false');                                                                // 2178
        if (self.S(this).hasClass(self.settings.active_class)) {                                                       // 2179
          self.S(this)                                                                                                 // 2180
            .css(Foundation.rtl ? 'right' : 'left', '-99999px')                                                        // 2181
            .attr('aria-hidden', 'true')                                                                               // 2182
            .removeClass(self.settings.active_class)                                                                   // 2183
            .prev('[' + self.attr_name() + ']')                                                                        // 2184
            .removeClass(self.settings.active_class)                                                                   // 2185
            .removeData('target');                                                                                     // 2186
                                                                                                                       // 2187
          self.S(this).trigger('closed.fndtn.dropdown', [dropdown]);                                                   // 2188
        }                                                                                                              // 2189
      });                                                                                                              // 2190
      dropdown.removeClass('f-open-' + this.attr_name(true));                                                          // 2191
    },                                                                                                                 // 2192
                                                                                                                       // 2193
    closeall : function () {                                                                                           // 2194
      var self = this;                                                                                                 // 2195
      $.each(self.S('.f-open-' + this.attr_name(true)), function () {                                                  // 2196
        self.close.call(self, self.S(this));                                                                           // 2197
      });                                                                                                              // 2198
    },                                                                                                                 // 2199
                                                                                                                       // 2200
    open : function (dropdown, target) {                                                                               // 2201
      this                                                                                                             // 2202
        .css(dropdown                                                                                                  // 2203
        .addClass(this.settings.active_class), target);                                                                // 2204
      dropdown.prev('[' + this.attr_name() + ']').addClass(this.settings.active_class);                                // 2205
      dropdown.data('target', target.get(0)).trigger('opened.fndtn.dropdown', [dropdown, target]);                     // 2206
      dropdown.attr('aria-hidden', 'false');                                                                           // 2207
      target.attr('aria-expanded', 'true');                                                                            // 2208
      dropdown.focus();                                                                                                // 2209
      dropdown.addClass('f-open-' + this.attr_name(true));                                                             // 2210
    },                                                                                                                 // 2211
                                                                                                                       // 2212
    data_attr : function () {                                                                                          // 2213
      if (this.namespace.length > 0) {                                                                                 // 2214
        return this.namespace + '-' + this.name;                                                                       // 2215
      }                                                                                                                // 2216
                                                                                                                       // 2217
      return this.name;                                                                                                // 2218
    },                                                                                                                 // 2219
                                                                                                                       // 2220
    toggle : function (target) {                                                                                       // 2221
      if (target.hasClass(this.settings.disabled_class)) {                                                             // 2222
        return;                                                                                                        // 2223
      }                                                                                                                // 2224
      var dropdown = this.S('#' + target.data(this.data_attr()));                                                      // 2225
      if (dropdown.length === 0) {                                                                                     // 2226
        // No dropdown found, not continuing                                                                           // 2227
        return;                                                                                                        // 2228
      }                                                                                                                // 2229
                                                                                                                       // 2230
      this.close.call(this, this.S('[' + this.attr_name() + '-content]').not(dropdown));                               // 2231
                                                                                                                       // 2232
      if (dropdown.hasClass(this.settings.active_class)) {                                                             // 2233
        this.close.call(this, dropdown);                                                                               // 2234
        if (dropdown.data('target') !== target.get(0)) {                                                               // 2235
          this.open.call(this, dropdown, target);                                                                      // 2236
        }                                                                                                              // 2237
      } else {                                                                                                         // 2238
        this.open.call(this, dropdown, target);                                                                        // 2239
      }                                                                                                                // 2240
    },                                                                                                                 // 2241
                                                                                                                       // 2242
    resize : function () {                                                                                             // 2243
      var dropdown = this.S('[' + this.attr_name() + '-content].open');                                                // 2244
      var target = $(dropdown.data("target"));                                                                         // 2245
                                                                                                                       // 2246
      if (dropdown.length && target.length) {                                                                          // 2247
        this.css(dropdown, target);                                                                                    // 2248
      }                                                                                                                // 2249
    },                                                                                                                 // 2250
                                                                                                                       // 2251
    css : function (dropdown, target) {                                                                                // 2252
      var left_offset = Math.max((target.width() - dropdown.width()) / 2, 8),                                          // 2253
          settings = target.data(this.attr_name(true) + '-init') || this.settings,                                     // 2254
          parentOverflow = dropdown.parent().css('overflow-y') || dropdown.parent().css('overflow');                   // 2255
                                                                                                                       // 2256
      this.clear_idx();                                                                                                // 2257
                                                                                                                       // 2258
                                                                                                                       // 2259
                                                                                                                       // 2260
      if (this.small()) {                                                                                              // 2261
        var p = this.dirs.bottom.call(dropdown, target, settings);                                                     // 2262
                                                                                                                       // 2263
        dropdown.attr('style', '').removeClass('drop-left drop-right drop-top').css({                                  // 2264
          position : 'absolute',                                                                                       // 2265
          width : '95%',                                                                                               // 2266
          'max-width' : 'none',                                                                                        // 2267
          top : p.top                                                                                                  // 2268
        });                                                                                                            // 2269
                                                                                                                       // 2270
        dropdown.css(Foundation.rtl ? 'right' : 'left', left_offset);                                                  // 2271
      }                                                                                                                // 2272
      // detect if dropdown is in an overflow container                                                                // 2273
      else if (parentOverflow !== 'visible') {                                                                         // 2274
        var offset = target[0].offsetTop + target[0].offsetHeight;                                                     // 2275
                                                                                                                       // 2276
        dropdown.attr('style', '').css({                                                                               // 2277
          position : 'absolute',                                                                                       // 2278
          top : offset                                                                                                 // 2279
        });                                                                                                            // 2280
                                                                                                                       // 2281
        dropdown.css(Foundation.rtl ? 'right' : 'left', left_offset);                                                  // 2282
      }                                                                                                                // 2283
      else {                                                                                                           // 2284
                                                                                                                       // 2285
        this.style(dropdown, target, settings);                                                                        // 2286
      }                                                                                                                // 2287
                                                                                                                       // 2288
      return dropdown;                                                                                                 // 2289
    },                                                                                                                 // 2290
                                                                                                                       // 2291
    style : function (dropdown, target, settings) {                                                                    // 2292
      var css = $.extend({position : 'absolute'},                                                                      // 2293
        this.dirs[settings.align].call(dropdown, target, settings));                                                   // 2294
                                                                                                                       // 2295
      dropdown.attr('style', '').css(css);                                                                             // 2296
    },                                                                                                                 // 2297
                                                                                                                       // 2298
    // return CSS property object                                                                                      // 2299
    // `this` is the dropdown                                                                                          // 2300
    dirs : {                                                                                                           // 2301
      // Calculate target offset                                                                                       // 2302
      _base : function (t) {                                                                                           // 2303
        var o_p = this.offsetParent(),                                                                                 // 2304
            o = o_p.offset(),                                                                                          // 2305
            p = t.offset();                                                                                            // 2306
                                                                                                                       // 2307
        p.top -= o.top;                                                                                                // 2308
        p.left -= o.left;                                                                                              // 2309
                                                                                                                       // 2310
        //set some flags on the p object to pass along                                                                 // 2311
        p.missRight = false;                                                                                           // 2312
        p.missTop = false;                                                                                             // 2313
        p.missLeft = false;                                                                                            // 2314
        p.leftRightFlag = false;                                                                                       // 2315
                                                                                                                       // 2316
        //lets see if the panel will be off the screen                                                                 // 2317
        //get the actual width of the page and store it                                                                // 2318
        var actualBodyWidth;                                                                                           // 2319
        if (document.getElementsByClassName('row')[0]) {                                                               // 2320
          actualBodyWidth = document.getElementsByClassName('row')[0].clientWidth;                                     // 2321
        } else {                                                                                                       // 2322
          actualBodyWidth = window.innerWidth;                                                                         // 2323
        }                                                                                                              // 2324
                                                                                                                       // 2325
        var actualMarginWidth = (window.innerWidth - actualBodyWidth) / 2;                                             // 2326
        var actualBoundary = actualBodyWidth;                                                                          // 2327
                                                                                                                       // 2328
        if (!this.hasClass('mega')) {                                                                                  // 2329
          //miss top                                                                                                   // 2330
          if (t.offset().top <= this.outerHeight()) {                                                                  // 2331
            p.missTop = true;                                                                                          // 2332
            actualBoundary = window.innerWidth - actualMarginWidth;                                                    // 2333
            p.leftRightFlag = true;                                                                                    // 2334
          }                                                                                                            // 2335
                                                                                                                       // 2336
          //miss right                                                                                                 // 2337
          if (t.offset().left + this.outerWidth() > t.offset().left + actualMarginWidth && t.offset().left - actualMarginWidth > this.outerWidth()) {
            p.missRight = true;                                                                                        // 2339
            p.missLeft = false;                                                                                        // 2340
          }                                                                                                            // 2341
                                                                                                                       // 2342
          //miss left                                                                                                  // 2343
          if (t.offset().left - this.outerWidth() <= 0) {                                                              // 2344
            p.missLeft = true;                                                                                         // 2345
            p.missRight = false;                                                                                       // 2346
          }                                                                                                            // 2347
        }                                                                                                              // 2348
                                                                                                                       // 2349
        return p;                                                                                                      // 2350
      },                                                                                                               // 2351
                                                                                                                       // 2352
      top : function (t, s) {                                                                                          // 2353
        var self = Foundation.libs.dropdown,                                                                           // 2354
            p = self.dirs._base.call(this, t);                                                                         // 2355
                                                                                                                       // 2356
        this.addClass('drop-top');                                                                                     // 2357
                                                                                                                       // 2358
        if (p.missTop == true) {                                                                                       // 2359
          p.top = p.top + t.outerHeight() + this.outerHeight();                                                        // 2360
          this.removeClass('drop-top');                                                                                // 2361
        }                                                                                                              // 2362
                                                                                                                       // 2363
        if (p.missRight == true) {                                                                                     // 2364
          p.left = p.left - this.outerWidth() + t.outerWidth();                                                        // 2365
        }                                                                                                              // 2366
                                                                                                                       // 2367
        if (t.outerWidth() < this.outerWidth() || self.small() || this.hasClass(s.mega_menu)) {                        // 2368
          self.adjust_pip(this, t, s, p);                                                                              // 2369
        }                                                                                                              // 2370
                                                                                                                       // 2371
        if (Foundation.rtl) {                                                                                          // 2372
          return {left : p.left - this.outerWidth() + t.outerWidth(),                                                  // 2373
            top : p.top - this.outerHeight()};                                                                         // 2374
        }                                                                                                              // 2375
                                                                                                                       // 2376
        return {left : p.left, top : p.top - this.outerHeight()};                                                      // 2377
      },                                                                                                               // 2378
                                                                                                                       // 2379
      bottom : function (t, s) {                                                                                       // 2380
        var self = Foundation.libs.dropdown,                                                                           // 2381
            p = self.dirs._base.call(this, t);                                                                         // 2382
                                                                                                                       // 2383
        if (p.missRight == true) {                                                                                     // 2384
          p.left = p.left - this.outerWidth() + t.outerWidth();                                                        // 2385
        }                                                                                                              // 2386
                                                                                                                       // 2387
        if (t.outerWidth() < this.outerWidth() || self.small() || this.hasClass(s.mega_menu)) {                        // 2388
          self.adjust_pip(this, t, s, p);                                                                              // 2389
        }                                                                                                              // 2390
                                                                                                                       // 2391
        if (self.rtl) {                                                                                                // 2392
          return {left : p.left - this.outerWidth() + t.outerWidth(), top : p.top + t.outerHeight()};                  // 2393
        }                                                                                                              // 2394
                                                                                                                       // 2395
        return {left : p.left, top : p.top + t.outerHeight()};                                                         // 2396
      },                                                                                                               // 2397
                                                                                                                       // 2398
      left : function (t, s) {                                                                                         // 2399
        var p = Foundation.libs.dropdown.dirs._base.call(this, t);                                                     // 2400
                                                                                                                       // 2401
        this.addClass('drop-left');                                                                                    // 2402
                                                                                                                       // 2403
        if (p.missLeft == true) {                                                                                      // 2404
          p.left =  p.left + this.outerWidth();                                                                        // 2405
          p.top = p.top + t.outerHeight();                                                                             // 2406
          this.removeClass('drop-left');                                                                               // 2407
        }                                                                                                              // 2408
                                                                                                                       // 2409
        return {left : p.left - this.outerWidth(), top : p.top};                                                       // 2410
      },                                                                                                               // 2411
                                                                                                                       // 2412
      right : function (t, s) {                                                                                        // 2413
        var p = Foundation.libs.dropdown.dirs._base.call(this, t);                                                     // 2414
                                                                                                                       // 2415
        this.addClass('drop-right');                                                                                   // 2416
                                                                                                                       // 2417
        if (p.missRight == true) {                                                                                     // 2418
          p.left = p.left - this.outerWidth();                                                                         // 2419
          p.top = p.top + t.outerHeight();                                                                             // 2420
          this.removeClass('drop-right');                                                                              // 2421
        } else {                                                                                                       // 2422
          p.triggeredRight = true;                                                                                     // 2423
        }                                                                                                              // 2424
                                                                                                                       // 2425
        var self = Foundation.libs.dropdown;                                                                           // 2426
                                                                                                                       // 2427
        if (t.outerWidth() < this.outerWidth() || self.small() || this.hasClass(s.mega_menu)) {                        // 2428
          self.adjust_pip(this, t, s, p);                                                                              // 2429
        }                                                                                                              // 2430
                                                                                                                       // 2431
        return {left : p.left + t.outerWidth(), top : p.top};                                                          // 2432
      }                                                                                                                // 2433
    },                                                                                                                 // 2434
                                                                                                                       // 2435
    // Insert rule to style psuedo elements                                                                            // 2436
    adjust_pip : function (dropdown, target, settings, position) {                                                     // 2437
      var sheet = Foundation.stylesheet,                                                                               // 2438
          pip_offset_base = 8;                                                                                         // 2439
                                                                                                                       // 2440
      if (dropdown.hasClass(settings.mega_class)) {                                                                    // 2441
        pip_offset_base = position.left + (target.outerWidth() / 2) - 8;                                               // 2442
      } else if (this.small()) {                                                                                       // 2443
        pip_offset_base += position.left - 8;                                                                          // 2444
      }                                                                                                                // 2445
                                                                                                                       // 2446
      this.rule_idx = sheet.cssRules.length;                                                                           // 2447
                                                                                                                       // 2448
      //default                                                                                                        // 2449
      var sel_before = '.f-dropdown.open:before',                                                                      // 2450
          sel_after  = '.f-dropdown.open:after',                                                                       // 2451
          css_before = 'left: ' + pip_offset_base + 'px;',                                                             // 2452
          css_after  = 'left: ' + (pip_offset_base - 1) + 'px;';                                                       // 2453
                                                                                                                       // 2454
      if (position.missRight == true) {                                                                                // 2455
        pip_offset_base = dropdown.outerWidth() - 23;                                                                  // 2456
        sel_before = '.f-dropdown.open:before',                                                                        // 2457
        sel_after  = '.f-dropdown.open:after',                                                                         // 2458
        css_before = 'left: ' + pip_offset_base + 'px;',                                                               // 2459
        css_after  = 'left: ' + (pip_offset_base - 1) + 'px;';                                                         // 2460
      }                                                                                                                // 2461
                                                                                                                       // 2462
      //just a case where right is fired, but its not missing right                                                    // 2463
      if (position.triggeredRight == true) {                                                                           // 2464
        sel_before = '.f-dropdown.open:before',                                                                        // 2465
        sel_after  = '.f-dropdown.open:after',                                                                         // 2466
        css_before = 'left:-12px;',                                                                                    // 2467
        css_after  = 'left:-14px;';                                                                                    // 2468
      }                                                                                                                // 2469
                                                                                                                       // 2470
      if (sheet.insertRule) {                                                                                          // 2471
        sheet.insertRule([sel_before, '{', css_before, '}'].join(' '), this.rule_idx);                                 // 2472
        sheet.insertRule([sel_after, '{', css_after, '}'].join(' '), this.rule_idx + 1);                               // 2473
      } else {                                                                                                         // 2474
        sheet.addRule(sel_before, css_before, this.rule_idx);                                                          // 2475
        sheet.addRule(sel_after, css_after, this.rule_idx + 1);                                                        // 2476
      }                                                                                                                // 2477
    },                                                                                                                 // 2478
                                                                                                                       // 2479
    // Remove old dropdown rule index                                                                                  // 2480
    clear_idx : function () {                                                                                          // 2481
      var sheet = Foundation.stylesheet;                                                                               // 2482
                                                                                                                       // 2483
      if (typeof this.rule_idx !== 'undefined') {                                                                      // 2484
        sheet.deleteRule(this.rule_idx);                                                                               // 2485
        sheet.deleteRule(this.rule_idx);                                                                               // 2486
        delete this.rule_idx;                                                                                          // 2487
      }                                                                                                                // 2488
    },                                                                                                                 // 2489
                                                                                                                       // 2490
    small : function () {                                                                                              // 2491
      return matchMedia(Foundation.media_queries.small).matches &&                                                     // 2492
        !matchMedia(Foundation.media_queries.medium).matches;                                                          // 2493
    },                                                                                                                 // 2494
                                                                                                                       // 2495
    off : function () {                                                                                                // 2496
      this.S(this.scope).off('.fndtn.dropdown');                                                                       // 2497
      this.S('html, body').off('.fndtn.dropdown');                                                                     // 2498
      this.S(window).off('.fndtn.dropdown');                                                                           // 2499
      this.S('[data-dropdown-content]').off('.fndtn.dropdown');                                                        // 2500
    },                                                                                                                 // 2501
                                                                                                                       // 2502
    reflow : function () {}                                                                                            // 2503
  };                                                                                                                   // 2504
}(jQuery, window, window.document));                                                                                   // 2505
;(function ($, window, document, undefined) {                                                                          // 2506
  'use strict';                                                                                                        // 2507
                                                                                                                       // 2508
  Foundation.libs.clearing = {                                                                                         // 2509
    name : 'clearing',                                                                                                 // 2510
                                                                                                                       // 2511
    version : '5.5.2',                                                                                                 // 2512
                                                                                                                       // 2513
    settings : {                                                                                                       // 2514
      templates : {                                                                                                    // 2515
        viewing : '<a href="#" class="clearing-close">&times;</a>' +                                                   // 2516
          '<div class="visible-img" style="display: none"><div class="clearing-touch-label"></div><img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" />' +
          '<p class="clearing-caption"></p><a href="#" class="clearing-main-prev"><span></span></a>' +                 // 2518
          '<a href="#" class="clearing-main-next"><span></span></a></div>' +                                           // 2519
          '<img class="clearing-preload-next" style="display: none" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" />' +
          '<img class="clearing-preload-prev" style="display: none" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" />'
      },                                                                                                               // 2522
                                                                                                                       // 2523
      // comma delimited list of selectors that, on click, will close clearing,                                        // 2524
      // add 'div.clearing-blackout, div.visible-img' to close on background click                                     // 2525
      close_selectors : '.clearing-close, div.clearing-blackout',                                                      // 2526
                                                                                                                       // 2527
      // Default to the entire li element.                                                                             // 2528
      open_selectors : '',                                                                                             // 2529
                                                                                                                       // 2530
      // Image will be skipped in carousel.                                                                            // 2531
      skip_selector : '',                                                                                              // 2532
                                                                                                                       // 2533
      touch_label : '',                                                                                                // 2534
                                                                                                                       // 2535
      // event initializers and locks                                                                                  // 2536
      init : false,                                                                                                    // 2537
      locked : false                                                                                                   // 2538
    },                                                                                                                 // 2539
                                                                                                                       // 2540
    init : function (scope, method, options) {                                                                         // 2541
      var self = this;                                                                                                 // 2542
      Foundation.inherit(this, 'throttle image_loaded');                                                               // 2543
                                                                                                                       // 2544
      this.bindings(method, options);                                                                                  // 2545
                                                                                                                       // 2546
      if (self.S(this.scope).is('[' + this.attr_name() + ']')) {                                                       // 2547
        this.assemble(self.S('li', this.scope));                                                                       // 2548
      } else {                                                                                                         // 2549
        self.S('[' + this.attr_name() + ']', this.scope).each(function () {                                            // 2550
          self.assemble(self.S('li', this));                                                                           // 2551
        });                                                                                                            // 2552
      }                                                                                                                // 2553
    },                                                                                                                 // 2554
                                                                                                                       // 2555
    events : function (scope) {                                                                                        // 2556
      var self = this,                                                                                                 // 2557
          S = self.S,                                                                                                  // 2558
          $scroll_container = $('.scroll-container');                                                                  // 2559
                                                                                                                       // 2560
      if ($scroll_container.length > 0) {                                                                              // 2561
        this.scope = $scroll_container;                                                                                // 2562
      }                                                                                                                // 2563
                                                                                                                       // 2564
      S(this.scope)                                                                                                    // 2565
        .off('.clearing')                                                                                              // 2566
        .on('click.fndtn.clearing', 'ul[' + this.attr_name() + '] li ' + this.settings.open_selectors,                 // 2567
          function (e, current, target) {                                                                              // 2568
            var current = current || S(this),                                                                          // 2569
                target = target || current,                                                                            // 2570
                next = current.next('li'),                                                                             // 2571
                settings = current.closest('[' + self.attr_name() + ']').data(self.attr_name(true) + '-init'),         // 2572
                image = S(e.target);                                                                                   // 2573
                                                                                                                       // 2574
            e.preventDefault();                                                                                        // 2575
                                                                                                                       // 2576
            if (!settings) {                                                                                           // 2577
              self.init();                                                                                             // 2578
              settings = current.closest('[' + self.attr_name() + ']').data(self.attr_name(true) + '-init');           // 2579
            }                                                                                                          // 2580
                                                                                                                       // 2581
            // if clearing is open and the current image is                                                            // 2582
            // clicked, go to the next image in sequence                                                               // 2583
            if (target.hasClass('visible') &&                                                                          // 2584
              current[0] === target[0] &&                                                                              // 2585
              next.length > 0 && self.is_open(current)) {                                                              // 2586
              target = next;                                                                                           // 2587
              image = S('img', target);                                                                                // 2588
            }                                                                                                          // 2589
                                                                                                                       // 2590
            // set current and target to the clicked li if not otherwise defined.                                      // 2591
            self.open(image, current, target);                                                                         // 2592
            self.update_paddles(target);                                                                               // 2593
          })                                                                                                           // 2594
                                                                                                                       // 2595
        .on('click.fndtn.clearing', '.clearing-main-next',                                                             // 2596
          function (e) { self.nav(e, 'next') })                                                                        // 2597
        .on('click.fndtn.clearing', '.clearing-main-prev',                                                             // 2598
          function (e) { self.nav(e, 'prev') })                                                                        // 2599
        .on('click.fndtn.clearing', this.settings.close_selectors,                                                     // 2600
          function (e) { Foundation.libs.clearing.close(e, this) });                                                   // 2601
                                                                                                                       // 2602
      $(document).on('keydown.fndtn.clearing',                                                                         // 2603
          function (e) { self.keydown(e) });                                                                           // 2604
                                                                                                                       // 2605
      S(window).off('.clearing').on('resize.fndtn.clearing',                                                           // 2606
        function () { self.resize() });                                                                                // 2607
                                                                                                                       // 2608
      this.swipe_events(scope);                                                                                        // 2609
    },                                                                                                                 // 2610
                                                                                                                       // 2611
    swipe_events : function (scope) {                                                                                  // 2612
      var self = this,                                                                                                 // 2613
      S = self.S;                                                                                                      // 2614
                                                                                                                       // 2615
      S(this.scope)                                                                                                    // 2616
        .on('touchstart.fndtn.clearing', '.visible-img', function (e) {                                                // 2617
          if (!e.touches) { e = e.originalEvent; }                                                                     // 2618
          var data = {                                                                                                 // 2619
                start_page_x : e.touches[0].pageX,                                                                     // 2620
                start_page_y : e.touches[0].pageY,                                                                     // 2621
                start_time : (new Date()).getTime(),                                                                   // 2622
                delta_x : 0,                                                                                           // 2623
                is_scrolling : undefined                                                                               // 2624
              };                                                                                                       // 2625
                                                                                                                       // 2626
          S(this).data('swipe-transition', data);                                                                      // 2627
          e.stopPropagation();                                                                                         // 2628
        })                                                                                                             // 2629
        .on('touchmove.fndtn.clearing', '.visible-img', function (e) {                                                 // 2630
          if (!e.touches) {                                                                                            // 2631
            e = e.originalEvent;                                                                                       // 2632
          }                                                                                                            // 2633
          // Ignore pinch/zoom events                                                                                  // 2634
          if (e.touches.length > 1 || e.scale && e.scale !== 1) {                                                      // 2635
            return;                                                                                                    // 2636
          }                                                                                                            // 2637
                                                                                                                       // 2638
          var data = S(this).data('swipe-transition');                                                                 // 2639
                                                                                                                       // 2640
          if (typeof data === 'undefined') {                                                                           // 2641
            data = {};                                                                                                 // 2642
          }                                                                                                            // 2643
                                                                                                                       // 2644
          data.delta_x = e.touches[0].pageX - data.start_page_x;                                                       // 2645
                                                                                                                       // 2646
          if (Foundation.rtl) {                                                                                        // 2647
            data.delta_x = -data.delta_x;                                                                              // 2648
          }                                                                                                            // 2649
                                                                                                                       // 2650
          if (typeof data.is_scrolling === 'undefined') {                                                              // 2651
            data.is_scrolling = !!( data.is_scrolling || Math.abs(data.delta_x) < Math.abs(e.touches[0].pageY - data.start_page_y) );
          }                                                                                                            // 2653
                                                                                                                       // 2654
          if (!data.is_scrolling && !data.active) {                                                                    // 2655
            e.preventDefault();                                                                                        // 2656
            var direction = (data.delta_x < 0) ? 'next' : 'prev';                                                      // 2657
            data.active = true;                                                                                        // 2658
            self.nav(e, direction);                                                                                    // 2659
          }                                                                                                            // 2660
        })                                                                                                             // 2661
        .on('touchend.fndtn.clearing', '.visible-img', function (e) {                                                  // 2662
          S(this).data('swipe-transition', {});                                                                        // 2663
          e.stopPropagation();                                                                                         // 2664
        });                                                                                                            // 2665
    },                                                                                                                 // 2666
                                                                                                                       // 2667
    assemble : function ($li) {                                                                                        // 2668
      var $el = $li.parent();                                                                                          // 2669
                                                                                                                       // 2670
      if ($el.parent().hasClass('carousel')) {                                                                         // 2671
        return;                                                                                                        // 2672
      }                                                                                                                // 2673
                                                                                                                       // 2674
      $el.after('<div id="foundationClearingHolder"></div>');                                                          // 2675
                                                                                                                       // 2676
      var grid = $el.detach(),                                                                                         // 2677
          grid_outerHTML = '';                                                                                         // 2678
                                                                                                                       // 2679
      if (grid[0] == null) {                                                                                           // 2680
        return;                                                                                                        // 2681
      } else {                                                                                                         // 2682
        grid_outerHTML = grid[0].outerHTML;                                                                            // 2683
      }                                                                                                                // 2684
                                                                                                                       // 2685
      var holder = this.S('#foundationClearingHolder'),                                                                // 2686
          settings = $el.data(this.attr_name(true) + '-init'),                                                         // 2687
          data = {                                                                                                     // 2688
            grid : '<div class="carousel">' + grid_outerHTML + '</div>',                                               // 2689
            viewing : settings.templates.viewing                                                                       // 2690
          },                                                                                                           // 2691
          wrapper = '<div class="clearing-assembled"><div>' + data.viewing +                                           // 2692
            data.grid + '</div></div>',                                                                                // 2693
          touch_label = this.settings.touch_label;                                                                     // 2694
                                                                                                                       // 2695
      if (Modernizr.touch) {                                                                                           // 2696
        wrapper = $(wrapper).find('.clearing-touch-label').html(touch_label).end();                                    // 2697
      }                                                                                                                // 2698
                                                                                                                       // 2699
      holder.after(wrapper).remove();                                                                                  // 2700
    },                                                                                                                 // 2701
                                                                                                                       // 2702
    open : function ($image, current, target) {                                                                        // 2703
      var self = this,                                                                                                 // 2704
          body = $(document.body),                                                                                     // 2705
          root = target.closest('.clearing-assembled'),                                                                // 2706
          container = self.S('div', root).first(),                                                                     // 2707
          visible_image = self.S('.visible-img', container),                                                           // 2708
          image = self.S('img', visible_image).not($image),                                                            // 2709
          label = self.S('.clearing-touch-label', container),                                                          // 2710
          error = false,                                                                                               // 2711
          loaded = {};                                                                                                 // 2712
                                                                                                                       // 2713
      // Event to disable scrolling on touch devices when Clearing is activated                                        // 2714
      $('body').on('touchmove', function (e) {                                                                         // 2715
        e.preventDefault();                                                                                            // 2716
      });                                                                                                              // 2717
                                                                                                                       // 2718
      image.error(function () {                                                                                        // 2719
        error = true;                                                                                                  // 2720
      });                                                                                                              // 2721
                                                                                                                       // 2722
      function startLoad() {                                                                                           // 2723
        setTimeout(function () {                                                                                       // 2724
          this.image_loaded(image, function () {                                                                       // 2725
            if (image.outerWidth() === 1 && !error) {                                                                  // 2726
              startLoad.call(this);                                                                                    // 2727
            } else {                                                                                                   // 2728
              cb.call(this, image);                                                                                    // 2729
            }                                                                                                          // 2730
          }.bind(this));                                                                                               // 2731
        }.bind(this), 100);                                                                                            // 2732
      }                                                                                                                // 2733
                                                                                                                       // 2734
      function cb (image) {                                                                                            // 2735
        var $image = $(image);                                                                                         // 2736
        $image.css('visibility', 'visible');                                                                           // 2737
        $image.trigger('imageVisible');                                                                                // 2738
        // toggle the gallery                                                                                          // 2739
        body.css('overflow', 'hidden');                                                                                // 2740
        root.addClass('clearing-blackout');                                                                            // 2741
        container.addClass('clearing-container');                                                                      // 2742
        visible_image.show();                                                                                          // 2743
        this.fix_height(target)                                                                                        // 2744
          .caption(self.S('.clearing-caption', visible_image), self.S('img', target))                                  // 2745
          .center_and_label(image, label)                                                                              // 2746
          .shift(current, target, function () {                                                                        // 2747
            target.closest('li').siblings().removeClass('visible');                                                    // 2748
            target.closest('li').addClass('visible');                                                                  // 2749
          });                                                                                                          // 2750
        visible_image.trigger('opened.fndtn.clearing')                                                                 // 2751
      }                                                                                                                // 2752
                                                                                                                       // 2753
      if (!this.locked()) {                                                                                            // 2754
        visible_image.trigger('open.fndtn.clearing');                                                                  // 2755
        // set the image to the selected thumbnail                                                                     // 2756
        loaded = this.load($image);                                                                                    // 2757
        if (loaded.interchange) {                                                                                      // 2758
          image                                                                                                        // 2759
            .attr('data-interchange', loaded.interchange)                                                              // 2760
            .foundation('interchange', 'reflow');                                                                      // 2761
        } else {                                                                                                       // 2762
          image                                                                                                        // 2763
            .attr('src', loaded.src)                                                                                   // 2764
            .attr('data-interchange', '');                                                                             // 2765
        }                                                                                                              // 2766
        image.css('visibility', 'hidden');                                                                             // 2767
                                                                                                                       // 2768
        startLoad.call(this);                                                                                          // 2769
      }                                                                                                                // 2770
    },                                                                                                                 // 2771
                                                                                                                       // 2772
    close : function (e, el) {                                                                                         // 2773
      e.preventDefault();                                                                                              // 2774
                                                                                                                       // 2775
      var root = (function (target) {                                                                                  // 2776
            if (/blackout/.test(target.selector)) {                                                                    // 2777
              return target;                                                                                           // 2778
            } else {                                                                                                   // 2779
              return target.closest('.clearing-blackout');                                                             // 2780
            }                                                                                                          // 2781
          }($(el))),                                                                                                   // 2782
          body = $(document.body), container, visible_image;                                                           // 2783
                                                                                                                       // 2784
      if (el === e.target && root) {                                                                                   // 2785
        body.css('overflow', '');                                                                                      // 2786
        container = $('div', root).first();                                                                            // 2787
        visible_image = $('.visible-img', container);                                                                  // 2788
        visible_image.trigger('close.fndtn.clearing');                                                                 // 2789
        this.settings.prev_index = 0;                                                                                  // 2790
        $('ul[' + this.attr_name() + ']', root)                                                                        // 2791
          .attr('style', '').closest('.clearing-blackout')                                                             // 2792
          .removeClass('clearing-blackout');                                                                           // 2793
        container.removeClass('clearing-container');                                                                   // 2794
        visible_image.hide();                                                                                          // 2795
        visible_image.trigger('closed.fndtn.clearing');                                                                // 2796
      }                                                                                                                // 2797
                                                                                                                       // 2798
      // Event to re-enable scrolling on touch devices                                                                 // 2799
      $('body').off('touchmove');                                                                                      // 2800
                                                                                                                       // 2801
      return false;                                                                                                    // 2802
    },                                                                                                                 // 2803
                                                                                                                       // 2804
    is_open : function (current) {                                                                                     // 2805
      return current.parent().prop('style').length > 0;                                                                // 2806
    },                                                                                                                 // 2807
                                                                                                                       // 2808
    keydown : function (e) {                                                                                           // 2809
      var clearing = $('.clearing-blackout ul[' + this.attr_name() + ']'),                                             // 2810
          NEXT_KEY = this.rtl ? 37 : 39,                                                                               // 2811
          PREV_KEY = this.rtl ? 39 : 37,                                                                               // 2812
          ESC_KEY = 27;                                                                                                // 2813
                                                                                                                       // 2814
      if (e.which === NEXT_KEY) {                                                                                      // 2815
        this.go(clearing, 'next');                                                                                     // 2816
      }                                                                                                                // 2817
      if (e.which === PREV_KEY) {                                                                                      // 2818
        this.go(clearing, 'prev');                                                                                     // 2819
      }                                                                                                                // 2820
      if (e.which === ESC_KEY) {                                                                                       // 2821
        this.S('a.clearing-close').trigger('click.fndtn.clearing');                                                    // 2822
      }                                                                                                                // 2823
    },                                                                                                                 // 2824
                                                                                                                       // 2825
    nav : function (e, direction) {                                                                                    // 2826
      var clearing = $('ul[' + this.attr_name() + ']', '.clearing-blackout');                                          // 2827
                                                                                                                       // 2828
      e.preventDefault();                                                                                              // 2829
      this.go(clearing, direction);                                                                                    // 2830
    },                                                                                                                 // 2831
                                                                                                                       // 2832
    resize : function () {                                                                                             // 2833
      var image = $('img', '.clearing-blackout .visible-img'),                                                         // 2834
          label = $('.clearing-touch-label', '.clearing-blackout');                                                    // 2835
                                                                                                                       // 2836
      if (image.length) {                                                                                              // 2837
        this.center_and_label(image, label);                                                                           // 2838
        image.trigger('resized.fndtn.clearing')                                                                        // 2839
      }                                                                                                                // 2840
    },                                                                                                                 // 2841
                                                                                                                       // 2842
    // visual adjustments                                                                                              // 2843
    fix_height : function (target) {                                                                                   // 2844
      var lis = target.parent().children(),                                                                            // 2845
          self = this;                                                                                                 // 2846
                                                                                                                       // 2847
      lis.each(function () {                                                                                           // 2848
        var li = self.S(this),                                                                                         // 2849
            image = li.find('img');                                                                                    // 2850
                                                                                                                       // 2851
        if (li.height() > image.outerHeight()) {                                                                       // 2852
          li.addClass('fix-height');                                                                                   // 2853
        }                                                                                                              // 2854
      })                                                                                                               // 2855
      .closest('ul')                                                                                                   // 2856
      .width(lis.length * 100 + '%');                                                                                  // 2857
                                                                                                                       // 2858
      return this;                                                                                                     // 2859
    },                                                                                                                 // 2860
                                                                                                                       // 2861
    update_paddles : function (target) {                                                                               // 2862
      target = target.closest('li');                                                                                   // 2863
      var visible_image = target                                                                                       // 2864
        .closest('.carousel')                                                                                          // 2865
        .siblings('.visible-img');                                                                                     // 2866
                                                                                                                       // 2867
      if (target.next().length > 0) {                                                                                  // 2868
        this.S('.clearing-main-next', visible_image).removeClass('disabled');                                          // 2869
      } else {                                                                                                         // 2870
        this.S('.clearing-main-next', visible_image).addClass('disabled');                                             // 2871
      }                                                                                                                // 2872
                                                                                                                       // 2873
      if (target.prev().length > 0) {                                                                                  // 2874
        this.S('.clearing-main-prev', visible_image).removeClass('disabled');                                          // 2875
      } else {                                                                                                         // 2876
        this.S('.clearing-main-prev', visible_image).addClass('disabled');                                             // 2877
      }                                                                                                                // 2878
    },                                                                                                                 // 2879
                                                                                                                       // 2880
    center_and_label : function (target, label) {                                                                      // 2881
      if (!this.rtl && label.length > 0) {                                                                             // 2882
        label.css({                                                                                                    // 2883
          marginLeft : -(label.outerWidth() / 2),                                                                      // 2884
          marginTop : -(target.outerHeight() / 2)-label.outerHeight()-10                                               // 2885
        });                                                                                                            // 2886
      } else {                                                                                                         // 2887
        label.css({                                                                                                    // 2888
          marginRight : -(label.outerWidth() / 2),                                                                     // 2889
          marginTop : -(target.outerHeight() / 2)-label.outerHeight()-10,                                              // 2890
          left: 'auto',                                                                                                // 2891
          right: '50%'                                                                                                 // 2892
        });                                                                                                            // 2893
      }                                                                                                                // 2894
      return this;                                                                                                     // 2895
    },                                                                                                                 // 2896
                                                                                                                       // 2897
    // image loading and preloading                                                                                    // 2898
                                                                                                                       // 2899
    load : function ($image) {                                                                                         // 2900
      var href,                                                                                                        // 2901
          interchange,                                                                                                 // 2902
          closest_a;                                                                                                   // 2903
                                                                                                                       // 2904
      if ($image[0].nodeName === 'A') {                                                                                // 2905
        href = $image.attr('href');                                                                                    // 2906
        interchange = $image.data('clearing-interchange');                                                             // 2907
      } else {                                                                                                         // 2908
        closest_a = $image.closest('a');                                                                               // 2909
        href = closest_a.attr('href');                                                                                 // 2910
        interchange = closest_a.data('clearing-interchange');                                                          // 2911
      }                                                                                                                // 2912
                                                                                                                       // 2913
      this.preload($image);                                                                                            // 2914
                                                                                                                       // 2915
      return {                                                                                                         // 2916
        'src': href ? href : $image.attr('src'),                                                                       // 2917
        'interchange': href ? interchange : $image.data('clearing-interchange')                                        // 2918
      }                                                                                                                // 2919
    },                                                                                                                 // 2920
                                                                                                                       // 2921
    preload : function ($image) {                                                                                      // 2922
      this                                                                                                             // 2923
        .img($image.closest('li').next(), 'next')                                                                      // 2924
        .img($image.closest('li').prev(), 'prev');                                                                     // 2925
    },                                                                                                                 // 2926
                                                                                                                       // 2927
    img : function (img, sibling_type) {                                                                               // 2928
      if (img.length) {                                                                                                // 2929
        var preload_img = $('.clearing-preload-' + sibling_type),                                                      // 2930
            new_a = this.S('a', img),                                                                                  // 2931
            src,                                                                                                       // 2932
            interchange,                                                                                               // 2933
            image;                                                                                                     // 2934
                                                                                                                       // 2935
        if (new_a.length) {                                                                                            // 2936
          src = new_a.attr('href');                                                                                    // 2937
          interchange = new_a.data('clearing-interchange');                                                            // 2938
        } else {                                                                                                       // 2939
          image = this.S('img', img);                                                                                  // 2940
          src = image.attr('src');                                                                                     // 2941
          interchange = image.data('clearing-interchange');                                                            // 2942
        }                                                                                                              // 2943
                                                                                                                       // 2944
        if (interchange) {                                                                                             // 2945
          preload_img.attr('data-interchange', interchange);                                                           // 2946
        } else {                                                                                                       // 2947
          preload_img.attr('src', src);                                                                                // 2948
          preload_img.attr('data-interchange', '');                                                                    // 2949
        }                                                                                                              // 2950
      }                                                                                                                // 2951
      return this;                                                                                                     // 2952
    },                                                                                                                 // 2953
                                                                                                                       // 2954
    // image caption                                                                                                   // 2955
                                                                                                                       // 2956
    caption : function (container, $image) {                                                                           // 2957
      var caption = $image.attr('data-caption');                                                                       // 2958
                                                                                                                       // 2959
      if (caption) {                                                                                                   // 2960
        container                                                                                                      // 2961
          .html(caption)                                                                                               // 2962
          .show();                                                                                                     // 2963
      } else {                                                                                                         // 2964
        container                                                                                                      // 2965
          .text('')                                                                                                    // 2966
          .hide();                                                                                                     // 2967
      }                                                                                                                // 2968
      return this;                                                                                                     // 2969
    },                                                                                                                 // 2970
                                                                                                                       // 2971
    // directional methods                                                                                             // 2972
                                                                                                                       // 2973
    go : function ($ul, direction) {                                                                                   // 2974
      var current = this.S('.visible', $ul),                                                                           // 2975
          target = current[direction]();                                                                               // 2976
                                                                                                                       // 2977
      // Check for skip selector.                                                                                      // 2978
      if (this.settings.skip_selector && target.find(this.settings.skip_selector).length != 0) {                       // 2979
        target = target[direction]();                                                                                  // 2980
      }                                                                                                                // 2981
                                                                                                                       // 2982
      if (target.length) {                                                                                             // 2983
        this.S('img', target)                                                                                          // 2984
          .trigger('click.fndtn.clearing', [current, target])                                                          // 2985
          .trigger('change.fndtn.clearing');                                                                           // 2986
      }                                                                                                                // 2987
    },                                                                                                                 // 2988
                                                                                                                       // 2989
    shift : function (current, target, callback) {                                                                     // 2990
      var clearing = target.parent(),                                                                                  // 2991
          old_index = this.settings.prev_index || target.index(),                                                      // 2992
          direction = this.direction(clearing, current, target),                                                       // 2993
          dir = this.rtl ? 'right' : 'left',                                                                           // 2994
          left = parseInt(clearing.css('left'), 10),                                                                   // 2995
          width = target.outerWidth(),                                                                                 // 2996
          skip_shift;                                                                                                  // 2997
                                                                                                                       // 2998
      var dir_obj = {};                                                                                                // 2999
                                                                                                                       // 3000
      // we use jQuery animate instead of CSS transitions because we                                                   // 3001
      // need a callback to unlock the next animation                                                                  // 3002
      // needs support for RTL **                                                                                      // 3003
      if (target.index() !== old_index && !/skip/.test(direction)) {                                                   // 3004
        if (/left/.test(direction)) {                                                                                  // 3005
          this.lock();                                                                                                 // 3006
          dir_obj[dir] = left + width;                                                                                 // 3007
          clearing.animate(dir_obj, 300, this.unlock());                                                               // 3008
        } else if (/right/.test(direction)) {                                                                          // 3009
          this.lock();                                                                                                 // 3010
          dir_obj[dir] = left - width;                                                                                 // 3011
          clearing.animate(dir_obj, 300, this.unlock());                                                               // 3012
        }                                                                                                              // 3013
      } else if (/skip/.test(direction)) {                                                                             // 3014
        // the target image is not adjacent to the current image, so                                                   // 3015
        // do we scroll right or not                                                                                   // 3016
        skip_shift = target.index() - this.settings.up_count;                                                          // 3017
        this.lock();                                                                                                   // 3018
                                                                                                                       // 3019
        if (skip_shift > 0) {                                                                                          // 3020
          dir_obj[dir] = -(skip_shift * width);                                                                        // 3021
          clearing.animate(dir_obj, 300, this.unlock());                                                               // 3022
        } else {                                                                                                       // 3023
          dir_obj[dir] = 0;                                                                                            // 3024
          clearing.animate(dir_obj, 300, this.unlock());                                                               // 3025
        }                                                                                                              // 3026
      }                                                                                                                // 3027
                                                                                                                       // 3028
      callback();                                                                                                      // 3029
    },                                                                                                                 // 3030
                                                                                                                       // 3031
    direction : function ($el, current, target) {                                                                      // 3032
      var lis = this.S('li', $el),                                                                                     // 3033
          li_width = lis.outerWidth() + (lis.outerWidth() / 4),                                                        // 3034
          up_count = Math.floor(this.S('.clearing-container').outerWidth() / li_width) - 1,                            // 3035
          target_index = lis.index(target),                                                                            // 3036
          response;                                                                                                    // 3037
                                                                                                                       // 3038
      this.settings.up_count = up_count;                                                                               // 3039
                                                                                                                       // 3040
      if (this.adjacent(this.settings.prev_index, target_index)) {                                                     // 3041
        if ((target_index > up_count) && target_index > this.settings.prev_index) {                                    // 3042
          response = 'right';                                                                                          // 3043
        } else if ((target_index > up_count - 1) && target_index <= this.settings.prev_index) {                        // 3044
          response = 'left';                                                                                           // 3045
        } else {                                                                                                       // 3046
          response = false;                                                                                            // 3047
        }                                                                                                              // 3048
      } else {                                                                                                         // 3049
        response = 'skip';                                                                                             // 3050
      }                                                                                                                // 3051
                                                                                                                       // 3052
      this.settings.prev_index = target_index;                                                                         // 3053
                                                                                                                       // 3054
      return response;                                                                                                 // 3055
    },                                                                                                                 // 3056
                                                                                                                       // 3057
    adjacent : function (current_index, target_index) {                                                                // 3058
      for (var i = target_index + 1; i >= target_index - 1; i--) {                                                     // 3059
        if (i === current_index) {                                                                                     // 3060
          return true;                                                                                                 // 3061
        }                                                                                                              // 3062
      }                                                                                                                // 3063
      return false;                                                                                                    // 3064
    },                                                                                                                 // 3065
                                                                                                                       // 3066
    // lock management                                                                                                 // 3067
                                                                                                                       // 3068
    lock : function () {                                                                                               // 3069
      this.settings.locked = true;                                                                                     // 3070
    },                                                                                                                 // 3071
                                                                                                                       // 3072
    unlock : function () {                                                                                             // 3073
      this.settings.locked = false;                                                                                    // 3074
    },                                                                                                                 // 3075
                                                                                                                       // 3076
    locked : function () {                                                                                             // 3077
      return this.settings.locked;                                                                                     // 3078
    },                                                                                                                 // 3079
                                                                                                                       // 3080
    off : function () {                                                                                                // 3081
      this.S(this.scope).off('.fndtn.clearing');                                                                       // 3082
      this.S(window).off('.fndtn.clearing');                                                                           // 3083
    },                                                                                                                 // 3084
                                                                                                                       // 3085
    reflow : function () {                                                                                             // 3086
      this.init();                                                                                                     // 3087
    }                                                                                                                  // 3088
  };                                                                                                                   // 3089
                                                                                                                       // 3090
}(jQuery, window, window.document));                                                                                   // 3091
;(function ($, window, document, undefined) {                                                                          // 3092
  'use strict';                                                                                                        // 3093
                                                                                                                       // 3094
  var noop = function () {};                                                                                           // 3095
                                                                                                                       // 3096
  var Orbit = function (el, settings) {                                                                                // 3097
    // Don't reinitialize plugin                                                                                       // 3098
    if (el.hasClass(settings.slides_container_class)) {                                                                // 3099
      return this;                                                                                                     // 3100
    }                                                                                                                  // 3101
                                                                                                                       // 3102
    var self = this,                                                                                                   // 3103
        container,                                                                                                     // 3104
        slides_container = el,                                                                                         // 3105
        number_container,                                                                                              // 3106
        bullets_container,                                                                                             // 3107
        timer_container,                                                                                               // 3108
        idx = 0,                                                                                                       // 3109
        animate,                                                                                                       // 3110
        timer,                                                                                                         // 3111
        locked = false,                                                                                                // 3112
        adjust_height_after = false;                                                                                   // 3113
                                                                                                                       // 3114
    self.slides = function () {                                                                                        // 3115
      return slides_container.children(settings.slide_selector);                                                       // 3116
    };                                                                                                                 // 3117
                                                                                                                       // 3118
    self.slides().first().addClass(settings.active_slide_class);                                                       // 3119
                                                                                                                       // 3120
    self.update_slide_number = function (index) {                                                                      // 3121
      if (settings.slide_number) {                                                                                     // 3122
        number_container.find('span:first').text(parseInt(index) + 1);                                                 // 3123
        number_container.find('span:last').text(self.slides().length);                                                 // 3124
      }                                                                                                                // 3125
      if (settings.bullets) {                                                                                          // 3126
        bullets_container.children().removeClass(settings.bullets_active_class);                                       // 3127
        $(bullets_container.children().get(index)).addClass(settings.bullets_active_class);                            // 3128
      }                                                                                                                // 3129
    };                                                                                                                 // 3130
                                                                                                                       // 3131
    self.update_active_link = function (index) {                                                                       // 3132
      var link = $('[data-orbit-link="' + self.slides().eq(index).attr('data-orbit-slide') + '"]');                    // 3133
      link.siblings().removeClass(settings.bullets_active_class);                                                      // 3134
      link.addClass(settings.bullets_active_class);                                                                    // 3135
    };                                                                                                                 // 3136
                                                                                                                       // 3137
    self.build_markup = function () {                                                                                  // 3138
      slides_container.wrap('<div class="' + settings.container_class + '"></div>');                                   // 3139
      container = slides_container.parent();                                                                           // 3140
      slides_container.addClass(settings.slides_container_class);                                                      // 3141
                                                                                                                       // 3142
      if (settings.stack_on_small) {                                                                                   // 3143
        container.addClass(settings.stack_on_small_class);                                                             // 3144
      }                                                                                                                // 3145
                                                                                                                       // 3146
      if (settings.navigation_arrows) {                                                                                // 3147
        container.append($('<a href="#"><span></span></a>').addClass(settings.prev_class));                            // 3148
        container.append($('<a href="#"><span></span></a>').addClass(settings.next_class));                            // 3149
      }                                                                                                                // 3150
                                                                                                                       // 3151
      if (settings.timer) {                                                                                            // 3152
        timer_container = $('<div>').addClass(settings.timer_container_class);                                         // 3153
        timer_container.append('<span>');                                                                              // 3154
        timer_container.append($('<div>').addClass(settings.timer_progress_class));                                    // 3155
        timer_container.addClass(settings.timer_paused_class);                                                         // 3156
        container.append(timer_container);                                                                             // 3157
      }                                                                                                                // 3158
                                                                                                                       // 3159
      if (settings.slide_number) {                                                                                     // 3160
        number_container = $('<div>').addClass(settings.slide_number_class);                                           // 3161
        number_container.append('<span></span> ' + settings.slide_number_text + ' <span></span>');                     // 3162
        container.append(number_container);                                                                            // 3163
      }                                                                                                                // 3164
                                                                                                                       // 3165
      if (settings.bullets) {                                                                                          // 3166
        bullets_container = $('<ol>').addClass(settings.bullets_container_class);                                      // 3167
        container.append(bullets_container);                                                                           // 3168
        bullets_container.wrap('<div class="orbit-bullets-container"></div>');                                         // 3169
        self.slides().each(function (idx, el) {                                                                        // 3170
          var bullet = $('<li>').attr('data-orbit-slide', idx).on('click', self.link_bullet);;                         // 3171
          bullets_container.append(bullet);                                                                            // 3172
        });                                                                                                            // 3173
      }                                                                                                                // 3174
                                                                                                                       // 3175
    };                                                                                                                 // 3176
                                                                                                                       // 3177
    self._goto = function (next_idx, start_timer) {                                                                    // 3178
      // if (locked) {return false;}                                                                                   // 3179
      if (next_idx === idx) {return false;}                                                                            // 3180
      if (typeof timer === 'object') {timer.restart();}                                                                // 3181
      var slides = self.slides();                                                                                      // 3182
                                                                                                                       // 3183
      var dir = 'next';                                                                                                // 3184
      locked = true;                                                                                                   // 3185
      if (next_idx < idx) {dir = 'prev';}                                                                              // 3186
      if (next_idx >= slides.length) {                                                                                 // 3187
        if (!settings.circular) {                                                                                      // 3188
          return false;                                                                                                // 3189
        }                                                                                                              // 3190
        next_idx = 0;                                                                                                  // 3191
      } else if (next_idx < 0) {                                                                                       // 3192
        if (!settings.circular) {                                                                                      // 3193
          return false;                                                                                                // 3194
        }                                                                                                              // 3195
        next_idx = slides.length - 1;                                                                                  // 3196
      }                                                                                                                // 3197
                                                                                                                       // 3198
      var current = $(slides.get(idx));                                                                                // 3199
      var next = $(slides.get(next_idx));                                                                              // 3200
                                                                                                                       // 3201
      current.css('zIndex', 2);                                                                                        // 3202
      current.removeClass(settings.active_slide_class);                                                                // 3203
      next.css('zIndex', 4).addClass(settings.active_slide_class);                                                     // 3204
                                                                                                                       // 3205
      slides_container.trigger('before-slide-change.fndtn.orbit');                                                     // 3206
      settings.before_slide_change();                                                                                  // 3207
      self.update_active_link(next_idx);                                                                               // 3208
                                                                                                                       // 3209
      var callback = function () {                                                                                     // 3210
        var unlock = function () {                                                                                     // 3211
          idx = next_idx;                                                                                              // 3212
          locked = false;                                                                                              // 3213
          if (start_timer === true) {timer = self.create_timer(); timer.start();}                                      // 3214
          self.update_slide_number(idx);                                                                               // 3215
          slides_container.trigger('after-slide-change.fndtn.orbit', [{slide_number : idx, total_slides : slides.length}]);
          settings.after_slide_change(idx, slides.length);                                                             // 3217
        };                                                                                                             // 3218
        if (slides_container.outerHeight() != next.outerHeight() && settings.variable_height) {                        // 3219
          slides_container.animate({'height': next.outerHeight()}, 250, 'linear', unlock);                             // 3220
        } else {                                                                                                       // 3221
          unlock();                                                                                                    // 3222
        }                                                                                                              // 3223
      };                                                                                                               // 3224
                                                                                                                       // 3225
      if (slides.length === 1) {callback(); return false;}                                                             // 3226
                                                                                                                       // 3227
      var start_animation = function () {                                                                              // 3228
        if (dir === 'next') {animate.next(current, next, callback);}                                                   // 3229
        if (dir === 'prev') {animate.prev(current, next, callback);}                                                   // 3230
      };                                                                                                               // 3231
                                                                                                                       // 3232
      if (next.outerHeight() > slides_container.outerHeight() && settings.variable_height) {                           // 3233
        slides_container.animate({'height': next.outerHeight()}, 250, 'linear', start_animation);                      // 3234
      } else {                                                                                                         // 3235
        start_animation();                                                                                             // 3236
      }                                                                                                                // 3237
    };                                                                                                                 // 3238
                                                                                                                       // 3239
    self.next = function (e) {                                                                                         // 3240
      e.stopImmediatePropagation();                                                                                    // 3241
      e.preventDefault();                                                                                              // 3242
      self._goto(idx + 1);                                                                                             // 3243
    };                                                                                                                 // 3244
                                                                                                                       // 3245
    self.prev = function (e) {                                                                                         // 3246
      e.stopImmediatePropagation();                                                                                    // 3247
      e.preventDefault();                                                                                              // 3248
      self._goto(idx - 1);                                                                                             // 3249
    };                                                                                                                 // 3250
                                                                                                                       // 3251
    self.link_custom = function (e) {                                                                                  // 3252
      e.preventDefault();                                                                                              // 3253
      var link = $(this).attr('data-orbit-link');                                                                      // 3254
      if ((typeof link === 'string') && (link = $.trim(link)) != '') {                                                 // 3255
        var slide = container.find('[data-orbit-slide=' + link + ']');                                                 // 3256
        if (slide.index() != -1) {self._goto(slide.index());}                                                          // 3257
      }                                                                                                                // 3258
    };                                                                                                                 // 3259
                                                                                                                       // 3260
    self.link_bullet = function (e) {                                                                                  // 3261
      var index = $(this).attr('data-orbit-slide');                                                                    // 3262
      if ((typeof index === 'string') && (index = $.trim(index)) != '') {                                              // 3263
        if (isNaN(parseInt(index))) {                                                                                  // 3264
          var slide = container.find('[data-orbit-slide=' + index + ']');                                              // 3265
          if (slide.index() != -1) {self._goto(slide.index() + 1);}                                                    // 3266
        } else {                                                                                                       // 3267
          self._goto(parseInt(index));                                                                                 // 3268
        }                                                                                                              // 3269
      }                                                                                                                // 3270
                                                                                                                       // 3271
    }                                                                                                                  // 3272
                                                                                                                       // 3273
    self.timer_callback = function () {                                                                                // 3274
      self._goto(idx + 1, true);                                                                                       // 3275
    }                                                                                                                  // 3276
                                                                                                                       // 3277
    self.compute_dimensions = function () {                                                                            // 3278
      var current = $(self.slides().get(idx));                                                                         // 3279
      var h = current.outerHeight();                                                                                   // 3280
      if (!settings.variable_height) {                                                                                 // 3281
        self.slides().each(function(){                                                                                 // 3282
          if ($(this).outerHeight() > h) { h = $(this).outerHeight(); }                                                // 3283
        });                                                                                                            // 3284
      }                                                                                                                // 3285
      slides_container.height(h);                                                                                      // 3286
    };                                                                                                                 // 3287
                                                                                                                       // 3288
    self.create_timer = function () {                                                                                  // 3289
      var t = new Timer(                                                                                               // 3290
        container.find('.' + settings.timer_container_class),                                                          // 3291
        settings,                                                                                                      // 3292
        self.timer_callback                                                                                            // 3293
      );                                                                                                               // 3294
      return t;                                                                                                        // 3295
    };                                                                                                                 // 3296
                                                                                                                       // 3297
    self.stop_timer = function () {                                                                                    // 3298
      if (typeof timer === 'object') {                                                                                 // 3299
        timer.stop();                                                                                                  // 3300
      }                                                                                                                // 3301
    };                                                                                                                 // 3302
                                                                                                                       // 3303
    self.toggle_timer = function () {                                                                                  // 3304
      var t = container.find('.' + settings.timer_container_class);                                                    // 3305
      if (t.hasClass(settings.timer_paused_class)) {                                                                   // 3306
        if (typeof timer === 'undefined') {timer = self.create_timer();}                                               // 3307
        timer.start();                                                                                                 // 3308
      } else {                                                                                                         // 3309
        if (typeof timer === 'object') {timer.stop();}                                                                 // 3310
      }                                                                                                                // 3311
    };                                                                                                                 // 3312
                                                                                                                       // 3313
    self.init = function () {                                                                                          // 3314
      self.build_markup();                                                                                             // 3315
      if (settings.timer) {                                                                                            // 3316
        timer = self.create_timer();                                                                                   // 3317
        Foundation.utils.image_loaded(this.slides().children('img'), timer.start);                                     // 3318
      }                                                                                                                // 3319
      animate = new FadeAnimation(settings, slides_container);                                                         // 3320
      if (settings.animation === 'slide') {                                                                            // 3321
        animate = new SlideAnimation(settings, slides_container);                                                      // 3322
      }                                                                                                                // 3323
                                                                                                                       // 3324
      container.on('click', '.' + settings.next_class, self.next);                                                     // 3325
      container.on('click', '.' + settings.prev_class, self.prev);                                                     // 3326
                                                                                                                       // 3327
      if (settings.next_on_click) {                                                                                    // 3328
        container.on('click', '.' + settings.slides_container_class + ' [data-orbit-slide]', self.link_bullet);        // 3329
      }                                                                                                                // 3330
                                                                                                                       // 3331
      container.on('click', self.toggle_timer);                                                                        // 3332
      if (settings.swipe) {                                                                                            // 3333
        container.on('touchstart.fndtn.orbit', function (e) {                                                          // 3334
          if (!e.touches) {e = e.originalEvent;}                                                                       // 3335
          var data = {                                                                                                 // 3336
            start_page_x : e.touches[0].pageX,                                                                         // 3337
            start_page_y : e.touches[0].pageY,                                                                         // 3338
            start_time : (new Date()).getTime(),                                                                       // 3339
            delta_x : 0,                                                                                               // 3340
            is_scrolling : undefined                                                                                   // 3341
          };                                                                                                           // 3342
          container.data('swipe-transition', data);                                                                    // 3343
          e.stopPropagation();                                                                                         // 3344
        })                                                                                                             // 3345
        .on('touchmove.fndtn.orbit', function (e) {                                                                    // 3346
          if (!e.touches) {                                                                                            // 3347
            e = e.originalEvent;                                                                                       // 3348
          }                                                                                                            // 3349
          // Ignore pinch/zoom events                                                                                  // 3350
          if (e.touches.length > 1 || e.scale && e.scale !== 1) {                                                      // 3351
            return;                                                                                                    // 3352
          }                                                                                                            // 3353
                                                                                                                       // 3354
          var data = container.data('swipe-transition');                                                               // 3355
          if (typeof data === 'undefined') {data = {};}                                                                // 3356
                                                                                                                       // 3357
          data.delta_x = e.touches[0].pageX - data.start_page_x;                                                       // 3358
                                                                                                                       // 3359
          if ( typeof data.is_scrolling === 'undefined') {                                                             // 3360
            data.is_scrolling = !!( data.is_scrolling || Math.abs(data.delta_x) < Math.abs(e.touches[0].pageY - data.start_page_y) );
          }                                                                                                            // 3362
                                                                                                                       // 3363
          if (!data.is_scrolling && !data.active) {                                                                    // 3364
            e.preventDefault();                                                                                        // 3365
            var direction = (data.delta_x < 0) ? (idx + 1) : (idx - 1);                                                // 3366
            data.active = true;                                                                                        // 3367
            self._goto(direction);                                                                                     // 3368
          }                                                                                                            // 3369
        })                                                                                                             // 3370
        .on('touchend.fndtn.orbit', function (e) {                                                                     // 3371
          container.data('swipe-transition', {});                                                                      // 3372
          e.stopPropagation();                                                                                         // 3373
        })                                                                                                             // 3374
      }                                                                                                                // 3375
      container.on('mouseenter.fndtn.orbit', function (e) {                                                            // 3376
        if (settings.timer && settings.pause_on_hover) {                                                               // 3377
          self.stop_timer();                                                                                           // 3378
        }                                                                                                              // 3379
      })                                                                                                               // 3380
      .on('mouseleave.fndtn.orbit', function (e) {                                                                     // 3381
        if (settings.timer && settings.resume_on_mouseout) {                                                           // 3382
          timer.start();                                                                                               // 3383
        }                                                                                                              // 3384
      });                                                                                                              // 3385
                                                                                                                       // 3386
      $(document).on('click', '[data-orbit-link]', self.link_custom);                                                  // 3387
      $(window).on('load resize', self.compute_dimensions);                                                            // 3388
      Foundation.utils.image_loaded(this.slides().children('img'), self.compute_dimensions);                           // 3389
      Foundation.utils.image_loaded(this.slides().children('img'), function () {                                       // 3390
        container.prev('.' + settings.preloader_class).css('display', 'none');                                         // 3391
        self.update_slide_number(0);                                                                                   // 3392
        self.update_active_link(0);                                                                                    // 3393
        slides_container.trigger('ready.fndtn.orbit');                                                                 // 3394
      });                                                                                                              // 3395
    };                                                                                                                 // 3396
                                                                                                                       // 3397
    self.init();                                                                                                       // 3398
  };                                                                                                                   // 3399
                                                                                                                       // 3400
  var Timer = function (el, settings, callback) {                                                                      // 3401
    var self = this,                                                                                                   // 3402
        duration = settings.timer_speed,                                                                               // 3403
        progress = el.find('.' + settings.timer_progress_class),                                                       // 3404
        start,                                                                                                         // 3405
        timeout,                                                                                                       // 3406
        left = -1;                                                                                                     // 3407
                                                                                                                       // 3408
    this.update_progress = function (w) {                                                                              // 3409
      var new_progress = progress.clone();                                                                             // 3410
      new_progress.attr('style', '');                                                                                  // 3411
      new_progress.css('width', w + '%');                                                                              // 3412
      progress.replaceWith(new_progress);                                                                              // 3413
      progress = new_progress;                                                                                         // 3414
    };                                                                                                                 // 3415
                                                                                                                       // 3416
    this.restart = function () {                                                                                       // 3417
      clearTimeout(timeout);                                                                                           // 3418
      el.addClass(settings.timer_paused_class);                                                                        // 3419
      left = -1;                                                                                                       // 3420
      self.update_progress(0);                                                                                         // 3421
    };                                                                                                                 // 3422
                                                                                                                       // 3423
    this.start = function () {                                                                                         // 3424
      if (!el.hasClass(settings.timer_paused_class)) {return true;}                                                    // 3425
      left = (left === -1) ? duration : left;                                                                          // 3426
      el.removeClass(settings.timer_paused_class);                                                                     // 3427
      start = new Date().getTime();                                                                                    // 3428
      progress.animate({'width' : '100%'}, left, 'linear');                                                            // 3429
      timeout = setTimeout(function () {                                                                               // 3430
        self.restart();                                                                                                // 3431
        callback();                                                                                                    // 3432
      }, left);                                                                                                        // 3433
      el.trigger('timer-started.fndtn.orbit')                                                                          // 3434
    };                                                                                                                 // 3435
                                                                                                                       // 3436
    this.stop = function () {                                                                                          // 3437
      if (el.hasClass(settings.timer_paused_class)) {return true;}                                                     // 3438
      clearTimeout(timeout);                                                                                           // 3439
      el.addClass(settings.timer_paused_class);                                                                        // 3440
      var end = new Date().getTime();                                                                                  // 3441
      left = left - (end - start);                                                                                     // 3442
      var w = 100 - ((left / duration) * 100);                                                                         // 3443
      self.update_progress(w);                                                                                         // 3444
      el.trigger('timer-stopped.fndtn.orbit');                                                                         // 3445
    };                                                                                                                 // 3446
  };                                                                                                                   // 3447
                                                                                                                       // 3448
  var SlideAnimation = function (settings, container) {                                                                // 3449
    var duration = settings.animation_speed;                                                                           // 3450
    var is_rtl = ($('html[dir=rtl]').length === 1);                                                                    // 3451
    var margin = is_rtl ? 'marginRight' : 'marginLeft';                                                                // 3452
    var animMargin = {};                                                                                               // 3453
    animMargin[margin] = '0%';                                                                                         // 3454
                                                                                                                       // 3455
    this.next = function (current, next, callback) {                                                                   // 3456
      current.animate({marginLeft : '-100%'}, duration);                                                               // 3457
      next.animate(animMargin, duration, function () {                                                                 // 3458
        current.css(margin, '100%');                                                                                   // 3459
        callback();                                                                                                    // 3460
      });                                                                                                              // 3461
    };                                                                                                                 // 3462
                                                                                                                       // 3463
    this.prev = function (current, prev, callback) {                                                                   // 3464
      current.animate({marginLeft : '100%'}, duration);                                                                // 3465
      prev.css(margin, '-100%');                                                                                       // 3466
      prev.animate(animMargin, duration, function () {                                                                 // 3467
        current.css(margin, '100%');                                                                                   // 3468
        callback();                                                                                                    // 3469
      });                                                                                                              // 3470
    };                                                                                                                 // 3471
  };                                                                                                                   // 3472
                                                                                                                       // 3473
  var FadeAnimation = function (settings, container) {                                                                 // 3474
    var duration = settings.animation_speed;                                                                           // 3475
    var is_rtl = ($('html[dir=rtl]').length === 1);                                                                    // 3476
    var margin = is_rtl ? 'marginRight' : 'marginLeft';                                                                // 3477
                                                                                                                       // 3478
    this.next = function (current, next, callback) {                                                                   // 3479
      next.css({'margin' : '0%', 'opacity' : '0.01'});                                                                 // 3480
      next.animate({'opacity' :'1'}, duration, 'linear', function () {                                                 // 3481
        current.css('margin', '100%');                                                                                 // 3482
        callback();                                                                                                    // 3483
      });                                                                                                              // 3484
    };                                                                                                                 // 3485
                                                                                                                       // 3486
    this.prev = function (current, prev, callback) {                                                                   // 3487
      prev.css({'margin' : '0%', 'opacity' : '0.01'});                                                                 // 3488
      prev.animate({'opacity' : '1'}, duration, 'linear', function () {                                                // 3489
        current.css('margin', '100%');                                                                                 // 3490
        callback();                                                                                                    // 3491
      });                                                                                                              // 3492
    };                                                                                                                 // 3493
  };                                                                                                                   // 3494
                                                                                                                       // 3495
  Foundation.libs = Foundation.libs || {};                                                                             // 3496
                                                                                                                       // 3497
  Foundation.libs.orbit = {                                                                                            // 3498
    name : 'orbit',                                                                                                    // 3499
                                                                                                                       // 3500
    version : '5.5.2',                                                                                                 // 3501
                                                                                                                       // 3502
    settings : {                                                                                                       // 3503
      animation : 'slide',                                                                                             // 3504
      timer_speed : 10000,                                                                                             // 3505
      pause_on_hover : true,                                                                                           // 3506
      resume_on_mouseout : false,                                                                                      // 3507
      next_on_click : true,                                                                                            // 3508
      animation_speed : 500,                                                                                           // 3509
      stack_on_small : false,                                                                                          // 3510
      navigation_arrows : true,                                                                                        // 3511
      slide_number : true,                                                                                             // 3512
      slide_number_text : 'of',                                                                                        // 3513
      container_class : 'orbit-container',                                                                             // 3514
      stack_on_small_class : 'orbit-stack-on-small',                                                                   // 3515
      next_class : 'orbit-next',                                                                                       // 3516
      prev_class : 'orbit-prev',                                                                                       // 3517
      timer_container_class : 'orbit-timer',                                                                           // 3518
      timer_paused_class : 'paused',                                                                                   // 3519
      timer_progress_class : 'orbit-progress',                                                                         // 3520
      slides_container_class : 'orbit-slides-container',                                                               // 3521
      preloader_class : 'preloader',                                                                                   // 3522
      slide_selector : '*',                                                                                            // 3523
      bullets_container_class : 'orbit-bullets',                                                                       // 3524
      bullets_active_class : 'active',                                                                                 // 3525
      slide_number_class : 'orbit-slide-number',                                                                       // 3526
      caption_class : 'orbit-caption',                                                                                 // 3527
      active_slide_class : 'active',                                                                                   // 3528
      orbit_transition_class : 'orbit-transitioning',                                                                  // 3529
      bullets : true,                                                                                                  // 3530
      circular : true,                                                                                                 // 3531
      timer : true,                                                                                                    // 3532
      variable_height : false,                                                                                         // 3533
      swipe : true,                                                                                                    // 3534
      before_slide_change : noop,                                                                                      // 3535
      after_slide_change : noop                                                                                        // 3536
    },                                                                                                                 // 3537
                                                                                                                       // 3538
    init : function (scope, method, options) {                                                                         // 3539
      var self = this;                                                                                                 // 3540
      this.bindings(method, options);                                                                                  // 3541
    },                                                                                                                 // 3542
                                                                                                                       // 3543
    events : function (instance) {                                                                                     // 3544
      var orbit_instance = new Orbit(this.S(instance), this.S(instance).data('orbit-init'));                           // 3545
      this.S(instance).data(this.name + '-instance', orbit_instance);                                                  // 3546
    },                                                                                                                 // 3547
                                                                                                                       // 3548
    reflow : function () {                                                                                             // 3549
      var self = this;                                                                                                 // 3550
                                                                                                                       // 3551
      if (self.S(self.scope).is('[data-orbit]')) {                                                                     // 3552
        var $el = self.S(self.scope);                                                                                  // 3553
        var instance = $el.data(self.name + '-instance');                                                              // 3554
        instance.compute_dimensions();                                                                                 // 3555
      } else {                                                                                                         // 3556
        self.S('[data-orbit]', self.scope).each(function (idx, el) {                                                   // 3557
          var $el = self.S(el);                                                                                        // 3558
          var opts = self.data_options($el);                                                                           // 3559
          var instance = $el.data(self.name + '-instance');                                                            // 3560
          instance.compute_dimensions();                                                                               // 3561
        });                                                                                                            // 3562
      }                                                                                                                // 3563
    }                                                                                                                  // 3564
  };                                                                                                                   // 3565
                                                                                                                       // 3566
}(jQuery, window, window.document));                                                                                   // 3567
;(function ($, window, document, undefined) {                                                                          // 3568
  'use strict';                                                                                                        // 3569
                                                                                                                       // 3570
  Foundation.libs.offcanvas = {                                                                                        // 3571
    name : 'offcanvas',                                                                                                // 3572
                                                                                                                       // 3573
    version : '5.5.2',                                                                                                 // 3574
                                                                                                                       // 3575
    settings : {                                                                                                       // 3576
      open_method : 'move',                                                                                            // 3577
      close_on_click : false                                                                                           // 3578
    },                                                                                                                 // 3579
                                                                                                                       // 3580
    init : function (scope, method, options) {                                                                         // 3581
      this.bindings(method, options);                                                                                  // 3582
    },                                                                                                                 // 3583
                                                                                                                       // 3584
    events : function () {                                                                                             // 3585
      var self = this,                                                                                                 // 3586
          S = self.S,                                                                                                  // 3587
          move_class = '',                                                                                             // 3588
          right_postfix = '',                                                                                          // 3589
          left_postfix = '';                                                                                           // 3590
                                                                                                                       // 3591
      if (this.settings.open_method === 'move') {                                                                      // 3592
        move_class = 'move-';                                                                                          // 3593
        right_postfix = 'right';                                                                                       // 3594
        left_postfix = 'left';                                                                                         // 3595
      } else if (this.settings.open_method === 'overlap_single') {                                                     // 3596
        move_class = 'offcanvas-overlap-';                                                                             // 3597
        right_postfix = 'right';                                                                                       // 3598
        left_postfix = 'left';                                                                                         // 3599
      } else if (this.settings.open_method === 'overlap') {                                                            // 3600
        move_class = 'offcanvas-overlap';                                                                              // 3601
      }                                                                                                                // 3602
                                                                                                                       // 3603
      S(this.scope).off('.offcanvas')                                                                                  // 3604
        .on('click.fndtn.offcanvas', '.left-off-canvas-toggle', function (e) {                                         // 3605
          self.click_toggle_class(e, move_class + right_postfix);                                                      // 3606
          if (self.settings.open_method !== 'overlap') {                                                               // 3607
            S('.left-submenu').removeClass(move_class + right_postfix);                                                // 3608
          }                                                                                                            // 3609
          $('.left-off-canvas-toggle').attr('aria-expanded', 'true');                                                  // 3610
        })                                                                                                             // 3611
        .on('click.fndtn.offcanvas', '.left-off-canvas-menu a', function (e) {                                         // 3612
          var settings = self.get_settings(e);                                                                         // 3613
          var parent = S(this).parent();                                                                               // 3614
                                                                                                                       // 3615
          if (settings.close_on_click && !parent.hasClass('has-submenu') && !parent.hasClass('back')) {                // 3616
            self.hide.call(self, move_class + right_postfix, self.get_wrapper(e));                                     // 3617
            parent.parent().removeClass(move_class + right_postfix);                                                   // 3618
          } else if (S(this).parent().hasClass('has-submenu')) {                                                       // 3619
            e.preventDefault();                                                                                        // 3620
            S(this).siblings('.left-submenu').toggleClass(move_class + right_postfix);                                 // 3621
          } else if (parent.hasClass('back')) {                                                                        // 3622
            e.preventDefault();                                                                                        // 3623
            parent.parent().removeClass(move_class + right_postfix);                                                   // 3624
          }                                                                                                            // 3625
          $('.left-off-canvas-toggle').attr('aria-expanded', 'true');                                                  // 3626
        })                                                                                                             // 3627
        .on('click.fndtn.offcanvas', '.right-off-canvas-toggle', function (e) {                                        // 3628
          self.click_toggle_class(e, move_class + left_postfix);                                                       // 3629
          if (self.settings.open_method !== 'overlap') {                                                               // 3630
            S('.right-submenu').removeClass(move_class + left_postfix);                                                // 3631
          }                                                                                                            // 3632
          $('.right-off-canvas-toggle').attr('aria-expanded', 'true');                                                 // 3633
        })                                                                                                             // 3634
        .on('click.fndtn.offcanvas', '.right-off-canvas-menu a', function (e) {                                        // 3635
          var settings = self.get_settings(e);                                                                         // 3636
          var parent = S(this).parent();                                                                               // 3637
                                                                                                                       // 3638
          if (settings.close_on_click && !parent.hasClass('has-submenu') && !parent.hasClass('back')) {                // 3639
            self.hide.call(self, move_class + left_postfix, self.get_wrapper(e));                                      // 3640
            parent.parent().removeClass(move_class + left_postfix);                                                    // 3641
          } else if (S(this).parent().hasClass('has-submenu')) {                                                       // 3642
            e.preventDefault();                                                                                        // 3643
            S(this).siblings('.right-submenu').toggleClass(move_class + left_postfix);                                 // 3644
          } else if (parent.hasClass('back')) {                                                                        // 3645
            e.preventDefault();                                                                                        // 3646
            parent.parent().removeClass(move_class + left_postfix);                                                    // 3647
          }                                                                                                            // 3648
          $('.right-off-canvas-toggle').attr('aria-expanded', 'true');                                                 // 3649
        })                                                                                                             // 3650
        .on('click.fndtn.offcanvas', '.exit-off-canvas', function (e) {                                                // 3651
          self.click_remove_class(e, move_class + left_postfix);                                                       // 3652
          S('.right-submenu').removeClass(move_class + left_postfix);                                                  // 3653
          if (right_postfix) {                                                                                         // 3654
            self.click_remove_class(e, move_class + right_postfix);                                                    // 3655
            S('.left-submenu').removeClass(move_class + left_postfix);                                                 // 3656
          }                                                                                                            // 3657
          $('.right-off-canvas-toggle').attr('aria-expanded', 'true');                                                 // 3658
        })                                                                                                             // 3659
        .on('click.fndtn.offcanvas', '.exit-off-canvas', function (e) {                                                // 3660
          self.click_remove_class(e, move_class + left_postfix);                                                       // 3661
          $('.left-off-canvas-toggle').attr('aria-expanded', 'false');                                                 // 3662
          if (right_postfix) {                                                                                         // 3663
            self.click_remove_class(e, move_class + right_postfix);                                                    // 3664
            $('.right-off-canvas-toggle').attr('aria-expanded', 'false');                                              // 3665
          }                                                                                                            // 3666
        });                                                                                                            // 3667
    },                                                                                                                 // 3668
                                                                                                                       // 3669
    toggle : function (class_name, $off_canvas) {                                                                      // 3670
      $off_canvas = $off_canvas || this.get_wrapper();                                                                 // 3671
      if ($off_canvas.is('.' + class_name)) {                                                                          // 3672
        this.hide(class_name, $off_canvas);                                                                            // 3673
      } else {                                                                                                         // 3674
        this.show(class_name, $off_canvas);                                                                            // 3675
      }                                                                                                                // 3676
    },                                                                                                                 // 3677
                                                                                                                       // 3678
    show : function (class_name, $off_canvas) {                                                                        // 3679
      $off_canvas = $off_canvas || this.get_wrapper();                                                                 // 3680
      $off_canvas.trigger('open.fndtn.offcanvas');                                                                     // 3681
      $off_canvas.addClass(class_name);                                                                                // 3682
    },                                                                                                                 // 3683
                                                                                                                       // 3684
    hide : function (class_name, $off_canvas) {                                                                        // 3685
      $off_canvas = $off_canvas || this.get_wrapper();                                                                 // 3686
      $off_canvas.trigger('close.fndtn.offcanvas');                                                                    // 3687
      $off_canvas.removeClass(class_name);                                                                             // 3688
    },                                                                                                                 // 3689
                                                                                                                       // 3690
    click_toggle_class : function (e, class_name) {                                                                    // 3691
      e.preventDefault();                                                                                              // 3692
      var $off_canvas = this.get_wrapper(e);                                                                           // 3693
      this.toggle(class_name, $off_canvas);                                                                            // 3694
    },                                                                                                                 // 3695
                                                                                                                       // 3696
    click_remove_class : function (e, class_name) {                                                                    // 3697
      e.preventDefault();                                                                                              // 3698
      var $off_canvas = this.get_wrapper(e);                                                                           // 3699
      this.hide(class_name, $off_canvas);                                                                              // 3700
    },                                                                                                                 // 3701
                                                                                                                       // 3702
    get_settings : function (e) {                                                                                      // 3703
      var offcanvas  = this.S(e.target).closest('[' + this.attr_name() + ']');                                         // 3704
      return offcanvas.data(this.attr_name(true) + '-init') || this.settings;                                          // 3705
    },                                                                                                                 // 3706
                                                                                                                       // 3707
    get_wrapper : function (e) {                                                                                       // 3708
      var $off_canvas = this.S(e ? e.target : this.scope).closest('.off-canvas-wrap');                                 // 3709
                                                                                                                       // 3710
      if ($off_canvas.length === 0) {                                                                                  // 3711
        $off_canvas = this.S('.off-canvas-wrap');                                                                      // 3712
      }                                                                                                                // 3713
      return $off_canvas;                                                                                              // 3714
    },                                                                                                                 // 3715
                                                                                                                       // 3716
    reflow : function () {}                                                                                            // 3717
  };                                                                                                                   // 3718
}(jQuery, window, window.document));                                                                                   // 3719
;(function ($, window, document, undefined) {                                                                          // 3720
  'use strict';                                                                                                        // 3721
                                                                                                                       // 3722
  Foundation.libs.alert = {                                                                                            // 3723
    name : 'alert',                                                                                                    // 3724
                                                                                                                       // 3725
    version : '5.5.2',                                                                                                 // 3726
                                                                                                                       // 3727
    settings : {                                                                                                       // 3728
      callback : function () {}                                                                                        // 3729
    },                                                                                                                 // 3730
                                                                                                                       // 3731
    init : function (scope, method, options) {                                                                         // 3732
      this.bindings(method, options);                                                                                  // 3733
    },                                                                                                                 // 3734
                                                                                                                       // 3735
    events : function () {                                                                                             // 3736
      var self = this,                                                                                                 // 3737
          S = this.S;                                                                                                  // 3738
                                                                                                                       // 3739
      $(this.scope).off('.alert').on('click.fndtn.alert', '[' + this.attr_name() + '] .close', function (e) {          // 3740
        var alertBox = S(this).closest('[' + self.attr_name() + ']'),                                                  // 3741
            settings = alertBox.data(self.attr_name(true) + '-init') || self.settings;                                 // 3742
                                                                                                                       // 3743
        e.preventDefault();                                                                                            // 3744
        if (Modernizr.csstransitions) {                                                                                // 3745
          alertBox.addClass('alert-close');                                                                            // 3746
          alertBox.on('transitionend webkitTransitionEnd oTransitionEnd', function (e) {                               // 3747
            S(this).trigger('close.fndtn.alert').remove();                                                             // 3748
            settings.callback();                                                                                       // 3749
          });                                                                                                          // 3750
        } else {                                                                                                       // 3751
          alertBox.fadeOut(300, function () {                                                                          // 3752
            S(this).trigger('close.fndtn.alert').remove();                                                             // 3753
            settings.callback();                                                                                       // 3754
          });                                                                                                          // 3755
        }                                                                                                              // 3756
      });                                                                                                              // 3757
    },                                                                                                                 // 3758
                                                                                                                       // 3759
    reflow : function () {}                                                                                            // 3760
  };                                                                                                                   // 3761
}(jQuery, window, window.document));                                                                                   // 3762
;(function ($, window, document, undefined) {                                                                          // 3763
  'use strict';                                                                                                        // 3764
                                                                                                                       // 3765
  Foundation.libs.reveal = {                                                                                           // 3766
    name : 'reveal',                                                                                                   // 3767
                                                                                                                       // 3768
    version : '5.5.2',                                                                                                 // 3769
                                                                                                                       // 3770
    locked : false,                                                                                                    // 3771
                                                                                                                       // 3772
    settings : {                                                                                                       // 3773
      animation : 'fadeAndPop',                                                                                        // 3774
      animation_speed : 250,                                                                                           // 3775
      close_on_background_click : true,                                                                                // 3776
      close_on_esc : true,                                                                                             // 3777
      dismiss_modal_class : 'close-reveal-modal',                                                                      // 3778
      multiple_opened : false,                                                                                         // 3779
      bg_class : 'reveal-modal-bg',                                                                                    // 3780
      root_element : 'body',                                                                                           // 3781
      open : function(){},                                                                                             // 3782
      opened : function(){},                                                                                           // 3783
      close : function(){},                                                                                            // 3784
      closed : function(){},                                                                                           // 3785
      on_ajax_error: $.noop,                                                                                           // 3786
      bg : $('.reveal-modal-bg'),                                                                                      // 3787
      css : {                                                                                                          // 3788
        open : {                                                                                                       // 3789
          'opacity' : 0,                                                                                               // 3790
          'visibility' : 'visible',                                                                                    // 3791
          'display' : 'block'                                                                                          // 3792
        },                                                                                                             // 3793
        close : {                                                                                                      // 3794
          'opacity' : 1,                                                                                               // 3795
          'visibility' : 'hidden',                                                                                     // 3796
          'display' : 'none'                                                                                           // 3797
        }                                                                                                              // 3798
      }                                                                                                                // 3799
    },                                                                                                                 // 3800
                                                                                                                       // 3801
    init : function (scope, method, options) {                                                                         // 3802
      $.extend(true, this.settings, method, options);                                                                  // 3803
      this.bindings(method, options);                                                                                  // 3804
    },                                                                                                                 // 3805
                                                                                                                       // 3806
    events : function (scope) {                                                                                        // 3807
      var self = this,                                                                                                 // 3808
          S = self.S;                                                                                                  // 3809
                                                                                                                       // 3810
      S(this.scope)                                                                                                    // 3811
        .off('.reveal')                                                                                                // 3812
        .on('click.fndtn.reveal', '[' + this.add_namespace('data-reveal-id') + ']:not([disabled])', function (e) {     // 3813
          e.preventDefault();                                                                                          // 3814
                                                                                                                       // 3815
          if (!self.locked) {                                                                                          // 3816
            var element = S(this),                                                                                     // 3817
                ajax = element.data(self.data_attr('reveal-ajax')),                                                    // 3818
                replaceContentSel = element.data(self.data_attr('reveal-replace-content'));                            // 3819
                                                                                                                       // 3820
            self.locked = true;                                                                                        // 3821
                                                                                                                       // 3822
            if (typeof ajax === 'undefined') {                                                                         // 3823
              self.open.call(self, element);                                                                           // 3824
            } else {                                                                                                   // 3825
              var url = ajax === true ? element.attr('href') : ajax;                                                   // 3826
              self.open.call(self, element, {url : url}, { replaceContentSel : replaceContentSel });                   // 3827
            }                                                                                                          // 3828
          }                                                                                                            // 3829
        });                                                                                                            // 3830
                                                                                                                       // 3831
      S(document)                                                                                                      // 3832
        .on('click.fndtn.reveal', this.close_targets(), function (e) {                                                 // 3833
          e.preventDefault();                                                                                          // 3834
          if (!self.locked) {                                                                                          // 3835
            var settings = S('[' + self.attr_name() + '].open').data(self.attr_name(true) + '-init') || self.settings, // 3836
                bg_clicked = S(e.target)[0] === S('.' + settings.bg_class)[0];                                         // 3837
                                                                                                                       // 3838
            if (bg_clicked) {                                                                                          // 3839
              if (settings.close_on_background_click) {                                                                // 3840
                e.stopPropagation();                                                                                   // 3841
              } else {                                                                                                 // 3842
                return;                                                                                                // 3843
              }                                                                                                        // 3844
            }                                                                                                          // 3845
                                                                                                                       // 3846
            self.locked = true;                                                                                        // 3847
            self.close.call(self, bg_clicked ? S('[' + self.attr_name() + '].open:not(.toback)') : S(this).closest('[' + self.attr_name() + ']'));
          }                                                                                                            // 3849
        });                                                                                                            // 3850
                                                                                                                       // 3851
      if (S('[' + self.attr_name() + ']', this.scope).length > 0) {                                                    // 3852
        S(this.scope)                                                                                                  // 3853
          // .off('.reveal')                                                                                           // 3854
          .on('open.fndtn.reveal', this.settings.open)                                                                 // 3855
          .on('opened.fndtn.reveal', this.settings.opened)                                                             // 3856
          .on('opened.fndtn.reveal', this.open_video)                                                                  // 3857
          .on('close.fndtn.reveal', this.settings.close)                                                               // 3858
          .on('closed.fndtn.reveal', this.settings.closed)                                                             // 3859
          .on('closed.fndtn.reveal', this.close_video);                                                                // 3860
      } else {                                                                                                         // 3861
        S(this.scope)                                                                                                  // 3862
          // .off('.reveal')                                                                                           // 3863
          .on('open.fndtn.reveal', '[' + self.attr_name() + ']', this.settings.open)                                   // 3864
          .on('opened.fndtn.reveal', '[' + self.attr_name() + ']', this.settings.opened)                               // 3865
          .on('opened.fndtn.reveal', '[' + self.attr_name() + ']', this.open_video)                                    // 3866
          .on('close.fndtn.reveal', '[' + self.attr_name() + ']', this.settings.close)                                 // 3867
          .on('closed.fndtn.reveal', '[' + self.attr_name() + ']', this.settings.closed)                               // 3868
          .on('closed.fndtn.reveal', '[' + self.attr_name() + ']', this.close_video);                                  // 3869
      }                                                                                                                // 3870
                                                                                                                       // 3871
      return true;                                                                                                     // 3872
    },                                                                                                                 // 3873
                                                                                                                       // 3874
    // PATCH #3: turning on key up capture only when a reveal window is open                                           // 3875
    key_up_on : function (scope) {                                                                                     // 3876
      var self = this;                                                                                                 // 3877
                                                                                                                       // 3878
      // PATCH #1: fixing multiple keyup event trigger from single key press                                           // 3879
      self.S('body').off('keyup.fndtn.reveal').on('keyup.fndtn.reveal', function ( event ) {                           // 3880
        var open_modal = self.S('[' + self.attr_name() + '].open'),                                                    // 3881
            settings = open_modal.data(self.attr_name(true) + '-init') || self.settings ;                              // 3882
        // PATCH #2: making sure that the close event can be called only while unlocked,                               // 3883
        //           so that multiple keyup.fndtn.reveal events don't prevent clean closing of the reveal window.      // 3884
        if ( settings && event.which === 27  && settings.close_on_esc && !self.locked) { // 27 is the keycode for the Escape key
          self.close.call(self, open_modal);                                                                           // 3886
        }                                                                                                              // 3887
      });                                                                                                              // 3888
                                                                                                                       // 3889
      return true;                                                                                                     // 3890
    },                                                                                                                 // 3891
                                                                                                                       // 3892
    // PATCH #3: turning on key up capture only when a reveal window is open                                           // 3893
    key_up_off : function (scope) {                                                                                    // 3894
      this.S('body').off('keyup.fndtn.reveal');                                                                        // 3895
      return true;                                                                                                     // 3896
    },                                                                                                                 // 3897
                                                                                                                       // 3898
    open : function (target, ajax_settings) {                                                                          // 3899
      var self = this,                                                                                                 // 3900
          modal;                                                                                                       // 3901
                                                                                                                       // 3902
      if (target) {                                                                                                    // 3903
        if (typeof target.selector !== 'undefined') {                                                                  // 3904
          // Find the named node; only use the first one found, since the rest of the code assumes there's only one node
          modal = self.S('#' + target.data(self.data_attr('reveal-id'))).first();                                      // 3906
        } else {                                                                                                       // 3907
          modal = self.S(this.scope);                                                                                  // 3908
                                                                                                                       // 3909
          ajax_settings = target;                                                                                      // 3910
        }                                                                                                              // 3911
      } else {                                                                                                         // 3912
        modal = self.S(this.scope);                                                                                    // 3913
      }                                                                                                                // 3914
                                                                                                                       // 3915
      var settings = modal.data(self.attr_name(true) + '-init');                                                       // 3916
      settings = settings || this.settings;                                                                            // 3917
                                                                                                                       // 3918
                                                                                                                       // 3919
      if (modal.hasClass('open') && target.attr('data-reveal-id') == modal.attr('id')) {                               // 3920
        return self.close(modal);                                                                                      // 3921
      }                                                                                                                // 3922
                                                                                                                       // 3923
      if (!modal.hasClass('open')) {                                                                                   // 3924
        var open_modal = self.S('[' + self.attr_name() + '].open');                                                    // 3925
                                                                                                                       // 3926
        if (typeof modal.data('css-top') === 'undefined') {                                                            // 3927
          modal.data('css-top', parseInt(modal.css('top'), 10))                                                        // 3928
            .data('offset', this.cache_offset(modal));                                                                 // 3929
        }                                                                                                              // 3930
                                                                                                                       // 3931
        modal.attr('tabindex','0').attr('aria-hidden','false');                                                        // 3932
                                                                                                                       // 3933
        this.key_up_on(modal);    // PATCH #3: turning on key up capture only when a reveal window is open             // 3934
                                                                                                                       // 3935
        // Prevent namespace event from triggering twice                                                               // 3936
        modal.on('open.fndtn.reveal', function(e) {                                                                    // 3937
          if (e.namespace !== 'fndtn.reveal') return;                                                                  // 3938
        });                                                                                                            // 3939
                                                                                                                       // 3940
        modal.on('open.fndtn.reveal').trigger('open.fndtn.reveal');                                                    // 3941
                                                                                                                       // 3942
        if (open_modal.length < 1) {                                                                                   // 3943
          this.toggle_bg(modal, true);                                                                                 // 3944
        }                                                                                                              // 3945
                                                                                                                       // 3946
        if (typeof ajax_settings === 'string') {                                                                       // 3947
          ajax_settings = {                                                                                            // 3948
            url : ajax_settings                                                                                        // 3949
          };                                                                                                           // 3950
        }                                                                                                              // 3951
                                                                                                                       // 3952
        if (typeof ajax_settings === 'undefined' || !ajax_settings.url) {                                              // 3953
          if (open_modal.length > 0) {                                                                                 // 3954
            if (settings.multiple_opened) {                                                                            // 3955
              self.to_back(open_modal);                                                                                // 3956
            } else {                                                                                                   // 3957
              self.hide(open_modal, settings.css.close);                                                               // 3958
            }                                                                                                          // 3959
          }                                                                                                            // 3960
                                                                                                                       // 3961
          this.show(modal, settings.css.open);                                                                         // 3962
        } else {                                                                                                       // 3963
          var old_success = typeof ajax_settings.success !== 'undefined' ? ajax_settings.success : null;               // 3964
          $.extend(ajax_settings, {                                                                                    // 3965
            success : function (data, textStatus, jqXHR) {                                                             // 3966
              if ( $.isFunction(old_success) ) {                                                                       // 3967
                var result = old_success(data, textStatus, jqXHR);                                                     // 3968
                if (typeof result == 'string') {                                                                       // 3969
                  data = result;                                                                                       // 3970
                }                                                                                                      // 3971
              }                                                                                                        // 3972
                                                                                                                       // 3973
              if (typeof options !== 'undefined' && typeof options.replaceContentSel !== 'undefined') {                // 3974
                modal.find(options.replaceContentSel).html(data);                                                      // 3975
              } else {                                                                                                 // 3976
                modal.html(data);                                                                                      // 3977
              }                                                                                                        // 3978
                                                                                                                       // 3979
              self.S(modal).foundation('section', 'reflow');                                                           // 3980
              self.S(modal).children().foundation();                                                                   // 3981
                                                                                                                       // 3982
              if (open_modal.length > 0) {                                                                             // 3983
                if (settings.multiple_opened) {                                                                        // 3984
                  self.to_back(open_modal);                                                                            // 3985
                } else {                                                                                               // 3986
                  self.hide(open_modal, settings.css.close);                                                           // 3987
                }                                                                                                      // 3988
              }                                                                                                        // 3989
              self.show(modal, settings.css.open);                                                                     // 3990
            }                                                                                                          // 3991
          });                                                                                                          // 3992
                                                                                                                       // 3993
          // check for if user initalized with error callback                                                          // 3994
          if (settings.on_ajax_error !== $.noop) {                                                                     // 3995
            $.extend(ajax_settings, {                                                                                  // 3996
              error : settings.on_ajax_error                                                                           // 3997
            });                                                                                                        // 3998
          }                                                                                                            // 3999
                                                                                                                       // 4000
          $.ajax(ajax_settings);                                                                                       // 4001
        }                                                                                                              // 4002
      }                                                                                                                // 4003
      self.S(window).trigger('resize');                                                                                // 4004
    },                                                                                                                 // 4005
                                                                                                                       // 4006
    close : function (modal) {                                                                                         // 4007
      var modal = modal && modal.length ? modal : this.S(this.scope),                                                  // 4008
          open_modals = this.S('[' + this.attr_name() + '].open'),                                                     // 4009
          settings = modal.data(this.attr_name(true) + '-init') || this.settings,                                      // 4010
          self = this;                                                                                                 // 4011
                                                                                                                       // 4012
      if (open_modals.length > 0) {                                                                                    // 4013
                                                                                                                       // 4014
        modal.removeAttr('tabindex','0').attr('aria-hidden','true');                                                   // 4015
                                                                                                                       // 4016
        this.locked = true;                                                                                            // 4017
        this.key_up_off(modal);   // PATCH #3: turning on key up capture only when a reveal window is open             // 4018
                                                                                                                       // 4019
        modal.trigger('close.fndtn.reveal');                                                                           // 4020
                                                                                                                       // 4021
        if ((settings.multiple_opened && open_modals.length === 1) || !settings.multiple_opened || modal.length > 1) { // 4022
          self.toggle_bg(modal, false);                                                                                // 4023
          self.to_front(modal);                                                                                        // 4024
        }                                                                                                              // 4025
                                                                                                                       // 4026
        if (settings.multiple_opened) {                                                                                // 4027
          self.hide(modal, settings.css.close, settings);                                                              // 4028
          self.to_front($($.makeArray(open_modals).reverse()[1]));                                                     // 4029
        } else {                                                                                                       // 4030
          self.hide(open_modals, settings.css.close, settings);                                                        // 4031
        }                                                                                                              // 4032
      }                                                                                                                // 4033
    },                                                                                                                 // 4034
                                                                                                                       // 4035
    close_targets : function () {                                                                                      // 4036
      var base = '.' + this.settings.dismiss_modal_class;                                                              // 4037
                                                                                                                       // 4038
      if (this.settings.close_on_background_click) {                                                                   // 4039
        return base + ', .' + this.settings.bg_class;                                                                  // 4040
      }                                                                                                                // 4041
                                                                                                                       // 4042
      return base;                                                                                                     // 4043
    },                                                                                                                 // 4044
                                                                                                                       // 4045
    toggle_bg : function (modal, state) {                                                                              // 4046
      if (this.S('.' + this.settings.bg_class).length === 0) {                                                         // 4047
        this.settings.bg = $('<div />', {'class': this.settings.bg_class})                                             // 4048
          .appendTo('body').hide();                                                                                    // 4049
      }                                                                                                                // 4050
                                                                                                                       // 4051
      var visible = this.settings.bg.filter(':visible').length > 0;                                                    // 4052
      if ( state != visible ) {                                                                                        // 4053
        if ( state == undefined ? visible : !state ) {                                                                 // 4054
          this.hide(this.settings.bg);                                                                                 // 4055
        } else {                                                                                                       // 4056
          this.show(this.settings.bg);                                                                                 // 4057
        }                                                                                                              // 4058
      }                                                                                                                // 4059
    },                                                                                                                 // 4060
                                                                                                                       // 4061
    show : function (el, css) {                                                                                        // 4062
      // is modal                                                                                                      // 4063
      if (css) {                                                                                                       // 4064
        var settings = el.data(this.attr_name(true) + '-init') || this.settings,                                       // 4065
            root_element = settings.root_element,                                                                      // 4066
            context = this;                                                                                            // 4067
                                                                                                                       // 4068
        if (el.parent(root_element).length === 0) {                                                                    // 4069
          var placeholder = el.wrap('<div style="display: none;" />').parent();                                        // 4070
                                                                                                                       // 4071
          el.on('closed.fndtn.reveal.wrapped', function () {                                                           // 4072
            el.detach().appendTo(placeholder);                                                                         // 4073
            el.unwrap().unbind('closed.fndtn.reveal.wrapped');                                                         // 4074
          });                                                                                                          // 4075
                                                                                                                       // 4076
          el.detach().appendTo(root_element);                                                                          // 4077
        }                                                                                                              // 4078
                                                                                                                       // 4079
        var animData = getAnimationData(settings.animation);                                                           // 4080
        if (!animData.animate) {                                                                                       // 4081
          this.locked = false;                                                                                         // 4082
        }                                                                                                              // 4083
        if (animData.pop) {                                                                                            // 4084
          css.top = $(window).scrollTop() - el.data('offset') + 'px';                                                  // 4085
          var end_css = {                                                                                              // 4086
            top: $(window).scrollTop() + el.data('css-top') + 'px',                                                    // 4087
            opacity: 1                                                                                                 // 4088
          };                                                                                                           // 4089
                                                                                                                       // 4090
          return setTimeout(function () {                                                                              // 4091
            return el                                                                                                  // 4092
              .css(css)                                                                                                // 4093
              .animate(end_css, settings.animation_speed, 'linear', function () {                                      // 4094
                context.locked = false;                                                                                // 4095
                el.trigger('opened.fndtn.reveal');                                                                     // 4096
              })                                                                                                       // 4097
              .addClass('open');                                                                                       // 4098
          }, settings.animation_speed / 2);                                                                            // 4099
        }                                                                                                              // 4100
                                                                                                                       // 4101
        if (animData.fade) {                                                                                           // 4102
          css.top = $(window).scrollTop() + el.data('css-top') + 'px';                                                 // 4103
          var end_css = {opacity: 1};                                                                                  // 4104
                                                                                                                       // 4105
          return setTimeout(function () {                                                                              // 4106
            return el                                                                                                  // 4107
              .css(css)                                                                                                // 4108
              .animate(end_css, settings.animation_speed, 'linear', function () {                                      // 4109
                context.locked = false;                                                                                // 4110
                el.trigger('opened.fndtn.reveal');                                                                     // 4111
              })                                                                                                       // 4112
              .addClass('open');                                                                                       // 4113
          }, settings.animation_speed / 2);                                                                            // 4114
        }                                                                                                              // 4115
                                                                                                                       // 4116
        return el.css(css).show().css({opacity : 1}).addClass('open').trigger('opened.fndtn.reveal');                  // 4117
      }                                                                                                                // 4118
                                                                                                                       // 4119
      var settings = this.settings;                                                                                    // 4120
                                                                                                                       // 4121
      // should we animate the background?                                                                             // 4122
      if (getAnimationData(settings.animation).fade) {                                                                 // 4123
        return el.fadeIn(settings.animation_speed / 2);                                                                // 4124
      }                                                                                                                // 4125
                                                                                                                       // 4126
      this.locked = false;                                                                                             // 4127
                                                                                                                       // 4128
      return el.show();                                                                                                // 4129
    },                                                                                                                 // 4130
                                                                                                                       // 4131
    to_back : function(el) {                                                                                           // 4132
      el.addClass('toback');                                                                                           // 4133
    },                                                                                                                 // 4134
                                                                                                                       // 4135
    to_front : function(el) {                                                                                          // 4136
      el.removeClass('toback');                                                                                        // 4137
    },                                                                                                                 // 4138
                                                                                                                       // 4139
    hide : function (el, css) {                                                                                        // 4140
      // is modal                                                                                                      // 4141
      if (css) {                                                                                                       // 4142
        var settings = el.data(this.attr_name(true) + '-init'),                                                        // 4143
            context = this;                                                                                            // 4144
        settings = settings || this.settings;                                                                          // 4145
                                                                                                                       // 4146
        var animData = getAnimationData(settings.animation);                                                           // 4147
        if (!animData.animate) {                                                                                       // 4148
          this.locked = false;                                                                                         // 4149
        }                                                                                                              // 4150
        if (animData.pop) {                                                                                            // 4151
          var end_css = {                                                                                              // 4152
            top: - $(window).scrollTop() - el.data('offset') + 'px',                                                   // 4153
            opacity: 0                                                                                                 // 4154
          };                                                                                                           // 4155
                                                                                                                       // 4156
          return setTimeout(function () {                                                                              // 4157
            return el                                                                                                  // 4158
              .animate(end_css, settings.animation_speed, 'linear', function () {                                      // 4159
                context.locked = false;                                                                                // 4160
                el.css(css).trigger('closed.fndtn.reveal');                                                            // 4161
              })                                                                                                       // 4162
              .removeClass('open');                                                                                    // 4163
          }, settings.animation_speed / 2);                                                                            // 4164
        }                                                                                                              // 4165
                                                                                                                       // 4166
        if (animData.fade) {                                                                                           // 4167
          var end_css = {opacity : 0};                                                                                 // 4168
                                                                                                                       // 4169
          return setTimeout(function () {                                                                              // 4170
            return el                                                                                                  // 4171
              .animate(end_css, settings.animation_speed, 'linear', function () {                                      // 4172
                context.locked = false;                                                                                // 4173
                el.css(css).trigger('closed.fndtn.reveal');                                                            // 4174
              })                                                                                                       // 4175
              .removeClass('open');                                                                                    // 4176
          }, settings.animation_speed / 2);                                                                            // 4177
        }                                                                                                              // 4178
                                                                                                                       // 4179
        return el.hide().css(css).removeClass('open').trigger('closed.fndtn.reveal');                                  // 4180
      }                                                                                                                // 4181
                                                                                                                       // 4182
      var settings = this.settings;                                                                                    // 4183
                                                                                                                       // 4184
      // should we animate the background?                                                                             // 4185
      if (getAnimationData(settings.animation).fade) {                                                                 // 4186
        return el.fadeOut(settings.animation_speed / 2);                                                               // 4187
      }                                                                                                                // 4188
                                                                                                                       // 4189
      return el.hide();                                                                                                // 4190
    },                                                                                                                 // 4191
                                                                                                                       // 4192
    close_video : function (e) {                                                                                       // 4193
      var video = $('.flex-video', e.target),                                                                          // 4194
          iframe = $('iframe', video);                                                                                 // 4195
                                                                                                                       // 4196
      if (iframe.length > 0) {                                                                                         // 4197
        iframe.attr('data-src', iframe[0].src);                                                                        // 4198
        iframe.attr('src', iframe.attr('src'));                                                                        // 4199
        video.hide();                                                                                                  // 4200
      }                                                                                                                // 4201
    },                                                                                                                 // 4202
                                                                                                                       // 4203
    open_video : function (e) {                                                                                        // 4204
      var video = $('.flex-video', e.target),                                                                          // 4205
          iframe = video.find('iframe');                                                                               // 4206
                                                                                                                       // 4207
      if (iframe.length > 0) {                                                                                         // 4208
        var data_src = iframe.attr('data-src');                                                                        // 4209
        if (typeof data_src === 'string') {                                                                            // 4210
          iframe[0].src = iframe.attr('data-src');                                                                     // 4211
        } else {                                                                                                       // 4212
          var src = iframe[0].src;                                                                                     // 4213
          iframe[0].src = undefined;                                                                                   // 4214
          iframe[0].src = src;                                                                                         // 4215
        }                                                                                                              // 4216
        video.show();                                                                                                  // 4217
      }                                                                                                                // 4218
    },                                                                                                                 // 4219
                                                                                                                       // 4220
    data_attr : function (str) {                                                                                       // 4221
      if (this.namespace.length > 0) {                                                                                 // 4222
        return this.namespace + '-' + str;                                                                             // 4223
      }                                                                                                                // 4224
                                                                                                                       // 4225
      return str;                                                                                                      // 4226
    },                                                                                                                 // 4227
                                                                                                                       // 4228
    cache_offset : function (modal) {                                                                                  // 4229
      var offset = modal.show().height() + parseInt(modal.css('top'), 10) + modal.scrollY;                             // 4230
                                                                                                                       // 4231
      modal.hide();                                                                                                    // 4232
                                                                                                                       // 4233
      return offset;                                                                                                   // 4234
    },                                                                                                                 // 4235
                                                                                                                       // 4236
    off : function () {                                                                                                // 4237
      $(this.scope).off('.fndtn.reveal');                                                                              // 4238
    },                                                                                                                 // 4239
                                                                                                                       // 4240
    reflow : function () {}                                                                                            // 4241
  };                                                                                                                   // 4242
                                                                                                                       // 4243
  /*                                                                                                                   // 4244
   * getAnimationData('popAndFade') // {animate: true,  pop: true,  fade: true}                                        // 4245
   * getAnimationData('fade')       // {animate: true,  pop: false, fade: true}                                        // 4246
   * getAnimationData('pop')        // {animate: true,  pop: true,  fade: false}                                       // 4247
   * getAnimationData('foo')        // {animate: false, pop: false, fade: false}                                       // 4248
   * getAnimationData(null)         // {animate: false, pop: false, fade: false}                                       // 4249
   */                                                                                                                  // 4250
  function getAnimationData(str) {                                                                                     // 4251
    var fade = /fade/i.test(str);                                                                                      // 4252
    var pop = /pop/i.test(str);                                                                                        // 4253
    return {                                                                                                           // 4254
      animate : fade || pop,                                                                                           // 4255
      pop : pop,                                                                                                       // 4256
      fade : fade                                                                                                      // 4257
    };                                                                                                                 // 4258
  }                                                                                                                    // 4259
}(jQuery, window, window.document));                                                                                   // 4260
;(function ($, window, document, undefined) {                                                                          // 4261
  'use strict';                                                                                                        // 4262
                                                                                                                       // 4263
  Foundation.libs.interchange = {                                                                                      // 4264
    name : 'interchange',                                                                                              // 4265
                                                                                                                       // 4266
    version : '5.5.2',                                                                                                 // 4267
                                                                                                                       // 4268
    cache : {},                                                                                                        // 4269
                                                                                                                       // 4270
    images_loaded : false,                                                                                             // 4271
    nodes_loaded : false,                                                                                              // 4272
                                                                                                                       // 4273
    settings : {                                                                                                       // 4274
      load_attr : 'interchange',                                                                                       // 4275
                                                                                                                       // 4276
      named_queries : {                                                                                                // 4277
        'default'     : 'only screen',                                                                                 // 4278
        'small'       : Foundation.media_queries['small'],                                                             // 4279
        'small-only'  : Foundation.media_queries['small-only'],                                                        // 4280
        'medium'      : Foundation.media_queries['medium'],                                                            // 4281
        'medium-only' : Foundation.media_queries['medium-only'],                                                       // 4282
        'large'       : Foundation.media_queries['large'],                                                             // 4283
        'large-only'  : Foundation.media_queries['large-only'],                                                        // 4284
        'xlarge'      : Foundation.media_queries['xlarge'],                                                            // 4285
        'xlarge-only' : Foundation.media_queries['xlarge-only'],                                                       // 4286
        'xxlarge'     : Foundation.media_queries['xxlarge'],                                                           // 4287
        'landscape'   : 'only screen and (orientation: landscape)',                                                    // 4288
        'portrait'    : 'only screen and (orientation: portrait)',                                                     // 4289
        'retina'      : 'only screen and (-webkit-min-device-pixel-ratio: 2),' +                                       // 4290
          'only screen and (min--moz-device-pixel-ratio: 2),' +                                                        // 4291
          'only screen and (-o-min-device-pixel-ratio: 2/1),' +                                                        // 4292
          'only screen and (min-device-pixel-ratio: 2),' +                                                             // 4293
          'only screen and (min-resolution: 192dpi),' +                                                                // 4294
          'only screen and (min-resolution: 2dppx)'                                                                    // 4295
      },                                                                                                               // 4296
                                                                                                                       // 4297
      directives : {                                                                                                   // 4298
        replace : function (el, path, trigger) {                                                                       // 4299
          // The trigger argument, if called within the directive, fires                                               // 4300
          // an event named after the directive on the element, passing                                                // 4301
          // any parameters along to the event that you pass to trigger.                                               // 4302
          //                                                                                                           // 4303
          // ex. trigger(), trigger([a, b, c]), or trigger(a, b, c)                                                    // 4304
          //                                                                                                           // 4305
          // This allows you to bind a callback like so:                                                               // 4306
          // $('#interchangeContainer').on('replace', function (e, a, b, c) {                                          // 4307
          //   console.log($(this).html(), a, b, c);                                                                   // 4308
          // });                                                                                                       // 4309
                                                                                                                       // 4310
          if (el !== null && /IMG/.test(el[0].nodeName)) {                                                             // 4311
            var orig_path = el[0].src;                                                                                 // 4312
                                                                                                                       // 4313
            if (new RegExp(path, 'i').test(orig_path)) {                                                               // 4314
              return;                                                                                                  // 4315
            }                                                                                                          // 4316
                                                                                                                       // 4317
            el.attr("src", path);                                                                                      // 4318
                                                                                                                       // 4319
            return trigger(el[0].src);                                                                                 // 4320
          }                                                                                                            // 4321
          var last_path = el.data(this.data_attr + '-last-path'),                                                      // 4322
              self = this;                                                                                             // 4323
                                                                                                                       // 4324
          if (last_path == path) {                                                                                     // 4325
            return;                                                                                                    // 4326
          }                                                                                                            // 4327
                                                                                                                       // 4328
          if (/\.(gif|jpg|jpeg|tiff|png)([?#].*)?/i.test(path)) {                                                      // 4329
            $(el).css('background-image', 'url(' + path + ')');                                                        // 4330
            el.data('interchange-last-path', path);                                                                    // 4331
            return trigger(path);                                                                                      // 4332
          }                                                                                                            // 4333
                                                                                                                       // 4334
          return $.get(path, function (response) {                                                                     // 4335
            el.html(response);                                                                                         // 4336
            el.data(self.data_attr + '-last-path', path);                                                              // 4337
            trigger();                                                                                                 // 4338
          });                                                                                                          // 4339
                                                                                                                       // 4340
        }                                                                                                              // 4341
      }                                                                                                                // 4342
    },                                                                                                                 // 4343
                                                                                                                       // 4344
    init : function (scope, method, options) {                                                                         // 4345
      Foundation.inherit(this, 'throttle random_str');                                                                 // 4346
                                                                                                                       // 4347
      this.data_attr = this.set_data_attr();                                                                           // 4348
      $.extend(true, this.settings, method, options);                                                                  // 4349
      this.bindings(method, options);                                                                                  // 4350
      this.reflow();                                                                                                   // 4351
    },                                                                                                                 // 4352
                                                                                                                       // 4353
    get_media_hash : function () {                                                                                     // 4354
        var mediaHash = '';                                                                                            // 4355
        for (var queryName in this.settings.named_queries ) {                                                          // 4356
            mediaHash += matchMedia(this.settings.named_queries[queryName]).matches.toString();                        // 4357
        }                                                                                                              // 4358
        return mediaHash;                                                                                              // 4359
    },                                                                                                                 // 4360
                                                                                                                       // 4361
    events : function () {                                                                                             // 4362
      var self = this, prevMediaHash;                                                                                  // 4363
                                                                                                                       // 4364
      $(window)                                                                                                        // 4365
        .off('.interchange')                                                                                           // 4366
        .on('resize.fndtn.interchange', self.throttle(function () {                                                    // 4367
            var currMediaHash = self.get_media_hash();                                                                 // 4368
            if (currMediaHash !== prevMediaHash) {                                                                     // 4369
                self.resize();                                                                                         // 4370
            }                                                                                                          // 4371
            prevMediaHash = currMediaHash;                                                                             // 4372
        }, 50));                                                                                                       // 4373
                                                                                                                       // 4374
      return this;                                                                                                     // 4375
    },                                                                                                                 // 4376
                                                                                                                       // 4377
    resize : function () {                                                                                             // 4378
      var cache = this.cache;                                                                                          // 4379
                                                                                                                       // 4380
      if (!this.images_loaded || !this.nodes_loaded) {                                                                 // 4381
        setTimeout($.proxy(this.resize, this), 50);                                                                    // 4382
        return;                                                                                                        // 4383
      }                                                                                                                // 4384
                                                                                                                       // 4385
      for (var uuid in cache) {                                                                                        // 4386
        if (cache.hasOwnProperty(uuid)) {                                                                              // 4387
          var passed = this.results(uuid, cache[uuid]);                                                                // 4388
          if (passed) {                                                                                                // 4389
            this.settings.directives[passed                                                                            // 4390
              .scenario[1]].call(this, passed.el, passed.scenario[0], (function (passed) {                             // 4391
                if (arguments[0] instanceof Array) {                                                                   // 4392
                  var args = arguments[0];                                                                             // 4393
                } else {                                                                                               // 4394
                  var args = Array.prototype.slice.call(arguments, 0);                                                 // 4395
                }                                                                                                      // 4396
                                                                                                                       // 4397
                return function() {                                                                                    // 4398
                  passed.el.trigger(passed.scenario[1], args);                                                         // 4399
                }                                                                                                      // 4400
              }(passed)));                                                                                             // 4401
          }                                                                                                            // 4402
        }                                                                                                              // 4403
      }                                                                                                                // 4404
                                                                                                                       // 4405
    },                                                                                                                 // 4406
                                                                                                                       // 4407
    results : function (uuid, scenarios) {                                                                             // 4408
      var count = scenarios.length;                                                                                    // 4409
                                                                                                                       // 4410
      if (count > 0) {                                                                                                 // 4411
        var el = this.S('[' + this.add_namespace('data-uuid') + '="' + uuid + '"]');                                   // 4412
                                                                                                                       // 4413
        while (count--) {                                                                                              // 4414
          var mq, rule = scenarios[count][2];                                                                          // 4415
          if (this.settings.named_queries.hasOwnProperty(rule)) {                                                      // 4416
            mq = matchMedia(this.settings.named_queries[rule]);                                                        // 4417
          } else {                                                                                                     // 4418
            mq = matchMedia(rule);                                                                                     // 4419
          }                                                                                                            // 4420
          if (mq.matches) {                                                                                            // 4421
            return {el : el, scenario : scenarios[count]};                                                             // 4422
          }                                                                                                            // 4423
        }                                                                                                              // 4424
      }                                                                                                                // 4425
                                                                                                                       // 4426
      return false;                                                                                                    // 4427
    },                                                                                                                 // 4428
                                                                                                                       // 4429
    load : function (type, force_update) {                                                                             // 4430
      if (typeof this['cached_' + type] === 'undefined' || force_update) {                                             // 4431
        this['update_' + type]();                                                                                      // 4432
      }                                                                                                                // 4433
                                                                                                                       // 4434
      return this['cached_' + type];                                                                                   // 4435
    },                                                                                                                 // 4436
                                                                                                                       // 4437
    update_images : function () {                                                                                      // 4438
      var images = this.S('img[' + this.data_attr + ']'),                                                              // 4439
          count = images.length,                                                                                       // 4440
          i = count,                                                                                                   // 4441
          loaded_count = 0,                                                                                            // 4442
          data_attr = this.data_attr;                                                                                  // 4443
                                                                                                                       // 4444
      this.cache = {};                                                                                                 // 4445
      this.cached_images = [];                                                                                         // 4446
      this.images_loaded = (count === 0);                                                                              // 4447
                                                                                                                       // 4448
      while (i--) {                                                                                                    // 4449
        loaded_count++;                                                                                                // 4450
        if (images[i]) {                                                                                               // 4451
          var str = images[i].getAttribute(data_attr) || '';                                                           // 4452
                                                                                                                       // 4453
          if (str.length > 0) {                                                                                        // 4454
            this.cached_images.push(images[i]);                                                                        // 4455
          }                                                                                                            // 4456
        }                                                                                                              // 4457
                                                                                                                       // 4458
        if (loaded_count === count) {                                                                                  // 4459
          this.images_loaded = true;                                                                                   // 4460
          this.enhance('images');                                                                                      // 4461
        }                                                                                                              // 4462
      }                                                                                                                // 4463
                                                                                                                       // 4464
      return this;                                                                                                     // 4465
    },                                                                                                                 // 4466
                                                                                                                       // 4467
    update_nodes : function () {                                                                                       // 4468
      var nodes = this.S('[' + this.data_attr + ']').not('img'),                                                       // 4469
          count = nodes.length,                                                                                        // 4470
          i = count,                                                                                                   // 4471
          loaded_count = 0,                                                                                            // 4472
          data_attr = this.data_attr;                                                                                  // 4473
                                                                                                                       // 4474
      this.cached_nodes = [];                                                                                          // 4475
      this.nodes_loaded = (count === 0);                                                                               // 4476
                                                                                                                       // 4477
      while (i--) {                                                                                                    // 4478
        loaded_count++;                                                                                                // 4479
        var str = nodes[i].getAttribute(data_attr) || '';                                                              // 4480
                                                                                                                       // 4481
        if (str.length > 0) {                                                                                          // 4482
          this.cached_nodes.push(nodes[i]);                                                                            // 4483
        }                                                                                                              // 4484
                                                                                                                       // 4485
        if (loaded_count === count) {                                                                                  // 4486
          this.nodes_loaded = true;                                                                                    // 4487
          this.enhance('nodes');                                                                                       // 4488
        }                                                                                                              // 4489
      }                                                                                                                // 4490
                                                                                                                       // 4491
      return this;                                                                                                     // 4492
    },                                                                                                                 // 4493
                                                                                                                       // 4494
    enhance : function (type) {                                                                                        // 4495
      var i = this['cached_' + type].length;                                                                           // 4496
                                                                                                                       // 4497
      while (i--) {                                                                                                    // 4498
        this.object($(this['cached_' + type][i]));                                                                     // 4499
      }                                                                                                                // 4500
                                                                                                                       // 4501
      return $(window).trigger('resize.fndtn.interchange');                                                            // 4502
    },                                                                                                                 // 4503
                                                                                                                       // 4504
    convert_directive : function (directive) {                                                                         // 4505
                                                                                                                       // 4506
      var trimmed = this.trim(directive);                                                                              // 4507
                                                                                                                       // 4508
      if (trimmed.length > 0) {                                                                                        // 4509
        return trimmed;                                                                                                // 4510
      }                                                                                                                // 4511
                                                                                                                       // 4512
      return 'replace';                                                                                                // 4513
    },                                                                                                                 // 4514
                                                                                                                       // 4515
    parse_scenario : function (scenario) {                                                                             // 4516
      // This logic had to be made more complex since some users were using commas in the url path                     // 4517
      // So we cannot simply just split on a comma                                                                     // 4518
                                                                                                                       // 4519
      var directive_match = scenario[0].match(/(.+),\s*(\w+)\s*$/),                                                    // 4520
      // getting the mq has gotten a bit complicated since we started accounting for several use cases                 // 4521
      // of URLs. For now we'll continue to match these scenarios, but we may consider having these scenarios          // 4522
      // as nested objects or arrays in F6.                                                                            // 4523
      // regex: match everything before close parenthesis for mq                                                       // 4524
      media_query         = scenario[1].match(/(.*)\)/);                                                               // 4525
                                                                                                                       // 4526
      if (directive_match) {                                                                                           // 4527
        var path  = directive_match[1],                                                                                // 4528
        directive = directive_match[2];                                                                                // 4529
                                                                                                                       // 4530
      } else {                                                                                                         // 4531
        var cached_split = scenario[0].split(/,\s*$/),                                                                 // 4532
        path             = cached_split[0],                                                                            // 4533
        directive        = '';                                                                                         // 4534
      }                                                                                                                // 4535
                                                                                                                       // 4536
      return [this.trim(path), this.convert_directive(directive), this.trim(media_query[1])];                          // 4537
    },                                                                                                                 // 4538
                                                                                                                       // 4539
    object : function (el) {                                                                                           // 4540
      var raw_arr = this.parse_data_attr(el),                                                                          // 4541
          scenarios = [],                                                                                              // 4542
          i = raw_arr.length;                                                                                          // 4543
                                                                                                                       // 4544
      if (i > 0) {                                                                                                     // 4545
        while (i--) {                                                                                                  // 4546
          // split array between comma delimited content and mq                                                        // 4547
          // regex: comma, optional space, open parenthesis                                                            // 4548
          var scenario = raw_arr[i].split(/,\s?\(/);                                                                   // 4549
                                                                                                                       // 4550
          if (scenario.length > 1) {                                                                                   // 4551
            var params = this.parse_scenario(scenario);                                                                // 4552
            scenarios.push(params);                                                                                    // 4553
          }                                                                                                            // 4554
        }                                                                                                              // 4555
      }                                                                                                                // 4556
                                                                                                                       // 4557
      return this.store(el, scenarios);                                                                                // 4558
    },                                                                                                                 // 4559
                                                                                                                       // 4560
    store : function (el, scenarios) {                                                                                 // 4561
      var uuid = this.random_str(),                                                                                    // 4562
          current_uuid = el.data(this.add_namespace('uuid', true));                                                    // 4563
                                                                                                                       // 4564
      if (this.cache[current_uuid]) {                                                                                  // 4565
        return this.cache[current_uuid];                                                                               // 4566
      }                                                                                                                // 4567
                                                                                                                       // 4568
      el.attr(this.add_namespace('data-uuid'), uuid);                                                                  // 4569
      return this.cache[uuid] = scenarios;                                                                             // 4570
    },                                                                                                                 // 4571
                                                                                                                       // 4572
    trim : function (str) {                                                                                            // 4573
                                                                                                                       // 4574
      if (typeof str === 'string') {                                                                                   // 4575
        return $.trim(str);                                                                                            // 4576
      }                                                                                                                // 4577
                                                                                                                       // 4578
      return str;                                                                                                      // 4579
    },                                                                                                                 // 4580
                                                                                                                       // 4581
    set_data_attr : function (init) {                                                                                  // 4582
      if (init) {                                                                                                      // 4583
        if (this.namespace.length > 0) {                                                                               // 4584
          return this.namespace + '-' + this.settings.load_attr;                                                       // 4585
        }                                                                                                              // 4586
                                                                                                                       // 4587
        return this.settings.load_attr;                                                                                // 4588
      }                                                                                                                // 4589
                                                                                                                       // 4590
      if (this.namespace.length > 0) {                                                                                 // 4591
        return 'data-' + this.namespace + '-' + this.settings.load_attr;                                               // 4592
      }                                                                                                                // 4593
                                                                                                                       // 4594
      return 'data-' + this.settings.load_attr;                                                                        // 4595
    },                                                                                                                 // 4596
                                                                                                                       // 4597
    parse_data_attr : function (el) {                                                                                  // 4598
      var raw = el.attr(this.attr_name()).split(/\[(.*?)\]/),                                                          // 4599
          i = raw.length,                                                                                              // 4600
          output = [];                                                                                                 // 4601
                                                                                                                       // 4602
      while (i--) {                                                                                                    // 4603
        if (raw[i].replace(/[\W\d]+/, '').length > 4) {                                                                // 4604
          output.push(raw[i]);                                                                                         // 4605
        }                                                                                                              // 4606
      }                                                                                                                // 4607
                                                                                                                       // 4608
      return output;                                                                                                   // 4609
    },                                                                                                                 // 4610
                                                                                                                       // 4611
    reflow : function () {                                                                                             // 4612
      this.load('images', true);                                                                                       // 4613
      this.load('nodes', true);                                                                                        // 4614
    }                                                                                                                  // 4615
                                                                                                                       // 4616
  };                                                                                                                   // 4617
                                                                                                                       // 4618
}(jQuery, window, window.document));                                                                                   // 4619
;(function ($, window, document, undefined) {                                                                          // 4620
  'use strict';                                                                                                        // 4621
                                                                                                                       // 4622
  Foundation.libs['magellan-expedition'] = {                                                                           // 4623
    name : 'magellan-expedition',                                                                                      // 4624
                                                                                                                       // 4625
    version : '5.5.2',                                                                                                 // 4626
                                                                                                                       // 4627
    settings : {                                                                                                       // 4628
      active_class : 'active',                                                                                         // 4629
      threshold : 0, // pixels from the top of the expedition for it to become fixes                                   // 4630
      destination_threshold : 20, // pixels from the top of destination for it to be considered active                 // 4631
      throttle_delay : 30, // calculation throttling to increase framerate                                             // 4632
      fixed_top : 0, // top distance in pixels assigend to the fixed element on scroll                                 // 4633
      offset_by_height : true,  // whether to offset the destination by the expedition height. Usually you want this to be true, unless your expedition is on the side.
      duration : 700, // animation duration time                                                                       // 4635
      easing : 'swing' // animation easing                                                                             // 4636
    },                                                                                                                 // 4637
                                                                                                                       // 4638
    init : function (scope, method, options) {                                                                         // 4639
      Foundation.inherit(this, 'throttle');                                                                            // 4640
      this.bindings(method, options);                                                                                  // 4641
    },                                                                                                                 // 4642
                                                                                                                       // 4643
    events : function () {                                                                                             // 4644
      var self = this,                                                                                                 // 4645
          S = self.S,                                                                                                  // 4646
          settings = self.settings;                                                                                    // 4647
                                                                                                                       // 4648
      // initialize expedition offset                                                                                  // 4649
      self.set_expedition_position();                                                                                  // 4650
                                                                                                                       // 4651
      S(self.scope)                                                                                                    // 4652
        .off('.magellan')                                                                                              // 4653
        .on('click.fndtn.magellan', '[' + self.add_namespace('data-magellan-arrival') + '] a[href*=#]', function (e) { // 4654
          var sameHost = ((this.hostname === location.hostname) || !this.hostname),                                    // 4655
              samePath = self.filterPathname(location.pathname) === self.filterPathname(this.pathname),                // 4656
              testHash = this.hash.replace(/(:|\.|\/)/g, '\\$1'),                                                      // 4657
              anchor = this;                                                                                           // 4658
                                                                                                                       // 4659
          if (sameHost && samePath && testHash) {                                                                      // 4660
            e.preventDefault();                                                                                        // 4661
            var expedition = $(this).closest('[' + self.attr_name() + ']'),                                            // 4662
                settings = expedition.data('magellan-expedition-init'),                                                // 4663
                hash = this.hash.split('#').join(''),                                                                  // 4664
                target = $('a[name="' + hash + '"]');                                                                  // 4665
                                                                                                                       // 4666
            if (target.length === 0) {                                                                                 // 4667
              target = $('#' + hash);                                                                                  // 4668
                                                                                                                       // 4669
            }                                                                                                          // 4670
                                                                                                                       // 4671
            // Account for expedition height if fixed position                                                         // 4672
            var scroll_top = target.offset().top - settings.destination_threshold + 1;                                 // 4673
            if (settings.offset_by_height) {                                                                           // 4674
              scroll_top = scroll_top - expedition.outerHeight();                                                      // 4675
            }                                                                                                          // 4676
            $('html, body').stop().animate({                                                                           // 4677
              'scrollTop' : scroll_top                                                                                 // 4678
            }, settings.duration, settings.easing, function () {                                                       // 4679
              if (history.pushState) {                                                                                 // 4680
                        history.pushState(null, null, anchor.pathname + '#' + hash);                                   // 4681
              }                                                                                                        // 4682
                    else {                                                                                             // 4683
                        location.hash = anchor.pathname + '#' + hash;                                                  // 4684
                    }                                                                                                  // 4685
            });                                                                                                        // 4686
          }                                                                                                            // 4687
        })                                                                                                             // 4688
        .on('scroll.fndtn.magellan', self.throttle(this.check_for_arrivals.bind(this), settings.throttle_delay));      // 4689
    },                                                                                                                 // 4690
                                                                                                                       // 4691
    check_for_arrivals : function () {                                                                                 // 4692
      var self = this;                                                                                                 // 4693
      self.update_arrivals();                                                                                          // 4694
      self.update_expedition_positions();                                                                              // 4695
    },                                                                                                                 // 4696
                                                                                                                       // 4697
    set_expedition_position : function () {                                                                            // 4698
      var self = this;                                                                                                 // 4699
      $('[' + this.attr_name() + '=fixed]', self.scope).each(function (idx, el) {                                      // 4700
        var expedition = $(this),                                                                                      // 4701
            settings = expedition.data('magellan-expedition-init'),                                                    // 4702
            styles = expedition.attr('styles'), // save styles                                                         // 4703
            top_offset, fixed_top;                                                                                     // 4704
                                                                                                                       // 4705
        expedition.attr('style', '');                                                                                  // 4706
        top_offset = expedition.offset().top + settings.threshold;                                                     // 4707
                                                                                                                       // 4708
        //set fixed-top by attribute                                                                                   // 4709
        fixed_top = parseInt(expedition.data('magellan-fixed-top'));                                                   // 4710
        if (!isNaN(fixed_top)) {                                                                                       // 4711
          self.settings.fixed_top = fixed_top;                                                                         // 4712
        }                                                                                                              // 4713
                                                                                                                       // 4714
        expedition.data(self.data_attr('magellan-top-offset'), top_offset);                                            // 4715
        expedition.attr('style', styles);                                                                              // 4716
      });                                                                                                              // 4717
    },                                                                                                                 // 4718
                                                                                                                       // 4719
    update_expedition_positions : function () {                                                                        // 4720
      var self = this,                                                                                                 // 4721
          window_top_offset = $(window).scrollTop();                                                                   // 4722
                                                                                                                       // 4723
      $('[' + this.attr_name() + '=fixed]', self.scope).each(function () {                                             // 4724
        var expedition = $(this),                                                                                      // 4725
            settings = expedition.data('magellan-expedition-init'),                                                    // 4726
            styles = expedition.attr('style'), // save styles                                                          // 4727
            top_offset = expedition.data('magellan-top-offset');                                                       // 4728
                                                                                                                       // 4729
        //scroll to the top distance                                                                                   // 4730
        if (window_top_offset + self.settings.fixed_top >= top_offset) {                                               // 4731
          // Placeholder allows height calculations to be consistent even when                                         // 4732
          // appearing to switch between fixed/non-fixed placement                                                     // 4733
          var placeholder = expedition.prev('[' + self.add_namespace('data-magellan-expedition-clone') + ']');         // 4734
          if (placeholder.length === 0) {                                                                              // 4735
            placeholder = expedition.clone();                                                                          // 4736
            placeholder.removeAttr(self.attr_name());                                                                  // 4737
            placeholder.attr(self.add_namespace('data-magellan-expedition-clone'), '');                                // 4738
            expedition.before(placeholder);                                                                            // 4739
          }                                                                                                            // 4740
          expedition.css({position :'fixed', top : settings.fixed_top}).addClass('fixed');                             // 4741
        } else {                                                                                                       // 4742
          expedition.prev('[' + self.add_namespace('data-magellan-expedition-clone') + ']').remove();                  // 4743
          expedition.attr('style', styles).css('position', '').css('top', '').removeClass('fixed');                    // 4744
        }                                                                                                              // 4745
      });                                                                                                              // 4746
    },                                                                                                                 // 4747
                                                                                                                       // 4748
    update_arrivals : function () {                                                                                    // 4749
      var self = this,                                                                                                 // 4750
          window_top_offset = $(window).scrollTop();                                                                   // 4751
                                                                                                                       // 4752
      $('[' + this.attr_name() + ']', self.scope).each(function () {                                                   // 4753
        var expedition = $(this),                                                                                      // 4754
            settings = expedition.data(self.attr_name(true) + '-init'),                                                // 4755
            offsets = self.offsets(expedition, window_top_offset),                                                     // 4756
            arrivals = expedition.find('[' + self.add_namespace('data-magellan-arrival') + ']'),                       // 4757
            active_item = false;                                                                                       // 4758
        offsets.each(function (idx, item) {                                                                            // 4759
          if (item.viewport_offset >= item.top_offset) {                                                               // 4760
            var arrivals = expedition.find('[' + self.add_namespace('data-magellan-arrival') + ']');                   // 4761
            arrivals.not(item.arrival).removeClass(settings.active_class);                                             // 4762
            item.arrival.addClass(settings.active_class);                                                              // 4763
            active_item = true;                                                                                        // 4764
            return true;                                                                                               // 4765
          }                                                                                                            // 4766
        });                                                                                                            // 4767
                                                                                                                       // 4768
        if (!active_item) {                                                                                            // 4769
          arrivals.removeClass(settings.active_class);                                                                 // 4770
        }                                                                                                              // 4771
      });                                                                                                              // 4772
    },                                                                                                                 // 4773
                                                                                                                       // 4774
    offsets : function (expedition, window_offset) {                                                                   // 4775
      var self = this,                                                                                                 // 4776
          settings = expedition.data(self.attr_name(true) + '-init'),                                                  // 4777
          viewport_offset = window_offset;                                                                             // 4778
                                                                                                                       // 4779
      return expedition.find('[' + self.add_namespace('data-magellan-arrival') + ']').map(function (idx, el) {         // 4780
        var name = $(this).data(self.data_attr('magellan-arrival')),                                                   // 4781
            dest = $('[' + self.add_namespace('data-magellan-destination') + '=' + name + ']');                        // 4782
        if (dest.length > 0) {                                                                                         // 4783
          var top_offset = dest.offset().top - settings.destination_threshold;                                         // 4784
          if (settings.offset_by_height) {                                                                             // 4785
            top_offset = top_offset - expedition.outerHeight();                                                        // 4786
          }                                                                                                            // 4787
          top_offset = Math.floor(top_offset);                                                                         // 4788
          return {                                                                                                     // 4789
            destination : dest,                                                                                        // 4790
            arrival : $(this),                                                                                         // 4791
            top_offset : top_offset,                                                                                   // 4792
            viewport_offset : viewport_offset                                                                          // 4793
          }                                                                                                            // 4794
        }                                                                                                              // 4795
      }).sort(function (a, b) {                                                                                        // 4796
        if (a.top_offset < b.top_offset) {                                                                             // 4797
          return -1;                                                                                                   // 4798
        }                                                                                                              // 4799
        if (a.top_offset > b.top_offset) {                                                                             // 4800
          return 1;                                                                                                    // 4801
        }                                                                                                              // 4802
        return 0;                                                                                                      // 4803
      });                                                                                                              // 4804
    },                                                                                                                 // 4805
                                                                                                                       // 4806
    data_attr : function (str) {                                                                                       // 4807
      if (this.namespace.length > 0) {                                                                                 // 4808
        return this.namespace + '-' + str;                                                                             // 4809
      }                                                                                                                // 4810
                                                                                                                       // 4811
      return str;                                                                                                      // 4812
    },                                                                                                                 // 4813
                                                                                                                       // 4814
    off : function () {                                                                                                // 4815
      this.S(this.scope).off('.magellan');                                                                             // 4816
      this.S(window).off('.magellan');                                                                                 // 4817
    },                                                                                                                 // 4818
                                                                                                                       // 4819
    filterPathname : function (pathname) {                                                                             // 4820
      pathname = pathname || '';                                                                                       // 4821
      return pathname                                                                                                  // 4822
          .replace(/^\//,'')                                                                                           // 4823
          .replace(/(?:index|default).[a-zA-Z]{3,4}$/,'')                                                              // 4824
          .replace(/\/$/,'');                                                                                          // 4825
    },                                                                                                                 // 4826
                                                                                                                       // 4827
    reflow : function () {                                                                                             // 4828
      var self = this;                                                                                                 // 4829
      // remove placeholder expeditions used for height calculation purposes                                           // 4830
      $('[' + self.add_namespace('data-magellan-expedition-clone') + ']', self.scope).remove();                        // 4831
    }                                                                                                                  // 4832
  };                                                                                                                   // 4833
}(jQuery, window, window.document));                                                                                   // 4834
;(function ($, window, document, undefined) {                                                                          // 4835
  'use strict';                                                                                                        // 4836
                                                                                                                       // 4837
  Foundation.libs.accordion = {                                                                                        // 4838
    name : 'accordion',                                                                                                // 4839
                                                                                                                       // 4840
    version : '5.5.2',                                                                                                 // 4841
                                                                                                                       // 4842
    settings : {                                                                                                       // 4843
      content_class : 'content',                                                                                       // 4844
      active_class : 'active',                                                                                         // 4845
      multi_expand : false,                                                                                            // 4846
      toggleable : true,                                                                                               // 4847
      callback : function () {}                                                                                        // 4848
    },                                                                                                                 // 4849
                                                                                                                       // 4850
    init : function (scope, method, options) {                                                                         // 4851
      this.bindings(method, options);                                                                                  // 4852
    },                                                                                                                 // 4853
                                                                                                                       // 4854
    events : function (instance) {                                                                                     // 4855
      var self = this;                                                                                                 // 4856
      var S = this.S;                                                                                                  // 4857
      self.create(this.S(instance));                                                                                   // 4858
                                                                                                                       // 4859
      S(this.scope)                                                                                                    // 4860
      .off('.fndtn.accordion')                                                                                         // 4861
      .on('click.fndtn.accordion', '[' + this.attr_name() + '] > dd > a, [' + this.attr_name() + '] > li > a', function (e) {
        var accordion = S(this).closest('[' + self.attr_name() + ']'),                                                 // 4863
            groupSelector = self.attr_name() + '=' + accordion.attr(self.attr_name()),                                 // 4864
            settings = accordion.data(self.attr_name(true) + '-init') || self.settings,                                // 4865
            target = S('#' + this.href.split('#')[1]),                                                                 // 4866
            aunts = $('> dd, > li', accordion),                                                                        // 4867
            siblings = aunts.children('.' + settings.content_class),                                                   // 4868
            active_content = siblings.filter('.' + settings.active_class);                                             // 4869
                                                                                                                       // 4870
        e.preventDefault();                                                                                            // 4871
                                                                                                                       // 4872
        if (accordion.attr(self.attr_name())) {                                                                        // 4873
          siblings = siblings.add('[' + groupSelector + '] dd > ' + '.' + settings.content_class + ', [' + groupSelector + '] li > ' + '.' + settings.content_class);
          aunts = aunts.add('[' + groupSelector + '] dd, [' + groupSelector + '] li');                                 // 4875
        }                                                                                                              // 4876
                                                                                                                       // 4877
        if (settings.toggleable && target.is(active_content)) {                                                        // 4878
          target.parent('dd, li').toggleClass(settings.active_class, false);                                           // 4879
          target.toggleClass(settings.active_class, false);                                                            // 4880
          S(this).attr('aria-expanded', function(i, attr){                                                             // 4881
              return attr === 'true' ? 'false' : 'true';                                                               // 4882
          });                                                                                                          // 4883
          settings.callback(target);                                                                                   // 4884
          target.triggerHandler('toggled', [accordion]);                                                               // 4885
          accordion.triggerHandler('toggled', [target]);                                                               // 4886
          return;                                                                                                      // 4887
        }                                                                                                              // 4888
                                                                                                                       // 4889
        if (!settings.multi_expand) {                                                                                  // 4890
          siblings.removeClass(settings.active_class);                                                                 // 4891
          aunts.removeClass(settings.active_class);                                                                    // 4892
          aunts.children('a').attr('aria-expanded','false');                                                           // 4893
        }                                                                                                              // 4894
                                                                                                                       // 4895
        target.addClass(settings.active_class).parent().addClass(settings.active_class);                               // 4896
        settings.callback(target);                                                                                     // 4897
        target.triggerHandler('toggled', [accordion]);                                                                 // 4898
        accordion.triggerHandler('toggled', [target]);                                                                 // 4899
        S(this).attr('aria-expanded','true');                                                                          // 4900
      });                                                                                                              // 4901
    },                                                                                                                 // 4902
                                                                                                                       // 4903
    create: function($instance) {                                                                                      // 4904
      var self = this,                                                                                                 // 4905
          accordion = $instance,                                                                                       // 4906
          aunts = $('> .accordion-navigation', accordion),                                                             // 4907
          settings = accordion.data(self.attr_name(true) + '-init') || self.settings;                                  // 4908
                                                                                                                       // 4909
      aunts.children('a').attr('aria-expanded','false');                                                               // 4910
      aunts.has('.' + settings.content_class + '.' + settings.active_class).children('a').attr('aria-expanded','true');
                                                                                                                       // 4912
      if (settings.multi_expand) {                                                                                     // 4913
        $instance.attr('aria-multiselectable','true');                                                                 // 4914
      }                                                                                                                // 4915
    },                                                                                                                 // 4916
                                                                                                                       // 4917
    off : function () {},                                                                                              // 4918
                                                                                                                       // 4919
    reflow : function () {}                                                                                            // 4920
  };                                                                                                                   // 4921
}(jQuery, window, window.document));                                                                                   // 4922
;(function ($, window, document, undefined) {                                                                          // 4923
  'use strict';                                                                                                        // 4924
                                                                                                                       // 4925
  Foundation.libs.topbar = {                                                                                           // 4926
    name : 'topbar',                                                                                                   // 4927
                                                                                                                       // 4928
    version : '5.5.2',                                                                                                 // 4929
                                                                                                                       // 4930
    settings : {                                                                                                       // 4931
      index : 0,                                                                                                       // 4932
      start_offset : 0,                                                                                                // 4933
      sticky_class : 'sticky',                                                                                         // 4934
      custom_back_text : true,                                                                                         // 4935
      back_text : 'Back',                                                                                              // 4936
      mobile_show_parent_link : true,                                                                                  // 4937
      is_hover : true,                                                                                                 // 4938
      scrolltop : true, // jump to top when sticky nav menu toggle is clicked                                          // 4939
      sticky_on : 'all',                                                                                               // 4940
      dropdown_autoclose: true                                                                                         // 4941
    },                                                                                                                 // 4942
                                                                                                                       // 4943
    init : function (section, method, options) {                                                                       // 4944
      Foundation.inherit(this, 'add_custom_rule register_media throttle');                                             // 4945
      var self = this;                                                                                                 // 4946
                                                                                                                       // 4947
      self.register_media('topbar', 'foundation-mq-topbar');                                                           // 4948
                                                                                                                       // 4949
      this.bindings(method, options);                                                                                  // 4950
                                                                                                                       // 4951
      self.S('[' + this.attr_name() + ']', this.scope).each(function () {                                              // 4952
        var topbar = $(this),                                                                                          // 4953
            settings = topbar.data(self.attr_name(true) + '-init'),                                                    // 4954
            section = self.S('section, .top-bar-section', this);                                                       // 4955
        topbar.data('index', 0);                                                                                       // 4956
        var topbarContainer = topbar.parent();                                                                         // 4957
        if (topbarContainer.hasClass('fixed') || self.is_sticky(topbar, topbarContainer, settings) ) {                 // 4958
          self.settings.sticky_class = settings.sticky_class;                                                          // 4959
          self.settings.sticky_topbar = topbar;                                                                        // 4960
          topbar.data('height', topbarContainer.outerHeight());                                                        // 4961
          topbar.data('stickyoffset', topbarContainer.offset().top);                                                   // 4962
        } else {                                                                                                       // 4963
          topbar.data('height', topbar.outerHeight());                                                                 // 4964
        }                                                                                                              // 4965
                                                                                                                       // 4966
        if (!settings.assembled) {                                                                                     // 4967
          self.assemble(topbar);                                                                                       // 4968
        }                                                                                                              // 4969
                                                                                                                       // 4970
        if (settings.is_hover) {                                                                                       // 4971
          self.S('.has-dropdown', topbar).addClass('not-click');                                                       // 4972
        } else {                                                                                                       // 4973
          self.S('.has-dropdown', topbar).removeClass('not-click');                                                    // 4974
        }                                                                                                              // 4975
                                                                                                                       // 4976
        // Pad body when sticky (scrolled) or fixed.                                                                   // 4977
        self.add_custom_rule('.f-topbar-fixed { padding-top: ' + topbar.data('height') + 'px }');                      // 4978
                                                                                                                       // 4979
        if (topbarContainer.hasClass('fixed')) {                                                                       // 4980
          self.S('body').addClass('f-topbar-fixed');                                                                   // 4981
        }                                                                                                              // 4982
      });                                                                                                              // 4983
                                                                                                                       // 4984
    },                                                                                                                 // 4985
                                                                                                                       // 4986
    is_sticky : function (topbar, topbarContainer, settings) {                                                         // 4987
      var sticky     = topbarContainer.hasClass(settings.sticky_class);                                                // 4988
      var smallMatch = matchMedia(Foundation.media_queries.small).matches;                                             // 4989
      var medMatch   = matchMedia(Foundation.media_queries.medium).matches;                                            // 4990
      var lrgMatch   = matchMedia(Foundation.media_queries.large).matches;                                             // 4991
                                                                                                                       // 4992
      if (sticky && settings.sticky_on === 'all') {                                                                    // 4993
        return true;                                                                                                   // 4994
      }                                                                                                                // 4995
      if (sticky && this.small() && settings.sticky_on.indexOf('small') !== -1) {                                      // 4996
        if (smallMatch && !medMatch && !lrgMatch) { return true; }                                                     // 4997
      }                                                                                                                // 4998
      if (sticky && this.medium() && settings.sticky_on.indexOf('medium') !== -1) {                                    // 4999
        if (smallMatch && medMatch && !lrgMatch) { return true; }                                                      // 5000
      }                                                                                                                // 5001
      if (sticky && this.large() && settings.sticky_on.indexOf('large') !== -1) {                                      // 5002
        if (smallMatch && medMatch && lrgMatch) { return true; }                                                       // 5003
      }                                                                                                                // 5004
                                                                                                                       // 5005
       return false;                                                                                                   // 5006
    },                                                                                                                 // 5007
                                                                                                                       // 5008
    toggle : function (toggleEl) {                                                                                     // 5009
      var self = this,                                                                                                 // 5010
          topbar;                                                                                                      // 5011
                                                                                                                       // 5012
      if (toggleEl) {                                                                                                  // 5013
        topbar = self.S(toggleEl).closest('[' + this.attr_name() + ']');                                               // 5014
      } else {                                                                                                         // 5015
        topbar = self.S('[' + this.attr_name() + ']');                                                                 // 5016
      }                                                                                                                // 5017
                                                                                                                       // 5018
      var settings = topbar.data(this.attr_name(true) + '-init');                                                      // 5019
                                                                                                                       // 5020
      var section = self.S('section, .top-bar-section', topbar);                                                       // 5021
                                                                                                                       // 5022
      if (self.breakpoint()) {                                                                                         // 5023
        if (!self.rtl) {                                                                                               // 5024
          section.css({left : '0%'});                                                                                  // 5025
          $('>.name', section).css({left : '100%'});                                                                   // 5026
        } else {                                                                                                       // 5027
          section.css({right : '0%'});                                                                                 // 5028
          $('>.name', section).css({right : '100%'});                                                                  // 5029
        }                                                                                                              // 5030
                                                                                                                       // 5031
        self.S('li.moved', section).removeClass('moved');                                                              // 5032
        topbar.data('index', 0);                                                                                       // 5033
                                                                                                                       // 5034
        topbar                                                                                                         // 5035
          .toggleClass('expanded')                                                                                     // 5036
          .css('height', '');                                                                                          // 5037
      }                                                                                                                // 5038
                                                                                                                       // 5039
      if (settings.scrolltop) {                                                                                        // 5040
        if (!topbar.hasClass('expanded')) {                                                                            // 5041
          if (topbar.hasClass('fixed')) {                                                                              // 5042
            topbar.parent().addClass('fixed');                                                                         // 5043
            topbar.removeClass('fixed');                                                                               // 5044
            self.S('body').addClass('f-topbar-fixed');                                                                 // 5045
          }                                                                                                            // 5046
        } else if (topbar.parent().hasClass('fixed')) {                                                                // 5047
          if (settings.scrolltop) {                                                                                    // 5048
            topbar.parent().removeClass('fixed');                                                                      // 5049
            topbar.addClass('fixed');                                                                                  // 5050
            self.S('body').removeClass('f-topbar-fixed');                                                              // 5051
                                                                                                                       // 5052
            window.scrollTo(0, 0);                                                                                     // 5053
          } else {                                                                                                     // 5054
            topbar.parent().removeClass('expanded');                                                                   // 5055
          }                                                                                                            // 5056
        }                                                                                                              // 5057
      } else {                                                                                                         // 5058
        if (self.is_sticky(topbar, topbar.parent(), settings)) {                                                       // 5059
          topbar.parent().addClass('fixed');                                                                           // 5060
        }                                                                                                              // 5061
                                                                                                                       // 5062
        if (topbar.parent().hasClass('fixed')) {                                                                       // 5063
          if (!topbar.hasClass('expanded')) {                                                                          // 5064
            topbar.removeClass('fixed');                                                                               // 5065
            topbar.parent().removeClass('expanded');                                                                   // 5066
            self.update_sticky_positioning();                                                                          // 5067
          } else {                                                                                                     // 5068
            topbar.addClass('fixed');                                                                                  // 5069
            topbar.parent().addClass('expanded');                                                                      // 5070
            self.S('body').addClass('f-topbar-fixed');                                                                 // 5071
          }                                                                                                            // 5072
        }                                                                                                              // 5073
      }                                                                                                                // 5074
    },                                                                                                                 // 5075
                                                                                                                       // 5076
    timer : null,                                                                                                      // 5077
                                                                                                                       // 5078
    events : function (bar) {                                                                                          // 5079
      var self = this,                                                                                                 // 5080
          S = this.S;                                                                                                  // 5081
                                                                                                                       // 5082
      S(this.scope)                                                                                                    // 5083
        .off('.topbar')                                                                                                // 5084
        .on('click.fndtn.topbar', '[' + this.attr_name() + '] .toggle-topbar', function (e) {                          // 5085
          e.preventDefault();                                                                                          // 5086
          self.toggle(this);                                                                                           // 5087
        })                                                                                                             // 5088
        .on('click.fndtn.topbar contextmenu.fndtn.topbar', '.top-bar .top-bar-section li a[href^="#"],[' + this.attr_name() + '] .top-bar-section li a[href^="#"]', function (e) {
            var li = $(this).closest('li'),                                                                            // 5090
                topbar = li.closest('[' + self.attr_name() + ']'),                                                     // 5091
                settings = topbar.data(self.attr_name(true) + '-init');                                                // 5092
                                                                                                                       // 5093
            if (settings.dropdown_autoclose && settings.is_hover) {                                                    // 5094
              var hoverLi = $(this).closest('.hover');                                                                 // 5095
              hoverLi.removeClass('hover');                                                                            // 5096
            }                                                                                                          // 5097
            if (self.breakpoint() && !li.hasClass('back') && !li.hasClass('has-dropdown')) {                           // 5098
              self.toggle();                                                                                           // 5099
            }                                                                                                          // 5100
                                                                                                                       // 5101
        })                                                                                                             // 5102
        .on('click.fndtn.topbar', '[' + this.attr_name() + '] li.has-dropdown', function (e) {                         // 5103
          var li = S(this),                                                                                            // 5104
              target = S(e.target),                                                                                    // 5105
              topbar = li.closest('[' + self.attr_name() + ']'),                                                       // 5106
              settings = topbar.data(self.attr_name(true) + '-init');                                                  // 5107
                                                                                                                       // 5108
          if (target.data('revealId')) {                                                                               // 5109
            self.toggle();                                                                                             // 5110
            return;                                                                                                    // 5111
          }                                                                                                            // 5112
                                                                                                                       // 5113
          if (self.breakpoint()) {                                                                                     // 5114
            return;                                                                                                    // 5115
          }                                                                                                            // 5116
                                                                                                                       // 5117
          if (settings.is_hover && !Modernizr.touch) {                                                                 // 5118
            return;                                                                                                    // 5119
          }                                                                                                            // 5120
                                                                                                                       // 5121
          e.stopImmediatePropagation();                                                                                // 5122
                                                                                                                       // 5123
          if (li.hasClass('hover')) {                                                                                  // 5124
            li                                                                                                         // 5125
              .removeClass('hover')                                                                                    // 5126
              .find('li')                                                                                              // 5127
              .removeClass('hover');                                                                                   // 5128
                                                                                                                       // 5129
            li.parents('li.hover')                                                                                     // 5130
              .removeClass('hover');                                                                                   // 5131
          } else {                                                                                                     // 5132
            li.addClass('hover');                                                                                      // 5133
                                                                                                                       // 5134
            $(li).siblings().removeClass('hover');                                                                     // 5135
                                                                                                                       // 5136
            if (target[0].nodeName === 'A' && target.parent().hasClass('has-dropdown')) {                              // 5137
              e.preventDefault();                                                                                      // 5138
            }                                                                                                          // 5139
          }                                                                                                            // 5140
        })                                                                                                             // 5141
        .on('click.fndtn.topbar', '[' + this.attr_name() + '] .has-dropdown>a', function (e) {                         // 5142
          if (self.breakpoint()) {                                                                                     // 5143
                                                                                                                       // 5144
            e.preventDefault();                                                                                        // 5145
                                                                                                                       // 5146
            var $this = S(this),                                                                                       // 5147
                topbar = $this.closest('[' + self.attr_name() + ']'),                                                  // 5148
                section = topbar.find('section, .top-bar-section'),                                                    // 5149
                dropdownHeight = $this.next('.dropdown').outerHeight(),                                                // 5150
                $selectedLi = $this.closest('li');                                                                     // 5151
                                                                                                                       // 5152
            topbar.data('index', topbar.data('index') + 1);                                                            // 5153
            $selectedLi.addClass('moved');                                                                             // 5154
                                                                                                                       // 5155
            if (!self.rtl) {                                                                                           // 5156
              section.css({left : -(100 * topbar.data('index')) + '%'});                                               // 5157
              section.find('>.name').css({left : 100 * topbar.data('index') + '%'});                                   // 5158
            } else {                                                                                                   // 5159
              section.css({right : -(100 * topbar.data('index')) + '%'});                                              // 5160
              section.find('>.name').css({right : 100 * topbar.data('index') + '%'});                                  // 5161
            }                                                                                                          // 5162
                                                                                                                       // 5163
            topbar.css('height', $this.siblings('ul').outerHeight(true) + topbar.data('height'));                      // 5164
          }                                                                                                            // 5165
        });                                                                                                            // 5166
                                                                                                                       // 5167
      S(window).off('.topbar').on('resize.fndtn.topbar', self.throttle(function () {                                   // 5168
          self.resize.call(self);                                                                                      // 5169
      }, 50)).trigger('resize.fndtn.topbar').load(function () {                                                        // 5170
          // Ensure that the offset is calculated after all of the pages resources have loaded                         // 5171
          S(this).trigger('resize.fndtn.topbar');                                                                      // 5172
      });                                                                                                              // 5173
                                                                                                                       // 5174
      S('body').off('.topbar').on('click.fndtn.topbar', function (e) {                                                 // 5175
        var parent = S(e.target).closest('li').closest('li.hover');                                                    // 5176
                                                                                                                       // 5177
        if (parent.length > 0) {                                                                                       // 5178
          return;                                                                                                      // 5179
        }                                                                                                              // 5180
                                                                                                                       // 5181
        S('[' + self.attr_name() + '] li.hover').removeClass('hover');                                                 // 5182
      });                                                                                                              // 5183
                                                                                                                       // 5184
      // Go up a level on Click                                                                                        // 5185
      S(this.scope).on('click.fndtn.topbar', '[' + this.attr_name() + '] .has-dropdown .back', function (e) {          // 5186
        e.preventDefault();                                                                                            // 5187
                                                                                                                       // 5188
        var $this = S(this),                                                                                           // 5189
            topbar = $this.closest('[' + self.attr_name() + ']'),                                                      // 5190
            section = topbar.find('section, .top-bar-section'),                                                        // 5191
            settings = topbar.data(self.attr_name(true) + '-init'),                                                    // 5192
            $movedLi = $this.closest('li.moved'),                                                                      // 5193
            $previousLevelUl = $movedLi.parent();                                                                      // 5194
                                                                                                                       // 5195
        topbar.data('index', topbar.data('index') - 1);                                                                // 5196
                                                                                                                       // 5197
        if (!self.rtl) {                                                                                               // 5198
          section.css({left : -(100 * topbar.data('index')) + '%'});                                                   // 5199
          section.find('>.name').css({left : 100 * topbar.data('index') + '%'});                                       // 5200
        } else {                                                                                                       // 5201
          section.css({right : -(100 * topbar.data('index')) + '%'});                                                  // 5202
          section.find('>.name').css({right : 100 * topbar.data('index') + '%'});                                      // 5203
        }                                                                                                              // 5204
                                                                                                                       // 5205
        if (topbar.data('index') === 0) {                                                                              // 5206
          topbar.css('height', '');                                                                                    // 5207
        } else {                                                                                                       // 5208
          topbar.css('height', $previousLevelUl.outerHeight(true) + topbar.data('height'));                            // 5209
        }                                                                                                              // 5210
                                                                                                                       // 5211
        setTimeout(function () {                                                                                       // 5212
          $movedLi.removeClass('moved');                                                                               // 5213
        }, 300);                                                                                                       // 5214
      });                                                                                                              // 5215
                                                                                                                       // 5216
      // Show dropdown menus when their items are focused                                                              // 5217
      S(this.scope).find('.dropdown a')                                                                                // 5218
        .focus(function () {                                                                                           // 5219
          $(this).parents('.has-dropdown').addClass('hover');                                                          // 5220
        })                                                                                                             // 5221
        .blur(function () {                                                                                            // 5222
          $(this).parents('.has-dropdown').removeClass('hover');                                                       // 5223
        });                                                                                                            // 5224
    },                                                                                                                 // 5225
                                                                                                                       // 5226
    resize : function () {                                                                                             // 5227
      var self = this;                                                                                                 // 5228
      self.S('[' + this.attr_name() + ']').each(function () {                                                          // 5229
        var topbar = self.S(this),                                                                                     // 5230
            settings = topbar.data(self.attr_name(true) + '-init');                                                    // 5231
                                                                                                                       // 5232
        var stickyContainer = topbar.parent('.' + self.settings.sticky_class);                                         // 5233
        var stickyOffset;                                                                                              // 5234
                                                                                                                       // 5235
        if (!self.breakpoint()) {                                                                                      // 5236
          var doToggle = topbar.hasClass('expanded');                                                                  // 5237
          topbar                                                                                                       // 5238
            .css('height', '')                                                                                         // 5239
            .removeClass('expanded')                                                                                   // 5240
            .find('li')                                                                                                // 5241
            .removeClass('hover');                                                                                     // 5242
                                                                                                                       // 5243
            if (doToggle) {                                                                                            // 5244
              self.toggle(topbar);                                                                                     // 5245
            }                                                                                                          // 5246
        }                                                                                                              // 5247
                                                                                                                       // 5248
        if (self.is_sticky(topbar, stickyContainer, settings)) {                                                       // 5249
          if (stickyContainer.hasClass('fixed')) {                                                                     // 5250
            // Remove the fixed to allow for correct calculation of the offset.                                        // 5251
            stickyContainer.removeClass('fixed');                                                                      // 5252
                                                                                                                       // 5253
            stickyOffset = stickyContainer.offset().top;                                                               // 5254
            if (self.S(document.body).hasClass('f-topbar-fixed')) {                                                    // 5255
              stickyOffset -= topbar.data('height');                                                                   // 5256
            }                                                                                                          // 5257
                                                                                                                       // 5258
            topbar.data('stickyoffset', stickyOffset);                                                                 // 5259
            stickyContainer.addClass('fixed');                                                                         // 5260
          } else {                                                                                                     // 5261
            stickyOffset = stickyContainer.offset().top;                                                               // 5262
            topbar.data('stickyoffset', stickyOffset);                                                                 // 5263
          }                                                                                                            // 5264
        }                                                                                                              // 5265
                                                                                                                       // 5266
      });                                                                                                              // 5267
    },                                                                                                                 // 5268
                                                                                                                       // 5269
    breakpoint : function () {                                                                                         // 5270
      return !matchMedia(Foundation.media_queries['topbar']).matches;                                                  // 5271
    },                                                                                                                 // 5272
                                                                                                                       // 5273
    small : function () {                                                                                              // 5274
      return matchMedia(Foundation.media_queries['small']).matches;                                                    // 5275
    },                                                                                                                 // 5276
                                                                                                                       // 5277
    medium : function () {                                                                                             // 5278
      return matchMedia(Foundation.media_queries['medium']).matches;                                                   // 5279
    },                                                                                                                 // 5280
                                                                                                                       // 5281
    large : function () {                                                                                              // 5282
      return matchMedia(Foundation.media_queries['large']).matches;                                                    // 5283
    },                                                                                                                 // 5284
                                                                                                                       // 5285
    assemble : function (topbar) {                                                                                     // 5286
      var self = this,                                                                                                 // 5287
          settings = topbar.data(this.attr_name(true) + '-init'),                                                      // 5288
          section = self.S('section, .top-bar-section', topbar);                                                       // 5289
                                                                                                                       // 5290
      // Pull element out of the DOM for manipulation                                                                  // 5291
      section.detach();                                                                                                // 5292
                                                                                                                       // 5293
      self.S('.has-dropdown>a', section).each(function () {                                                            // 5294
        var $link = self.S(this),                                                                                      // 5295
            $dropdown = $link.siblings('.dropdown'),                                                                   // 5296
            url = $link.attr('href'),                                                                                  // 5297
            $titleLi;                                                                                                  // 5298
                                                                                                                       // 5299
        if (!$dropdown.find('.title.back').length) {                                                                   // 5300
                                                                                                                       // 5301
          if (settings.mobile_show_parent_link == true && url) {                                                       // 5302
            $titleLi = $('<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li><li class="parent-link hide-for-medium-up"><a class="parent-link js-generated" href="' + url + '">' + $link.html() +'</a></li>');
          } else {                                                                                                     // 5304
            $titleLi = $('<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5>');            // 5305
          }                                                                                                            // 5306
                                                                                                                       // 5307
          // Copy link to subnav                                                                                       // 5308
          if (settings.custom_back_text == true) {                                                                     // 5309
            $('h5>a', $titleLi).html(settings.back_text);                                                              // 5310
          } else {                                                                                                     // 5311
            $('h5>a', $titleLi).html('&laquo; ' + $link.html());                                                       // 5312
          }                                                                                                            // 5313
          $dropdown.prepend($titleLi);                                                                                 // 5314
        }                                                                                                              // 5315
      });                                                                                                              // 5316
                                                                                                                       // 5317
      // Put element back in the DOM                                                                                   // 5318
      section.appendTo(topbar);                                                                                        // 5319
                                                                                                                       // 5320
      // check for sticky                                                                                              // 5321
      this.sticky();                                                                                                   // 5322
                                                                                                                       // 5323
      this.assembled(topbar);                                                                                          // 5324
    },                                                                                                                 // 5325
                                                                                                                       // 5326
    assembled : function (topbar) {                                                                                    // 5327
      topbar.data(this.attr_name(true), $.extend({}, topbar.data(this.attr_name(true)), {assembled : true}));          // 5328
    },                                                                                                                 // 5329
                                                                                                                       // 5330
    height : function (ul) {                                                                                           // 5331
      var total = 0,                                                                                                   // 5332
          self = this;                                                                                                 // 5333
                                                                                                                       // 5334
      $('> li', ul).each(function () {                                                                                 // 5335
        total += self.S(this).outerHeight(true);                                                                       // 5336
      });                                                                                                              // 5337
                                                                                                                       // 5338
      return total;                                                                                                    // 5339
    },                                                                                                                 // 5340
                                                                                                                       // 5341
    sticky : function () {                                                                                             // 5342
      var self = this;                                                                                                 // 5343
                                                                                                                       // 5344
      this.S(window).on('scroll', function () {                                                                        // 5345
        self.update_sticky_positioning();                                                                              // 5346
      });                                                                                                              // 5347
    },                                                                                                                 // 5348
                                                                                                                       // 5349
    update_sticky_positioning : function () {                                                                          // 5350
      var klass = '.' + this.settings.sticky_class,                                                                    // 5351
          $window = this.S(window),                                                                                    // 5352
          self = this;                                                                                                 // 5353
                                                                                                                       // 5354
      if (self.settings.sticky_topbar && self.is_sticky(this.settings.sticky_topbar,this.settings.sticky_topbar.parent(), this.settings)) {
        var distance = this.settings.sticky_topbar.data('stickyoffset') + this.settings.start_offset;                  // 5356
        if (!self.S(klass).hasClass('expanded')) {                                                                     // 5357
          if ($window.scrollTop() > (distance)) {                                                                      // 5358
            if (!self.S(klass).hasClass('fixed')) {                                                                    // 5359
              self.S(klass).addClass('fixed');                                                                         // 5360
              self.S('body').addClass('f-topbar-fixed');                                                               // 5361
            }                                                                                                          // 5362
          } else if ($window.scrollTop() <= distance) {                                                                // 5363
            if (self.S(klass).hasClass('fixed')) {                                                                     // 5364
              self.S(klass).removeClass('fixed');                                                                      // 5365
              self.S('body').removeClass('f-topbar-fixed');                                                            // 5366
            }                                                                                                          // 5367
          }                                                                                                            // 5368
        }                                                                                                              // 5369
      }                                                                                                                // 5370
    },                                                                                                                 // 5371
                                                                                                                       // 5372
    off : function () {                                                                                                // 5373
      this.S(this.scope).off('.fndtn.topbar');                                                                         // 5374
      this.S(window).off('.fndtn.topbar');                                                                             // 5375
    },                                                                                                                 // 5376
                                                                                                                       // 5377
    reflow : function () {}                                                                                            // 5378
  };                                                                                                                   // 5379
}(jQuery, window, window.document));                                                                                   // 5380
;(function ($, window, document, undefined) {                                                                          // 5381
  'use strict';                                                                                                        // 5382
                                                                                                                       // 5383
  Foundation.libs.tab = {                                                                                              // 5384
    name : 'tab',                                                                                                      // 5385
                                                                                                                       // 5386
    version : '5.5.2',                                                                                                 // 5387
                                                                                                                       // 5388
    settings : {                                                                                                       // 5389
      active_class : 'active',                                                                                         // 5390
      callback : function () {},                                                                                       // 5391
      deep_linking : false,                                                                                            // 5392
      scroll_to_content : true,                                                                                        // 5393
      is_hover : false                                                                                                 // 5394
    },                                                                                                                 // 5395
                                                                                                                       // 5396
    default_tab_hashes : [],                                                                                           // 5397
                                                                                                                       // 5398
    init : function (scope, method, options) {                                                                         // 5399
      var self = this,                                                                                                 // 5400
          S = this.S;                                                                                                  // 5401
                                                                                                                       // 5402
	  // Store the default active tabs which will be referenced when the                                                  // 5403
	  // location hash is absent, as in the case of navigating the tabs and                                               // 5404
	  // returning to the first viewing via the browser Back button.                                                      // 5405
	  S('[' + this.attr_name() + '] > .active > a', this.scope).each(function () {                                        // 5406
	    self.default_tab_hashes.push(this.hash);                                                                          // 5407
	  });                                                                                                                 // 5408
                                                                                                                       // 5409
      // store the initial href, which is used to allow correct behaviour of the                                       // 5410
      // browser back button when deep linking is turned on.                                                           // 5411
      self.entry_location = window.location.href;                                                                      // 5412
                                                                                                                       // 5413
      this.bindings(method, options);                                                                                  // 5414
      this.handle_location_hash_change();                                                                              // 5415
    },                                                                                                                 // 5416
                                                                                                                       // 5417
    events : function () {                                                                                             // 5418
      var self = this,                                                                                                 // 5419
          S = this.S;                                                                                                  // 5420
                                                                                                                       // 5421
      var usual_tab_behavior =  function (e, target) {                                                                 // 5422
          var settings = S(target).closest('[' + self.attr_name() + ']').data(self.attr_name(true) + '-init');         // 5423
          if (!settings.is_hover || Modernizr.touch) {                                                                 // 5424
            e.preventDefault();                                                                                        // 5425
            e.stopPropagation();                                                                                       // 5426
            self.toggle_active_tab(S(target).parent());                                                                // 5427
          }                                                                                                            // 5428
        };                                                                                                             // 5429
                                                                                                                       // 5430
      S(this.scope)                                                                                                    // 5431
        .off('.tab')                                                                                                   // 5432
        // Key event: focus/tab key                                                                                    // 5433
        .on('keydown.fndtn.tab', '[' + this.attr_name() + '] > * > a', function(e) {                                   // 5434
          var el = this;                                                                                               // 5435
          var keyCode = e.keyCode || e.which;                                                                          // 5436
            // if user pressed tab key                                                                                 // 5437
            if (keyCode == 9) {                                                                                        // 5438
              e.preventDefault();                                                                                      // 5439
              // TODO: Change usual_tab_behavior into accessibility function?                                          // 5440
              usual_tab_behavior(e, el);                                                                               // 5441
            }                                                                                                          // 5442
        })                                                                                                             // 5443
        // Click event: tab title                                                                                      // 5444
        .on('click.fndtn.tab', '[' + this.attr_name() + '] > * > a', function(e) {                                     // 5445
          var el = this;                                                                                               // 5446
          usual_tab_behavior(e, el);                                                                                   // 5447
        })                                                                                                             // 5448
        // Hover event: tab title                                                                                      // 5449
        .on('mouseenter.fndtn.tab', '[' + this.attr_name() + '] > * > a', function (e) {                               // 5450
          var settings = S(this).closest('[' + self.attr_name() + ']').data(self.attr_name(true) + '-init');           // 5451
          if (settings.is_hover) {                                                                                     // 5452
            self.toggle_active_tab(S(this).parent());                                                                  // 5453
          }                                                                                                            // 5454
        });                                                                                                            // 5455
                                                                                                                       // 5456
      // Location hash change event                                                                                    // 5457
      S(window).on('hashchange.fndtn.tab', function (e) {                                                              // 5458
        e.preventDefault();                                                                                            // 5459
        self.handle_location_hash_change();                                                                            // 5460
      });                                                                                                              // 5461
    },                                                                                                                 // 5462
                                                                                                                       // 5463
    handle_location_hash_change : function () {                                                                        // 5464
                                                                                                                       // 5465
      var self = this,                                                                                                 // 5466
          S = this.S;                                                                                                  // 5467
                                                                                                                       // 5468
      S('[' + this.attr_name() + ']', this.scope).each(function () {                                                   // 5469
        var settings = S(this).data(self.attr_name(true) + '-init');                                                   // 5470
        if (settings.deep_linking) {                                                                                   // 5471
          // Match the location hash to a label                                                                        // 5472
          var hash;                                                                                                    // 5473
          if (settings.scroll_to_content) {                                                                            // 5474
            hash = self.scope.location.hash;                                                                           // 5475
          } else {                                                                                                     // 5476
            // prefix the hash to prevent anchor scrolling                                                             // 5477
            hash = self.scope.location.hash.replace('fndtn-', '');                                                     // 5478
          }                                                                                                            // 5479
          if (hash != '') {                                                                                            // 5480
            // Check whether the location hash references a tab content div or                                         // 5481
            // another element on the page (inside or outside the tab content div)                                     // 5482
            var hash_element = S(hash);                                                                                // 5483
            if (hash_element.hasClass('content') && hash_element.parent().hasClass('tabs-content')) {                  // 5484
              // Tab content div                                                                                       // 5485
              self.toggle_active_tab($('[' + self.attr_name() + '] > * > a[href=' + hash + ']').parent());             // 5486
            } else {                                                                                                   // 5487
              // Not the tab content div. If inside the tab content, find the                                          // 5488
              // containing tab and toggle it as active.                                                               // 5489
              var hash_tab_container_id = hash_element.closest('.content').attr('id');                                 // 5490
              if (hash_tab_container_id != undefined) {                                                                // 5491
                self.toggle_active_tab($('[' + self.attr_name() + '] > * > a[href=#' + hash_tab_container_id + ']').parent(), hash);
              }                                                                                                        // 5493
            }                                                                                                          // 5494
          } else {                                                                                                     // 5495
            // Reference the default tab hashes which were initialized in the init function                            // 5496
            for (var ind = 0; ind < self.default_tab_hashes.length; ind++) {                                           // 5497
              self.toggle_active_tab($('[' + self.attr_name() + '] > * > a[href=' + self.default_tab_hashes[ind] + ']').parent());
            }                                                                                                          // 5499
          }                                                                                                            // 5500
        }                                                                                                              // 5501
       });                                                                                                             // 5502
     },                                                                                                                // 5503
                                                                                                                       // 5504
    toggle_active_tab : function (tab, location_hash) {                                                                // 5505
      var self = this,                                                                                                 // 5506
          S = self.S,                                                                                                  // 5507
          tabs = tab.closest('[' + this.attr_name() + ']'),                                                            // 5508
          tab_link = tab.find('a'),                                                                                    // 5509
          anchor = tab.children('a').first(),                                                                          // 5510
          target_hash = '#' + anchor.attr('href').split('#')[1],                                                       // 5511
          target = S(target_hash),                                                                                     // 5512
          siblings = tab.siblings(),                                                                                   // 5513
          settings = tabs.data(this.attr_name(true) + '-init'),                                                        // 5514
          interpret_keyup_action = function (e) {                                                                      // 5515
            // Light modification of Heydon Pickering's Practical ARIA Examples: http://heydonworks.com/practical_aria_examples/js/a11y.js
                                                                                                                       // 5517
            // define current, previous and next (possible) tabs                                                       // 5518
                                                                                                                       // 5519
            var $original = $(this);                                                                                   // 5520
            var $prev = $(this).parents('li').prev().children('[role="tab"]');                                         // 5521
            var $next = $(this).parents('li').next().children('[role="tab"]');                                         // 5522
            var $target;                                                                                               // 5523
                                                                                                                       // 5524
            // find the direction (prev or next)                                                                       // 5525
                                                                                                                       // 5526
            switch (e.keyCode) {                                                                                       // 5527
              case 37:                                                                                                 // 5528
                $target = $prev;                                                                                       // 5529
                break;                                                                                                 // 5530
              case 39:                                                                                                 // 5531
                $target = $next;                                                                                       // 5532
                break;                                                                                                 // 5533
              default:                                                                                                 // 5534
                $target = false                                                                                        // 5535
                  break;                                                                                               // 5536
            }                                                                                                          // 5537
                                                                                                                       // 5538
            if ($target.length) {                                                                                      // 5539
              $original.attr({                                                                                         // 5540
                'tabindex' : '-1',                                                                                     // 5541
                'aria-selected' : null                                                                                 // 5542
              });                                                                                                      // 5543
              $target.attr({                                                                                           // 5544
                'tabindex' : '0',                                                                                      // 5545
                'aria-selected' : true                                                                                 // 5546
              }).focus();                                                                                              // 5547
            }                                                                                                          // 5548
                                                                                                                       // 5549
            // Hide panels                                                                                             // 5550
                                                                                                                       // 5551
            $('[role="tabpanel"]')                                                                                     // 5552
              .attr('aria-hidden', 'true');                                                                            // 5553
                                                                                                                       // 5554
            // Show panel which corresponds to target                                                                  // 5555
                                                                                                                       // 5556
            $('#' + $(document.activeElement).attr('href').substring(1))                                               // 5557
              .attr('aria-hidden', null);                                                                              // 5558
                                                                                                                       // 5559
          },                                                                                                           // 5560
          go_to_hash = function(hash) {                                                                                // 5561
            // This function allows correct behaviour of the browser's back button when deep linking is enabled. Without it
            // the user would get continually redirected to the default hash.                                          // 5563
            var is_entry_location = window.location.href === self.entry_location,                                      // 5564
                default_hash = settings.scroll_to_content ? self.default_tab_hashes[0] : is_entry_location ? window.location.hash :'fndtn-' + self.default_tab_hashes[0].replace('#', '')
                                                                                                                       // 5566
            if (!(is_entry_location && hash === default_hash)) {                                                       // 5567
              window.location.hash = hash;                                                                             // 5568
            }                                                                                                          // 5569
          };                                                                                                           // 5570
                                                                                                                       // 5571
      // allow usage of data-tab-content attribute instead of href                                                     // 5572
      if (anchor.data('tab-content')) {                                                                                // 5573
        target_hash = '#' + anchor.data('tab-content').split('#')[1];                                                  // 5574
        target = S(target_hash);                                                                                       // 5575
      }                                                                                                                // 5576
                                                                                                                       // 5577
      if (settings.deep_linking) {                                                                                     // 5578
                                                                                                                       // 5579
        if (settings.scroll_to_content) {                                                                              // 5580
                                                                                                                       // 5581
          // retain current hash to scroll to content                                                                  // 5582
          go_to_hash(location_hash || target_hash);                                                                    // 5583
                                                                                                                       // 5584
          if (location_hash == undefined || location_hash == target_hash) {                                            // 5585
            tab.parent()[0].scrollIntoView();                                                                          // 5586
          } else {                                                                                                     // 5587
            S(target_hash)[0].scrollIntoView();                                                                        // 5588
          }                                                                                                            // 5589
        } else {                                                                                                       // 5590
          // prefix the hashes so that the browser doesn't scroll down                                                 // 5591
          if (location_hash != undefined) {                                                                            // 5592
            go_to_hash('fndtn-' + location_hash.replace('#', ''));                                                     // 5593
          } else {                                                                                                     // 5594
            go_to_hash('fndtn-' + target_hash.replace('#', ''));                                                       // 5595
          }                                                                                                            // 5596
        }                                                                                                              // 5597
      }                                                                                                                // 5598
                                                                                                                       // 5599
      // WARNING: The activation and deactivation of the tab content must                                              // 5600
      // occur after the deep linking in order to properly refresh the browser                                         // 5601
      // window (notably in Chrome).                                                                                   // 5602
      // Clean up multiple attr instances to done once                                                                 // 5603
      tab.addClass(settings.active_class).triggerHandler('opened');                                                    // 5604
      tab_link.attr({'aria-selected' : 'true',  tabindex : 0});                                                        // 5605
      siblings.removeClass(settings.active_class)                                                                      // 5606
      siblings.find('a').attr({'aria-selected' : 'false',  tabindex : -1});                                            // 5607
      target.siblings().removeClass(settings.active_class).attr({'aria-hidden' : 'true',  tabindex : -1});             // 5608
      target.addClass(settings.active_class).attr('aria-hidden', 'false').removeAttr('tabindex');                      // 5609
      settings.callback(tab);                                                                                          // 5610
      target.triggerHandler('toggled', [target]);                                                                      // 5611
      tabs.triggerHandler('toggled', [tab]);                                                                           // 5612
                                                                                                                       // 5613
      tab_link.off('keydown').on('keydown', interpret_keyup_action );                                                  // 5614
    },                                                                                                                 // 5615
                                                                                                                       // 5616
    data_attr : function (str) {                                                                                       // 5617
      if (this.namespace.length > 0) {                                                                                 // 5618
        return this.namespace + '-' + str;                                                                             // 5619
      }                                                                                                                // 5620
                                                                                                                       // 5621
      return str;                                                                                                      // 5622
    },                                                                                                                 // 5623
                                                                                                                       // 5624
    off : function () {},                                                                                              // 5625
                                                                                                                       // 5626
    reflow : function () {}                                                                                            // 5627
  };                                                                                                                   // 5628
}(jQuery, window, window.document));                                                                                   // 5629
;(function ($, window, document, undefined) {                                                                          // 5630
  'use strict';                                                                                                        // 5631
                                                                                                                       // 5632
  Foundation.libs.abide = {                                                                                            // 5633
    name : 'abide',                                                                                                    // 5634
                                                                                                                       // 5635
    version : '5.5.2',                                                                                                 // 5636
                                                                                                                       // 5637
    settings : {                                                                                                       // 5638
      live_validate : true,                                                                                            // 5639
      validate_on_blur : true,                                                                                         // 5640
      // validate_on: 'tab', // tab (when user tabs between fields), change (input changes), manual (call custom events) 
      focus_on_invalid : true,                                                                                         // 5642
      error_labels : true, // labels with a for="inputId" will recieve an `error` class                                // 5643
      error_class : 'error',                                                                                           // 5644
      timeout : 1000,                                                                                                  // 5645
      patterns : {                                                                                                     // 5646
        alpha : /^[a-zA-Z]+$/,                                                                                         // 5647
        alpha_numeric : /^[a-zA-Z0-9]+$/,                                                                              // 5648
        integer : /^[-+]?\d+$/,                                                                                        // 5649
        number : /^[-+]?\d*(?:[\.\,]\d+)?$/,                                                                           // 5650
                                                                                                                       // 5651
        // amex, visa, diners                                                                                          // 5652
        card : /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
        cvv : /^([0-9]){3,4}$/,                                                                                        // 5654
                                                                                                                       // 5655
        // http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#valid-e-mail-address
        email : /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
                                                                                                                       // 5658
        // http://blogs.lse.ac.uk/lti/2008/04/23/a-regular-expression-to-match-any-url/                                // 5659
        url: /^(https?|ftp|file|ssh):\/\/([-;:&=\+\$,\w]+@{1})?([-A-Za-z0-9\.]+)+:?(\d+)?((\/[-\+~%\/\.\w]+)?\??([-\+=&;%@\.\w]+)?#?([\w]+)?)?/,
        // abc.de                                                                                                      // 5661
        domain : /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,                                   // 5662
                                                                                                                       // 5663
        datetime : /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
        // YYYY-MM-DD                                                                                                  // 5665
        date : /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
        // HH:MM:SS                                                                                                    // 5667
        time : /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,                                                             // 5668
        dateISO : /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,                                                                 // 5669
        // MM/DD/YYYY                                                                                                  // 5670
        month_day_year : /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,                               // 5671
        // DD/MM/YYYY                                                                                                  // 5672
        day_month_year : /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,                               // 5673
                                                                                                                       // 5674
        // #FFF or #FFFFFF                                                                                             // 5675
        color : /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/                                                                  // 5676
      },                                                                                                               // 5677
      validators : {                                                                                                   // 5678
        equalTo : function (el, required, parent) {                                                                    // 5679
          var from  = document.getElementById(el.getAttribute(this.add_namespace('data-equalto'))).value,              // 5680
              to    = el.value,                                                                                        // 5681
              valid = (from === to);                                                                                   // 5682
                                                                                                                       // 5683
          return valid;                                                                                                // 5684
        }                                                                                                              // 5685
      }                                                                                                                // 5686
    },                                                                                                                 // 5687
                                                                                                                       // 5688
    timer : null,                                                                                                      // 5689
                                                                                                                       // 5690
    init : function (scope, method, options) {                                                                         // 5691
      this.bindings(method, options);                                                                                  // 5692
    },                                                                                                                 // 5693
                                                                                                                       // 5694
    events : function (scope) {                                                                                        // 5695
      var self = this,                                                                                                 // 5696
          form = self.S(scope).attr('novalidate', 'novalidate'),                                                       // 5697
          settings = form.data(this.attr_name(true) + '-init') || {};                                                  // 5698
                                                                                                                       // 5699
      this.invalid_attr = this.add_namespace('data-invalid');                                                          // 5700
                                                                                                                       // 5701
      function validate(originalSelf, e) {                                                                             // 5702
        clearTimeout(self.timer);                                                                                      // 5703
        self.timer = setTimeout(function () {                                                                          // 5704
          self.validate([originalSelf], e);                                                                            // 5705
        }.bind(originalSelf), settings.timeout);                                                                       // 5706
      }                                                                                                                // 5707
                                                                                                                       // 5708
                                                                                                                       // 5709
      form                                                                                                             // 5710
        .off('.abide')                                                                                                 // 5711
        .on('submit.fndtn.abide', function (e) {                                                                       // 5712
          var is_ajax = /ajax/i.test(self.S(this).attr(self.attr_name()));                                             // 5713
          return self.validate(self.S(this).find('input, textarea, select').not(":hidden, [data-abide-ignore]").get(), e, is_ajax);
        })                                                                                                             // 5715
        .on('validate.fndtn.abide', function (e) {                                                                     // 5716
          if (settings.validate_on === 'manual') {                                                                     // 5717
            self.validate([e.target], e);                                                                              // 5718
          }                                                                                                            // 5719
        })                                                                                                             // 5720
        .on('reset', function (e) {                                                                                    // 5721
          return self.reset($(this), e);                                                                               // 5722
        })                                                                                                             // 5723
        .find('input, textarea, select').not(":hidden, [data-abide-ignore]")                                           // 5724
          .off('.abide')                                                                                               // 5725
          .on('blur.fndtn.abide change.fndtn.abide', function (e) {                                                    // 5726
            // old settings fallback                                                                                   // 5727
            // will be deprecated with F6 release                                                                      // 5728
            if (settings.validate_on_blur && settings.validate_on_blur === true) {                                     // 5729
              validate(this, e);                                                                                       // 5730
            }                                                                                                          // 5731
            // new settings combining validate options into one setting                                                // 5732
            if (settings.validate_on === 'change') {                                                                   // 5733
              validate(this, e);                                                                                       // 5734
            }                                                                                                          // 5735
          })                                                                                                           // 5736
          .on('keydown.fndtn.abide', function (e) {                                                                    // 5737
            // old settings fallback                                                                                   // 5738
            // will be deprecated with F6 release                                                                      // 5739
            if (settings.live_validate && settings.live_validate === true && e.which != 9) {                           // 5740
              validate(this, e);                                                                                       // 5741
            }                                                                                                          // 5742
            // new settings combining validate options into one setting                                                // 5743
            if (settings.validate_on === 'tab' && e.which === 9) {                                                     // 5744
              validate(this, e);                                                                                       // 5745
            }                                                                                                          // 5746
            else if (settings.validate_on === 'change') {                                                              // 5747
              validate(this, e);                                                                                       // 5748
            }                                                                                                          // 5749
          })                                                                                                           // 5750
          .on('focus', function (e) {                                                                                  // 5751
            if (navigator.userAgent.match(/iPad|iPhone|Android|BlackBerry|Windows Phone|webOS/i)) {                    // 5752
              $('html, body').animate({                                                                                // 5753
                  scrollTop: $(e.target).offset().top                                                                  // 5754
              }, 100);                                                                                                 // 5755
            }                                                                                                          // 5756
          });                                                                                                          // 5757
    },                                                                                                                 // 5758
                                                                                                                       // 5759
    reset : function (form, e) {                                                                                       // 5760
      var self = this;                                                                                                 // 5761
      form.removeAttr(self.invalid_attr);                                                                              // 5762
                                                                                                                       // 5763
      $('[' + self.invalid_attr + ']', form).removeAttr(self.invalid_attr);                                            // 5764
      $('.' + self.settings.error_class, form).not('small').removeClass(self.settings.error_class);                    // 5765
      $(':input', form).not(':button, :submit, :reset, :hidden, [data-abide-ignore]').val('').removeAttr(self.invalid_attr);
    },                                                                                                                 // 5767
                                                                                                                       // 5768
    validate : function (els, e, is_ajax) {                                                                            // 5769
      var validations = this.parse_patterns(els),                                                                      // 5770
          validation_count = validations.length,                                                                       // 5771
          form = this.S(els[0]).closest('form'),                                                                       // 5772
          submit_event = /submit/.test(e.type);                                                                        // 5773
                                                                                                                       // 5774
      // Has to count up to make sure the focus gets applied to the top error                                          // 5775
      for (var i = 0; i < validation_count; i++) {                                                                     // 5776
        if (!validations[i] && (submit_event || is_ajax)) {                                                            // 5777
          if (this.settings.focus_on_invalid) {                                                                        // 5778
            els[i].focus();                                                                                            // 5779
          }                                                                                                            // 5780
          form.trigger('invalid.fndtn.abide');                                                                         // 5781
          this.S(els[i]).closest('form').attr(this.invalid_attr, '');                                                  // 5782
          return false;                                                                                                // 5783
        }                                                                                                              // 5784
      }                                                                                                                // 5785
                                                                                                                       // 5786
      if (submit_event || is_ajax) {                                                                                   // 5787
        form.trigger('valid.fndtn.abide');                                                                             // 5788
      }                                                                                                                // 5789
                                                                                                                       // 5790
      form.removeAttr(this.invalid_attr);                                                                              // 5791
                                                                                                                       // 5792
      if (is_ajax) {                                                                                                   // 5793
        return false;                                                                                                  // 5794
      }                                                                                                                // 5795
                                                                                                                       // 5796
      return true;                                                                                                     // 5797
    },                                                                                                                 // 5798
                                                                                                                       // 5799
    parse_patterns : function (els) {                                                                                  // 5800
      var i = els.length,                                                                                              // 5801
          el_patterns = [];                                                                                            // 5802
                                                                                                                       // 5803
      while (i--) {                                                                                                    // 5804
        el_patterns.push(this.pattern(els[i]));                                                                        // 5805
      }                                                                                                                // 5806
                                                                                                                       // 5807
      return this.check_validation_and_apply_styles(el_patterns);                                                      // 5808
    },                                                                                                                 // 5809
                                                                                                                       // 5810
    pattern : function (el) {                                                                                          // 5811
      var type = el.getAttribute('type'),                                                                              // 5812
          required = typeof el.getAttribute('required') === 'string';                                                  // 5813
                                                                                                                       // 5814
      var pattern = el.getAttribute('pattern') || '';                                                                  // 5815
                                                                                                                       // 5816
      if (this.settings.patterns.hasOwnProperty(pattern) && pattern.length > 0) {                                      // 5817
        return [el, this.settings.patterns[pattern], required];                                                        // 5818
      } else if (pattern.length > 0) {                                                                                 // 5819
        return [el, new RegExp(pattern), required];                                                                    // 5820
      }                                                                                                                // 5821
                                                                                                                       // 5822
      if (this.settings.patterns.hasOwnProperty(type)) {                                                               // 5823
        return [el, this.settings.patterns[type], required];                                                           // 5824
      }                                                                                                                // 5825
                                                                                                                       // 5826
      pattern = /.*/;                                                                                                  // 5827
                                                                                                                       // 5828
      return [el, pattern, required];                                                                                  // 5829
    },                                                                                                                 // 5830
                                                                                                                       // 5831
    // TODO: Break this up into smaller methods, getting hard to read.                                                 // 5832
    check_validation_and_apply_styles : function (el_patterns) {                                                       // 5833
      var i = el_patterns.length,                                                                                      // 5834
          validations = [],                                                                                            // 5835
          form = this.S(el_patterns[0][0]).closest('[data-' + this.attr_name(true) + ']'),                             // 5836
          settings = form.data(this.attr_name(true) + '-init') || {};                                                  // 5837
      while (i--) {                                                                                                    // 5838
        var el = el_patterns[i][0],                                                                                    // 5839
            required = el_patterns[i][2],                                                                              // 5840
            value = el.value.trim(),                                                                                   // 5841
            direct_parent = this.S(el).parent(),                                                                       // 5842
            validator = el.getAttribute(this.add_namespace('data-abide-validator')),                                   // 5843
            is_radio = el.type === 'radio',                                                                            // 5844
            is_checkbox = el.type === 'checkbox',                                                                      // 5845
            label = this.S('label[for="' + el.getAttribute('id') + '"]'),                                              // 5846
            valid_length = (required) ? (el.value.length > 0) : true,                                                  // 5847
            el_validations = [];                                                                                       // 5848
                                                                                                                       // 5849
        var parent, valid;                                                                                             // 5850
                                                                                                                       // 5851
        // support old way to do equalTo validations                                                                   // 5852
        if (el.getAttribute(this.add_namespace('data-equalto'))) { validator = 'equalTo' }                             // 5853
                                                                                                                       // 5854
        if (!direct_parent.is('label')) {                                                                              // 5855
          parent = direct_parent;                                                                                      // 5856
        } else {                                                                                                       // 5857
          parent = direct_parent.parent();                                                                             // 5858
        }                                                                                                              // 5859
                                                                                                                       // 5860
        if (is_radio && required) {                                                                                    // 5861
          el_validations.push(this.valid_radio(el, required));                                                         // 5862
        } else if (is_checkbox && required) {                                                                          // 5863
          el_validations.push(this.valid_checkbox(el, required));                                                      // 5864
                                                                                                                       // 5865
        } else if (validator) {                                                                                        // 5866
          // Validate using each of the specified (space-delimited) validators.                                        // 5867
          var validators = validator.split(' ');                                                                       // 5868
          var last_valid = true, all_valid = true;                                                                     // 5869
          for (var iv = 0; iv < validators.length; iv++) {                                                             // 5870
              valid = this.settings.validators[validators[iv]].apply(this, [el, required, parent])                     // 5871
              el_validations.push(valid);                                                                              // 5872
              all_valid = valid && last_valid;                                                                         // 5873
              last_valid = valid;                                                                                      // 5874
          }                                                                                                            // 5875
          if (all_valid) {                                                                                             // 5876
              this.S(el).removeAttr(this.invalid_attr);                                                                // 5877
              parent.removeClass('error');                                                                             // 5878
              if (label.length > 0 && this.settings.error_labels) {                                                    // 5879
                label.removeClass(this.settings.error_class).removeAttr('role');                                       // 5880
              }                                                                                                        // 5881
              $(el).triggerHandler('valid');                                                                           // 5882
          } else {                                                                                                     // 5883
              this.S(el).attr(this.invalid_attr, '');                                                                  // 5884
              parent.addClass('error');                                                                                // 5885
              if (label.length > 0 && this.settings.error_labels) {                                                    // 5886
                label.addClass(this.settings.error_class).attr('role', 'alert');                                       // 5887
              }                                                                                                        // 5888
              $(el).triggerHandler('invalid');                                                                         // 5889
          }                                                                                                            // 5890
        } else {                                                                                                       // 5891
                                                                                                                       // 5892
          if (el_patterns[i][1].test(value) && valid_length ||                                                         // 5893
            !required && el.value.length < 1 || $(el).attr('disabled')) {                                              // 5894
            el_validations.push(true);                                                                                 // 5895
          } else {                                                                                                     // 5896
            el_validations.push(false);                                                                                // 5897
          }                                                                                                            // 5898
                                                                                                                       // 5899
          el_validations = [el_validations.every(function (valid) {return valid;})];                                   // 5900
          if (el_validations[0]) {                                                                                     // 5901
            this.S(el).removeAttr(this.invalid_attr);                                                                  // 5902
            el.setAttribute('aria-invalid', 'false');                                                                  // 5903
            el.removeAttribute('aria-describedby');                                                                    // 5904
            parent.removeClass(this.settings.error_class);                                                             // 5905
            if (label.length > 0 && this.settings.error_labels) {                                                      // 5906
              label.removeClass(this.settings.error_class).removeAttr('role');                                         // 5907
            }                                                                                                          // 5908
            $(el).triggerHandler('valid');                                                                             // 5909
          } else {                                                                                                     // 5910
            this.S(el).attr(this.invalid_attr, '');                                                                    // 5911
            el.setAttribute('aria-invalid', 'true');                                                                   // 5912
                                                                                                                       // 5913
            // Try to find the error associated with the input                                                         // 5914
            var errorElem = parent.find('small.' + this.settings.error_class, 'span.' + this.settings.error_class);    // 5915
            var errorID = errorElem.length > 0 ? errorElem[0].id : '';                                                 // 5916
            if (errorID.length > 0) {                                                                                  // 5917
              el.setAttribute('aria-describedby', errorID);                                                            // 5918
            }                                                                                                          // 5919
                                                                                                                       // 5920
            // el.setAttribute('aria-describedby', $(el).find('.error')[0].id);                                        // 5921
            parent.addClass(this.settings.error_class);                                                                // 5922
            if (label.length > 0 && this.settings.error_labels) {                                                      // 5923
              label.addClass(this.settings.error_class).attr('role', 'alert');                                         // 5924
            }                                                                                                          // 5925
            $(el).triggerHandler('invalid');                                                                           // 5926
          }                                                                                                            // 5927
        }                                                                                                              // 5928
        validations = validations.concat(el_validations);                                                              // 5929
      }                                                                                                                // 5930
      return validations;                                                                                              // 5931
    },                                                                                                                 // 5932
                                                                                                                       // 5933
    valid_checkbox : function (el, required) {                                                                         // 5934
      var el = this.S(el),                                                                                             // 5935
          valid = (el.is(':checked') || !required || el.get(0).getAttribute('disabled'));                              // 5936
                                                                                                                       // 5937
      if (valid) {                                                                                                     // 5938
        el.removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class);                              // 5939
        $(el).triggerHandler('valid');                                                                                 // 5940
      } else {                                                                                                         // 5941
        el.attr(this.invalid_attr, '').parent().addClass(this.settings.error_class);                                   // 5942
        $(el).triggerHandler('invalid');                                                                               // 5943
      }                                                                                                                // 5944
                                                                                                                       // 5945
      return valid;                                                                                                    // 5946
    },                                                                                                                 // 5947
                                                                                                                       // 5948
    valid_radio : function (el, required) {                                                                            // 5949
      var name = el.getAttribute('name'),                                                                              // 5950
          group = this.S(el).closest('[data-' + this.attr_name(true) + ']').find("[name='" + name + "']"),             // 5951
          count = group.length,                                                                                        // 5952
          valid = false,                                                                                               // 5953
          disabled = false;                                                                                            // 5954
                                                                                                                       // 5955
      // Has to count up to make sure the focus gets applied to the top error                                          // 5956
        for (var i=0; i < count; i++) {                                                                                // 5957
            if( group[i].getAttribute('disabled') ){                                                                   // 5958
                disabled=true;                                                                                         // 5959
                valid=true;                                                                                            // 5960
            } else {                                                                                                   // 5961
                if (group[i].checked){                                                                                 // 5962
                    valid = true;                                                                                      // 5963
                } else {                                                                                               // 5964
                    if( disabled ){                                                                                    // 5965
                        valid = false;                                                                                 // 5966
                    }                                                                                                  // 5967
                }                                                                                                      // 5968
            }                                                                                                          // 5969
        }                                                                                                              // 5970
                                                                                                                       // 5971
      // Has to count up to make sure the focus gets applied to the top error                                          // 5972
      for (var i = 0; i < count; i++) {                                                                                // 5973
        if (valid) {                                                                                                   // 5974
          this.S(group[i]).removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class);              // 5975
          $(group[i]).triggerHandler('valid');                                                                         // 5976
        } else {                                                                                                       // 5977
          this.S(group[i]).attr(this.invalid_attr, '').parent().addClass(this.settings.error_class);                   // 5978
          $(group[i]).triggerHandler('invalid');                                                                       // 5979
        }                                                                                                              // 5980
      }                                                                                                                // 5981
                                                                                                                       // 5982
      return valid;                                                                                                    // 5983
    },                                                                                                                 // 5984
                                                                                                                       // 5985
    valid_equal : function (el, required, parent) {                                                                    // 5986
      var from  = document.getElementById(el.getAttribute(this.add_namespace('data-equalto'))).value,                  // 5987
          to    = el.value,                                                                                            // 5988
          valid = (from === to);                                                                                       // 5989
                                                                                                                       // 5990
      if (valid) {                                                                                                     // 5991
        this.S(el).removeAttr(this.invalid_attr);                                                                      // 5992
        parent.removeClass(this.settings.error_class);                                                                 // 5993
        if (label.length > 0 && settings.error_labels) {                                                               // 5994
          label.removeClass(this.settings.error_class);                                                                // 5995
        }                                                                                                              // 5996
      } else {                                                                                                         // 5997
        this.S(el).attr(this.invalid_attr, '');                                                                        // 5998
        parent.addClass(this.settings.error_class);                                                                    // 5999
        if (label.length > 0 && settings.error_labels) {                                                               // 6000
          label.addClass(this.settings.error_class);                                                                   // 6001
        }                                                                                                              // 6002
      }                                                                                                                // 6003
                                                                                                                       // 6004
      return valid;                                                                                                    // 6005
    },                                                                                                                 // 6006
                                                                                                                       // 6007
    valid_oneof : function (el, required, parent, doNotValidateOthers) {                                               // 6008
      var el = this.S(el),                                                                                             // 6009
        others = this.S('[' + this.add_namespace('data-oneof') + ']'),                                                 // 6010
        valid = others.filter(':checked').length > 0;                                                                  // 6011
                                                                                                                       // 6012
      if (valid) {                                                                                                     // 6013
        el.removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class);                              // 6014
      } else {                                                                                                         // 6015
        el.attr(this.invalid_attr, '').parent().addClass(this.settings.error_class);                                   // 6016
      }                                                                                                                // 6017
                                                                                                                       // 6018
      if (!doNotValidateOthers) {                                                                                      // 6019
        var _this = this;                                                                                              // 6020
        others.each(function () {                                                                                      // 6021
          _this.valid_oneof.call(_this, this, null, null, true);                                                       // 6022
        });                                                                                                            // 6023
      }                                                                                                                // 6024
                                                                                                                       // 6025
      return valid;                                                                                                    // 6026
    },                                                                                                                 // 6027
                                                                                                                       // 6028
    reflow : function(scope, options) {                                                                                // 6029
      var self = this,                                                                                                 // 6030
          form = self.S('[' + this.attr_name() + ']').attr('novalidate', 'novalidate');                                // 6031
          self.S(form).each(function (idx, el) {                                                                       // 6032
            self.events(el);                                                                                           // 6033
          });                                                                                                          // 6034
    }                                                                                                                  // 6035
  };                                                                                                                   // 6036
}(jQuery, window, window.document));                                                                                   // 6037
;(function ($, window, document, undefined) {                                                                          // 6038
  'use strict';                                                                                                        // 6039
                                                                                                                       // 6040
  Foundation.libs.tooltip = {                                                                                          // 6041
    name : 'tooltip',                                                                                                  // 6042
                                                                                                                       // 6043
    version : '5.5.2',                                                                                                 // 6044
                                                                                                                       // 6045
    settings : {                                                                                                       // 6046
      additional_inheritable_classes : [],                                                                             // 6047
      tooltip_class : '.tooltip',                                                                                      // 6048
      append_to : 'body',                                                                                              // 6049
      touch_close_text : 'Tap To Close',                                                                               // 6050
      disable_for_touch : false,                                                                                       // 6051
      hover_delay : 200,                                                                                               // 6052
      show_on : 'all',                                                                                                 // 6053
      tip_template : function (selector, content) {                                                                    // 6054
        return '<span data-selector="' + selector + '" id="' + selector + '" class="'                                  // 6055
          + Foundation.libs.tooltip.settings.tooltip_class.substring(1)                                                // 6056
          + '" role="tooltip">' + content + '<span class="nub"></span></span>';                                        // 6057
      }                                                                                                                // 6058
    },                                                                                                                 // 6059
                                                                                                                       // 6060
    cache : {},                                                                                                        // 6061
                                                                                                                       // 6062
    init : function (scope, method, options) {                                                                         // 6063
      Foundation.inherit(this, 'random_str');                                                                          // 6064
      this.bindings(method, options);                                                                                  // 6065
    },                                                                                                                 // 6066
                                                                                                                       // 6067
    should_show : function (target, tip) {                                                                             // 6068
      var settings = $.extend({}, this.settings, this.data_options(target));                                           // 6069
                                                                                                                       // 6070
      if (settings.show_on === 'all') {                                                                                // 6071
        return true;                                                                                                   // 6072
      } else if (this.small() && settings.show_on === 'small') {                                                       // 6073
        return true;                                                                                                   // 6074
      } else if (this.medium() && settings.show_on === 'medium') {                                                     // 6075
        return true;                                                                                                   // 6076
      } else if (this.large() && settings.show_on === 'large') {                                                       // 6077
        return true;                                                                                                   // 6078
      }                                                                                                                // 6079
      return false;                                                                                                    // 6080
    },                                                                                                                 // 6081
                                                                                                                       // 6082
    medium : function () {                                                                                             // 6083
      return matchMedia(Foundation.media_queries['medium']).matches;                                                   // 6084
    },                                                                                                                 // 6085
                                                                                                                       // 6086
    large : function () {                                                                                              // 6087
      return matchMedia(Foundation.media_queries['large']).matches;                                                    // 6088
    },                                                                                                                 // 6089
                                                                                                                       // 6090
    events : function (instance) {                                                                                     // 6091
      var self = this,                                                                                                 // 6092
          S = self.S;                                                                                                  // 6093
                                                                                                                       // 6094
      self.create(this.S(instance));                                                                                   // 6095
                                                                                                                       // 6096
      function _startShow(elt, $this, immediate) {                                                                     // 6097
        if (elt.timer) {                                                                                               // 6098
          return;                                                                                                      // 6099
        }                                                                                                              // 6100
                                                                                                                       // 6101
        if (immediate) {                                                                                               // 6102
          elt.timer = null;                                                                                            // 6103
          self.showTip($this);                                                                                         // 6104
        } else {                                                                                                       // 6105
          elt.timer = setTimeout(function () {                                                                         // 6106
            elt.timer = null;                                                                                          // 6107
            self.showTip($this);                                                                                       // 6108
          }.bind(elt), self.settings.hover_delay);                                                                     // 6109
        }                                                                                                              // 6110
      }                                                                                                                // 6111
                                                                                                                       // 6112
      function _startHide(elt, $this) {                                                                                // 6113
        if (elt.timer) {                                                                                               // 6114
          clearTimeout(elt.timer);                                                                                     // 6115
          elt.timer = null;                                                                                            // 6116
        }                                                                                                              // 6117
                                                                                                                       // 6118
        self.hide($this);                                                                                              // 6119
      }                                                                                                                // 6120
                                                                                                                       // 6121
      $(this.scope)                                                                                                    // 6122
        .off('.tooltip')                                                                                               // 6123
        .on('mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip',  // 6124
          '[' + this.attr_name() + ']', function (e) {                                                                 // 6125
          var $this = S(this),                                                                                         // 6126
              settings = $.extend({}, self.settings, self.data_options($this)),                                        // 6127
              is_touch = false;                                                                                        // 6128
                                                                                                                       // 6129
          if (Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type) && S(e.target).is('a')) {                    // 6130
            return false;                                                                                              // 6131
          }                                                                                                            // 6132
                                                                                                                       // 6133
          if (/mouse/i.test(e.type) && self.ie_touch(e)) {                                                             // 6134
            return false;                                                                                              // 6135
          }                                                                                                            // 6136
                                                                                                                       // 6137
          if ($this.hasClass('open')) {                                                                                // 6138
            if (Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type)) {                                         // 6139
              e.preventDefault();                                                                                      // 6140
            }                                                                                                          // 6141
            self.hide($this);                                                                                          // 6142
          } else {                                                                                                     // 6143
            if (settings.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type)) {           // 6144
              return;                                                                                                  // 6145
            } else if (!settings.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type)) {   // 6146
              e.preventDefault();                                                                                      // 6147
              S(settings.tooltip_class + '.open').hide();                                                              // 6148
              is_touch = true;                                                                                         // 6149
              // close other open tooltips on touch                                                                    // 6150
              if ($('.open[' + self.attr_name() + ']').length > 0) {                                                   // 6151
               var prevOpen = S($('.open[' + self.attr_name() + ']')[0]);                                              // 6152
               self.hide(prevOpen);                                                                                    // 6153
              }                                                                                                        // 6154
            }                                                                                                          // 6155
                                                                                                                       // 6156
            if (/enter|over/i.test(e.type)) {                                                                          // 6157
              _startShow(this, $this);                                                                                 // 6158
                                                                                                                       // 6159
            } else if (e.type === 'mouseout' || e.type === 'mouseleave') {                                             // 6160
              _startHide(this, $this);                                                                                 // 6161
            } else {                                                                                                   // 6162
              _startShow(this, $this, true);                                                                           // 6163
            }                                                                                                          // 6164
          }                                                                                                            // 6165
        })                                                                                                             // 6166
        .on('mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip', '[' + this.attr_name() + '].open', function (e) {
          if (/mouse/i.test(e.type) && self.ie_touch(e)) {                                                             // 6168
            return false;                                                                                              // 6169
          }                                                                                                            // 6170
                                                                                                                       // 6171
          if ($(this).data('tooltip-open-event-type') == 'touch' && e.type == 'mouseleave') {                          // 6172
            return;                                                                                                    // 6173
          } else if ($(this).data('tooltip-open-event-type') == 'mouse' && /MSPointerDown|touchstart/i.test(e.type)) { // 6174
            self.convert_to_touch($(this));                                                                            // 6175
          } else {                                                                                                     // 6176
            _startHide(this, $(this));                                                                                 // 6177
          }                                                                                                            // 6178
        })                                                                                                             // 6179
        .on('DOMNodeRemoved DOMAttrModified', '[' + this.attr_name() + ']:not(a)', function (e) {                      // 6180
          _startHide(this, S(this));                                                                                   // 6181
        });                                                                                                            // 6182
    },                                                                                                                 // 6183
                                                                                                                       // 6184
    ie_touch : function (e) {                                                                                          // 6185
      // How do I distinguish between IE11 and Windows Phone 8?????                                                    // 6186
      return false;                                                                                                    // 6187
    },                                                                                                                 // 6188
                                                                                                                       // 6189
    showTip : function ($target) {                                                                                     // 6190
      var $tip = this.getTip($target);                                                                                 // 6191
      if (this.should_show($target, $tip)) {                                                                           // 6192
        return this.show($target);                                                                                     // 6193
      }                                                                                                                // 6194
      return;                                                                                                          // 6195
    },                                                                                                                 // 6196
                                                                                                                       // 6197
    getTip : function ($target) {                                                                                      // 6198
      var selector = this.selector($target),                                                                           // 6199
          settings = $.extend({}, this.settings, this.data_options($target)),                                          // 6200
          tip = null;                                                                                                  // 6201
                                                                                                                       // 6202
      if (selector) {                                                                                                  // 6203
        tip = this.S('span[data-selector="' + selector + '"]' + settings.tooltip_class);                               // 6204
      }                                                                                                                // 6205
                                                                                                                       // 6206
      return (typeof tip === 'object') ? tip : false;                                                                  // 6207
    },                                                                                                                 // 6208
                                                                                                                       // 6209
    selector : function ($target) {                                                                                    // 6210
      var dataSelector = $target.attr(this.attr_name()) || $target.attr('data-selector');                              // 6211
                                                                                                                       // 6212
      if (typeof dataSelector != 'string') {                                                                           // 6213
        dataSelector = this.random_str(6);                                                                             // 6214
        $target                                                                                                        // 6215
          .attr('data-selector', dataSelector)                                                                         // 6216
          .attr('aria-describedby', dataSelector);                                                                     // 6217
      }                                                                                                                // 6218
                                                                                                                       // 6219
      return dataSelector;                                                                                             // 6220
    },                                                                                                                 // 6221
                                                                                                                       // 6222
    create : function ($target) {                                                                                      // 6223
      var self = this,                                                                                                 // 6224
          settings = $.extend({}, this.settings, this.data_options($target)),                                          // 6225
          tip_template = this.settings.tip_template;                                                                   // 6226
                                                                                                                       // 6227
      if (typeof settings.tip_template === 'string' && window.hasOwnProperty(settings.tip_template)) {                 // 6228
        tip_template = window[settings.tip_template];                                                                  // 6229
      }                                                                                                                // 6230
                                                                                                                       // 6231
      var $tip = $(tip_template(this.selector($target), $('<div></div>').html($target.attr('title')).html())),         // 6232
          classes = this.inheritable_classes($target);                                                                 // 6233
                                                                                                                       // 6234
      $tip.addClass(classes).appendTo(settings.append_to);                                                             // 6235
                                                                                                                       // 6236
      if (Modernizr.touch) {                                                                                           // 6237
        $tip.append('<span class="tap-to-close">' + settings.touch_close_text + '</span>');                            // 6238
        $tip.on('touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip', function (e) {                                 // 6239
          self.hide($target);                                                                                          // 6240
        });                                                                                                            // 6241
      }                                                                                                                // 6242
                                                                                                                       // 6243
      $target.removeAttr('title').attr('title', '');                                                                   // 6244
    },                                                                                                                 // 6245
                                                                                                                       // 6246
    reposition : function (target, tip, classes) {                                                                     // 6247
      var width, nub, nubHeight, nubWidth, column, objPos;                                                             // 6248
                                                                                                                       // 6249
      tip.css('visibility', 'hidden').show();                                                                          // 6250
                                                                                                                       // 6251
      width = target.data('width');                                                                                    // 6252
      nub = tip.children('.nub');                                                                                      // 6253
      nubHeight = nub.outerHeight();                                                                                   // 6254
      nubWidth = nub.outerHeight();                                                                                    // 6255
                                                                                                                       // 6256
      if (this.small()) {                                                                                              // 6257
        tip.css({'width' : '100%'});                                                                                   // 6258
      } else {                                                                                                         // 6259
        tip.css({'width' : (width) ? width : 'auto'});                                                                 // 6260
      }                                                                                                                // 6261
                                                                                                                       // 6262
      objPos = function (obj, top, right, bottom, left, width) {                                                       // 6263
        return obj.css({                                                                                               // 6264
          'top' : (top) ? top : 'auto',                                                                                // 6265
          'bottom' : (bottom) ? bottom : 'auto',                                                                       // 6266
          'left' : (left) ? left : 'auto',                                                                             // 6267
          'right' : (right) ? right : 'auto'                                                                           // 6268
        }).end();                                                                                                      // 6269
      };                                                                                                               // 6270
                                                                                                                       // 6271
      objPos(tip, (target.offset().top + target.outerHeight() + 10), 'auto', 'auto', target.offset().left);            // 6272
                                                                                                                       // 6273
      if (this.small()) {                                                                                              // 6274
        objPos(tip, (target.offset().top + target.outerHeight() + 10), 'auto', 'auto', 12.5, $(this.scope).width());   // 6275
        tip.addClass('tip-override');                                                                                  // 6276
        objPos(nub, -nubHeight, 'auto', 'auto', target.offset().left);                                                 // 6277
      } else {                                                                                                         // 6278
        var left = target.offset().left;                                                                               // 6279
        if (Foundation.rtl) {                                                                                          // 6280
          nub.addClass('rtl');                                                                                         // 6281
          left = target.offset().left + target.outerWidth() - tip.outerWidth();                                        // 6282
        }                                                                                                              // 6283
                                                                                                                       // 6284
        objPos(tip, (target.offset().top + target.outerHeight() + 10), 'auto', 'auto', left);                          // 6285
        // reset nub from small styles, if they've been applied                                                        // 6286
        if (nub.attr('style')) {                                                                                       // 6287
          nub.removeAttr('style');                                                                                     // 6288
        }                                                                                                              // 6289
                                                                                                                       // 6290
        tip.removeClass('tip-override');                                                                               // 6291
        if (classes && classes.indexOf('tip-top') > -1) {                                                              // 6292
          if (Foundation.rtl) {                                                                                        // 6293
            nub.addClass('rtl');                                                                                       // 6294
          }                                                                                                            // 6295
          objPos(tip, (target.offset().top - tip.outerHeight()), 'auto', 'auto', left)                                 // 6296
            .removeClass('tip-override');                                                                              // 6297
        } else if (classes && classes.indexOf('tip-left') > -1) {                                                      // 6298
          objPos(tip, (target.offset().top + (target.outerHeight() / 2) - (tip.outerHeight() / 2)), 'auto', 'auto', (target.offset().left - tip.outerWidth() - nubHeight))
            .removeClass('tip-override');                                                                              // 6300
          nub.removeClass('rtl');                                                                                      // 6301
        } else if (classes && classes.indexOf('tip-right') > -1) {                                                     // 6302
          objPos(tip, (target.offset().top + (target.outerHeight() / 2) - (tip.outerHeight() / 2)), 'auto', 'auto', (target.offset().left + target.outerWidth() + nubHeight))
            .removeClass('tip-override');                                                                              // 6304
          nub.removeClass('rtl');                                                                                      // 6305
        }                                                                                                              // 6306
      }                                                                                                                // 6307
                                                                                                                       // 6308
      tip.css('visibility', 'visible').hide();                                                                         // 6309
    },                                                                                                                 // 6310
                                                                                                                       // 6311
    small : function () {                                                                                              // 6312
      return matchMedia(Foundation.media_queries.small).matches &&                                                     // 6313
        !matchMedia(Foundation.media_queries.medium).matches;                                                          // 6314
    },                                                                                                                 // 6315
                                                                                                                       // 6316
    inheritable_classes : function ($target) {                                                                         // 6317
      var settings = $.extend({}, this.settings, this.data_options($target)),                                          // 6318
          inheritables = ['tip-top', 'tip-left', 'tip-bottom', 'tip-right', 'radius', 'round'].concat(settings.additional_inheritable_classes),
          classes = $target.attr('class'),                                                                             // 6320
          filtered = classes ? $.map(classes.split(' '), function (el, i) {                                            // 6321
            if ($.inArray(el, inheritables) !== -1) {                                                                  // 6322
              return el;                                                                                               // 6323
            }                                                                                                          // 6324
          }).join(' ') : '';                                                                                           // 6325
                                                                                                                       // 6326
      return $.trim(filtered);                                                                                         // 6327
    },                                                                                                                 // 6328
                                                                                                                       // 6329
    convert_to_touch : function ($target) {                                                                            // 6330
      var self = this,                                                                                                 // 6331
          $tip = self.getTip($target),                                                                                 // 6332
          settings = $.extend({}, self.settings, self.data_options($target));                                          // 6333
                                                                                                                       // 6334
      if ($tip.find('.tap-to-close').length === 0) {                                                                   // 6335
        $tip.append('<span class="tap-to-close">' + settings.touch_close_text + '</span>');                            // 6336
        $tip.on('click.fndtn.tooltip.tapclose touchstart.fndtn.tooltip.tapclose MSPointerDown.fndtn.tooltip.tapclose', function (e) {
          self.hide($target);                                                                                          // 6338
        });                                                                                                            // 6339
      }                                                                                                                // 6340
                                                                                                                       // 6341
      $target.data('tooltip-open-event-type', 'touch');                                                                // 6342
    },                                                                                                                 // 6343
                                                                                                                       // 6344
    show : function ($target) {                                                                                        // 6345
      var $tip = this.getTip($target);                                                                                 // 6346
                                                                                                                       // 6347
      if ($target.data('tooltip-open-event-type') == 'touch') {                                                        // 6348
        this.convert_to_touch($target);                                                                                // 6349
      }                                                                                                                // 6350
                                                                                                                       // 6351
      this.reposition($target, $tip, $target.attr('class'));                                                           // 6352
      $target.addClass('open');                                                                                        // 6353
      $tip.fadeIn(150);                                                                                                // 6354
    },                                                                                                                 // 6355
                                                                                                                       // 6356
    hide : function ($target) {                                                                                        // 6357
      var $tip = this.getTip($target);                                                                                 // 6358
      $tip.fadeOut(150, function () {                                                                                  // 6359
        $tip.find('.tap-to-close').remove();                                                                           // 6360
        $tip.off('click.fndtn.tooltip.tapclose MSPointerDown.fndtn.tapclose');                                         // 6361
        $target.removeClass('open');                                                                                   // 6362
      });                                                                                                              // 6363
    },                                                                                                                 // 6364
                                                                                                                       // 6365
    off : function () {                                                                                                // 6366
      var self = this;                                                                                                 // 6367
      this.S(this.scope).off('.fndtn.tooltip');                                                                        // 6368
      this.S(this.settings.tooltip_class).each(function (i) {                                                          // 6369
        $('[' + self.attr_name() + ']').eq(i).attr('title', $(this).text());                                           // 6370
      }).remove();                                                                                                     // 6371
    },                                                                                                                 // 6372
                                                                                                                       // 6373
    reflow : function () {}                                                                                            // 6374
  };                                                                                                                   // 6375
}(jQuery, window, window.document));                                                                                   // 6376
                                                                                                                       // 6377
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 6485
}).call(this);                                                       // 6486
                                                                     // 6487
                                                                     // 6488
                                                                     // 6489
                                                                     // 6490
                                                                     // 6491
                                                                     // 6492
(function () {                                                       // 6493
                                                                     // 6494
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ewall:foundation/js/activate-foundation.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
if (Meteor.isClient) {                                                                                                 // 1
  $(document).ready(function () {                                                                                      // 2
		$(document).foundation(function (response) {                                                                         // 3
			console.log(response.errors);                                                                                       // 4
		});                                                                                                                  // 5
	});                                                                                                                   // 6
}                                                                                                                      // 7
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 6509
}).call(this);                                                       // 6510
                                                                     // 6511
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['ewall:foundation'] = {};

})();
