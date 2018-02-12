//Given an array, find the int that appears an odd number of times.
//There will always be only one integer that appears an odd number of times.

console.log(findOdd([2,2,2,3,3,4,2])); // => 4

function findOdd(A) {
  var dict = {};
  for(i=0; i<A.length; i++) {
    if (dict[A[i]]) {
      dict[A[i]] = dict[A[i]] + 1;
    } else {
      dict[A[i]] = 1;
    }
  }
  
  for (var key in dict) {
    // check if the property/key is defined in the object itself, not in parent
    if (dict.hasOwnProperty(key)) {           
      if (dict[key] % 2 == 1) {
        return parseInt(key);
      }
    }
  }
}