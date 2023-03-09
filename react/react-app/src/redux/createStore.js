/**
 * 判断某个对象是否是一个plain-object
 * @param {*} obj
 */
function isPlainObject(obj) {
  if (typeof obj !== "object") {
    return false;
  }
  return Object.getPrototypeOf(obj) === Object.prototype;
}
/**
 * 得到一个指定长度的随机字符串
 * @param {number} length
 */
function getRandomString(length) {
  return Math.random()
    .toString(36)
    .slice(2, length ? length - 2 : undefined);
}

/**
 * createStore
 * @param {funciton} reducer
 * @param {any} defaultState
 */
export default function createStore(reducer, defaultState) {
  let currentReducer = reducer, //当前使用的reducer
    currentState = defaultState; //当前仓库中的状态
  const listeners = []; //记录所有的监听器（订阅者）
  function dispatch(action) {
    //验证action
    if (!isPlainObject(action)) {
      throw new TypeError("action must be a plain object");
    }
    //验证action的type属性是否存在
    if (action.type === undefined) {
      throw new TypeError("action must has a property of type");
    }
    currentState = currentReducer(currentState, action);
    //运行所有的订阅者（监听器）
    for (const listener of listeners) {
      listener();
    }
  }
  function subscribe(listener) {
    listeners.push(listener); //将监听器加入到数组中
    let isRemove = false; //是否已经移除掉了
    return function () {
      if (isRemove) {
        return;
      }
      //将listener从数组中移除
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
      isRemove = true;
    };
  }
  function getState() {
    return currentState;
  }
  //创建仓库时，需要分发一次初始的action
  dispatch({
    type: `@@redux/INIT${getRandomString(7)}`,
  });
  return {
    dispatch,
    subscribe,
    getState,
  };
}
