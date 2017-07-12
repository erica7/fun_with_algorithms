// space O(n)
// time O(n^2)
function rotateMatrix(m){
  var len = m.length;
  var rotated = [];
  for (let i=0; i<len; i++) {
    rotated.push([]);
  }
  for (let i=0; i<len; i++) {
    for (let j=0; j<len; j++) {
      rotated[j][len-1-i] = m[i][j];
    }
  }
  return rotated;
}

// in-place
function rotateMatrix2(m){
  var len = m.length;
  var layers = Math.floor(len/2);
  for (let i=0; i<len; i++) {
    // var offset = ...
    for (let j=0; j<len; j++) {

      temp = m[j][len-1-i]);  // 3
      m[j][len-1-i] = m[i][j];  // 1. now need to go to m[3,3]

      temp = m[j]

    }
  }
  return rotated;
}

testCase = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ]
]
console.log(rotateMatrix(testCase));
// returns
// [
//  [ 7, 4, 1 ],
//  [ 8, 5, 2 ],
//  [ 9, 6, 3 ]
// ]
