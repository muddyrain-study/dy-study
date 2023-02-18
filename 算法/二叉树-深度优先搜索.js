function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");

a.left = c;
a.right = b;
c.left = f;
c.right = g;
b.left = d;
b.right = e;

function deepSearch(root, target) {
  if (root === null) return false;
  if (root.value === target) return true;
  var left = deepSearch(root.left, target);
  var right = deepSearch(root.right, target);
  return left || right;
}
console.log(deepSearch(a, "f"));
