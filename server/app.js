const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const firebase = require("firebase");
const dbConfig = require("./dbConfig");

firebase.initializeApp(dbConfig);

const indexRouter = require("./routes/index");
const { phonebookSchema } = require("./graphql");
const { appSchema } = require("./graphqlNew");
const apiRouter = require("./routes/api");

const app = express();

app.set('views', path.join(__dirname, 'views/pages'));
app.set('view engine', 'ejs');

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/", indexRouter);
app.use("/api", apiRouter);

app.use(
  "/graphql",
  cors(),
  graphqlHTTP({
    schema: appSchema,
    rootValue: global,
    graphiql: true,
  })
);

module.exports = app;
