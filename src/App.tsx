import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import theme from "./theme/theme";
import { Router } from "./route/Router";
import { UseGetAdmin } from "./hooks/UseGetAdmin";
import { useEffect } from "react";

function App() {
  const { getUserInfo } = UseGetAdmin();

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <Router />
      </ChakraProvider>
    </div>
  );
}

export default App;
