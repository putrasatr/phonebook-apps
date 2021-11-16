import React, { useRef } from "react";
import { Box, Text } from "@chakra-ui/react";
import styled from "styled-components";
import useScrollWindow from "hooks/useScrollWindow";

const Navbar = () => {
  const target = useRef(null);
  const pageYOffset = useScrollWindow();
  const isScroll = pageYOffset >= 65;
  return (
    <Container>
      <Box
        flex="1"
        bg={isScroll ? "transparent.b.bold" : "primary.main"}
        transition="all 0.3s ease-in-out;"
        boxShadow={
          isScroll ? "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;" : "none"
        }
        ref={target}
        padding="20px 20px;"
      >
        <Text>{pageYOffset}</Text>
      </Box>
    </Container>
  );
};
const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 999;
  height: 65px;
  color: red;
`;
export default Navbar;
