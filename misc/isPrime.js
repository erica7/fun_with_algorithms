// Write a function to print prime numbers up to 100
// Then, separate the logic and write two functions
//   1) print primes up to a given number, and
//   2) print a given number of primes.

// Print all prime numbers up to 100 (fixed)
function printPrimes(){
  var isPrime = true;
  for(let i = 2; i <= 100; i++) {
    isPrime = true;
    for (let j = 2; j <= i/2; j++) {
      if (i%j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(i);
    }
  }
}

console.log(`Print all primes up to 100 (fixed)`);
printPrimes();

// Prime Logic: determines if a given number is a prime; returns the number if it is prime, or null if it is not
function checkPrime(x) {
  for (let i = 2; i <= x/2; i++) {
    if (x%i === 0) {
      return null;
    }
  }
  return x;
}

// Prints all prime numbers up to a given number
function printAllPrimesUpTo(max){
  for (let i = 2; i <= max; i++) {
    let possiblePrime = checkPrime(i);
    if (possiblePrime) {
      console.log(possiblePrime);
    }
  }
}

// Prints a given number of prime numbers
function printNPrimes(n) {
  var count = 0;
  var numberToEvaluate = 2;
  while (count <= n) {
    let possiblePrime = checkPrime(numberToEvaluate);
    if (possiblePrime) {
      console.log(possiblePrime);
      count++;
    }
    numberToEvaluate++;
  }
}

let max = 23;
console.log(`Print all primes up to ${max}`);
printAllPrimesUpTo(max);

let n = 40;
console.log(`Print ${n} primes`);
printNPrimes(n);
