const initialState = {
  id: null,
  status: false,
  message: "",
};
const user = (state = initialState, actions) => {
  const { type, data } = actions;
  switch (type) {
    //Login
    case "LOGIN_USER_SUCCESS":
      if (data.status) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("isLogin", true);
        window.location.href = "/home";
      }
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
