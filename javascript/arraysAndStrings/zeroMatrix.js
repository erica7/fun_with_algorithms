// if an element in an array is 0, set that element's entire row and column to 0

// space O(n)
// time O(n^2)
function zeroMatrix(matrix){
  var m = matrix[0].length;  // m wide (x)
  var n = matrix.length;     // n high (y)
  var zeroX = {};
  var zeroY = {};

  // find zeros and add their coordinates to associative arrays (one for X-coords and one for Y-coords)
  for (let j=0; j<n; j++){
    for (let i=0; i<m; i++){
      if (matrix[j][i] === 0) {
        zeroX[i] = true;
        zeroY[j] = true;
      }
    }
  }

  // fill in zeros based on the values in the associative arrays
  for (let j=0; j<n; j++){
    for (let i=0; i<m; i++){
      if (zeroX[i] || zeroY[j]) {
        matrix[j][i] = 0;
      }
    }
  }

  return matrix;
}

// eliminate the need for associative arrays by using booleans and storing zeros in the first column and row
// space O(1)
// time O(n^2)
function zeroMatrix2(matrix){
  var m = matrix[0].length;  // m wide (x)
  var n = matrix.length;     // n high (y)
  var firstRow = false;
  var firstColumn = false;

  // determine if the first row contains a 0
  for (let i=0; i<m; i++){
    if (matrix[0][i] === 0) {
      firstRow = true;
    }
  }
  console.log(firstRow);

  // determine if the first column contains a 0
  for (let j=0; j<n; j++){
    if (matrix[j][0] === 0) {
      firstColumn = true;
    }
  }
  console.log(firstColumn);

  // find the zeros in the rest of the matrix and change the corresponding locations of the first column and first row to zero
  for (let j=1; j<n; j++){
    for (let i=1; i<m; i++){
      if (matrix[j][i] === 0) {
        matrix[0][i] = 0;
        matrix[j][0] = 0;
      }
    }
  }

  // Nullify rows
  for (let i=0; i<m; i++){
    if (matrix[0][i] === 0){
      nullifyColumn(matrix, i);
    }
  }

  // Nullify columns
  for (let j=0; j<n; j++){
    if (matrix[j][0] === 0){
      nullifyRow(matrix, j);
    }
  }

  if (firstRow){
    nullifyRow(matrix, 0);
  }

  if (firstColumn){
    nullifyColumn(matrix, 0);
  }

  return matrix;
}

function nullifyRow(matrix, row){
  var len = matrix[0].length;
  for (let i=1; i<len; i++){
    matrix[row][i] = 0;
  }
  return matrix;
}

function nullifyColumn(matrix, col){
  var len = matrix.length;
  for (let j=1; j<len; j++){
    matrix[j][col] = 0;
  }
  return matrix;
}


var testCase = [
  [ 4, 7, 4, 7 ],
  [ 5, 7, 4, 1 ],
  [ 1, 4, 0, 7 ],
  [ 5, 4, 7, 2 ]
]

// console.log(zeroMatrix(testCase));
// returns:
// [
//   [ 4, 7, 0, 7 ],
//   [ 5, 7, 0, 1 ],
//   [ 0, 0, 0, 0 ],
//   [ 5, 4, 0, 2 ]
// ]

console.log(zeroMatrix2(testCase));
// returns:
// [
//   [ 4, 7, 0, 7 ],
//   [ 5, 7, 0, 1 ],
//   [ 0, 0, 0, 0 ],
//   [ 5, 4, 0, 2 ]
// ]
