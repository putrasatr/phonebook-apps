import { all, takeEvery, put, call } from 'redux-saga/effects';
import client from '../actions/connect';
import * as actions from '../actions/phonebook';
import gql from 'graphql-tag';

const read = async (params) => {
    const phonebooksQuery = gql`
        query($offset: Int!, $limit: Int!, $searchName: String!, $searchPhone: String!) {
            phonebooks(pagination: {offset: $offset, limit: $limit, searchName: $searchName, searchPhone: $searchPhone}) {
                items {
                  id
                  name
                  phone
                }
                count
            }
        }`;
    return await client.query({
        query: phonebooksQuery,
        variables: {
            offset: params.offset,
            limit: params.limit,
            searchName: params.searchName,
            searchPhone: params.searchPhone
        }
    })
        .then(response => response.data.phonebooks)
        .catch(err => {
            throw err
        });
}

const add = async (params) => {
    const addQuery = gql`
        mutation addContact($_id: ID!, $id: ID!, $name: String!, $phone: String!) {
            addContact(_id: $_id, id: $id, name: $name, phone: $phone) {
                _id
                id
                name
                phone
            }
        }`;
    return await client.mutate({
        mutation: addQuery,
        variables: {
            _id: params.id,
            id: params.id,
            name: params.name,
            phone: params.phone
        }
    })
        .then(response => response.data)
        .catch(err => {
            throw err
        });
}

const edit = async (params) => {
    const updateQuery = gql`
        mutation updateContact($_id: ID!, $name: String!, $phone: String!) {
            updateContact(_id: $_id, name: $name, phone: $phone) {
                _id
                name
                phone
            }
        }`;
    return await client.mutate({
        mutation: updateQuery,
        variables: {
            _id: params.id,
            name: params.name,
            phone: params.phone
        }
    })
        .then(response => response.data)
        .catch(err => {
            throw err
        });
}

const remove = async (params) => {
    const deleteQuery = gql`
        mutation removeContact($_id: ID!) {
            removeContact(_id: $_id) {
                _id
            }
        }`;
    return await client.mutate({
        mutation: deleteQuery,
        variables: {
            _id: params.id
        }
    })
        .then(response => response.data)
        .catch(err => {
            throw err
        });
}

function* loadContact(payload) {
    const { curpage, limit, searchName, searchPhone } = payload;
    const offset = curpage ? ((curpage - 1) * limit + 1) : 1;
    try {
        const data = yield call(read, { offset, limit, searchName, searchPhone });
        yield put(actions.loadContactSuccess(data));
    } catch (error) {
        console.log(error);
        yield put(actions.loadContactFailure());
    }
}

function* postContact(payload) {
    const { name, phone } = payload;
    const id = Date.now();
    try {
        const data = yield call(add, { id, name, phone })
        yield put(actions.addContactView(id, name, phone));
        yield put(actions.addContactSuccess(data))
    } catch (error) {
        yield put(actions.addContactView(id, name, phone));
        yield put(actions.addContactFailure(id))
    }
}

function* updateContact(payload) {
    const { id, name, phone } = payload;
    yield put(actions.updateContactView(id, name, phone));
    try {
        const data = yield call(edit, { id, name, phone })
        yield put(actions.updateContactSuccess(data))
    } catch (error) {
        yield put(actions.updateContactFailure(id))
    }
}

function* deleteContact(payload) {
    const { id } = payload;
    yield put(actions.deleteContactView(id));
    try {
        yield call(remove, { id })
        yield put(actions.deleteContactSuccess())
    } catch (error) {
        yield put(actions.deleteContactFailure())
    }
}

function* resendContact(payload) {
    const { id, name, phone } = payload;
    try {
        const data = yield call(add, { id, name, phone })
        yield put(actions.addContactSuccess(data))
    } catch (error) {
        yield put(actions.addContactFailure(id))
    }
}


export default function* rootSaga() {
    yield all([
        takeEvery('LOAD_CONTACT', loadContact),
        takeEvery('POST_CONTACT', postContact),
        takeEvery('EDIT_CONTACT', updateContact),
        takeEvery('REMOVE_CONTACT', deleteContact),
        takeEvery('RESEND_CONTACT', resendContact),
    ])
}
