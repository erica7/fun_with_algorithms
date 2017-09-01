// Reverse the words of a given string; return a string
// "This is a test" returns "test a is This"

// space O(n)
// time O(n)
function reverseWordOrder2(str) {
  // // using built-in functions
  // return str.split(" ").reverse().join(" ");

  var revStr = "";
  var len = str.length;
  var word = "";

  for (let i = 0; i < len; i++) {
    if (str[i] !== " "){  // && i !== len-1 ) {
      word += str[i];
    } else {
      if (word !== "") {
        if (revStr === "") {
          revStr = word;
        } else {
          revStr = word + " " + revStr;
        }
        word = "";
      }
    }
  }

  if (word !== "") {
    revStr = word + " " + revStr;
  }

  console.log(str.length);
  console.log(revStr.length);
  return revStr;
}

testCase = "This is a test";
console.log(reverseWordOrder2(testCase));
