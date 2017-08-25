// Given a number, return the count of numbers less than the given number that are evenly divisible by 3 only (a), by 5 only (b), and by three and five (c) in an array [a, b, c]
// e.g. 17 returns [ 4, 2, 1 ]
//  1
//  2
//  3  a
//  4
//  5  b
//  6  a
//  7
//  8
//  9  a
//  10 b
//  11
//  12 a
//  13
//  14
//  15 c
//  16

// space O(1)
// time O(n)
function modFizzBuzz(number) {
  var a = 0;
  var b = 0;
  var c = 0;
  for (let i = 1; i < number; i++) {
    let r3 = i % 3;
    let r5 = i % 5;
    if (r3 === 0 && r5 === 0) {
      c++;
      continue;
    } else if (r3 === 0) {
      a++;
      continue;
    } else if (r5 === 0) {
      b++;
      continue;
    }
  }
  return [a, b, c];
}

testCase = 17;
console.log(modFizzBuzz(testCase));
