import counter from "./counter";
import { combineReducers } from "../../redux";

export default combineReducers({
  counter,
});
// export default function reducer(state = {}, action) {
//   const newState = {
//     loginUser: login(state.loginUser, action),
//     users: user(state.users, action),
//   };

//   return newState;
// }
