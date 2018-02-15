//Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

console.log(persistence(123)); // => 1
console.log(persistence(9867)); // => 2 
console.log(persistence(2389593837292)); // => 2 

function persistence(num) {
  var numStr = String(num);
  
  var prod = 1;
  
  var count = 0;
  
  while (parseInt(numStr) >= 10) {
    prod = parseInt(numStr[0]);
    for (let i=1; i<numStr.length; i++) {
      prod *= parseInt(numStr[i]);
    }
    count++;
    numStr = String(prod);
  }
  
  return count;
}