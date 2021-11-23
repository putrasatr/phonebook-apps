import React, { useCallback } from "react";
import { Stack, Container, Center, Text } from "@chakra-ui/react";
import Navbar from "containers/Navbar";
import translate from "translations";
import { langTokens } from "utils/tokens";

const Layout = ({ children, lang, setLang }) => {
  const handleLang = useCallback(
    (e) => {
      const value = e.target.value;
      if (value in translate) {
        setLang(value);
        localStorage.setItem("lang", langTokens[lang]);
      }
    },
    [setLang, lang]
  );
  return (
    <Stack bg="primary.main" w="100%" spacing="0">
      <Navbar handleLang={handleLang} lang={lang} />
      <Center flex="1" overflow="hidden" mt="0">
        <Container maxW="container.lg" position="relative" mt="0">
          {children}
        </Container>
      </Center>
      <Stack w="100%" bg="black" h="200px"></Stack>
      <Stack w="100%" bg="tersier.main" h="40px">
        <Center flex="1">
          <Text>{translate[lang]["Layout.footer.cookies"]}</Text>
        </Center>
      </Stack>
    </Stack>
  );
};

export default Layout;
