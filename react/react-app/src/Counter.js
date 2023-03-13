import React, { useRef } from "react";
import { connect } from "dva";
export const Counter = (props) => {
  const input = useRef();
  return (
    <div>
      <h1>{props.number}</h1>
      <button onClick={props.onAsyncDecrease}>异步-</button>
      <button onClick={props.onDecrease}>-</button>
      <button onClick={props.onIncrease}>+</button>
      <button onClick={props.onAsyncIncrease}>异步+</button>
      <div>
        <input type="text" ref={input} />
        <button
          onClick={() => {
            const n = parseInt(input.current.value);
            props.onAdd(n);
          }}
        >
          获取
        </button>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  number: state.counter,
});
const mapDispatchToProps = (dispatch) => ({
  onIncrease: () => {
    dispatch({
      type: "counter/increase",
    });
  },
  onDecrease: () => {
    dispatch({
      type: "counter/decrease",
    });
  },
  onAdd: (num) => {
    dispatch({
      type: "counter/add",
      payload: num,
    });
  },
  onAsyncDecrease: (num) => {
    dispatch({
      type: "counter/asyncDecrease",
      payload: num,
    });
  },
  onAsyncIncrease: (num) => {
    dispatch({
      type: "counter/asyncIncrease",
      payload: num,
    });
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
