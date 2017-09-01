// Selection Sort
// consider the array divided into a sorted and unsorted section; find the minimum of the unsorted section and swap it to the location just next to the sorted section, thus growing the sorted section by one

// space O(1)
// time O(n^2)
function selectionSort(arr){
  var len = arr.length;
  for (let n = 0; n < len; n++) {
    var minInd = n;
    var min = arr[minInd];
    for (let i = n; i < len; i++) {
      if (arr[i] < min) {
        minInd = i;
        min = arr[minInd];
      }
    }
    if (n !== minInd) {
      let temp = arr[n];
      arr[n] = arr[minInd];
      arr[minInd] = temp;
    }
  }
  return arr;
}

var testCase = [4,5,6,3,2,1,1,1];
var testCaseEmpty = [];
console.log(selectionSort(testCase));
console.log(selectionSort(testCaseEmpty));
