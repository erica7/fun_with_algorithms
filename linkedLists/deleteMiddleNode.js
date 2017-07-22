var SLL = require("./dataStructure.js");

// space O(1)
// time O(n)
SLL.prototype.deleteMiddleNode = function(node){
  var run = this.head;
  while (run) {
    if (run === node) {  // when the node is found
      run.val = run.next.val;  // copy the value from the next node
      run.next = run.next.next;  // set the pointer to skip the next node
    }
    run = run.next;
  }
  return this;
}

var testCase = new SLL().generateList([1,2,3,4,5]);

function getTestNode (sll, n){
  var runner = sll.head;
  while (n) {
    if (!runner) {
      return null;
    }
    runner = runner.next;
    n--;
  }
  return runner;
}

var testNode = getTestNode(testCase, 2);
console.log(testNode);

var deleted = testCase.deleteMiddleNode(testNode);

deleted.printAll();
