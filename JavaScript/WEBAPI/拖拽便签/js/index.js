// 让便签可被拖动，但不能超出视口

var moveBar = document.querySelector(".move-bar");

var note = document.querySelector(".note");

moveBar.onmousedown = (e) => {
  // 鼠标按下的坐标
  var x = e.clientX;
  var y = e.clientY;
  var rect = moveBar.getBoundingClientRect();
  const { left: ex, top: ey } = rect;

  const w = document.documentElement.clientWidth;
  const h = document.documentElement.clientHeight;
  const ew = note.offsetWidth;
  const eh = note.offsetHeight;
  var maxLeft = w - ew;
  var maxTop = h - eh;
  window.onmousemove = (e) => {
    const disX = e.clientX - x;
    const disY = e.clientY - y;
    let left = disX + ex;
    let top = disY + ey;
    if (left < 0) {
      left = 0;
    }
    if (left > maxLeft) {
      left = maxLeft;
    }
    if (top < 0) {
      top = 0;
    }
    if (top > maxTop) {
      top = maxTop;
    }
    note.style.left = left + "px";
    note.style.top = top + "px";
  };
  window.onmouseup = () => {
    console.log("up");
    window.onmousemove = null;
    window.onmouseup = null;
  };
};
console.log(moveBar);
