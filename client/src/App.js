import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import AuthProvider from "contexts/AuthProvider";
import LanguageProvider from "contexts/LanguageProvider";
import Router from "./routes";
import appTheme from "global/theme";
import { setupWorker } from "msw";
import "global/styles/style.css";

if (process.env.NODE_ENV === "development") {
  const { handlers } = require("./handlers");
  const worker = setupWorker(...handlers);
  worker.start();
}

function App() {
  return (
    <ChakraProvider theme={appTheme}>
      <AuthProvider>
        <LanguageProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </LanguageProvider>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
