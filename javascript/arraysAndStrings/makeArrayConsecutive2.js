// Given an array of integers, determine the minimum number of additional numbers needed in order for the array to consist of consecutive numbers.
// Example
//   For statues = [6, 2, 3, 8], the output should be
//   makeArrayConsecutive2(statues) = 3.

console.log(makeArrayConsecutive2([6, 2, 3, 8]));

function makeArrayConsecutive2(arr) {
  min = arr[0];
  max = arr[0];
  len = arr.length;
  for (i=0; i<len; i++) {
      if (arr[i] < min) {
          min = arr[i];
      }
      if (arr[i] > max) {
          max = arr[i];
      }
  }
  return max-min-len+1;
}