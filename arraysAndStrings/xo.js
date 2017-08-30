// Write a function that returns true if a given string contains the same quantity of X's and O'x (case insensitive; no X's or O's counts as true); return false otherwise

// space O(1)
// time O(n)
function xo(str) {
  var count = 0;
  var len = str.length;
  for (let i = 0; i < len; i++) {
    if (str[i] === "x" || str[i] === "X") {
      count++;
    } else if (str[i] === "o" || str[i] === "O") {
      count--;
    }
  }
  if (count === 0) {
    return true;
  }
  return false;
}

console.log(xo("xo"));  // true
console.log(xo("xxOo"));  // true
console.log(xo("xxxm"));  // false
console.log(xo("Oo"));  // false
console.log(xo("ooom"));  // false
