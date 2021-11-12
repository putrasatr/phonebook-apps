const { GraphQLNonNull, GraphQLString, GraphQLID } = require("graphql");
const postType = require("../type");

exports.postMutationType = {
  type: postType,
  args: {
    content: GraphQLString,
  },
  resolve(_, params) {
    return {
      id: params,
    };
  },
};

