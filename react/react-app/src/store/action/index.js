import { reducer as counter } from "./counter";
import { combineReducers } from "../../redux";
export default combineReducers({
  counter,
});
