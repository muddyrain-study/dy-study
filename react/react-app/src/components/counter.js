import React from "react";
export default function Counter(props) {
  return (
    <div>
      <h1>{props.number}</h1>
      <button onClick={props.onAsyncDecrease}>异步减</button>
      <button onClick={props.onDecrease}>减</button>
      <button onClick={props.onIncrease}>加</button>
      <button onClick={props.onAsyncIncrease}>异步加</button>
    </div>
  );
}
