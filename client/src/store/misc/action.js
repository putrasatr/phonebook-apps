import { SET_LANG, SET_POST_COULUMN_COUNT } from "utils/type";

export const setLangAction = (langToken) => ({
  type: SET_LANG,
  langToken,
});

export const setPostColumnCount = ({ count }) => ({
  type: SET_POST_COULUMN_COUNT,
  count,
});
