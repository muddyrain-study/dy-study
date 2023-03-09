import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { bindActionCreators } from "../redux";
import reducer from "./reducer";
import * as userActions from "./action/user-action";
// import { v4 as uuid } from "uuid";
const logger1 = (store) => (next) => (action) => {
  console.log("中间件1");
  console.log("旧数据", store.getState());
  console.log("action", action);
  next(action);
  console.log("新数据", store.getState());
  console.log("");
};
const logger2 = (store) => (next) => (action) => {
  console.log("中间件2");
  console.log("旧数据", store.getState());
  console.log("action", action);
  next(action);
  console.log("新数据", store.getState());
  console.log("");
};
//应用中间件，方式1：
// const store = createStore(reducer, applyMiddleware(logger1, logger2));

//方式2：
const store = applyMiddleware(logger1, logger2)(createStore)(reducer);

const unListen = store.subscribe(() => {
  console.log("监听器1", store.getState());
});
const UserActions = bindActionCreators(userActions, store.dispatch);
const CreateAddUserAction = bindActionCreators(
  userActions.createAddUserAction,
  store.dispatch
);

CreateAddUserAction({
  id: 3,
  name: "abc",
  age: 10,
});
unListen(); //取消监听
UserActions.createDeleteUserAction(3);
window.store = store;
