// Given an array of strings, return another array containing all of its longest strings.
// Example
//   For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
//   allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));

function allLongestStrings(inputArray) {
  let len = inputArray.length;
  let maxLen = inputArray[0].length;
  for (let i=1; i<len; i++) {
      if (inputArray[i].length > maxLen) {
          maxLen = inputArray[i].length;
      }
  }
  let arr = [];
  for (let i=0; i<len; i++) {
      if (inputArray[i].length == maxLen) {
          arr.push(inputArray[i]);
      }
  }
  return arr;
}