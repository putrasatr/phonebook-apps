import React from "react";
import { Stack, Text } from "@chakra-ui/react";
import AsyncForm from "./Async";
import Reguler from "./reguler";

export default function App() {
  return (
    <>
      <Card>
        <Reguler />
      </Card>
      <Card>
        <AsyncForm />
      </Card>
    </>
  );
}

const Card = ({ children }) => (
  <Stack p={"20px"} borderRadius={"20px"} bg="tersier.main" mt="20px">
    {children}
  </Stack>
);

export const Header = ({
  dirtyFields,
  errors,
  isDirty,
  isSubmitSuccessful,
  isSubmitted,
  isSubmitting,
  isValid,
  isValidating,
  submitCount,
  touchedFields,
  title,
}) => (
  <>
    <Text fontSize={"24px"} color={"black"} textTransform={"uppercase"}>
      {title}
    </Text>
    <Stack direction={"row"} color={"white"} fontWeight={"bold"}>
      <Text>
        Is Dirty : <span style={{ color: "black" }}>{`${isDirty}`} </span>|
      </Text>
      <Text>
        isSubmitSuccessful :
        <span style={{ color: "black" }}>{`${isSubmitSuccessful}`} </span>|
      </Text>
      <Text>
        isSubmitted :<span style={{ color: "black" }}>{`${isSubmitted}`} </span>
        |
      </Text>
      <Text>
        isSubmitting :
        <span style={{ color: "black" }}>{`${isSubmitting}`} </span>|
      </Text>
      <Text>
        isValid :<span style={{ color: "black" }}>{`${isValid}`} </span>|
      </Text>
      <Text>
        isValidating :
        <span style={{ color: "black" }}>{`${isValidating}`} </span>|
      </Text>
    </Stack>
    <Stack direction={"row"} color={"white"} fontWeight={"bold"}>
      <Text>
        submitCount :<span style={{ color: "black" }}>{`${submitCount}`} </span>
        |
      </Text>
      <Text>
        errors :
        <span style={{ color: "black" }}>{`${JSON.stringify(errors)}`} </span>|
      </Text>
      <Text>
        touchedFields :
        <span style={{ color: "black" }}>
          {`${JSON.stringify(touchedFields)}`}{" "}
        </span>
        |
      </Text>
    </Stack>
    <Stack direction={"row"} color={"white"} fontWeight={"bold"}>
      <Text>
        dirtyFields :
        <span style={{ color: "black" }}>
          {`${JSON.stringify(dirtyFields)}`}
        </span>
        |
      </Text>
    </Stack>
  </>
);
