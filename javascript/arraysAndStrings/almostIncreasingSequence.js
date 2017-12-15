// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.
// Example
//   For sequence = [1, 3, 2, 1], the output should be
//     almostIncreasingSequence(sequence) = false;
//   For sequence = [1, 3, 2], the output should be
//     almostIncreasingSequence(sequence) = true.

console.log(almostIncreasingSequence([1, 3, 2, 1]));
console.log(almostIncreasingSequence([1, 3, 2]));

function almostIncreasingSequence(sequence) {
  count = 0;
  len = sequence.length - 1;
  for (i=0; i<len; i++) {
      if (sequence[i] >= sequence[i+1]) {
          count++;
          if (i+1 != len) {
              if (sequence[i-1] >= sequence[i+1] && sequence[i] >= sequence[i+2]) {
                  count++;
              }
          }
      }
  }
  if (count >= 2) {
      return false;
  }
  return true;
}