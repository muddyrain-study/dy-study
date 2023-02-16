var arr = [4, 1, 6, 9, 3, 2, 8, 7];

// 排序不是比较大小
// 比较之后需要的出是否需要交换
function compare(a, b) {
  return b < a;
}
// 将数组 ab 位置 里的值 交换位置
function exchange(arr, a, b) {
  var temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
// 这个sort可以是冒泡排序也可以是选择排序也可以是其他排序
function sort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (compare(arr[j], arr[j + 1])) {
        exchange(arr, j, j + 1);
      }
    }
  }
}

sort(arr);
console.log(arr);
