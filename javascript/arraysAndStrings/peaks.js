// Find value and positions of peaks
//   Edges cannot be peaks
//   Leading edge of a plateu is considered a peak as long as there is a drop after the plateu

// space O(n)
// time O(n^2)
function peaks(arr) {
  var pos = [];
  var peaks = [];
  var len = arr.length;

  for (let i = 1; i < len - 1; i++) {
    if (arr[i] > arr[i-1] && arr[i] > arr[i+1]) {
      peaks.push(arr[i]);
      pos.push(i);
    } else if (arr[i] > arr[i-1] && arr[i] === arr[i+1]) {
      for (let j = i+1; j < len; j++) {
        if (arr[j] > arr[i] || (arr[j] === arr[i] && j === len-1)) {
          break;
        }
        if (arr[j] < arr[i]) {
          peaks.push(arr[i]);
          pos.push(i);
          break;
        }
      }
    }
  }

  return { 'pos': pos , 'peaks': peaks };
}

var testCase = [5,2,3,6,4,1,2,3,2,1,4];  // should return { pos: [ 3, 7 ], peaks: [ 6, 3 ] }
var testCase2 = [1,2,2,1];  // should return { pos: [ 1 ], peaks: [ 2 ] }
var testCase3 = [1,2,2,3];  // should return empty arrays { pos: [], peaks: [] }
var testCase4 = [0,1,2,5,1,0];  // should return empty arrays { pos: [ 3 ], peaks: [ 5 ] }
var testCase5 = [5,2,3,6,4,1,2,3,2,1,4,1,2,2,3];  // should return { pos: [ 3, 7, 10 ], peaks: [ 6, 3, 4 ] }

console.log(peaks(testCase));
console.log(peaks(testCase2));
console.log(peaks(testCase3));
console.log(peaks(testCase4));
console.log(peaks(testCase5));
