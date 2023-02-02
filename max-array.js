function maxArray(arr) {
  var max = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

const heights = [167, 190, 120, 165, 137];
const tallest = maxArray( heights);
console.log('Tallest person height is:', tallest)