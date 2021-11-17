import React from "react";
import { Stack, Container, Center } from "@chakra-ui/react";
import Navbar from "containers/Navbar";

const Layout = ({ children }) => {
  return (
    <Stack bg="primary.main" w="100%">
      <Navbar />
      <Center flex="1" overflow="hidden">
        <Container maxW="container.lg" position="relative">
          {children}
        </Container>
      </Center>
    </Stack>
  );
};

export default Layout;
