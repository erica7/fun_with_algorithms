// Determine if a string has all unique characaters.

var testCase = "abc ";

// using another data structure (hash table)
// space O(n)
// time O(n)
function isUnique(str){
  var temp = {};
  var len = str.length;
  for (let i=0; i<len; i++){
    if (temp[str[i]]){  // O(1)
      return false;
    } else {
      temp[str[i]] = 1;
    }
  }
  return true;
}

console.log(isUnique(testCase));


// without another data structure
// space O(1)
// time O(n^2)
function isUnique2(str){
  var len = str.length;
  for (let i=0; i<len; i++) {
    for (let j=i+1; j<len; j++) {
      if (str[i] === str[j]){
        return false;
      }
    }
  }
  return true;
}

console.log(isUnique2(testCase));


// sort strings, then compare
