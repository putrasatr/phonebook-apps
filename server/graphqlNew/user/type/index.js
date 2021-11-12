const {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLString,
    GraphQLBoolean,
  } = require("graphql");
  
  // contact Type
  const userType = new GraphQLObjectType({
    name: "user",
    fields: {
      id: {
        type:GraphQLID,
      },
      email: {
        type: GraphQLString,
      },
      password: {
        type: GraphQLString,
      },
      username: {
        type: GraphQLString,
      },
      profile_pic: {
        type: GraphQLString,
      },
      token: {
        type: GraphQLString,
      },
      phone_number: {
        type: GraphQLString,
      },
      is_online: {
        type: GraphQLBoolean,
      },
      created_date: {
        type: GraphQLString,
      },
      update_date: {
        type: GraphQLString,
      },
    },
  });
  
  module.exports = userType;
  