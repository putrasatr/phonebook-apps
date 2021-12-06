import { put, call } from "redux-saga/effects";
import { login } from "network/lib/user";
import * as actions from "store/user/action";

export function* loginUser(payload) {
  try {
    const data = yield call(login, payload);
    yield put(actions.loginUserSuccess(data));
  } catch (error) {
    yield put(actions.loginUserFailed({ status: false }));
  }
}
