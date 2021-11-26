import { extendTheme } from "@chakra-ui/react";
import colors from "./base";
import Input from "./components/input";
import Button from "./components/button";

const appTheme = extendTheme({
  styles: {
    global: {
      "::selection": {
        backgroundColor: "tersier.main",
        color: "white",
      },
      "html, body": {
        backgroundColor: "primary.main",
      },
      a: {
        transition: "all 0.3s ease-in-out",
        color:
          "linear-gradient(90deg, rgba(224,93,25,1) 0%, rgba(251,115,28,1) 35%, rgba(255,172,59,1) 100%) !important",

        ":hover": {
          color:
            "linear-gradient(90deg, rgba(224,93,25,1) 0%, rgba(251,115,28,1) 35%, rgba(255,172,59,1) 100%) !important",
          transition: "all 0.3s ease-in-out",
          textDecoration: "none",
        },
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
