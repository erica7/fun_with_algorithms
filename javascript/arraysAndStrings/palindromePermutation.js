// space O(n)
// time O(n)
function palindromePermutation(str) {
  var len = str.length;
  var counts = {};
  var spaces = 0;  // improvement: filter all non-letter characters
  for (let i = 0; i < len; i ++) {  // O(n)
    if (str[i] === " ") {  // improvement: filter all non-letter characters
      spaces++;
      continue;
    } else if (counts[str[i]]) {
      counts[str[i]]++;
    } else {
      counts[str[i]] = 1;
    }
  }
  var odds = 0;
  for (var key in counts) {  // O(1)
    let value = counts[key];
    if (value % 2 === 1) {
      odds++;
    }
  }
  var pal = len - spaces;
  if ((pal%2 === 1 && odds === 1) || (pal%2 === 0 && odds === 0)) {
    return true;
  } else {
    return false;
  }
}

var testCase = "tact coa"
console.log(palindromePermutation(testCase));


// use a bit vector approach
// space O(n)
// time O(n)
function palindromePermutation2(str) {
  var len = str.length;
  var counts = {};
  var spaces = 0;  // improvement: filter all non-letter characters
  for (let i = 0; i < len; i ++) {  // O(n)
    if (str[i] === " ") {  // improvement: filter all non-letter characters
      spaces++;
      continue;
    } else if (counts[str[i]]) {
      if (counts[str[i]] === 1) {
        counts[str[i]] = 0;
      } else {
        counts[str[i]] = 1;
      }
    } else {
      counts[str[i]] = 1;
    }
  }
  var odds = 0;
  for (var key in counts) {  // O(1)
    let value = counts[key];
    if (value === 1) {  // simple comparisson instead of modulo operation
      odds++;
    }
  }
  var pal = len - spaces;
  if ((pal%2 === 1 && odds === 1) || (pal%2 === 0 && odds === 0)) {
    return true;
  } else {
    return false;
  }
}

console.log(palindromePermutation2(testCase));
