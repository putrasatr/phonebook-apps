import { combineReducers } from "redux";
import user from "./user/reducer";
import misc from "./misc/reducer";

export default combineReducers({
  user,
  misc,
});
