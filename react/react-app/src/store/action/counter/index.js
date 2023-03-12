import { createActions, handleActions, combineActions } from "redux-actions";
export const actionTypes = {
  increase: Symbol("increase"),
  decrease: Symbol("decrease"),
  asyncIncrease: Symbol("async-increase"), //异步增加
  asyncDecrease: Symbol("async-decrease"),
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
  },
  10
);
combineActions();
