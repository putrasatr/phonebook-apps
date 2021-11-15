import React from "react";
import { Box, Text, Stack, Image } from "@chakra-ui/react";
import BannerImage from "global/img/backdrop.jpeg";
import Register from "./Register";

const Auth = () => {
  return (
    <Stack flex="1" p="10px">
      <Box
        w="80%"
        h="700px"
        marginLeft="auto"
        mr="30px"
        mt="50px"
        position="relative"
      >
        <Image
          src={BannerImage}
          alt=""
          w="100%"
          borderRadius="20px"
          boxShadow="rgb(38, 57, 77) 0px 20px 30px -10px"
        />
        <Box
          w="100px"
          h="100px"
          bg="primary.main"
          position="absolute"
          bottom="12px"
          right="-12px"
          border="2px solid green"
          borderRadius="10px"
        ></Box>
      </Box>
      <Box position="absolute" top="120px" left="120px" w="500px">
        <Text fontSize="6pc" color="red">
          Explore yourself
        </Text>
        <Register />
      </Box>
    </Stack>
  );
};
export default Auth;
