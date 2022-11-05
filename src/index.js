import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createTheme, NextUIProvider, Text } from "@nextui-org/react";

const myDarkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      background: "#1d1d1d",
      text: "#fff",
      // you can also create your own color
      myDarkColor: "#ff4ecd",
    },
    space: {},
    fonts: {},
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NextUIProvider theme={myDarkTheme}>
      <App />
    </NextUIProvider>
  </React.StrictMode>
);
