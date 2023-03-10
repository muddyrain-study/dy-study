import { legacy_createStore as createStore } from "redux";
import { bindActionCreators, applyMiddleware } from "../redux";
import reducer from "./reducer";
import * as userActions from "./action/user-action";
import logger from "redux-logger";
//应用中间件，方式1：
// const store = createStore(reducer, applyMiddleware(logger1, logger2));

//方式2：
const store = applyMiddleware(logger)(createStore)(reducer);

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
