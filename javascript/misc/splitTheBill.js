// Given an object representing what each individual owes for a group bill, return an object representing how much each person should pay or return.
// ex) group = {A: 20, B: 15, C: 10} should return {A: 5, B: 0, C: -5}

// space O(n)
// time O(n)
function splitTheBill(x) {
  var total = 0;
  var party = 0;
  for (var key in x) {
    total += x[key];
    party++;
  }
  var average = total/party;
  var owe = {};
  for (var key in x) {
    var individual = x[key];
    var owed = individual - average;
    if (owed % 1 !== 0) {
      owe[key] = Number.parseFloat((owed).toFixed(2));
    } else {
      owe[key] = owed;
    }
  }
  return owe;
}

var testCase = {A: 20, B: 15, C: 10};
console.log(splitTheBill(testCase));
