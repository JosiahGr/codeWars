function solution(str){  
  var strings = [];  
  for(var i = str.length - 1; i >= 0; i--) {
    strings.push(str[i]);
  }
  return strings.join('');
}