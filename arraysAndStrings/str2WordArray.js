// Convert a string to an array of words.

// space O(n)
// time O(n)
exports.str2WordArray =  function (str) {
  var arr = [];
  var len = str.length;
  var word = "";
  for (let i = 0; i < len; i++) {
    if (str[i] !== " "){  // && i !== len-1 ) {
      word += str[i];
    } else {
      if (word !== "") {
        arr.push(word);
        word = "";
      }
    }
  }
  if (word !== "") {
    arr.push(word);
  }
  return arr;
}

// testCase = "  Life is not    a drill!    "
// console.log(str2WordArray(testCase));
