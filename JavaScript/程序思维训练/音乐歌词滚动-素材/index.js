(async function () {
  /**
   * 从网络获取歌词数据
   * @returns Promise
   */
  async function getLrc() {
    return await fetch("https://study.duyiedu.com/api/lyrics")
      .then((resp) => resp.json())
      .then((resp) => resp.data);
  }
  const doms = {
    ul: document.querySelector(".lrc"),
    audio: document.querySelector("audio"),
  };
  let lrcData
  let size = {
    liHeight:30,
    containerHeight: 420,
  }
  async function init() {
    const lrc = await getLrc();
    lrcData = lrc.split('\n').filter(s => s).map(s => {
      const parts = s.split(']')
      const timeStr = parts[0].replace('[','').split(':')
      return {
        time: +timeStr[0] * 60 + +timeStr[1],
        words:parts[1]
      }
    })  
    const domStr = lrcData.map(lrc => `<li>${lrc.words}</li>`).join('')
    doms.ul.innerHTML = domStr

   
  }
  await init();

  doms.audio.addEventListener('timeupdate',function(){
    setStatus(this.currentTime)
  })
  function setStatus(time){
    const activeLi = document.querySelector('.active')
    activeLi && activeLi.classList.remove('active')
    const index = lrcData.findIndex(lrc => lrc.time > time) - 1
    if(index < 0) return
    doms.ul.children[index].classList.add('active')
    let top = size.liHeight * index + size.liHeight/2 - size.containerHeight /2
    top = -top
    if(top > 0){
      top = 0
    }
    doms.ul.style.transform = `translateY(${top}px)`
  }
})();
