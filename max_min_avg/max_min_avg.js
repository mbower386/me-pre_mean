function max_min_avg(arr) {
  var min = arr[0];
  var max = arr[0];
  var sum = 0;
  var avg = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }

    sum += arr[i];
  }

  avg = sum / arr.length;

  return ("The minimum is " + min + ", the maximum is " + max + ", and the average is " + avg + ".");
}

console.log(max_min_avg([1, -2, 9, 4]));