// 让小球向右下运动，遇到边缘后反弹

var ball = document.querySelector(".ball");

var disX = 2;
var disY = 2;

var w = document.documentElement.clientWidth;
var h = document.documentElement.clientHeight;

var ew = ball.clientWidth;
var eh = ball.clientHeight;

var maxLeft = w - ew;
var maxTop = h - eh;

setInterval(() => {
  var rect = ball.getBoundingClientRect();
  var x = rect.left,
    y = rect.top;
  var left = x + disX,
    top = y + disY;
  if (left > maxLeft) {
    left = maxLeft;
    disX = -disX;
  }
  if (left < 0) {
    left = 0;
    disX = -disX;
  }
  if (top > maxTop) {
    top = maxTop;
    disY = -disY;
  }
  if (top < 0) {
    top = 0;
    disY = -disY;
  }
  ball.style.left = left + "px";
  ball.style.top = top + "px";
}, 10);
