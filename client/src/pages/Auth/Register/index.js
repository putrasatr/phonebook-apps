import React from "react";
import { Input, Button, Stack, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { loginUser } from "actions/phonebook";

const Register = () => {
  const [email, setEmail] = React.useState("");
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(email));
  };
  return (
    <form onSubmit={onSubmit}>
      <Stack direction="row" spacing="20px">
        <Input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          variant="secondary"
        />
        <Button type="submit" variant="submit" size="lg" p="10px">
          <Text>Register for cat</Text>
        </Button>
      </Stack>
    </form>
  );
};

export default Register;
