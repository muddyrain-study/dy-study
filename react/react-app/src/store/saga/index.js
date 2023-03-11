import { take, all } from "redux-saga/effects";
import { actionTypes } from "../action/counter";
import counterTask from "./counterTask";
import counterTask2 from "./counterTask2";

export default function* sagaTask() {
  yield all([counterTask(), counterTask2()]);
  console.log("saga完成");
}
