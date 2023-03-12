import actions from "../../action/counter";
import { handleAction, handleActions } from "redux-actions";
// export default function reducer(state = 10, { type, payload }) {
//   switch (type) {
//     case actionTypes.increase:
//       return state + 1;
//     case actionTypes.decrease:
//       return state - 1;
//     case actionTypes.add:
//       return state + payload;
//     default:
//       return state;
//   }
// }

const reducer = handleActions(
  {
    [actions.add]: (state, action) => {
      return state + action.payload;
    },
  },
  10
);
export default reducer;
