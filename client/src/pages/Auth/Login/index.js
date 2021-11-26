import React from "react";
import { Input, Button, Stack, Text, Box } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "actions/phonebook";
import LoadingFull from "components/LoadingFull";
import translate from "translations";

const Login = ({ lang }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    dispatch(loginUser(email, password));
    setTimeout(() => setIsLoading(false), 3000);
  };
  return (
    <>
      <LoadingFull show={isLoading} />
      <form onSubmit={onSubmit}>
        <Stack spacing="20px">
          <Box>
            <Text my="10px" color="white">
              {translate[lang]["Auth.Login.form.email"].label}
            </Text>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              variant="secondary"
              placeholder={translate[lang]["Auth.Login.form.email"].placeholder}
            />
          </Box>
          <Box>
            <Text my="10px" color="white">
              {translate[lang]["Auth.Login.form.password"].label}
            </Text>
            <Input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              variant="secondary"
              placeholder={
                translate[lang]["Auth.Login.form.password"].placeholder
              }
            />
          </Box>
          <Button type="submit" variant="submit" size="lg" p="10px">
            <Text>{translate[lang]["Auth.Login.button"]}</Text>
          </Button>
          <Link to={"/signup"}>
            <Text color="inherit">{translate[lang]["Auth.Login.createaccount"]}</Text>
          </Link>
        </Stack>
      </form>
    </>
  );
};

export default Login;
