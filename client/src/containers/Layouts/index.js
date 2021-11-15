import React from "react";
import { Stack } from "@chakra-ui/react";
import Navbar from "containers/Navbar";

const Layout = ({ children }) => {
  return (
    <Stack bg="primary.main">
      <Navbar />
      {children}
    </Stack>
  );
};

export default Layout;
