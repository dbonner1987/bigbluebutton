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
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;

/* Package-scope variables */
var MicroQueue;

(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// packages/cfs_micro-queue/packages/cfs_micro-queue.js                                                 //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
(function () {                                                                                          // 1
                                                                                                        // 2
///////////////////////////////////////////////////////////////////////////////////////////////////     // 3
//                                                                                               //     // 4
// packages/cfs:micro-queue/micro-queue.js                                                       //     // 5
//                                                                                               //     // 6
///////////////////////////////////////////////////////////////////////////////////////////////////     // 7
                                                                                                 //     // 8
/** A basic LIFO or FIFO queue                                                                   // 1   // 9
  * This is better than a simple array with pop/shift because shift is O(n)                      // 2   // 10
  * and can become slow with a large array.                                                      // 3   // 11
  * @method MicroQueue                                                                           // 4   // 12
  * @constructor                                                                                 // 5   // 13
  * @param {boolean} [lifo=false] Set true for `lifo`, default is `fifo`                         // 6   // 14
  * This queue was build as the spinal basis for the [`PowerQueue`](#PowerQueue)                 // 7   // 15
  * The interface is very basic and consists of:                                                 // 8   // 16
  * `add`, `get`, `reset` Making it possible to write a custom micro-queue for                   // 9   // 17
  * `PowerQueue`, such as a queue that is persisted into a database.                             // 10  // 18
  *                                                                                              // 11  // 19
  * Usage:                                                                                       // 12  // 20
```js                                                                                            // 13  // 21
  var foo = new MicroQueue(); // Basic FIFO queue                                                // 14  // 22
  foo.add(1);                                                                                    // 15  // 23
  foo.add(2);                                                                                    // 16  // 24
  foo.add(3);                                                                                    // 17  // 25
  for (var i = 0; i < foo.length(); i++) {                                                       // 18  // 26
    console.log(foo.get());                                                                      // 19  // 27
  }                                                                                              // 20  // 28
```                                                                                              // 21  // 29
  * The result should be: "1, 2, 3"                                                              // 22  // 30
  */                                                                                             // 23  // 31
MicroQueue = function(lifo) {                                                                    // 24  // 32
  var self = this, first = 0, last = -1, list = [];                                              // 25  // 33
                                                                                                 // 26  // 34
  // The private reactive length property                                                        // 27  // 35
  self._length = 0;                                                                              // 28  // 36
  var _lengthDeps = new Deps.Dependency();                                                       // 29  // 37
  var maxKey = 0;                                                                                // 30  // 38
  /** @method MicroQueue.length                                                                  // 31  // 39
    * @reactive                                                                                  // 32  // 40
    * @returns {number} Length / number of items in queue                                        // 33  // 41
    */                                                                                           // 34  // 42
  self.length = function() {                                                                     // 35  // 43
    _lengthDeps.depend();                                                                        // 36  // 44
    return self._length;                                                                         // 37  // 45
  };                                                                                             // 38  // 46
                                                                                                 // 39  // 47
  /** @method MicroQueue.insert Add item to the queue                                            // 40  // 48
    * @param {any} value The item to add to the queue                                            // 41  // 49
    */                                                                                           // 42  // 50
  self.insert = function(key, value) {                                                           // 43  // 51
    // Compare key with first/last depending on LIFO to determine if it should                   // 44  // 52
    // be added in reverse order. We track the greatest key entered - if we insert               // 45  // 53
    // a key lower than this we should add it the the opposite end of the queue                  // 46  // 54
    // We are compensating for the true use of keys in micro-queue its not truly                 // 47  // 55
    // ordered by keys but we do try to order just a bit without impacting performance too much. // 48  // 56
    // Tasks can be cut off from the power-queue typically unordered since tasks                 // 49  // 57
    // will often run async                                                                      // 50  // 58
    if (key > maxKey) maxKey = key;                                                              // 51  // 59
    // If the key is an older key then "reinsert" item into the queue                            // 52  // 60
    if (key < maxKey && first > 0) {                                                             // 53  // 61
      list[--first] = {key: key, value: value};                                                  // 54  // 62
    } else {                                                                                     // 55  // 63
      list[++last] = {key: key, value: value};                                                   // 56  // 64
    }                                                                                            // 57  // 65
    self._length++;                                                                              // 58  // 66
    _lengthDeps.changed();                                                                       // 59  // 67
  };                                                                                             // 60  // 68
                                                                                                 // 61  // 69
  /** @method MicroQueue.getFirstItem Get next item from queue                                   // 62  // 70
    * @return {any} The item that was next in line                                               // 63  // 71
    */                                                                                           // 64  // 72
  self.getFirstItem = function() {                                                               // 65  // 73
    var value;                                                                                   // 66  // 74
    if (first > last)                                                                            // 67  // 75
      return; // queue empty                                                                     // 68  // 76
    if (lifo) {                                                                                  // 69  // 77
      value = list[last].value;                                                                  // 70  // 78
      delete list[last]; // help garbage collector                                               // 71  // 79
      last--;                                                                                    // 72  // 80
    } else {                                                                                     // 73  // 81
      value = list[first].value;                                                                 // 74  // 82
      delete list[first]; // help garbage collector                                              // 75  // 83
      first++;                                                                                   // 76  // 84
    }                                                                                            // 77  // 85
    self._length--;                                                                              // 78  // 86
    _lengthDeps.changed();                                                                       // 79  // 87
    return value;                                                                                // 80  // 88
  };                                                                                             // 81  // 89
                                                                                                 // 82  // 90
  /** @method MicroQueue.reset Reset the queue                                                   // 83  // 91
    * This method will empty all data in the queue.                                              // 84  // 92
    */                                                                                           // 85  // 93
  self.reset = function() {                                                                      // 86  // 94
    first = 0;                                                                                   // 87  // 95
    last = -1;                                                                                   // 88  // 96
    self._length = 0;                                                                            // 89  // 97
    list = [];                                                                                   // 90  // 98
    _lengthDeps.changed();                                                                       // 91  // 99
  };                                                                                             // 92  // 100
                                                                                                 // 93  // 101
  self.forEach = function(f, noneReactive) {                                                     // 94  // 102
    if (!noneReactive) _lengthDeps.depend();                                                     // 95  // 103
    for (var i = first; i <= last; i++) {                                                        // 96  // 104
      f(list[i].value, list[i].key, i);                                                          // 97  // 105
    }                                                                                            // 98  // 106
  };                                                                                             // 99  // 107
                                                                                                 // 100
  self.forEachReverse = function(f, noneReactive) {                                              // 101
    if (!noneReactive) _lengthDeps.depend();                                                     // 102
                                                                                                 // 103
    for (var i = last; i >= first; i--) {                                                        // 104
      f(list[i].value, list[i].key, i);                                                          // 105
    }                                                                                            // 106
  };                                                                                             // 107
                                                                                                 // 108
  self.remove = function(id) {                                                                   // 109
    var newList = [];                                                                            // 110
    var removed = 0;                                                                             // 111
                                                                                                 // 112
    self.forEach(function(value, key, i) {                                                       // 113
      if (id === key) {                                                                          // 114
        removed++;                                                                               // 115
      } else {                                                                                   // 116
        newList[i - removed] = {key: key, value: value};                                         // 117
      }                                                                                          // 118
    });                                                                                          // 119
    last -= removed;                                                                             // 120
    self._length -= removed;                                                                     // 121
    list = newList;                                                                              // 122
    _lengthDeps.changed();                                                                       // 123
  };                                                                                             // 124
                                                                                                 // 125
  self.fetch = function(noneReactive) {                                                          // 126
    var result = [];                                                                             // 127
    self.forEach(function(value, key, i) {                                                       // 128
      return result.push(value);                                                                 // 129
    }, noneReactive);                                                                            // 130
    return result;                                                                               // 131
  };                                                                                             // 132
};                                                                                               // 133
                                                                                                 // 134
///////////////////////////////////////////////////////////////////////////////////////////////////     // 143
                                                                                                        // 144
}).call(this);                                                                                          // 145
                                                                                                        // 146
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['cfs:micro-queue'] = {
  MicroQueue: MicroQueue
};

})();
