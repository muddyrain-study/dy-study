import { legacy_createStore as createStore } from "redux";
/**
 * reducer本质上就是一个普通函数
 * @param state 之前仓库中的状态（数据）
 * @param action 描述要作什么的对象
 */
function reducer(state, action) {
  //返回一个新的状态
  if (action.type === "increase") {
    return state + 1;
  } else if (action.type === "decrease") {
    return state - 1;
  }
  return state;
}

const store = createStore(reducer, 10);
store.dispatch({
  type: "increase",
});
console.log(store.getState()); //得到仓库中当前的数据

window.store = store;
