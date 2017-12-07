// Given integers a and b, determine whether the following pseudocode results in an infinite loop
//    while a is not equal to b do
//      increase a by 1
//      decrease b by 1
// Example
//    For a = 2 and b = 6, the output should be
//      isInfiniteProcess(a, b) = false;
//    For a = 2 and b = 3, the output should be
//      isInfiniteProcess(a, b) = true.

console.log(isInfiniteProcess(2,6));
console.log(isInfiniteProcess(2,3));

function isInfiniteProcess(a, b) {
  if (a > b || Math.abs((a-b)%2) == 1) return true;
  return false;
}