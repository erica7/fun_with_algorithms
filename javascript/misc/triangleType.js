// Given the lengths of the sides of a triange, determine if it is acute, right, or obtuse, or is not able to form a triangle
// Return 1 for acute, 2 for right, 3 for obtuse, and 0 for not a triangle
// ex.)
//   2, 4, 6 returns 0
//   8, 5, 7 returns 1
//   3, 4, 5 returns 2
//   7, 12, 8 returns 3

// space O(1)  // inputs constrained to three doubles
// time O(1)
/* Should return ᐃ type:
  0 : if ᐃ cannot be made with given sides
  1 : acute ᐃ
  2 : right ᐃ
  3 : obtuse ᐃ
*/
function triangleType(a, b, c){
  // does not form a triangle
  if (a+b<=c || b+c<=a || a+c<=b) {
    return 0;
  }

  var a2 = Math.pow(a,2);
  var b2 = Math.pow(b,2);
  var c2 = Math.pow(c,2);

  // pythagorean theorum is true => right triangle
  if (a2+b2==c2 || b2+c2==a2 || a2+c2==b2) {
    return 2;
  }

  // if squared hypotenuse is greater than sum of squared sides => acute
  if (a2+b2>c2 && b2+c2>a2 && a2+c2>b2) {
    return 1;
  }

  // if squared hypotenuse is less than sum of squared sides => obtuse
  if (a2+b2<c2 || b2+c2<a2 || a2+c2<b2) {
    return 3;
  }
}

console.log(triangleType(2, 4, 6));
console.log(triangleType(8, 5, 7));
console.log(triangleType(3, 4, 5));
console.log(triangleType(7, 12, 8));
