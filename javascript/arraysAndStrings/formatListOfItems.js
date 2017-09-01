// Return a string using a given list of names (objects in an array); put a comma between each item and an ampersand between the last two.

// space O(n)
// time O(n)
function formatListOfItems(names){
  var len = names.length;
  if (len === 0) {
    return "";
  }
  if (len === 1) {
    return names[0].name;
  }
  var str = "";
  for (let i = 0; i < len-2; i++) {
    str += names[i].name + ", ";
  }
  return str += names[len-2].name + " & " + names[len-1].name;
}

testCase = [{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]  // 'Bart, Lisa, Maggie, Homer & Marge'
testCase2 = [{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}]  // 'Bart, Lisa & Maggie'
testCase3 = [{name: 'Bart'},{name: 'Lisa'}]  // 'Bart & Lisa'
testCase4 = [{name: 'Bart'}]  // 'Bart'
testCase5 = []  // ''

console.log(formatListOfItems(testCase));
console.log(formatListOfItems(testCase2));
console.log(formatListOfItems(testCase3));
console.log(formatListOfItems(testCase4));
console.log(formatListOfItems(testCase5));
