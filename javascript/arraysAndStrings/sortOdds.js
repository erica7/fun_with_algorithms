// Given an array of numbers, sort ascending odd numbers but even numbers must be on their places.
// Zero isn't an odd number and should not be moved. If an empty array is given, it should be returned.

console.log(sortOdds([5, 3, 2, 8, 1, 4])); // => [1, 3, 2, 8, 5, 4]
console.log(sortOdds([5, 3, 1, 8, 0])); // => [1, 3, 5, 8, 0]
console.log(sortOdds([])); // => []

function sortOdds(array) {
  var len = array.length;
  if (len == 0) return array;
  var runner = 1;
  // bubble sort, only moving odds 
  for (var n = 0; n < len; n++) { 
    for (var i = 0; i < len - 1 - n; i++) {
      if (array[i] % 2 == 0) {
        // even; ignore it / leave in place
        continue;
      } else {
        // odd; sort it
        for(var j = i+1; j<len; j++) {
          if(array[j] % 2 == 1) {
            if(array[i] > array[j]) {
              var temp = array[i];
              array[i] = array[j];
              array[j] = temp;
            }
          } else { 
            continue;
          }
        } 
      }
    }
  }
  return array;
}