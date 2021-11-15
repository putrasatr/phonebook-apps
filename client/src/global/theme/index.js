import { extendTheme } from "@chakra-ui/react";
import colors from "./base";
import Input from "./components/input";
import Button from "./components/button";
const appTheme = extendTheme({
  colors,
  components: {
    Input,
    Button,
  },
});

export default appTheme;
