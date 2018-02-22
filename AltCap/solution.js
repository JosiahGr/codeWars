function capitalize(s){
  let newStr = ['',''];
  for (let i in s){
    newStr [i % 2] += s[i].toUpperCase();
    newStr [1 - i % 2] += s[i];
  }
  return newStr;
}