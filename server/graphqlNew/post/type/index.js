const { GraphQLObjectType, GraphQLID } = require("graphql");

// contact Type
const postType = new GraphQLObjectType({
  name: "post",
  fields: {
    id: {
      type: GraphQLID,
    },
  },
});

module.exports = postType;
