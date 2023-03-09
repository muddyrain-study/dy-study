import { legacy_createStore as createStore, bindActionCreators } from "redux";
import reducer from "./reducer";
import * as userActions from "./action/user-action";
import { v4 as uuid } from "uuid";
const store = createStore(reducer);
const users = bindActionCreators(userActions, store.dispatch);
users.createAddUserAction({ id: uuid(), name: "用户3 ", age: 11 });

window.store = store;
