const services = require("../../../services");
const userType = require("../type");
const { GraphQLID, GraphQLObjectType } = require("graphql");

const defaultValue = { id: 0 };

const UserQueryType = {
  users: {
    type: userType,
    args: {
      params: {
        type: GraphQLID,
        defaultValue,
      },
    },
    resolve: (_, args) => {
      const { id } = args.params;
      return {
        id: 12,
        username: "Admin",
        email: "test@gmail.com",
        profile_pic: "image",
        phone_number: "012389124",
        is_online: false,
        created_date: "2021-12-23",
      };
    },
  },
};
const QueryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    ...UserQueryType,
  },
});

module.exports = QueryType;
