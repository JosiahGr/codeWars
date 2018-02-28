function high(x) {
  let scores = [];
  let highestWord = 0;
  let letters = 'abcdefghijklmnopqrstuvwxyz';
  let array = x.split(' ');
  x = x.toLowerCase();
  let string = '';

  for (var i in array) {
    scores[i] = 0;
    for (var j in array[i]) {
      if (letters.indexOf(array[i][j]) !== -1 )
        scores[i] += letters.indexOf(array[i][j]) + 1;
    }
  }

  for (var k in array)
    if (scores[k] > highestWord) {
      highestWord = scores[k];
      string = array[k];
    }
  return string;
}