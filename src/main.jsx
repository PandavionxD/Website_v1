import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { DarkProvider } from "./context/DarkProvider.jsx";
import { ModoProvider } from "./context/ModoTheme.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DarkProvider>
    <ModoProvider>
      <Router>
        <CssBaseline />
        <App />
      </Router>
    </ModoProvider>
  </DarkProvider>
);
