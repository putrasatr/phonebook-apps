import { LOGIN_USER_FAILED, LOGIN_USER_SUCCESS } from "utils/type";

export const loginUserSuccess = (data) => ({
  type: LOGIN_USER_SUCCESS,
  data,
});
export const loginUserFailed = (data) => ({
  type: LOGIN_USER_FAILED,
  data,
});
