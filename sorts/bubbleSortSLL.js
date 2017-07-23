// Bubble Sort
// compare side-by-side values and arrange them in sorted order; repeat; large values "bubble up" with each pass

var SLL = require("./../linkedLists/dataStructure.js");

// space O(1)
// time O(n^2)
SLL.prototype.bubbleSort = function(){
  var fakeHead = new this.ListNode();  // create a "fake head" node with no value
  fakeHead.next = this.head;  // put the fakeHead at the front of the list
  var run = fakeHead;  // set a runner to sart at the fakeHead
  var sorted = false;  // set sorted boolean to false to start such that the outer while loop runs

  while (!sorted) {
    sorted = true;  // set sorted boolean to true
    run = fakeHead;  // re-set the runner to start at the fakeHead
    while (run.next.next) {
      if (run.next.val > run.next.next.val) {  // look ahead and compare the values of the two nodes past the runner; swap the values if needed (this code swaps full nodes, not just values)
        let temp = run.next;
        run.next = run.next.next;
        temp.next = temp.next.next;
        run.next.next = temp;
        sorted = false;  // if a swap occurs, set the sorted boolean to false so the outer while loop runs again
      }
      run = run.next; // move the runner ahead
    }
  }

  this.head = fakeHead.next;  // reassign the list head using the fakeHead

  return this;  // return the list
}


var testCase = new SLL().generateList([111,34,4356,324,23,24,1,5,7,9,2,4,8,11]).bubbleSort().printAll();
