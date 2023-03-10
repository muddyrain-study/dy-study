import { applyMiddleware, createStore } from "../redux";
import reducer from "./reducer";
import logger from "redux-logger";
import thunk from "../redux-thunk";
//应用中间件，方式1：
const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
