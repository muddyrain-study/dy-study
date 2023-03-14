import { configureStore } from "@reduxjs/toolkit";
import todolistReducer from "./todolistSlice";
export default configureStore({
  reducer: {
    todolist: todolistReducer,
  },
});
