importScripts("./maths.js");
this.onmessage = function (e) {
  console.log(getSum(1, 2));
  var result = 0;
  for (let index = 0; index < e.data.num; index++) {
    result += index;
  }
  this.postMessage(result);
};
