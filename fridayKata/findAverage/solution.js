function find_average(array) {
  var sum = array.reduce(function(a, b) {
    return a + b;
  });
  var avg = sum / array.length;
  return avg;
}