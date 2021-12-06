import { all, takeEvery, put, call } from "redux-saga/effects";
import client from "../actions/connect";
import * as actions from "../actions/phonebook";
import gql from "graphql-tag";
import { loginUser } from "./user";
import { read } from "network/lib/contact";
const addQuery = "";
const add = async (params) => {
  return await client
    .mutate({
      mutation: addQuery,
      variables: {
        _id: params._id,
        name: params.name,
        phone: params.phone,
      },
    })
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });
};

const edit = async (params) => {
  const updateQuery = gql`
    mutation updateContact($_id: ID!, $name: String!, $phone: String!) {
      updateContact(_id: $_id, name: $name, phone: $phone) {
        _id
        name
        phone
      }
    }
  `;
  return await client
    .mutate({
      mutation: updateQuery,
      variables: {
        _id: params.id,
        name: params.name,
        phone: params.phone,
      },
    })
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });
};

const remove = async (params) => {
  const deleteQuery = gql`
    mutation removeContact($_id: ID!) {
      removeContact(_id: $_id) {
        _id
      }
    }
  `;
  return await client
    .mutate({
      mutation: deleteQuery,
      variables: {
        _id: params.id,
      },
    })
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });
};
function* loadContact(payload) {
  const { curpage, limit, searchName, searchPhone } = payload;
  const offset = curpage ? (curpage - 1) * limit + 1 : 1;
  try {
    const data = yield call(read, {
      offset,
      limit,
      searchName,
      searchPhone,
    });
    yield put(actions.loadContactSuccess(data));
  } catch (error) {
    console.log(error);
    yield put(actions.loadContactFailure());
  }
}

function* postContact(payload) {
  const { name, phone } = payload;
  const _id = Date.now();
  try {
    const data = yield call(add, { _id, name, phone });
    yield put(actions.addContactView(_id, name, phone));
    yield put(actions.addContactSuccess(data));
  } catch (error) {
    yield put(actions.addContactView(_id, name, phone));
    yield put(actions.addContactFailure(_id));
  }
}

function* updateContact(payload) {
  const { id, name, phone } = payload;
  yield put(actions.updateContactView(id, name, phone));
  try {
    const data = yield call(edit, { id, name, phone });
    yield put(actions.updateContactSuccess(data));
  } catch (error) {
    yield put(actions.updateContactFailure(id));
  }
}

function* deleteContact(payload) {
  const { id } = payload;
  yield put(actions.deleteContactView(id));
  try {
    yield call(remove, { id });
    yield put(actions.deleteContactSuccess());
  } catch (error) {
    yield put(actions.deleteContactFailure());
  }
}

function* resendContact(payload) {
  const { id, name, phone } = payload;
  try {
    const data = yield call(add, { id, name, phone });
    yield put(actions.addContactSuccess(data));
  } catch (error) {
    yield put(actions.addContactFailure(id));
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery("LOAD_CONTACT", loadContact),
    takeEvery("POST_CONTACT", postContact),
    takeEvery("EDIT_CONTACT", updateContact),
    takeEvery("REMOVE_CONTACT", deleteContact),
    takeEvery("RESEND_CONTACT", resendContact),
    takeEvery("LOGIN_USER", loginUser),
  ]);
}
