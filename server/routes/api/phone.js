var express = require("express");
const { AuthCheckbyHeader } = require("../../helpers");
var router = express.Router();

router.get("/phone", AuthCheckbyHeader, (req, res, next) => {
  res.render("index.ejs", {
    title: "Phone",
  });
});

module.exports = router;
