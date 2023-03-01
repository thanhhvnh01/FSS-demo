import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { IntlProviderWrapper } from "./utils/Internationalization";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <IntlProviderWrapper>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </IntlProviderWrapper>
  </React.StrictMode>
);
