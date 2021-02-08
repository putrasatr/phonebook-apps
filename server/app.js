var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')
const { graphqlHTTP } = require("express-graphql")
const firebase = require('firebase')

const config = {
    apiKey: "AIzaSyAiA0sxZC8NFY7GlsEcNcU9oOXBE0AfGJo",
    authDomain: "phonebook-1e7df.firebasespp.com",
    databaseURL: "https://phonebook-1e7df-default-rtdb.firebaseio.com",
    projectId: "phonebook-1e7df",
    storageBucket: "phonebook-1e7df.appspot.com",
    messagingSenderId: "362508178172"
}
firebase.initializeApp(config)

var indexRouter = require('./routes/index');
var ApiRouter = require('./routes/api');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', ApiRouter);

const userSchema = require('./graphql').userSchema;
app.use('./graphql', cors(), graphqlHTTP({
    schema: userSchema,
    rootValue: global,
    graphiql: true
}))

module.exports = app;
