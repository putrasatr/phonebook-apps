const { GraphQLNonNull, GraphQLString, GraphQLID } = require("graphql");
const userType = require("../type");
const services = require("../../../services/user");

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
    phone_number: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve(_, params) {
    return services.createUser(params);
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
    return services.loginUser(params);
  },
};

const logoutType = {
  type: userType,
  args: {
    id: {
      type: GraphQLString,
    },
  },
  resolve(_, { id }) {
    return services.logoutUser(id);
  },
};

module.exports = { loginType, registerType, logoutType };
