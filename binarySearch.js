function binarySearch(arr, left, right, num) {

  if (left > right) {
    return -1;
  }

  var mid = Math.floor((left + right) / 2);

  if (arr[mid] === num) {
    return mid;
  }

  if (arr[mid] > num) {
    return binarySearch(arr, left, mid - 1, num);
  } else {
    return binarySearch(arr, mid + 1, right, num);
  }
}
var arr_one = [1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94, 200];
console.log(binarySearch(arr_one, 0, arr_one.length - 1, 93));

var arr_two = [1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94];
console.log(binarySearch(arr_two, 0, arr_two.length - 1, 15));