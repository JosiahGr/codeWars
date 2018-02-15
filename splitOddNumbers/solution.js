function insertDash(num) {

  num = num.toString();
  let firstNum = [];
  let	answer = [];
  let thisNumber;

  for (var i in num){
    if (num[i] % 2 === 0 ) {
      thisNumber = 'even';
    } else {
      thisNumber = 'odd';
    }
    
    if (thisNumber === 'odd' && firstNum === 'odd') {
      answer = answer + '-' + num[i];
    } else {
      answer = answer + num[i];
      firstNum = thisNumber;
    }
  }
  return answer;
}