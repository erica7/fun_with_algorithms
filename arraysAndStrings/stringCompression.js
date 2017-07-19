// space O(n)
// time O(n^2)

function stringCompression(str) {
  var len = str.length;
  var comp = "";
  var count = 1;
  for (var i = 0; i<len; i++) {
    if (str[i] === str[i+1]) {
      count++;
    } else {
      if (count <= 1) {
        comp += str[i];  // O(n^2)
      } else {
        comp += str[i] + count;
        count = 1;
      }
    }
  }
  return comp;
}


testCase = "aabcccccaaa"
console.log(stringCompression(testCase));
