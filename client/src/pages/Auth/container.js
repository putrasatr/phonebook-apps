import React from "react";
import { Box, Text, Stack, Image } from "@chakra-ui/react";
import BannerImage from "global/img/backdrop.jpeg";
import Login from "./Login";
import translate from "translations";

const Auth = ({ lang }) => {
  return (
    <Stack flex="1" p="10px">
      <Box
        w="100%"
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
        <Box bottom="100px" right="-20px" position="absolute" flex="1">
          <Box position="relative" h="300px" w="300px">
            <Box
              w="150px"
              h="150px"
              bottom="25px"
              right="-25px"
              bg="tersier.main"
              position="absolute"
              borderRadius="10px"
            />
            <Box
              w="130px"
              h="50px"
              bottom="0"
              left="100px"
              zIndex="10"
              bg="secondary.2"
              position="absolute"
              borderRadius="10px"
            />
          </Box>
        </Box>
      </Box>
      <Box
        position="absolute"
        top="250px"
        left="-100px"
        w="400px"
        bg="transparent.b.md"
        p="10px"
        borderRadius="30px"
      >
        <Text fontSize="3pc" color="tersier.main">
          {translate[lang]["Auth.Login.title"]}
        </Text>
        <Login lang={lang} />
      </Box>
      <Stack spacing="15px" color="white" w="80%" mb="20px">
        <Text fontSize="35px" fontWeight="bold">
          {translate[lang]["WhatIsCat"]}
        </Text>
        <Text fontSize="15px" fontWeight="600">
          {translate[lang]["Auth.containers.WhatIsCat"]}
        </Text>
        <Box w="100px" h="10px" bg="tersier.main" />
      </Stack>
      <Box
        bg="white"
        borderRadius="20px"
        w="100%"
        h="400px"
        boxShadow="rgb(38, 57, 77) 0px 10px 30px -10px"
      ></Box>
    </Stack>
  );
};
export default Auth;
