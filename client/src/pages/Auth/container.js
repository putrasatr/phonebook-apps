import React from "react";
import { Box, Text, Stack, Image } from "@chakra-ui/react";
import BannerImage from "global/img/backdrop.jpeg";
import Login from "./Login";
import Register from "./Register";

const Auth = () => {
  return (
    <Stack flex="1" p="10px">
      <Box w="80%" h="700px" marginLeft="auto" mr="30px" mt="50px">
        <Image
          src={BannerImage}
          alt=""
          w="100%"
          borderRadius="20px"
          boxShadow="rgb(38, 57, 77) 0px 20px 30px -10px"
        />
      </Box>
      <Box position="absolute" top="100px" left="100px" w="500px">
        <Text fontSize="6pc" color="red">
          Explore yourself
        </Text>
        <Register />
      </Box>
    </Stack>
  );
};
export default Auth;
