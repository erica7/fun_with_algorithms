// Merge Sort
// split arrays and call merge function to combine sorted arrays

// space O(n)
// time O(n log(n))
function mergeSort(arr){
  if (arr.length <= 1) {
    return arr;
  }
  var mid = Math.floor(arr.length/2);
  var left = arr.slice(0, mid);
  var right = arr.slice(mid, arr.length);
  return merge(mergeSort(left), mergeSort(right));
}

// space O(a + b)
// time O(a + b)
function merge(a, b){
  var arr = [];
  while (a.length && b.length) {
    if (a[0] < b[0]) {
      arr.push(a.shift());
    } else {
      arr.push(b.shift());
    }
  }
  while (a.length) {
    arr.push(a.shift());
  }
  while (b.length) {
    arr.push(b.shift());
  }
  return arr;
}

var testCase = [111,34,4356,324,23,24,1,5,7,9,2,4,8,11];
var testCaseEmpty = [];
console.log(mergeSort(testCase));
console.log(mergeSort(testCaseEmpty));
