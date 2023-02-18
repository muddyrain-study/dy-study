var arr = [];

for (let i = 0; i < 10000; i++) {
  arr[i] = Math.floor(Math.random() * 10000);
}

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
var num = 0;
function search(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    num++;
    if (arr[i] === target) return true;
  }
  return false;
}
function addNode(root, num) {
  if (root === null) return;
  if (root.value === num) return;
  if (num > root.value) {
    if (root.right === null) {
      root.right = new Node(num);
    } else {
      addNode(root.right, num);
    }
  } else if (num < root.value) {
    if (root.left === null) {
      root.left = new Node(num);
    } else {
      addNode(root.left, num);
    }
  }
}
function buildSearchTree(arr) {
  if (arr === null || arr.length === 0) return null;
  var root = new Node(arr[0]);
  for (let i = 0; i < arr.length; i++) {
    addNode(root, arr[i]);
  }
  return root;
}
var num2 = 0;
function searchByTree(root, target) {
  if (root === null) return false;
  num2++;
  if (root.value === target) return true;
  if (root.value > target) {
    return searchByTree(root.left, target);
  } else {
    return searchByTree(root.right, target);
  }
}
var root = buildSearchTree(arr);

console.log(search(arr, 1000));
console.log(num);
console.log(searchByTree(root, 1000));
console.log(num2);
