import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "./index.css";
import { theme } from "./theme/theme.js";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <Router>
      <CssBaseline />
      <App />
    </Router>
  </ThemeProvider>
);
