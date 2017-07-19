function checkPermutation(a, b) {
  var alen = a.length;
  var blen = b.length;
  if (alen !== blen) {
    return false;
  }
  a = sort(a); // sort function... doesn't exist yet...
  b = sort(b); // sort function... doesn't exist yet...
  if (a === b){
    return true;
  }
  return false;
}
