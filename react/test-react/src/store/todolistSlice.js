import { createSlice } from "@reduxjs/toolkit";
export const todolistSlice = createSlice({
  name: "todolist",
  initialState: {
    list: [
      {
        content: "学习 React",
        status: false,
      },
      {
        content: "复习 Vue",
        status: false,
      },
      {
        content: "玩游戏",
        status: false,
      },
      {
        content: "听歌",
        status: false,
      },
    ],
  },
  reducers: {
    add: (state, { payload }) => {
      state.list.push({
        content: payload,
        status: false,
      });
    },
    del: (state, { payload }) => {
      state.list.splice(payload, 1);
    },
    change: (state, { payload }) => {
      state.list[payload].status = !state.list[payload].status;
    },
  },
});

export const { add, del, change } = todolistSlice.actions;

export default todolistSlice.reducer;
