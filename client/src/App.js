import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Router from "./routes";
import "./App.css";
import appTheme from "global/theme";

function App() {
  return (
    <ChakraProvider theme={appTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
