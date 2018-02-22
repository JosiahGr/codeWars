function capitalize(s){
  let newStrings = ['',''];
  for (let i in s){
    newStrings [i % 2] += s[i].toUpperCase();
    newStrings [1 - i % 2] += s[i];
  }
  return newStrings;
}