const { userMutations, userQueries } = require("./user");
const { GraphQLSchema, GraphQLObjectType } = require("graphql");
const queryType = {
  userQueries,
};
const mutations = {
  ...userMutations,
};

exports.appSchema = new GraphQLSchema({
  query: userQueries,
  mutation: new GraphQLObjectType({
    name: "Mutation",
    fields: mutations,
  }),
});
