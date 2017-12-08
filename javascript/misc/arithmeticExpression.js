// Consider an arithmetic expression of the form a#b=c. Check whether it is possible to replace # with one of the four signs: +, -, * or / to obtain a correct expression.
// Example
//   For a = 2, b = 3 and c = 5, the output should be
//    arithmeticExpression(a, b, c) = true.
//   For a = 8, b = 2 and c = 4, the output should be
//    arithmeticExpression(a, b, c) = true.
//   For a = 8, b = 3 and c = 2, the output should be
//    arithmeticExpression(a, b, c) = false.

console.log(arithmeticExpression(2,3,5));
console.log(arithmeticExpression(8,2,4));
console.log(arithmeticExpression(8,3,2));

function arithmeticExpression(a, b, c) {
  if (a+b==c) return true;
  if (a-b==c) return true;
  if (a*b==c) return true;
  if (a/b==c) return true;
  return false;
}

// // C# - note important of casting
// bool arithmeticExpression(int a, int b, int c) {
//   if (a+b==c) {Console.WriteLine("+"); return true;}
//   if (a-b==c) {Console.WriteLine("-"); return true;}
//   if (a*b==c) {Console.WriteLine("*"); return true;}
//   if ((int) (double)a/(double)b==c) {Console.WriteLine("/"); return true;}
//   return false;
// }