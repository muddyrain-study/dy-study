import { applyMiddleware, createStore } from "../redux";
import reducer from "./reducer";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";
const saga = createSagaMiddleware();

//应用中间件，方式1：
const store = createStore(reducer, applyMiddleware(saga, logger));

saga.run(rootSaga);

export default store;
