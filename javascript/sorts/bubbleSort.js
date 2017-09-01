// Bubble Sort
// compare side-by-side values and arrange them in sorted order; repeat; large values "bubble up" with each pass

// space O(1)
// time O(n^2)
function bubbleSort(arr){
  var len = arr.length;
  var sorted = true;  // use a boolean to track whether or not the list has been sorted based on if a swap is made; set true to begin with; allows the function to return "early" if the array is sorted

  for (let n = 0; n < len; n++) {  // run the inner for loop as many times as there are elements in the array
    for (let i = 0; i < len - 1 - n; i++) {  // iterate across the array, stopping one element earlier each time (because the largest value bubbles up each pass, we don't need to check that value any more)
      if (arr[i] > arr[i+1]) {  // if two side-by-side elements are out of order, swap them
        let temp = arr[i+1];
        arr[i+1] = arr[i];
        arr[i] = temp;
        sorted = false;         // if a swap takes place, change sorted boolean to false
      }
    }
    if (sorted) {     // if sorted boolean is true, no swaps took place over the length of the array and therefore the array is sorted
      return arr;     //   return the array (potentially saving unnecessary cycles of the for loop if the array is sorted "early")
    } else {          // if the sorted boolean is false, at least one swap occurred over the length of the array
      sorted = true;  //   switch the sorted boolean to true before repeating the loop
    }
  }
}

var testCase = [111,34,4356,324,23,24,1,5,7,9,2,4,8,11];
var testCaseEmpty = [];
console.log(bubbleSort(testCase));
console.log(bubbleSort(testCaseEmpty));
