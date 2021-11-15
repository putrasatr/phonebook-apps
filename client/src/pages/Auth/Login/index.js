import React from "react";
import { Input } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { loginUser } from "actions/phonebook";

const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(username, password));
  };
  return (
    <form onSubmit={onSubmit}>
      <Input onChange={(e) => setUsername(e.target.value)} value={username} />
      <Input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
      />
      <button type="submit"></button>
    </form>
  );
};

export default Login;
