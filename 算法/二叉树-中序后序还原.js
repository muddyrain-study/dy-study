var zhong = ["f", "c", "g", "a", "d", "b", "e"];
var hou = ["f", "g", "c", "d", "e", "b", "a"];

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function f1(z, h) {
  if (
    h == null ||
    z == null ||
    h.length == 0 ||
    z.length == 0 ||
    h.length != z.length
  )
    return null;
  const root = new Node(h[h.length - 1]);
  const index = z.indexOf(root.value);
  const zL = z.slice(0, index);
  const zR = z.slice(index + 1, z.length);
  const hL = h.slice(0, zL.length);
  const hR = h.slice(index, h.length - 1);
  root.left = f1(zL, hL);
  root.right = f1(zR, hR);
  return root;
}

var root = f1(zhong, hou);
console.log(root.left);
console.log(root.right);
