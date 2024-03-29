import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import extendedTheme from "src/theme";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={extendedTheme}>
    <App />
  </ChakraProvider>
);
