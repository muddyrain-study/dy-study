var arr = [4, 1, 6, 9, 3, 2, 8, 7];

function exchange(arr, a, b) {
  var temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
function quickSort2(arr, begin, end) {
  if (begin >= end - 1) return;
  var left = begin;
  var right = end;
  do {
    do {
      left++;
    } while (left < right && arr[left] < arr[begin]);
    do {
      right--;
    } while (right > left && arr[right] > arr[begin]);
    if (left < right) {
      exchange(arr, left, right);
    }
  } while (left < right);
  var swapPoint = left == right ? right - 1 : right;

  exchange(arr, begin, swapPoint);
  quickSort2(arr, begin, swapPoint);
  quickSort2(arr, swapPoint + 1, end);
}
function quickSort1(arr) {
  quickSort2(arr, 0, arr.length);
}
quickSort1(arr);
console.log(arr);
