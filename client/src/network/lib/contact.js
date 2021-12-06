import { gqlGetPhonebook } from "global/gql";
import client from "actions/connect";
export const read = async ({ offset, limit, searchName, searchPhone }) =>
  await client
    .query({
      query: gqlGetPhonebook,
      variables: {
        offset,
        limit,
        searchName,
        searchPhone,
      },
    })
    .then((response) => response.data.phonebooks)
    .catch((err) => {
      throw err;
    });
