import { put, call } from "redux-saga/effects";
import { loginMutations } from "global/gql";
import client from "actions/connect";
import * as actions from "store/user/action";

const login = async (params) =>
  await client
    .mutate({
      mutation: loginMutations,
      variables: {
        email: params.email,
        password: params.password,
      },
    })
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
      throw err;
    });
export function* loginUser(payload) {
  try {
    const data = yield call(login, payload);
    yield put(actions.loginUserSuccess(data));
  } catch (error) {
    yield put(actions.loginUserFailed({ status: false }));
  }
}
