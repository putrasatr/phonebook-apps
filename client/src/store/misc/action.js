import { SET_LANG } from "utils/type";

export const setLangAction = (langToken) => ({
  type: SET_LANG,
  langToken,
});
