// In tennis, a set is finished when one of the players wins 6 games and the other one wins less than 5, or, if both players win at least 5 games, until one of the players wins 7 games.
// Determine if it is possible for a tennis set to be finished with the score score1 : score2.
// Example
//   For score1 = 3 and score2 = 6, the output should be
//     tennisSet(score1, score2) = true.
//   For score1 = 8 and score2 = 5, the output should be
//     tennisSet(score1, score2) = false.
//   For score1 = 6 and score2 = 5, the output should be
//     tennisSet(score1, score2) = false.

console.log(tennisSet(3,6));
console.log(tennisSet(8,5));
console.log(tennisSet(6,5));

function tennisSet(score1, score2) {
  if (score1 < 6 && score2 < 6) return false;
  if (score1 == 7 && score2 == 7) return false;
  if ((score1 < 5 && score2 == 6) || (score2 < 5 && score1 == 6)) return true;
  if ((score1 >= 5 && score2 == 7) || (score2 >= 5 && score1 == 7)) return true;
  return false;
}