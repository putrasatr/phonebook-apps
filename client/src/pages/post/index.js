import { Box, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";

export default function Post() {
  const { count } = useSelector((state) => state.misc);

  let renderPost = useMemo(() => {
    let Test = [];
    for (let i = 0; i < 20; i++) {
      Test.push(<Item key={i} />);
    }
    return (
      <Box
        css={`
          column-count: ${count};
        `}
      >
        {Test}{" "}
      </Box>
    );
  }, [count]);
  useEffect(() => {
    document.scrollingElement.scrollTop = 0;
  }, [count]);

  return (
    <Stack w="100%" className="container-post">
      {renderPost}
    </Stack>
  );
}
const Item = () => {
  return (
    <Box
      color={"white"}
      w="90%"
      mb="10px"
      h={"100px"}
      bg="secondary.main"
      p="10px"
    >
      <Text>Post</Text>
    </Box>
  );
};
