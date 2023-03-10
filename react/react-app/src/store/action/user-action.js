import { v4 as uuid } from "uuid";

export const ADDUSER = Symbol("add-user");
export const DELETEUSER = Symbol("delete-user");
export const UPDATEUSER = Symbol("update-user");
export const SETUSER = Symbol("set-user");
export const SETLOADING = Symbol("set-loading");

export const createAddUserAction = (user) => ({
  type: ADDUSER,
  payload: user,
});

export const createDeleteUserAction = (id) => ({
  type: DELETEUSER,
  payload: id,
});
export const createUpdateUserAction = (id, newUserData) => ({
  type: DELETEUSER,
  payload: {
    ...newUserData,
    id,
  },
});

export const createSetUserAction = (users) => ({
  type: SETUSER,
  payload: users,
});
export const createSetLoadingAction = (isLoading) => ({
  type: SETLOADING,
  payload: isLoading,
});

export const fetchUsers = () => {
  return async function (dispatch, a, c) {
    dispatch(createSetLoadingAction(true));
    await new Promise((resolve) => setTimeout(resolve, 500));
    const res = [
      { id: uuid(), loginId: "admin", loginPwd: "123123" },
      { id: uuid(), loginId: "admin2", loginPwd: "456456" },
    ];
    const action = createSetUserAction(res);
    dispatch(action);
    dispatch(createSetLoadingAction(false));
  };
};
