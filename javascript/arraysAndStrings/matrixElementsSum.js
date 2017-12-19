// After they became famous, the CodeBots all decided to move to a new building and live together. The building is represented by a rectangular matrix of rooms. Each cell in the matrix contains an integer that represents the price of the room. Some rooms are free (their cost is 0), but that's probably because they are haunted, so all the bots are afraid of them. That is why any room that is free or is located anywhere below a free room in the same column is not considered suitable for the bots to live in.
// Help the bots calculate the total price of all the rooms that are suitable for them.
// Example
//   matrix = [[0, 1, 1, 2], 
//             [0, 5, 0, 0], 
//             [2, 0, 3, 3]]
//     matrixElementsSum(matrix) = 9.
//   matrix = [[1, 1, 1, 0], 
//             [0, 5, 0, 1], 
//             [2, 1, 3, 10]]
//     matrixElementsSum(matrix) = 9.

console.log(matrixElementsSum([[0, 1, 1, 2], 
                               [0, 5, 0, 0], 
                               [2, 0, 3, 3]]));

console.log(matrixElementsSum([[1, 1, 1, 0], 
                               [0, 5, 0, 1], 
                               [2, 1, 3, 10]]));

function matrixElementsSum(matrix) {
  let lenY = matrix.length;
  let haunted = [];
  let total = 0;
  for (let j=0; j<lenY; j++) {
      var lenX = matrix[j].length;
      for (let i=0; i<lenX; i++) {
          if (matrix[j][i] == 0) {
              haunted.push(i);
          }
          if (haunted.indexOf(i) > -1) {
              continue; 
          } else {
              total += matrix[j][i];
          }
      }
  }
  return total;
}