// Write a function to determine the max value you can carry.
// The first item weighs weight1 and is worth value1, and the second item weighs weight2 and is worth value2. What is the total maximum value of the items you can take with you, assuming that your max weight capacity is maxW?
// Examples
//  For value1 = 10, weight1 = 5, value2 = 6, weight2 = 4 and maxW = 8, the output should be
//  knapsackLight(value1, weight1, value2, weight2, maxW) = 10.
//  For value1 = 10, weight1 = 5, value2 = 6, weight2 = 4 and maxW = 9, the output should be
//  knapsackLight(value1, weight1, value2, weight2, maxW) = 16.
//  For value1 = 5, weight1 = 3, value2 = 7, weight2 = 4 and maxW = 6, the output should be
//  knapsackLight(value1, weight1, value2, weight2, maxW) = 7.

console.log(knapsackLight(10,5,6,4,8));

function knapsackLight(value1, weight1, value2, weight2, maxW) {
  if (weight1 + weight2 <= maxW){
      return value1 + value2;
  } 
  if (value1 >= value2) {
      if (weight1 <= maxW) {
          return value1;
      } else if (weight2 <= maxW) {
          return value2;
      }
  } else {
      if (weight2 <= maxW) {
          return value2;
      } else if (weight1 <= maxW) {
          return value1;
      }
  }
  return 0;
}