import React, { useReducer } from "react";
function reducer(state, action) {
  switch (action.type) {
    case "increase":
      return state + 1;
    case "decrease":
      return state - 1;
    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <span>
        <button
          onClick={() => {
            dispatch({ type: "decrease" });
          }}
        >
          -
        </button>
        <span>{state}</span>
        <button
          onClick={() => {
            dispatch({ type: "increase" });
          }}
        >
          +
        </button>
      </span>
    </div>
  );
};

export default App;
