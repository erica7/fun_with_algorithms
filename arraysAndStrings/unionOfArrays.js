// Return the union of two arrays without repeats
//   e.g.
//     a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
//     b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
//   should return
//     [1, 2, 3, 5, 8, 13]

// space O(n)
// time O(n)
function unionOfArrays(a, b) {
  var lenA = a.length;
  var union = [];
  for (let i = 0; i < lenA; i++) {
    if (b.indexOf(a[i]) !== -1 && union.indexOf(a[i]) === -1) {
      union.push(a[i]);
    }
  }
  return union;
}

a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log(unionOfArrays(a,b));
// returns [ 1, 2, 3, 5, 8, 13 ]
