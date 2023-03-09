import { SET_LOGIN_USER_TYPE } from "../action/login-user-action";

const initialState = null;

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_LOGIN_USER_TYPE:
      return payload;
    default:
      return state;
  }
}
