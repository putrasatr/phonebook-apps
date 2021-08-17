const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const queryType = require('./queries/');
const mutations = require('./mutations');

exports.phonebookSchema = new GraphQLSchema({
    query: queryType,
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: mutations
    })
})