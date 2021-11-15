import React from "react";
import { Box, Text, Stack, Image, Input } from "@chakra-ui/react";
import BannerImage from "global/img/backdrop.jpeg";
import { useDispatch } from "react-redux";
import { loginUser } from "actions/phonebook";

const Auth = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(username, password));
  };
  return (
    <Stack flex="1" p="10px">
      <Box w="80%" h="700px" marginLeft="auto" bg="red" mt="50px">
        <Image src={BannerImage} alt="" w="100%" />
      </Box>
      <Box position="absolute" top="200px" left="100px" w="300px">
        <Text fontSize="6pc" color="red">
          Explore yourself
        </Text>
      </Box>
      <form onSubmit={onSubmit}>
        <Input onChange={(e) => setUsername(e.target.value)} value={username} />
        <Input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
        />
        <button type="submit"></button>
      </form>
    </Stack>
  );
};
export default Auth;
