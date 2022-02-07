import { Box, Stack, Text } from "@chakra-ui/react";
import { getPost } from "network/lib/post";
import React, { useEffect, useMemo, useState } from "react";
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
  const [data, setData] = useState([]);
  const fetcher = getPost().then((res) => setData(res.data));
  console.log(data);
  useEffect(() => {
    fetcher();
  }, [fetcher]);
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
