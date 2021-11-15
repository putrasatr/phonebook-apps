const services = require("../../../services/user");
const userType = require("../type");
const { GraphQLObjectType, GraphQLString, GraphQLList } = require("graphql");

const UserQueryType = {
  users: {
    type: new GraphQLList(userType),
    args: {
      id: {
        type: GraphQLString,
      },
    },
    resolve: (_, args) => {
      const { id } = args;
      return services.getUser(id);
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
