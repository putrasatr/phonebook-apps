import { put, call } from "redux-saga/effects";
import { loginMutations } from "global/gql";
import client from "actions/connect";
import * as actions from "actions/phonebook";

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
      throw err;
    });
export function* loginUser(payload) {
  try {
    yield call(login, payload);
  } catch (error) {
    yield put(actions.addContactFailure(0));
  }
}
