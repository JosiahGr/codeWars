function cubeOdd(arr) {
  let result = 0;
  for(let i in arr) {
    if(isNaN(arr[i])) {
      return undefined;
    }
    if (arr[i] % 2 !== 0) {
      result += Math.pow(arr[i], 3);
    }
  }
  return result;
}