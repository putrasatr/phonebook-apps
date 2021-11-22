import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import AuthProvider from "contexts/AuthProvider";
import Router from "./routes";
import appTheme from "global/theme";
import "global/styles/style.css";

function App() {
  return (
    <ChakraProvider theme={appTheme}>
      <AuthProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
