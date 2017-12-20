// Given two strings, find the number of common characters between them.
// Example
//   For s1 = "aabcc" and s2 = "adcaa", the output should be
//     commonCharacterCount(s1, s2) = 3.

console.log(commonCharacterCount("aabcc", "adcaa"));

function commonCharacterCount(s1, s2) {
  let count = 0;
  if (s1.length<s2.length){
      lenShort = s1.length;
      lenLong = s2.length;
      strShort = s1;
      strLong = s2;
  } else {
      lenShort = s2.length;
      lenLong = s1.length;
      strShort = s2;
      strLong = s1;
  }
  for (let i=0; i<lenShort; i++) {
      let ind = strLong.indexOf(strShort[i]);
      if (ind > -1) {
          strLong = strLong.slice(0,ind) + strLong.slice(ind+1, strLong.length)
          count++;
      }
  }
  return count;
}