// Quick Sort
// select a pivot and create sub-lists of greater-than and less-than values; repeat process for sub-lists; combine their returns

// space O(log(n))
// time O(n log(n))
function quickSort(arr){
  if (arr.length <= 1) {
    return arr;
  } else {

    var pivot = arr[0];  // select the first element of the array as the pivot value
    var left = [];
    var right = [];

    var len = arr.length;
    for (let i = 1; i < len; i++) {  // loop through the array excluding the pivot value
      if (arr[i] < pivot) {  // if the array element is less than the pivot value, add it to left
        left.push(arr[i]);
      } else {               // if the array element is greater than the pivot value, add it to the right
        right.push(arr[i]);
      }
    }

    return quickSort(left).concat(pivot).concat(quickSort(right));
  }
}

var testCase = [4,5,6,3,2,1,1,1];
var testCaseEmpty = [];
console.log(quickSort(testCase));
console.log(quickSort(testCaseEmpty));
