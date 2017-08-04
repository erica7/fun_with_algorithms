// Convert a given sorted array to a string; show any three or more consecutive values as a range in the string (e.g. [1,2,3] becomes "1-3")

// space O(n)  (?)
// time O(n)  (?)
function ranges(arr) {
  var count = 0;
  var len = arr.length-1; // use in the for loop conditional; stop on the second to last element of the array
  var newArr = [];
  for (var i = 0; i < len; i++) {
    if (arr[i]+1 == arr[i+1]) {
      count++;
    } else {
      if (count >= 2) {
        newArr.push(arr[i-count].toString() + "-" + arr[i].toString());
      } else if (count == 1) {
        newArr.push(arr[i-1]);
        newArr.push(arr[i]);
      } else {
        newArr.push(arr[i]);
      }
      count = 0;
    }
  }
  // account for the last element using the existing count
  if (count >= 2) {
    newArr.push(arr[i-count].toString() + "-" + arr[i].toString());
  } else if (count == 1) {
    newArr.push(arr[i-1]);
    newArr.push(arr[i]);
  } else {
    newArr.push(arr[i]);
  }
  return newArr.join(",");
}

var testCase = [-3, -2, -1, 4, 6, 7, 9, 10, 11, 15];
console.log(ranges(testCase));
// -3--1,4,6,7,9-11,15
