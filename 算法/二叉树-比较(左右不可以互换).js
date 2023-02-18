function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

const a1 = new Node("a");
const b1 = new Node("b");
const c1 = new Node("c");
const d1 = new Node("d");
const e1 = new Node("e");
const f1 = new Node("f");
const g1 = new Node("g");

a1.left = c1;
a1.right = b1;
c1.left = f1;
c1.right = g1;
b1.left = d1;
b1.right = e1;

const a2 = new Node("a");
const b2 = new Node("b");
const c2 = new Node("c");
const d2 = new Node("d");
const e2 = new Node("e");
const f2 = new Node("f");
const g2 = new Node("g");

a2.left = c2;
a2.right = b2;
c2.left = f2;
c2.right = g2;
b2.left = d2;
b2.right = e2;

function compareTree(root1, root2) {
  if (root1 === root2) return true;
  if (
    (root1 === null && root2 !== null) ||
    (root1 !== null && root2 === null)
  ) {
    return false;
  }
  if (root1.value !== root2.value) return false;

  var leftBool = compareTree(root1.left, root2.left);
  var rightBool = compareTree(root1.right, root2.right);

  if (leftBool && rightBool) {
    return true;
  } else {
    return false;
  }
}
console.log(compareTree(a1, a2));
