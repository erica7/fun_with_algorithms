// Checks whether the elements in b are the elements in a squared, regardless of the order, of two given arrays, a and b.
// e.g.
// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// should return true
//
// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [131, 14641, 20736, 361, 25921, 361, 20736, 361]
// should return false (note the first term in b is not a square of any element of a)

// space O(1)
// time O(n)
function sameAsSquares(array1, array2) {
  // if either array is null, return false
  if (!array1 || !array2) {
    return false;
  }
  var len1 = array1.length;
  var len2 = array2.length;
  // if either array is empty or the lengths don't match, return false
  if (len1 === 0 || len2 === 0 || len1 !== len2) {
    return false;
  }
  // for each element of the first array, check if its square is in the second array
  for (let i = 0; i < len1; i++) {
    var temp = array2.indexOf(Math.pow(array1[i],2));
    if (temp === -1) {
      return false;
    }
    // remove matched square from second array
    array2.splice(temp, 1);
  }
  // if it gets through the for loop, all squares are present; return true
  return true;
}

testCaseA = [121, 144, 19, 161, 19, 144, 19, 11];
testCaseB = [121, 14641, 20736, 361, 25921, 361, 20736, 361];
console.log(sameAsSquares(testCaseA, testCaseB));
