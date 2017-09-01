var SLL = require("./dataStructure.js");

function sumLists(l1, l2, carry=0){
  var sum = 0;
  if (l1 === null && l2 === null && carry === 0) {
    return sum;
  } else {
    console.log(l1);
    console.log(l2);
    console.log(carry);
    console.log(sum);
    if (l1) {
      sum += l1.val;
    }
    if (l2) {
      sum += l2.val;
    }
    if (l1.next && l2.next) {
      console.log("if 1");
      return sum + 10*sumLists(l1.next, l2.next, carry);
    } else if (l1.next) {
      console.log("if 2");
      return sum + 10*sumLists(l1.next, null, carry);
    } else if (l2.next) {
      console.log("if 3");
      return sum + 10*sumLists(null, l2.next, carry);
    }
  }
}

var testList1 = new SLL().generateList([1,2,3]);  // 321
var testList2 = new SLL().generateList([3,4,5]);  // 543   // sum = 864

console.log(sumLists(testList1, testList2));




// function sumLists(l1, l2){
//   var num1 = 0;
//   var num2 = 0;
//   var run1 = l1.head;
//   var run2 = l2.head;
//   var n = 1;
//   while (run1) {
//     num1 += n * run1.val;
//     n *= 10;
//     run1 = run1.next;
//   }
//   n = 1;
//   while (run2) {
//     num2 += n * run2.val;
//     n *= 10;
//     run2 = run2.next;
//   }
//   return num1 + num2;
// }
//
// var testList1 = new SLL().generateList([1,2,3]);  // 321
// var testList2 = new SLL().generateList([3,4,5]);  // 543   // sum = 864
//
// console.log(sumLists(testList1, testList2));
