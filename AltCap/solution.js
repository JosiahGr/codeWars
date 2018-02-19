function capitalize(s){

  let newArray = s.slice();
  let whichLetter = 0;

  for(var i = 0; i < newArray.length; i++) {
    whichLetter += 1;
  } if (whichLetter % 2 == 0) {
    newArray.toUpperCase();
  }
  return newArray;
}