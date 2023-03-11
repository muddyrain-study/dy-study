import * as usersAction from "../action/user-action";
import { v4 as uuid } from "uuid";

const initialState = {
  isLoading: false,
  datas: [],
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case usersAction.ADDUSER:
      return {
        ...state,
        datas: [...state.datas, payload],
      };
    case usersAction.DELETEUSER:
      return {
        ...state,
        datas: state.datas.filter((it) => it.id !== payload),
      };
    case usersAction.UPDATEUSER:
      return {
        ...state,
        datas: state.datas.map((it) =>
          it.id === payload.id ? { ...it, ...payload } : it
        ),
      };
    case usersAction.SETUSER:
      return {
        ...state,
        datas: payload,
      };
    case usersAction.SETLOADING:
      return {
        ...state,
        isLoading: payload,
      };
    default:
      return state;
  }
}
