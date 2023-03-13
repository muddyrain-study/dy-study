/**
 * @type {import("dva").Model}
 */
const config = {
  namespace: "counter",
  state: 0,
  reducers: {
    increase(state) {
      return state + 1;
    },
    decrease(state) {
      return state - 1;
    },
    add(state, { payload }) {
      return state + payload;
    },
  },
  effects: {
    *asyncIncrease(action, { call, put }) {
      yield call(delay, 2000);
      yield put({ type: "increase" });
    },
    *asyncDecrease(action, { call, put }) {
      yield call(delay, 2000);
      yield put({ type: "decrease" });
    },
  },
  subscriptions: {
    resizeIncrease({ dispatch }) {
      window.onresize = () => {
        dispatch({
          type: "increase",
        });
      };
    },
    m2({ history, dispatch }) {
      history.listen(() => {
        dispatch({ type: "decrease" });
      });
    },
  },
};

export default config;

function delay(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}
