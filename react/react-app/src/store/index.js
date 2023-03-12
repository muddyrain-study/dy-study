import { applyMiddleware, createStore } from "../redux";
import reducer from "./action";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";
import { composeWithDevTools } from "@redux-devtools/extension";
const saga = createSagaMiddleware();

//应用中间件，方式1：
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(saga, logger))
);

saga.run(rootSaga);

export default store;
