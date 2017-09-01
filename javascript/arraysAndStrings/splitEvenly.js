// Evenly split a sorted array into three sub-arrays of equal length; distribute "extra" elements evenly starting with the first sub-array
// e.g. [2,3,5,7,9,11,12] returns [ [ 2, 3, 5 ], [ 7, 9 ], [ 11, 12 ] ]

// space O()
// time O()
function splitEvenly(arr) {
  var len = arr.length;
  var size = Math.floor(len/3);

  var remainder = len%3;
  if (remainder === 0) {
    arr1 = arr.splice(0, size);
    arr2 = arr.splice(0, size);
  }
  if (remainder === 1) {
    arr1 = arr.splice(0, size+1);
    arr2 = arr.splice(0, size);
  }
  if (remainder === 2) {
    arr1 = arr.splice(0, size+1);
    arr2 = arr.splice(0, size+1);
  }

  return [arr1, arr2, arr];
}

var testCase = [2,3,5,7,9,11,12];
console.log(splitEvenly(testCase));
var testCase2 = [2,3,5];
console.log(splitEvenly(testCase2));
var testCase3 = [2,3,5,7];
console.log(splitEvenly(testCase3));
var testCase4 = [2,3,5,7,9];
console.log(splitEvenly(testCase4));
