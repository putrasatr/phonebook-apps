import React from "react";
import { Input, Button, Stack, Text, Box } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "actions/phonebook";
import LoadingFull from "components/LoadingFull";
import translate from "translations";
import { useForm } from "react-hook-form";

const Login = ({ lang }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();
  const onSubmit = ({ email, password }) => {
    setIsLoading(true);
    dispatch(loginUser(email, password));
    setTimeout(() => setIsLoading(false), 3000);
  };
  return (
    <>
      <LoadingFull show={isLoading} isInvalid={errors} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing="20px">
          <Text color="red">{user?.error}</Text>
          <Box>
            <Text my="10px" color="white">
              {translate[lang]["Auth.Login.form.email"].label}
            </Text>
            <Input
              {...register("email")}
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
              {...register("password")}
              autoComplete="false"
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
            <Text color="inherit">
              {translate[lang]["Auth.Login.createaccount"]}
            </Text>
          </Link>
        </Stack>
      </form>
    </>
  );
};

export default Login;
