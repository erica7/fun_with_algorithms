var SLL = require("./dataStructure.js");

// space O(1)
// time O(n)
SLL.prototype.returnKthToLast = function(k){
  var run1 = this.head;
  var run2 = this.head;

  while (k) {  // walk the first runner out k items of the list
    run1 = run1.next;
    k--;
  }

  while (run1) {  // increment both runners; when run1 is null, run2 will be on kth to last item
    run1 = run1.next;
    run2 = run2.next;
  }

  return run2.val;  // return the value of run2 which stopped on kth to last item
}

var testCase = new SLL().generateList([1,2,3,4,5,6,7,8]).returnKthToLast(2);

console.log(testCase);
