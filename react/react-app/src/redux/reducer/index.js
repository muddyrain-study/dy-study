import login from "./login";
import user from "./user";
import { combineReducers } from "redux";

export default combineReducers({
  loginUser: login,
  users: user,
});
// export default function reducer(state = {}, action) {
//   const newState = {
//     loginUser: login(state.loginUser, action),
//     users: user(state.users, action),
//   };

//   return newState;
// }
