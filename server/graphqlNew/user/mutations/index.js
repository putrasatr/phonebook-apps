const { GraphQLNonNull, GraphQLString, GraphQLID } = require("graphql");
const userType = require("../type");
const services = require("../../../services");

const registerType = {
  type: userType,
  args: {
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    username: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
    phone: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve(_, params) {
    return {};
  },
};

const loginType = {
  type: userType,
  args: {
    email: {
      type: GraphQLString,
    },
    phone: {
      type: GraphQLString,
    },
    username: {
      type: GraphQLString,
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve(_, params) {
    return {};
  },
};

module.exports = { loginType, registerType };
