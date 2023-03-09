import { createStore } from "../redux";
import reducer from "./reducer";
import * as userActions from "./action/user-action";
const store = createStore(reducer);

const unListen = store.subscribe(() => {
  console.log("监听器1", store.getState());
});

store.dispatch(
  userActions.createAddUserAction({
    id: 3,
    name: "abc",
    age: 10,
  })
);
unListen(); //取消监听

store.dispatch(userActions.createDeleteUserAction(3));
window.store = store;
