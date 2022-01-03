const AuthCheckbyHeader = (req, res, next) => {
  if (req?.headers?.Authorization) {
    next();
  }
  //   res.status(401).json({
  //     error: "Unauthorization",
  //   });
  res.render("error.ejs", {
    errors: {
      general: "Unauthorized",
    },
  });
};

module.exports = {
  AuthCheckbyHeader,
};
