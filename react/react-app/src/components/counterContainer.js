import React from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
import store from "../store";
import Counter from "./counter";
import { actions as counter } from "../store/action/counter";

console.log(counter);
export default function App() {
  const dispatch = useDispatch();
  const number = useSelector((state) => {
    return state.counter;
  });
  return (
    <Counter
      number={number}
      onAsyncDecrease={() => {
        console.log("onAsyncDecrease");
      }}
      onDecrease={() => {
        console.log("onDecrease");
      }}
      onIncrease={() => {
        dispatch(counter.increase());
      }}
      onAsyncIncrease={() => {
        console.log("onAsyncIncrease");
      }}
    />
  );
}
