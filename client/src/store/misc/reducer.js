const { SET_LANG, SET_POST_COULUMN_COUNT } = require("utils/type");

const initialState = {
  lang: "eg",
  count: 4,
};

const misc = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case SET_LANG:
      localStorage.setItem("lang", action.langToken);
      return state;
    case SET_POST_COULUMN_COUNT:
      return {
        ...state,
        count: action.count,
      };
    default:
      return state;
  }
};

export default misc;
