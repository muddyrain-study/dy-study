import { legacy_createStore as createStore, bindActionCreators } from "redux";
import { DECREASE, INCREASE, SET } from "./action/action-type";
import * as numberActions from "./action/number-action";
/**
 * reducer本质上就是一个普通函数
 * @param state 之前仓库中的状态（数据）
 * @param action 描述要作什么的对象
 */
function reducer(state, action) {
  //返回一个新的状态
  if (action.type === INCREASE) {
    return state + 1;
  } else if (action.type === DECREASE) {
    return state - 1;
  } else if (action.type === SET) {
    return action.payload;
  }
  return state;
}
const store = createStore(reducer, 10);

//第一个参数，是action创建函数合并的对象，第二个参数是仓库的dispatch函数
//得到一个新的对象，新对象中的属性名与第一个参数的属性名一致
const boundActions = bindActionCreators(numberActions, store.dispatch);
boundActions.getIncreaseAction();

boundActions.getSetAction(888);
console.log(store.getState()); //得到仓库中当前的数据

window.store = store;
