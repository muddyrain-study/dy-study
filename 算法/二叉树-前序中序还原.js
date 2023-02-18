var qian = ["a", "c", "f", "g", "b", "d", "e"];
var zhong = ["f", "c", "g", "a", "d", "b", "e"];

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function f1(qian, zhong) {
  if (
    qian == null ||
    zhong == null ||
    qian.length == 0 ||
    zhong.length == 0 ||
    qian.length != zhong.length
  )
    return null;
  const root = new Node(qian[0]);
  const index = zhong.indexOf(root.value);
  const qianL = qian.slice(1, index + 1);
  const qianR = qian.slice(index + 1, qian.length);
  const zhongL = zhong.slice(0, index);
  const zhongR = zhong.slice(index + 1, zhong.length);
  root.left = f1(qianL, zhongL);
  root.right = f1(qianR, zhongR);
  return root;
}

var root = f1(qian, zhong);
console.log(root.left);
console.log(root.right);
