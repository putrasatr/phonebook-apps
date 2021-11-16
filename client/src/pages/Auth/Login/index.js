import React from "react";
import { Input, Button, Stack, Text, Box } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "actions/phonebook";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
  };
  return (
    <form onSubmit={onSubmit}>
      <Stack spacing="20px">
        <Box>
          <Text my="10px" color="white">
            Your email address
          </Text>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            variant="secondary"
            placeholder="Please input your email Miaww!!"
          />
        </Box>
        <Box>
          <Text my="10px" color="white">
            Your password
          </Text>
          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            variant="secondary"
            placeholder="Please input your password Miaww!!"
          />
        </Box>
        <Button type="submit" variant="submit" size="lg" p="10px">
          <Text>Login for cat</Text>
        </Button>
        <Link to={"/signup"}>
          <Text>Create Account? Register here</Text>
        </Link>
      </Stack>
    </form>
  );
};

export default Login;
