
// Write a function to perform a binary search on a given sorted array (ascending) and a given value

// space: O(1)
// time:  O(log(n))
function binarySearch(arr, val) {
  
  var start = 0;
  var end = arr.length;
  
  while (start < end) {
    var middle = start + Math.floor((end-start)/2);  
    
    if (val === arr[middle]) {  
      return middle;
    } else if (val < arr[middle]) {
      end = middle;
    } else {
      start = middle + 1;
    }
  }
  
  return -1;
}

arr = [1,2,3,4,5,6,7,8,9];
val = 9;
console.log("##########  " + binarySearch(arr,val) + "  ##########")