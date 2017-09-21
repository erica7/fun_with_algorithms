// Return the number as a word for integers 1 through 4, inclusive

// space O(1)
// time O(1)
function numberToWord(n) {
  switch(n) {
    case 1:
      return "one";
      break;
    case 2:
      return "two";
      break;
    case 3:
      return "three";
      break;
    case 4:
      return "four";
      break;
    default:
      return "please enter a valid number (1 - 4 inclusive)"
  }
}

console.log(numberToWord(0));  // please enter a valid number (1 - 4 inclusive)
console.log(numberToWord(1));  // one
console.log(numberToWord(2));  // two
console.log(numberToWord(3));  // three
console.log(numberToWord(4));  // four
console.log(numberToWord(5));  // please enter a valid number (1 - 4 inclusive)
console.log(numberToWord("1"));  // please enter a valid number (1 - 4 inclusive)
console.log(numberToWord(1.2));  // please enter a valid number (1 - 4 inclusive)
