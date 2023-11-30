import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {BrowserRouter} from "react-router-dom";
import "./index.css";
import "./config/i18next.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
