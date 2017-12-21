// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.
// Given a ticket number n, determine if it's lucky or not.
// Example
//   For n = 1230, the output should be
//     isLucky(n) = true;
//   For n = 239017, the output should be
//     isLucky(n) = false.

console.log(isLucky(1230));
console.log(isLucky(239017));

function isLucky(n) {
  let str = n.toString();
  let len = str.length;
  let sum1 = 0;
  let sum2 = 0;
  for (var i=0; i<len/2; i++) {
      sum1 += parseInt(str[i])
  }
  for (var i=len/2; i<len; i++) {
      sum2 += parseInt(str[i])
  }
  if (sum1 === sum2) {
      return true;
  }
  return false;
}