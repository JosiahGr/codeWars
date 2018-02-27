function cubeOdd(arr) {
  let newArray = arr.slice();
  let total = 0;
  for(var i in newArray.length) {
    let a = newArray[i];

    if (typeof a !== 'number') {
      return total = undefined;
    }
  }
  newArray.map(function(arr) {
    if(arr % 2 !== 0) {
      arr = Math.pow(arr, 3);
      return total += arr;
    }
  });
  return total;
}