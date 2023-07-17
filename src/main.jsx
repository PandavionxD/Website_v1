import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { DarkProvider } from "./context/DarkProvider.jsx";



ReactDOM.createRoot(document.getElementById("root")).render(
  <DarkProvider>
    <Router>
      <CssBaseline />
      <App />
    </Router>
  </DarkProvider>
);
