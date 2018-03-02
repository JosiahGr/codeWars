function capitalize(s,arr){
  let string = s.split('');
  for ( var i in arr) {
    if (arr[i] > string.length) {
      continue;
    }
    let index = '' + string[arr[i]];
    string.splice(arr[i], 1, index.toUpperCase());
  }
  return string.join('');
}