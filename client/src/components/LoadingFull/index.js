import { useState, useEffect } from "react";
import { Icon, Portal, Center } from "@chakra-ui/react";
import { CatFeets } from "global/icons";

export default function LoadingFull({ show }) {
  const [isRightFoot, setIsRightFoot] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsRightFoot((prev) => !prev), 1500);
    return () => clearTimeout();
  }, [isRightFoot]);
  if (show)
    return (
      <Portal>
        <Center
          top="0"
          bottom="0"
          left="0"
          zIndex="2000"
          right="0"
          position="fixed"
          display="flex"
          justifyContent="center"
          alignItems="center"
          bg="transparent.w.md"
        >
          <Icon
            as={CatFeets}
            fontSize="100px"
            color="white"
            className={isRightFoot ? "right-foot" : "left-foot"}
          />
        </Center>
      </Portal>
    );
  return <></>;
}
