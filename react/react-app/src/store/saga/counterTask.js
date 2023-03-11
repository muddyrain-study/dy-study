import { take, takeEvery } from "redux-saga/effects";
import { actionTypes } from "../action/counter";

function* asyncIncreaseTask() {
  console.log("asyncIncreaseTask");
}

export default function* sagaTask() {
  const action = yield takeEvery(actionTypes.asyncIncrease, asyncIncreaseTask);
  console.log("正在监听 asyncIncrease ", action);
}
