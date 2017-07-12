// Three types of edits can be performed on strings:
//   insert a character
//   remove a character
//   replace a character
// Check if two given strings are one edit (or zero edits) away


// space O(n)
// time O(n)
function oneAway(a, b){
  var alen = a.length;
  var blen = b.length;

  if (alen === blen) {
    var count = 0;
    for (let i = 0; i < alen; i++) {  // O(n)
      if (a[i] !== b[i]) {
        count++;
        if (count > 1) {
          return false;
        }
      }
    }
  } else if (alen < blen) {
    var short = a;
    var shortLen = alen;
    var long = b;
    var longLen = blen;
  } else {
    var short = b;
    var shortLen = blen;
    var long = a;
    var longLen = alen;
  }

  for (let i = 0; i < shortLen; i++) {  // O(n)
    if (short[i] !== long[i] && short[i] !== long[i+1]) {
      return false;
    }
  }
  return true;
}

console.log(oneAway("pale", "ple"));
console.log(oneAway("pales", "pale"));
console.log(oneAway("pale", "bale"));
console.log(oneAway("pale", "bake"));
