const { SET_LANG } = require("utils/type");

const initialState = {
  lang: "eg",
};

const misc = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case SET_LANG:
      localStorage.setItem("lang", action.langToken);
      return state;
    default:
      return state;
  }
};

export default misc;
