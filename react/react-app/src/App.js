import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Counter from "./components/counter";
export default function App() {
  return (
    <Provider store={store}>
      <Counter
        onAsyncDecrease={() => {
          console.log("onAsyncDecrease");
        }}
        onDecrease={() => {
          console.log("onDecrease");
        }}
        onIncrease={() => {
          console.log("onIncrease");
        }}
        onAsyncIncrease={() => {
          console.log("onAsyncIncrease");
        }}
      />
    </Provider>
  );
}
