const queryType = require("./queries");
const { loginType, registerType, logoutType } = require("./mutations");
const mutations = {
  loginType,
  registerType,
  logoutType,
};

module.exports = {
  userMutations: mutations,
  userQueries: queryType,
};
