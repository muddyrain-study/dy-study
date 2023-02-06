function createAnimation(options = {}) {
  var from = options.from || 0;
  var to = options.to || 0;
  var totalMS = options.totalMS || 1000;
  var duration = options.duration || 15;
  var times = Math.floor(totalMS / duration);
  var dis = (to - from) / times;
  var curTimes = 0;
  var timer = setInterval(() => {
    from += dis;
    curTimes++;
    if (curTimes >= times) {
      from = to;
      clearInterval(timer);
      options.onend && options.onend(from, curTimes);
    }
    options.onmove && options.onmove(from, curTimes);
  }, duration);
}

createAnimation({
  from: 0,
  to: 120,
  totalMS: 500,
  duration: 15,
  onmove: function (a, b) {
    console.log("move", a, b);
  },
  onend: function () {},
});
