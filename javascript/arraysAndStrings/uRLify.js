function URLify(str,n){
  var url = "";
  for(let i=0; i<n; i++){
    if(str[i]===" "){
      url += "%20";
    } else {
      url += str[i];
    }
  }
  return url;
}

console.log(URLify("Mr John Smith    ", 13));
// returns Mr%20John%20Smith
