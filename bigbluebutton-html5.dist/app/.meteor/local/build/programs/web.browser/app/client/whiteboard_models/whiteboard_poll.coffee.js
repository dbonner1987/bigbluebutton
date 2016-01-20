(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/whiteboard_models/whiteboard_poll.coffee.js                  //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var calculateFontAndWidth, getRenderedTextSize,                        // 2
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;                                         //
                                                                       //
this.WhiteboardPollModel = (function(superClass) {                     // 2
  extend(WhiteboardPollModel, superClass);                             // 3
                                                                       //
  function WhiteboardPollModel(paper1) {                               // 3
    this.paper = paper1;                                               // 4
    this.make = bind(this.make, this);                                 // 4
    WhiteboardPollModel.__super__.constructor.call(this, this.paper);  // 4
    this.definition = [0, 0, 0, 0, "#333333", "2px", "#ffffff"];       // 4
    this.paper;                                                        // 4
  }                                                                    //
                                                                       //
  WhiteboardPollModel.prototype.make = function(startingData) {        // 3
    var backgroundColor, barHeight, barWidth, calcFontSize, calculatedData, centerCell, color, height, horizontalPadding, i, k, l, leftCell, m, magicNumber, maxBarWidth, maxDigitWidth, maxLeftWidth, maxLineHeight, maxNumVotes, maxRightWidth, n, objects, percResult, ref, ref1, ref2, ref3, ref4, ref5, rightCell, svgNSi, tempSpanEl, tempTextNode, textArray, thickness, verticalPadding, votesTotal, width, x, x1, x2, xBar, xLeft, xNumVotes, xNumVotesDefault, xNumVotesMovedRight, xRight, y, y1, y2, yBar, yLeft, yNumVotes, yRight;
    x1 = startingData.points[0];                                       // 21
    y1 = startingData.points[1];                                       // 21
    x2 = startingData.points[2] + startingData.points[0] - 0.001;      // 21
    y2 = startingData.points[3] + startingData.points[1] - 0.001;      // 21
    thickness = 2;                                                     // 21
    backgroundColor = "#ffffff";                                       // 21
    verticalPadding = 0;                                               // 21
    horizontalPadding = 0;                                             // 21
    calcFontSize = 30;                                                 // 21
    votesTotal = 0;                                                    // 21
    maxNumVotes = 0;                                                   // 21
    textArray = [];                                                    // 21
    if (startingData.result != null) {                                 // 35
      for (i = k = 0, ref = startingData.result.length - 1; 0 <= ref ? k <= ref : k >= ref; i = 0 <= ref ? ++k : --k) {
        votesTotal += startingData.result[i].num_votes;                // 38
        if (maxNumVotes < startingData.result[i].num_votes) {          // 39
          maxNumVotes = startingData.result[i].num_votes;              // 40
        }                                                              //
        textArray[i] = [];                                             // 38
      }                                                                // 37
      for (i = l = 0, ref1 = startingData.result.length - 1; 0 <= ref1 ? l <= ref1 : l >= ref1; i = 0 <= ref1 ? ++l : --l) {
        textArray[i].push(startingData.result[i].key, startingData.result[i].num_votes + "");
        if (votesTotal === 0) {                                        // 45
          textArray[i].push("0%");                                     // 46
        } else {                                                       //
          percResult = startingData.result[i].num_votes / votesTotal * 100;
          textArray[i].push(Math.round(percResult) + "%");             // 48
        }                                                              //
      }                                                                // 43
    }                                                                  //
    if (x2 < x1) {                                                     // 52
      ref2 = [x2, x1], x1 = ref2[0], x2 = ref2[1];                     // 53
    }                                                                  //
    if (y2 < y1) {                                                     // 54
      ref3 = [y2, y1], y1 = ref3[0], y2 = ref3[1];                     // 55
    }                                                                  //
    x = x1 * this.gw + this.xOffset;                                   // 21
    y = y1 * this.gh + this.yOffset;                                   // 21
    width = (x2 * this.gw + this.xOffset) - x;                         // 21
    height = (y2 * this.gh + this.yOffset) - y;                        // 21
    this.obj = this.paper.rect(x, y, width, height, 0);                // 21
    this.obj.attr("fill", backgroundColor);                            // 21
    this.obj.attr("stroke-width", 0);                                  // 21
    this.definition = {                                                // 21
      shape: "poll_result",                                            // 72
      data: [x1, y1, x2, y2, this.obj.attrs["stroke"], this.obj.attrs["stroke-width"], this.obj.attrs["fill"]]
    };                                                                 //
    width = width * 0.95;                                              // 21
    height = height - width * 0.05;                                    // 21
    x = x + width * 0.025;                                             // 21
    y = y + width * 0.025;                                             // 21
    this.obj1 = this.paper.rect(x, y, width, height, 0);               // 21
    this.obj1.attr("stroke", "#333333");                               // 21
    this.obj1.attr("fill", backgroundColor);                           // 21
    this.obj1.attr("stroke-width", zoomStroke(formatThickness(thickness)));
    this.definition = {                                                // 21
      shape: "poll_result",                                            // 87
      data: [x1, y1, x2, y2, this.obj.attrs["stroke"], this.obj1.attrs["stroke-width"], this.obj1.attrs["fill"]]
    };                                                                 //
    calculatedData = calculateFontAndWidth(textArray, calcFontSize, width, height, x, y);
    calcFontSize = calculatedData[0];                                  // 21
    maxLeftWidth = calculatedData[1];                                  // 21
    maxRightWidth = calculatedData[2];                                 // 21
    maxLineHeight = calculatedData[3];                                 // 21
    maxDigitWidth = calculatedData[4];                                 // 21
    maxBarWidth = width * 0.9 - maxLeftWidth - maxRightWidth;          // 21
    barHeight = height * 0.75 / textArray.length;                      // 21
    svgNSi = "http://www.w3.org/2000/svg";                             // 21
    this.obj2 = this.paper.text(x, y, "");                             // 21
    this.obj2.attr({                                                   // 21
      "fill": "#333333",                                               // 104
      "font-family": "Arial",                                          // 104
      "font-size": calcFontSize                                        // 104
    });                                                                //
    this.obj2.node.style["text-anchor"] = "start";                     // 21
    this.obj2.node.style["textAnchor"] = "start";                      // 21
    leftCell = this.obj2.node;                                         // 21
    while ((leftCell != null) && leftCell.hasChildNodes()) {           // 110
      leftCell.removeChild(leftCell.firstChild);                       // 111
    }                                                                  //
    this.obj3 = this.paper.text(x, y, "");                             // 21
    this.obj3.attr({                                                   // 21
      "fill": "#333333",                                               // 116
      "font-family": "Arial",                                          // 116
      "font-size": calcFontSize                                        // 116
    });                                                                //
    this.obj3.node.style["text-anchor"] = "end";                       // 21
    this.obj3.node.style["textAnchor"] = "end";                        // 21
    rightCell = this.obj3.node;                                        // 21
    while ((rightCell != null) && rightCell.hasChildNodes()) {         // 122
      rightCell.removeChild(rightCell.firstChild);                     // 123
    }                                                                  //
    leftCell.style['font-size'] = calcFontSize;                        // 21
    rightCell.style['font-size'] = calcFontSize;                       // 21
    horizontalPadding = width * 0.1 / 4;                               // 21
    verticalPadding = height * 0.25 / (textArray.length + 1);          // 21
    magicNumber = 3.5;                                                 // 21
    yLeft = y + verticalPadding + barHeight / 2 - magicNumber;         // 21
    xLeft = x + horizontalPadding + 1;                                 // 21
    xBar = x + maxLeftWidth + horizontalPadding * 2;                   // 21
    yBar = y + verticalPadding;                                        // 21
    yRight = y + verticalPadding + barHeight / 2 - magicNumber;        // 21
    xRight = x + horizontalPadding * 3 + maxLeftWidth + maxRightWidth + maxBarWidth + 1;
    objects = [this.obj, this.obj1, this.obj2, this.obj3];             // 21
    for (i = m = 0, ref4 = textArray.length - 1; 0 <= ref4 ? m <= ref4 : m >= ref4; i = 0 <= ref4 ? ++m : --m) {
      tempSpanEl = document.createElementNS(svgNSi, "tspan");          // 159
      tempSpanEl.setAttributeNS(null, "x", xLeft);                     // 159
      tempSpanEl.setAttributeNS(null, "y", yLeft);                     // 159
      tempSpanEl.setAttributeNS(null, "dy", maxLineHeight / 2);        // 159
      tempTextNode = document.createTextNode(textArray[i][0]);         // 159
      tempSpanEl.appendChild(tempTextNode);                            // 159
      leftCell.appendChild(tempSpanEl);                                // 159
      if (maxNumVotes === 0 || startingData.result[i].num_votes === 0) {
        barWidth = 2;                                                  // 169
      } else {                                                         //
        barWidth = startingData.result[i].num_votes / maxNumVotes * maxBarWidth;
      }                                                                //
      this.obj4 = this.paper.rect(xBar, yBar, barWidth, barHeight, 0);
      this.obj4.attr("stroke", "#333333");                             // 159
      this.obj4.attr("fill", "#333333");                               // 159
      this.obj4.attr("stroke-width", zoomStroke(formatThickness(0)));  // 159
      objects.push(this.obj4);                                         // 159
      tempSpanEl = document.createElementNS(svgNSi, "tspan");          // 159
      tempSpanEl.setAttributeNS(null, "x", xRight);                    // 159
      tempSpanEl.setAttributeNS(null, "y", yRight);                    // 159
      tempSpanEl.setAttributeNS(null, "dy", maxLineHeight / 2);        // 159
      tempTextNode = document.createTextNode(textArray[i][2]);         // 159
      tempSpanEl.appendChild(tempTextNode);                            // 159
      rightCell.appendChild(tempSpanEl);                               // 159
      yBar = yBar + barHeight + verticalPadding;                       // 159
      yLeft = yLeft + barHeight + verticalPadding;                     // 159
      yRight = yRight + barHeight + verticalPadding;                   // 159
    }                                                                  // 157
    this.obj5 = this.paper.text(x, y, "");                             // 21
    this.obj5.attr({                                                   // 21
      "fill": "#333333",                                               // 195
      "font-family": "Arial",                                          // 195
      "font-size": calcFontSize                                        // 195
    });                                                                //
    centerCell = this.obj5.node;                                       // 21
    while ((centerCell != null) && centerCell.hasChildNodes()) {       // 199
      centerCell.removeChild(centerCell.firstChild);                   // 200
    }                                                                  //
    xNumVotesDefault = x + maxLeftWidth + horizontalPadding * 2;       // 21
    xNumVotesMovedRight = xNumVotesDefault + barWidth / 2 + horizontalPadding + maxDigitWidth / 2;
    yNumVotes = y + verticalPadding - magicNumber;                     // 21
    color = "white";                                                   // 21
    for (i = n = 0, ref5 = textArray.length - 1; 0 <= ref5 ? n <= ref5 : n >= ref5; i = 0 <= ref5 ? ++n : --n) {
      if (maxNumVotes === 0 || startingData.result[i].num_votes === 0) {
        barWidth = 2;                                                  // 211
      } else {                                                         //
        barWidth = startingData.result[i].num_votes / maxNumVotes * maxBarWidth;
      }                                                                //
      if (barWidth < maxDigitWidth + 8) {                              // 214
        xNumVotes = xNumVotesMovedRight;                               // 215
        color = "#333333";                                             // 215
      } else {                                                         //
        xNumVotes = xNumVotesDefault;                                  // 218
        color = "white";                                               // 218
      }                                                                //
      tempSpanEl = document.createElementNS(svgNSi, "tspan");          // 210
      tempSpanEl.setAttributeNS(null, "x", xNumVotes + barWidth / 2);  // 210
      tempSpanEl.setAttributeNS(null, "y", yNumVotes + barHeight / 2);
      tempSpanEl.setAttributeNS(null, "dy", maxLineHeight / 2);        // 210
      tempSpanEl.setAttributeNS(null, "fill", color);                  // 210
      tempTextNode = document.createTextNode(startingData.result[i].num_votes);
      tempSpanEl.appendChild(tempTextNode);                            // 210
      centerCell.appendChild(tempSpanEl);                              // 210
      yNumVotes = yNumVotes + barHeight + verticalPadding;             // 210
    }                                                                  // 209
    objects.push(this.obj5);                                           // 21
    return objects;                                                    //
  };                                                                   //
                                                                       //
  WhiteboardPollModel.prototype.update = function(startingData) {};    // 3
                                                                       //
  return WhiteboardPollModel;                                          //
                                                                       //
})(WhiteboardToolModel);                                               //
                                                                       //
calculateFontAndWidth = function(textArray, calcFontSize, width, height, x, y) {
  var calculatedData, flag, i, j, k, l, len, line, m, maxDigitWidth, maxLeftWidth, maxLineHeight, maxLineWidth, maxRightWidth, ref, ref1, spanHeight, spanWidth, test;
  calculatedData = [];                                                 // 239
  maxLineWidth = width / 3;                                            // 239
  maxLineHeight = height * 0.75 / (textArray != null ? textArray.length : void 0);
  flag = true;                                                         // 239
  while (flag) {                                                       // 247
    flag = false;                                                      // 248
    for (i = k = 0, ref = textArray.length - 1; 0 <= ref ? k <= ref : k >= ref; i = 0 <= ref ? ++k : --k) {
      for (j = l = 0, ref1 = textArray[i].length - 1; 0 <= ref1 ? l <= ref1 : l >= ref1; j = 0 <= ref1 ? ++l : --l) {
        test = getRenderedTextSize(textArray[i][j], calcFontSize);     // 251
        spanWidth = test[0];                                           // 251
        spanHeight = test[1];                                          // 251
        if (spanWidth > maxLineWidth || spanHeight > maxLineHeight) {  // 254
          calcFontSize -= 1;                                           // 255
          flag = true;                                                 // 255
        }                                                              //
      }                                                                // 250
    }                                                                  // 249
  }                                                                    //
  calculatedData.push(calcFontSize);                                   // 239
  maxLeftWidth = 0;                                                    // 239
  maxRightWidth = 0;                                                   // 239
  maxLineHeight = 0;                                                   // 239
  for (m = 0, len = textArray.length; m < len; m++) {                  // 263
    line = textArray[m];                                               //
    test = getRenderedTextSize(line[0], calcFontSize);                 // 264
    spanWidth = test[0];                                               // 264
    spanHeight = test[1];                                              // 264
    if (spanWidth > maxLeftWidth) {                                    // 267
      maxLeftWidth = spanWidth;                                        // 268
    }                                                                  //
    if (spanHeight > maxLineHeight) {                                  // 269
      maxLineHeight = spanHeight;                                      // 270
    }                                                                  //
    test = getRenderedTextSize(line[2], calcFontSize);                 // 264
    spanWidth = test[0];                                               // 264
    spanHeight = test[1];                                              // 264
    if (spanWidth > maxRightWidth) {                                   // 274
      maxRightWidth = spanWidth;                                       // 275
    }                                                                  //
    if (spanHeight > maxLineHeight) {                                  // 276
      maxLineHeight = spanHeight;                                      // 277
    }                                                                  //
  }                                                                    // 263
  test = getRenderedTextSize("0", calcFontSize);                       // 239
  spanWidth = test[0];                                                 // 239
  spanHeight = test[1];                                                // 239
  maxDigitWidth = spanWidth;                                           // 239
  calculatedData.push(maxLeftWidth, maxRightWidth, maxLineHeight, maxDigitWidth);
  return calculatedData;                                               //
};                                                                     // 238
                                                                       //
getRenderedTextSize = function(string, fontSize) {                     // 2
  var arrayTest, bBox, el, paper;                                      // 288
  paper = Raphael(0, 0, 0, 0);                                         // 288
  paper.canvas.style.visibility = 'hidden';                            // 288
  el = paper.text(0, 0, string);                                       // 288
  el.attr("font-family", "Arial");                                     // 288
  el.attr("font-size", fontSize);                                      // 288
  bBox = el.getBBox();                                                 // 288
  paper.remove();                                                      // 288
  arrayTest = [];                                                      // 288
  arrayTest.push(bBox.width);                                          // 288
  arrayTest.push(bBox.height);                                         // 288
  paper.remove();                                                      // 288
  return arrayTest;                                                    //
};                                                                     // 287
                                                                       //
/////////////////////////////////////////////////////////////////////////

}).call(this);
