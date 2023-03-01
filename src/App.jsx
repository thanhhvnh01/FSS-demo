import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";

const App = () => {
  const content = useRoutes(routes);
  return <ChakraProvider>{content}</ChakraProvider>;
};

export default App;
