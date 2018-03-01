function mutateMyStrings(stringOne, stringTwo) {
  let answer = stringOne + '\n';
  let array = stringOne.split('');
  let array2 = stringTwo.split('');
  
  for (let i in stringTwo) {
    if(array[i] !== array2[i]) {
      array[i] = array2[i];
      answer += array.join('') + '\n';
    }
  }
  return answer;
}