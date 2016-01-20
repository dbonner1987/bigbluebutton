(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/whiteboard_models/whiteboard_text.coffee.js                  //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;                                         //
                                                                       //
this.WhiteboardTextModel = (function(superClass) {                     // 2
  var checkDashPosition, checkWidth;                                   // 4
                                                                       //
  extend(WhiteboardTextModel, superClass);                             // 4
                                                                       //
  function WhiteboardTextModel(paper) {                                // 4
    this.paper = paper;                                                // 5
    WhiteboardTextModel.__super__.constructor.call(this, this.paper);  // 5
    this.definition = [0, 0, 0, 0, "#000", 0, 0, ""];                  // 5
  }                                                                    //
                                                                       //
  WhiteboardTextModel.prototype.make = function(startingData) {        // 4
    var calcFontSize, colour, fontSize, height, text, width, x, y;     // 14
    x = startingData.x;                                                // 14
    y = startingData.y;                                                // 14
    width = startingData.textBoxWidth;                                 // 14
    height = startingData.textBoxHeight;                               // 14
    colour = formatColor(startingData.fontColor);                      // 14
    fontSize = startingData.fontSize;                                  // 14
    calcFontSize = startingData.calcedFontSize;                        // 14
    text = startingData.text;                                          // 14
    this.definition = {                                                // 14
      shape: "text",                                                   // 24
      data: [x, y, width, height, colour, fontSize, calcFontSize, text]
    };                                                                 //
    x = (x * this.gw) + this.xOffset;                                  // 14
    y = (y * this.gh) + this.yOffset + calcFontSize;                   // 14
    width = width / 100 * this.gw;                                     // 14
    this.obj = this.paper.text(x / 100, y / 100, "");                  // 14
    this.obj.attr({                                                    // 14
      "fill": colour,                                                  // 34
      "font-family": "Arial",                                          // 34
      "font-size": calcFontSize                                        // 34
    });                                                                //
    this.obj.node.style["text-anchor"] = "start";                      // 14
    this.obj.node.style["textAnchor"] = "start";                       // 14
    return this.obj;                                                   //
  };                                                                   //
                                                                       //
  WhiteboardTextModel.prototype.update = function(startingData) {      // 4
    var calcFontSize, cell, colour, computedTextLength, cumulY, curNumChars, dashArray, dashFound, dy, fontSize, height, i, indexPos, line, maxWidth, myText, myTextNode, result, svgNS, tempText, tspanEl, word, words, x, y;
    x = startingData.x;                                                // 46
    y = startingData.y;                                                // 46
    maxWidth = startingData.textBoxWidth;                              // 46
    height = startingData.textBoxHeight;                               // 46
    colour = formatColor(startingData.fontColor);                      // 46
    fontSize = startingData.fontSize;                                  // 46
    calcFontSize = startingData.calcedFontSize;                        // 46
    myText = startingData.text;                                        // 46
    if (this.obj != null) {                                            // 55
      this.definition.data = [x, y, maxWidth, height, colour, fontSize, calcFontSize, myText];
      calcFontSize = calcFontSize / 100 * this.gh;                     // 56
      x = (x * this.gw) / 100 + this.xOffset;                          // 56
      maxWidth = maxWidth / 100 * this.gw;                             // 56
      this.obj.attr({                                                  // 56
        "fill": colour,                                                // 63
        "font-family": "Arial",                                        // 63
        "font-size": calcFontSize                                      // 63
      });                                                              //
      cell = this.obj.node;                                            // 56
      while ((cell != null) && cell.hasChildNodes()) {                 // 67
        cell.removeChild(cell.firstChild);                             // 68
      }                                                                //
      dashArray = new Array();                                         // 56
      dashFound = true;                                                // 56
      indexPos = 0;                                                    // 56
      cumulY = 0;                                                      // 56
      svgNS = "http://www.w3.org/2000/svg";                            // 56
      while (dashFound === true) {                                     // 79
        result = myText.indexOf("-", indexPos);                        // 80
        if (result === -1) {                                           // 81
          dashFound = false;                                           // 83
        } else {                                                       //
          dashArray.push(result);                                      // 85
          indexPos = result + 1;                                       // 85
        }                                                              //
      }                                                                //
      words = myText.split(/[\s-]/);                                   // 56
      line = "";                                                       // 56
      dy = 0;                                                          // 56
      curNumChars = 0;                                                 // 56
      computedTextLength = 0;                                          // 56
      myTextNode = void 0;                                             // 56
      tspanEl = void 0;                                                // 56
      i = 0;                                                           // 56
      words = checkWidth(words, maxWidth, x, dy, cell);                // 56
      while (i < words.length) {                                       // 100
        word = words[i];                                               // 101
        curNumChars += word.length + 1;                                // 101
        if (computedTextLength > maxWidth || i === 0) {                // 103
          if (computedTextLength > maxWidth) {                         // 104
            tempText = tspanEl.firstChild.nodeValue;                   // 105
            tempText = tempText.slice(0, tempText.length - words[i - 1].length - 2);
            tspanEl.firstChild.nodeValue = tempText;                   // 105
          }                                                            //
          if (i === 0) {                                               // 109
            dy = calcFontSize;                                         // 110
            cumulY += dy;                                              // 110
          }                                                            //
          tspanEl = document.createElementNS(svgNS, "tspan");          // 104
          tspanEl.setAttributeNS(null, "x", x);                        // 104
          tspanEl.setAttributeNS(null, "dy", dy);                      // 104
          myTextNode = document.createTextNode(line);                  // 104
          tspanEl.appendChild(myTextNode);                             // 104
          cell.appendChild(tspanEl);                                   // 104
          if (checkDashPosition(dashArray, curNumChars - 1)) {         // 119
            line = word + "-";                                         // 120
          } else {                                                     //
            line = word + " ";                                         // 122
          }                                                            //
          if (i !== 0) {                                               // 123
            line = words[i - 1] + " " + line;                          // 123
          }                                                            //
          dy = calcFontSize;                                           // 104
          cumulY += dy;                                                // 104
        } else {                                                       //
          if (checkDashPosition(dashArray, curNumChars - 1)) {         // 127
            line += word + "-";                                        // 128
          } else {                                                     //
            line += word + " ";                                        // 130
          }                                                            //
        }                                                              //
        tspanEl.firstChild.nodeValue = line;                           // 101
        computedTextLength = tspanEl.getComputedTextLength() + 10;     // 101
        if (i === words.length - 1) {                                  // 133
          if (computedTextLength > maxWidth) {                         // 134
            tempText = tspanEl.firstChild.nodeValue;                   // 135
            tspanEl.firstChild.nodeValue = tempText.slice(0, tempText.length - words[i].length - 1);
            tspanEl = document.createElementNS(svgNS, "tspan");        // 135
            tspanEl.setAttributeNS(null, "x", x);                      // 135
            tspanEl.setAttributeNS(null, "dy", dy);                    // 135
            myTextNode = document.createTextNode(words[i]);            // 135
            tspanEl.appendChild(myTextNode);                           // 135
            cell.appendChild(tspanEl);                                 // 135
          }                                                            //
        }                                                              //
        i++;                                                           // 101
      }                                                                //
      return cumulY;                                                   //
    }                                                                  //
  };                                                                   //
                                                                       //
  checkDashPosition = function(dashArray, pos) {                       // 4
    var i, result;                                                     // 149
    result = false;                                                    // 149
    i = 0;                                                             // 149
    while (i < dashArray.length) {                                     // 151
      if (dashArray[i] === pos) {                                      // 152
        result = true;                                                 // 152
      }                                                                //
      i++;                                                             // 152
    }                                                                  //
    return result;                                                     //
  };                                                                   //
                                                                       //
  checkWidth = function(words, maxWidth, x, dy, cell) {                // 4
    var count, num, partWord, start, str, svgNSi, temp, temp3, tempArray, tempSpanEl, tempTextNode, tempWord;
    count = 0;                                                         // 158
    temp = words;                                                      // 158
    temp3 = [];                                                        // 158
    str = "";                                                          // 158
    svgNSi = "http://www.w3.org/2000/svg";                             // 158
    tempSpanEl = document.createElementNS(svgNSi, "tspan");            // 158
    tempSpanEl.setAttributeNS(null, "x", x);                           // 158
    tempSpanEl.setAttributeNS(null, "dy", dy);                         // 158
    tempTextNode = document.createTextNode(str);                       // 158
    tempSpanEl.appendChild(tempTextNode);                              // 158
    num = 0;                                                           // 158
    while (num < temp.length) {                                        // 171
      tempSpanEl.firstChild.nodeValue = temp[num];                     // 173
      cell.appendChild(tempSpanEl);                                    // 173
      if (tempSpanEl.getComputedTextLength() + 10 > maxWidth) {        // 176
        tempWord = temp[num];                                          // 177
        cell.removeChild(cell.firstChild);                             // 177
        count = 1;                                                     // 177
        start = 0;                                                     // 177
        partWord = "" + tempWord[0];                                   // 177
        tempArray = [];                                                // 177
        while (count < tempWord.length) {                              // 186
          partWord += tempWord[count];                                 // 187
          tempSpanEl.firstChild.nodeValue = partWord;                  // 187
          cell.appendChild(tempSpanEl);                                // 187
          if (tempSpanEl.getComputedTextLength() + 10 > maxWidth) {    // 190
            temp3.push(partWord.substring(0, partWord.length - 1));    // 191
            partWord = "";                                             // 191
            partWord += tempWord[count];                               // 191
          }                                                            //
          if (count === tempWord.length - 1) {                         // 194
            temp3.push(partWord);                                      // 195
          }                                                            //
          while ((cell != null) && cell.hasChildNodes()) {             // 196
            cell.removeChild(cell.firstChild);                         // 197
          }                                                            //
          count++;                                                     // 187
        }                                                              //
      } else {                                                         //
        temp3.push(temp[num]);                                         // 200
      }                                                                //
      while ((cell != null) && cell.hasChildNodes()) {                 // 201
        cell.removeChild(cell.firstChild);                             // 202
      }                                                                //
      num++;                                                           // 173
    }                                                                  //
    while ((cell != null) && cell.hasChildNodes()) {                   // 205
      cell.removeChild(cell.firstChild);                               // 206
    }                                                                  //
    return temp3;                                                      //
  };                                                                   //
                                                                       //
  return WhiteboardTextModel;                                          //
                                                                       //
})(WhiteboardToolModel);                                               //
                                                                       //
/////////////////////////////////////////////////////////////////////////

}).call(this);
