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

function search(rootList, target) {
  if (rootList === null || rootList.length === 0) return false;
  var childList = [];
  for (var i = 0; i < rootList.length; i++) {
    const root = rootList[i];
    if (root !== null && root.value === target) {
      return true;
    } else {
      if (root) {
        childList.push(root.left);
        childList.push(root.right);
      }
    }
  }
  return search(childList, target);
}

console.log(search([a], "r"));
