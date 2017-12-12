// Decipher the encrypted message.
// Some numbers have a modified single digit in their binary representation. More specifically, in the given number n the kth bit from the right was initially set to 0, but its current value might be different. Write a function that will change the kth bit of n back to 0.
// Example
//   For n = 37 and k = 3, the output should be
//     killKthBit(n, k) = 33.
//     3710 = 1001012 ~> 1000012 = 3310.
//   For n = 37 and k = 4, the output should be
//     killKthBit(n, k) = 37.
//     The 4th bit is 0 already (looks like the Mad Coder forgot to encrypt this number), so the answer is still 37.

console.log(killKthBit(37,3));

function killKthBit(n, k) {
  return parseInt(n.toString(2).substring(0, n.toString(2).length-k) + "0" + n.toString(2).substring(n.toString(2).length-k+1, n.toString(2).length), 2);
}