
// Write a function to determine the longest duration of a phone call that can be made.
//  Some phone usage rate may be described as follows:
//    first minute of a call costs min1 cents,
//    each minute from the 2nd up to 10th (inclusive) costs min2_10 cents
//    each minute after 10th costs min11 cents.
//  You have s cents on your account before the call. What is the duration of the longest call (in minutes rounded down to the nearest integer) you can have?
// Example
//  For min1 = 3, min2_10 = 1, min11 = 2 and s = 20, the output should be
//  phoneCall(min1, min2_10, min11, s) = 14.

console.log(phoneCall(3, 1, 2, 20));

function phoneCall(min1, min2_10, min11, s) {  
  min = 0;
  if (s - min1 < 0) {
      return 0;
  } else {
      s -= min1;
      min += 1;
  }
  if (s / min2_10 >= 1) {
      tempMin = Math.floor(s / min2_10);
      if (tempMin > 9) {
          tempMin = 9;
          s -= tempMin * min2_10;
          min += tempMin;
      } else {
          s -= tempMin * min2_10;
          min += tempMin;
          return min;
      }
  }
  if (s / min11 >= 1) {
      tempMin = Math.floor(s / min11);
      s -= tempMin * min11;
      min += tempMin;
  }
  return min;
}