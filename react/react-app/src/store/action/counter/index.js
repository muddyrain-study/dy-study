import { createActions, handleActions } from "redux-actions";
export const actionTypes = {
  increase: "increase",
  decrease: "decrease",
  asyncIncrease: "async-increase", //异步增加
  asyncDecrease: "async-decrease",
  add: "ADD",
};

export const actions = createActions({
  [actionTypes.add]: (a) => {
    return a;
  },
  [actionTypes.increase]: null,
  [actionTypes.decrease]: null,
  [actionTypes.asyncIncrease]: null,
  [actionTypes.asyncDecrease]: null,
});

export const reducer = handleActions(
  {
    [actions.add]: (state, action) => {
      return state + action.payload;
    },
    [actions.increase]: (state, action) => {
      return state + 1;
    },
  },
  10
);
