// Sum the seqence of numbers given a begin value (inclusive), end value (inclusive), and step size
// ex.)
//   sumSequence(2,2,2) === 2
//   sumSequence(2,6,2) === 12 // 2 + 4 + 6
//   sumSequence(1,5,1) === 15 // 1 + 2 + 3 + 4 + 5
//   sumSequence(1,5,3) === 5 // 1 + 4

// space O(1)
// time O(1)
function sumSequence(begin, end, step) {

  if (begin > end) {
    return 0;
  }

  var sum = begin;
  var next = begin + step;
  while (next <= end) {
    sum += next;
    next += step;
  }

  return sum;

};

console.log(sumSequence(2,2,2));
console.log(sumSequence(2,6,2));
console.log(sumSequence(1,5,1));
console.log(sumSequence(1,5,3));
console.log(sumSequence(9,5,3));  // 0
