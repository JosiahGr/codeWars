function isNice(arr){
  if(arr.length === 0) return false;
  for(var i = 0;i < arr.length;i++) {
    if(arr.includes(arr[i] + 1) === false && arr.includes(arr[i] - 1) === false) {
      return false;
    }
  }
  return true;
}