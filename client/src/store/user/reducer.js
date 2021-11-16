const initialState = {
  id: null,
  status: false,
};
const user = (state = initialState, actions) => {
  const { type, data } = actions;
  switch (type) {
    //Login
    case "LOGIN_USER_SUCCESS":
      return {
        ...state,
        ...data.loginType,
      };
    case "LOGIN_USER_FAILED":
      return {
        ...state,
        ...data.loginType,
      };

    //Register
    case "REGISTER_USER_SUCCESS":
      return {
        ...state,
        ...data.loginType,
      };
    case "REGISTER_USER_FAILED":
      return {
        ...state,
        ...data.loginType,
      };
    default:
      return state;
  }
};

export default user;
