import React, { useRef, useContext } from "react";
import { Box, Text, Container, HStack, Button, Select } from "@chakra-ui/react";
import useScrollWindow from "hooks/useScrollWindow";
import { AuthContext } from "contexts/AuthProvider";
import { NavLink } from "react-router-dom";
import { languageNativeNames } from "translations";

const Navbar = ({ handleLang, lang }) => {
  const { isLogin } = useContext(AuthContext);
  const target = useRef(null);
  const pageYOffset = useScrollWindow();
  const isScroll = pageYOffset >= 67;
  return (
    <Box
      w="100%"
      position="sticky"
      top="0"
      zIndex="999"
      height="67px"
      bg={isScroll ? "transparent.b.bold" : "primary.main"}
      transition="all 0.3s ease-in-out;"
      boxShadow={isScroll ? "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;" : "none"}
      ref={target}
      color="white"
      padding="10px 20px;"
    >
      <Container maxW="container.lg" position="relative">
        <Text fontSize="3pc" position="absolute" top="-20px" left="-90px">
          CAT
        </Text>
        <HStack justifyContent="right">
          {isLogin ? (
            <>
              <NavLink to="/home">Home</NavLink>
              <NavLink to="/phone">Phone</NavLink>
              <NavLink to="/post">Post</NavLink>
              <NavLink to="/chat">Chat</NavLink>
            </>
          ) : (
            <>
              <NavLink to="/signin">Sign In</NavLink>
              <Button variant="primary" bg="tersier.main">
                Sign Up
              </Button>
            </>
          )}
          <Select onChange={handleLang} w="20%">
            {/* <option disabled>{languageNativeNames[lang]}</option> */}
            {Object.keys(languageNativeNames).map((item) => (
              <option key={item} value={item} selected={item === lang}>
                {languageNativeNames[item]}
              </option>
            ))}
          </Select>
        </HStack>
      </Container>
    </Box>
  );
};

export default Navbar;
