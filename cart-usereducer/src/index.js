import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { MyAppProvider } from "./Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MyAppProvider>
      <App />
    </MyAppProvider>
  </React.StrictMode>
);
