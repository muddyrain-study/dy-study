import { useState } from "react";
/**
 *
 * @param {*} reducer
 * @param {*} initialState
 * @returns
 */
export default function useReducer(reducer, initialState) {
  const [state, setState] = useState(initialState);
  function dispatch(action) {
    const nState = reducer(state, action);
    setState(nState);
  }
  return [state, dispatch];
}
