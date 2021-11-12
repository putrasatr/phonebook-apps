const queryType = require("./queries");
const { loginType, registerType } = require("./mutations");
const mutations = {
  loginType,
  registerType,
};

module.exports = {
  userMutations: mutations,
  userQueries: queryType,
};
