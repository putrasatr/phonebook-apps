import { Stack, Text, Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setPostColumnCount } from "store/misc/action";
import translate from "translations";

export default function Sidebar({ lang }) {
  const dispatch = useDispatch();
  const [viewDefault, setViewDefault] = useState(
    translate[lang]["Layout.sidebar"].list[0]
  );
  useEffect(() => {
    dispatch(setPostColumnCount({ count: viewDefault.count }));
  }, [viewDefault, dispatch]);
  return (
    <Stack
      position={"sticky"}
      top={"100px"}
      w="180px"
      h={"10vh"}
      left={0}
      borderRight={"1px solid black"}
    >
      <Text fontSize={"23px"} fontWeight={"bold"} color={"tersier.main"}>
        {translate[lang]["Layout.sidebar"]["section-1"]}
      </Text>
      <Stack>
        {translate[lang]["Layout.sidebar"].list?.map((item) => (
          <Box key={item.title}>
            <Text
              cursor={"pointer"}
              onClick={() => setViewDefault(item)}
              color={
                viewDefault.title === item.title ? "tersier.main" : "black"
              }
            >
              {item.title}
            </Text>
          </Box>
        ))}
      </Stack>
    </Stack>
  );
}
