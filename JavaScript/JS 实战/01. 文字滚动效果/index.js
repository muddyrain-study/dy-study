(function () {
  const list = document.querySelector(".list");

  function cloneFirstItem() {
    const item = list.children[0];
    list.appendChild(item.cloneNode(true));
  }

  cloneFirstItem();
  let index = 0;
  const h = 30;
  setInterval(() => {
    var from = h * index;
    index++;
    const to = h * index;
    const duration = 10;
    var dis = (to - from) / (500 / duration); // 每次变化的量
    var timer = setInterval(() => {
      from += dis;
      if (from >= to) {
        clearInterval(timer);
        if (index === list.children.length - 1) {
          index = 0;
        }
      }
      list.scrollTop = from;
    }, duration);
  }, 2000);
})();
