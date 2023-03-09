import { createStore, bindActionCreators } from "../redux";
import reducer from "./reducer";
import * as userActions from "./action/user-action";
// import { v4 as uuid } from "uuid";
const store = createStore(reducer);

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
