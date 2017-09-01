var SLL = require("./dataStructure.js");

// space O(n)
// time O(n)
SLL.prototype.removeDuplicates = function(){
  var runner = this.head;
  var watch = {};
  watch[runner.val] = true;  // add first value to watch object
  while (runner.next) {
    if (watch[runner.next.val]) {  // if value exists in the watch object
      // remove the duplicate
      if (runner.next.next === null) {  // if at the end of the list, point to null
        runner.next = null;
      } else {  // if not at the end of the list, change the pointer to jump over next item
        runner.next = runner.next.next;
      }
    } else {  // if value DOES NOT exist in the watch object
      // add the value to the watch object
      watch[runner.next.val] = true;
      runner = runner.next;
    }
  }
  return this;
}

var removed = new SLL().generateList([1,2,2,3]).removeDuplicates();

removed.printAll();
