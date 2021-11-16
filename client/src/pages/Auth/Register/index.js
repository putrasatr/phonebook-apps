import React from "react";
import { Input, Button, Stack, Text, Box } from "@chakra-ui/react";
// import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginUser } from "actions/phonebook";

const Register = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
  };
  console.log("render");
  return (
    <form onSubmit={onSubmit}>
      <Stack spacing="20px">
        <Box>
          <Text my="10px" color="white">
            Your username
          </Text>
          <Input
            onChange={React.useCallback((e) => setEmail(e.target.value), [])}
            value={email}
            variant="secondary"
            placeholder="Please input your email Miaww!!"
          />
        </Box>
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
        <Box>
          <Text my="10px" color="white">
            Your confirm password
          </Text>
          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            variant="secondary"
            placeholder="Please input your password Miaww!!"
          />
        </Box>
        <Box>
          <Text my="10px" color="white">
            Your Phone Number
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
          <Text>Register for cat</Text>
        </Button>
      </Stack>
    </form>
  );
};

export default React.memo(Register);
