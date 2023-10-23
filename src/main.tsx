import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ChakraProvider, extendBaseTheme } from "@chakra-ui/react";

const client = new QueryClient();

const theme = extendBaseTheme({
  styles: {
    global: {
      body: {
        bg: "darkBackground",
        color: "white",
      },
    },
  },
  colors: {
    darkBackground: "#222",
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ChakraProvider >
        <App />
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
