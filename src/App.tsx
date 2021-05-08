import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import { Router } from "./route/Router";

function App() {
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <Router />
      </ChakraProvider>
    </div>
  );
}

export default App;
