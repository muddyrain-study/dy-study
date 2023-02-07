// 首先还是封装两个 DOM 查询的方法
function $(selector) {
  return document.querySelector(selector);
}

function $$(selector) {
  return document.querySelectorAll(selector);
}
const chessboard = $(".chessboard")
var isGameOver = false
var whichOne = 'white'
var chessArr = []
function initChessboard() {
  var tableContent = "";
  for (var i = 0; i < 14; i++) {
    var row = "<tr>";
    for (var j = 0; j < 14; j++) {
      row += `<td data-row='${i}' data-line='${j}'></td>`;
    }
    row += "</tr>";
    tableContent += row;
  }
  chessboard.innerHTML = tableContent
}
function bindEvent (){
  chessboard.onclick = function (e){
    if(!isGameOver){
    var temp = Object.assign({},e.target.dataset)
    if(e.target.nodeName === 'TD'){
      var tdw = chessboard.clientWidth * 0.92 / 14
      var tdh = chessboard.clientHeight * 0.92 / 14
      var positionX = e.offsetX > tdw /2
      var positionY = e.offsetY > tdh /2
      var chessPoint = {
        x: positionX ? parseInt(temp.line) + 1 :parseInt(temp.line),
        y: positionY ? parseInt(temp.row) + 1 :parseInt(temp.row),
        c: whichOne
      }
      chessMove(chessPoint)
    }
    }else{
  // 游戏已经结束，需要询问是否要重新来一局
  if(window.confirm('是否要重新开始一局？')){
    // 进行一些初始化操作
    chessArr = []; // 重置棋子的数组
    initChessboard(); // 重新绘制棋盘
    isGameOver = false;
}
    }
  }
}

function chessMove(chessPoint){
  if(!exist(chessPoint) && !isGameOver){
     // 进入此 if，说明该位置能够绘制，并且没有游戏结束
     chessArr.push(chessPoint); // 将该棋子的信息推入到数组
    var newChess = `<div class='chess ${chessPoint.c}' data-row="${chessPoint.y}" data-line="${chessPoint.x}">
    </div>`
    if(chessPoint.x < 14 && chessPoint.y < 14){
      var tdPos = $(`td[data-row='${chessPoint.y}'][data-line='${chessPoint.x}']`)
      tdPos.innerHTML += newChess
    }
    if(chessPoint.x === 14 && chessPoint.y < 14){
      var tdPos = $(`td[data-row='${chessPoint.y}'][data-line='13']`)
      tdPos.innerHTML += newChess
      tdPos.lastChild.style.left = '50%'
    }
    if(chessPoint.x < 14 && chessPoint.y === 14){
      var tdPos = $(`td[data-row='${13}'][data-line='${chessPoint.x}']`)
      tdPos.innerHTML += newChess
      tdPos.lastChild.style.top = '50%'
    }
    if(chessPoint.x === 14 && chessPoint.y === 14){
      var tdPos = $(`td[data-row='${13}'][data-line='13']`)
      tdPos.innerHTML += newChess
      tdPos.lastChild.style.left = '50%'
      tdPos.lastChild.style.top = '50%'
    }
    whichOne = whichOne === 'white'? 'black' :'white'
  }
  check(); // 核对游戏是否结束
}

function check(){
  // 其实就是遍历数组里面的每一个棋子
    // 这里分为 4 种情况：横着、竖着、斜着（2 种）
    for(var i=0; i< chessArr.length; i++){
      var curChess = chessArr[i];
      var chess2, chess3, chess4, chess5;
         // 检查有没有横着的 5 个颜色一样的棋子
        chess2 = chessArr.find(function(item){
            return curChess.x === item.x + 1 && curChess.y === item.y && curChess.c === item.c;
        })
        chess3 = chessArr.find(function(item){
            return curChess.x === item.x + 2 && curChess.y === item.y && curChess.c === item.c;
        })
        chess4 = chessArr.find(function(item){
            return curChess.x === item.x + 3 && curChess.y === item.y && curChess.c === item.c;
        })
        chess5 = chessArr.find(function(item){
            return curChess.x === item.x + 4 && curChess.y === item.y && curChess.c === item.c;
        })
        if(chess2 && chess3 && chess4 && chess5){
            // 进入此 if，说明游戏结束
            end(curChess, chess2, chess3, chess4, chess5);
        }
        // 检查有没有斜着的 5 个颜色一样的棋子
        chess2 = chessArr.find(function(item){
            return curChess.x === item.x + 1 && curChess.y === item.y + 1&& curChess.c === item.c;
        })
        chess3 = chessArr.find(function(item){
            return curChess.x === item.x + 2 && curChess.y === item.y + 2 && curChess.c === item.c;
        })
        chess4 = chessArr.find(function(item){
            return curChess.x === item.x + 3 && curChess.y === item.y + 3 && curChess.c === item.c;
        })
        chess5 = chessArr.find(function(item){
            return curChess.x === item.x + 4 && curChess.y === item.y + 4 && curChess.c === item.c;
        })
        if(chess2 && chess3 && chess4 && chess5){
            // 进入此 if，说明游戏结束
            end(curChess, chess2, chess3, chess4, chess5);
        }

        // 检查有没有斜着的 5 个颜色一样的棋子
        chess2 = chessArr.find(function(item){
            return curChess.x === item.x - 1 && curChess.y === item.y + 1&& curChess.c === item.c;
        })
        chess3 = chessArr.find(function(item){
            return curChess.x === item.x - 2 && curChess.y === item.y + 2 && curChess.c === item.c;
        })
        chess4 = chessArr.find(function(item){
            return curChess.x === item.x - 3 && curChess.y === item.y + 3 && curChess.c === item.c;
        })
        chess5 = chessArr.find(function(item){
            return curChess.x === item.x - 4 && curChess.y === item.y + 4 && curChess.c === item.c;
        })
        if(chess2 && chess3 && chess4 && chess5){
            // 进入此 if，说明游戏结束
            end(curChess, chess2, chess3, chess4, chess5);
        }
    }
}
function end(){
  if(!isGameOver){
      isGameOver = true; // 代表游戏结束

      // 1. 把所有的棋子标记出来
      for(var i=0;i<chessArr.length;i++){
          $(`div[data-row='${chessArr[i].y}'][data-line='${chessArr[i].x}']`).innerHTML = i + 1;
      }

      // 2. 把获胜的棋子加上一个红色阴影
      for(var i=0;i<arguments.length;i++){
          $(`div[data-row='${arguments[i].y}'][data-line='${arguments[i].x}']`).classList.add('win');
      }
  }
}
function exist(chessPoint){
  return chessArr.find(function(item){
    return item.x === chessPoint.x && item.y === chessPoint.y
  })
}

function main() {
  initChessboard();
  bindEvent()
}

main();
