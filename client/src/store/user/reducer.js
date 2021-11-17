const initialState = {
  id: null,
  status: false,
};
const user = (state = initialState, actions) => {
  const { type, data } = actions;
  switch (type) {
    //Login
    case "LOGIN_USER_SUCCESS":
      localStorage.setItem("token", data.token);
      return {
        ...state,
        ...data,
      };
    case "LOGIN_USER_FAILED":
      return {
        ...state,
        ...data,
      };

    //Register
    case "REGISTER_USER_SUCCESS":
      return {
        ...state,
        ...data,
      };
    case "REGISTER_USER_FAILED":
      return {
        ...state,
        ...data,
      };
    default:
      return state;
  }
};

export default user;
