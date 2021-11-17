import gql from "graphql-tag";

export const gqlGetUser = gql(`
query getUser($id: String!) {
    users(id: $id) {
      id
      username
      email
      profile_pic
      phone_number
      is_online
      created_date
      token
    }
  }`);

export const loginMutations = gql(`
  mutation loginType($email: String!, $password: String!) {
    loginType(email: $email, password: $password) {
      id
      email
      password
      error
      status
      token
    }
  }`);

export const gqlRegisterUser = gql(`
  mutation registerType($username: String!, $email: String!, $password: String!, $phone_number: String!) {
    registerType(username: $username, email: $email, password: $password, phone_number: $phone_number) {
      id
      email
      password
      username
      profile_pic
      is_online
      phone_number
      token
      created_date
      update_date
      error
      status
    }
  }
  `);

export const gqlLogoutType = gql(`
  mutation logoutType($id: String!) {
    logoutType(id: $id, ) {
      id
      email
      password
      error
      status
      token
      created_date
      update_date
    }
  }`);
