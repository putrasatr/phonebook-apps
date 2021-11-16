import { extendTheme } from "@chakra-ui/react";
import colors from "./base";
import Input from "./components/input";
import Button from "./components/button";

const appTheme = extendTheme({
  styles: {
    global: {
      "html, body": {
        backgroundColor: "primary.main",
      },
    },
  },
  colors,
  components: {
    Input,
    Button,
  },
});

export default appTheme;
