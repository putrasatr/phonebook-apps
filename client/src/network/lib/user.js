import { loginMutations } from "global/gql";
import client from "actions/connect";

export const login = async (params) =>
  await client
    .mutate({
      mutation: loginMutations,
      variables: {
        email: params.email,
        password: params.password,
      },
    })
    .then((res) => res.data.loginType)
    .catch((err) => {
      console.log(err);
      throw err;
    });
