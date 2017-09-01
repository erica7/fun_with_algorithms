// Return the longest word of a given string

// import str2WordArray module to use the function
const mod = require('./str2WordArray');

// space O(n)
// time O(n)
function longestWord(str) {
  var arr = mod.str2WordArray(str);
  var len = arr.length;
  var max = 0;
  var ind;
  for (let i = 0; i < len; i++) {
    if (arr[i].length > max) {
      max = arr[i].length;
      ind = i;
    }
  }
  return arr[ind];
}

testCase = "Find the longest word, if you can!";
console.log(longestWord(testCase));

// space O(n)
// time O(n)
function longestWordWithoutArray(str) {
  var len = str.length;
  var max = 0;
  var ind;
  var count = 0;
  var wordLen;

  for (let i = 0; i < len; i++) {
    if (str[i] !== " "){
      count++;
    } else {
      if (count > max) {
        max = count;
        wordLen = count;
        ind = i - count;
      }
      count = 0;
    }
  }

  // without using built-in function like splice
  var word = "";
  for (let i = ind; i < ind + wordLen; i++) {
    word += str[i];
  }

  return word;

  // return str.slice(ind, wordLen);
}

console.log(longestWordWithoutArray(testCase));
