// Insertion Sort
// consider the array divided into a sorted and unsorted section; select the first element of the unsorted section and bubble it across the sorted section to the proper sorted location

// space O(1)
// time O(n^2)
function insertionSort(arr){
  var len = arr.length;
  for (let n = 1; n < len; n++) {  // run the inner for loop as many times as there are elements in the array - 1; start at 1 because the first element is considered the initial sorted section

    for (let i = n; i > 0; i--) {  // get the first element of the unsorted section and bubble it left-to-right across the sorted section

      if (arr[i] < arr[i-1]) {
        let temp = arr[i];
        arr[i] = arr[i-1];
        arr[i-1] = temp;
      }

    }
  }
  return arr;
}

var testCase = [4,5,6,3,2,1,1,1];
var testCaseEmpty = [];
console.log(insertionSort(testCase));
console.log(insertionSort(testCaseEmpty));
