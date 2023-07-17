// FUENTE
import "@fontsource/raleway/300.css";
import "@fontsource/raleway/400.css";
import "@fontsource/raleway/500.css";
import "@fontsource/raleway/700.css";

// ANIMATED
import "animate.css";

// UI
import { Navbar } from "./UI/Navbar";

// Router
import { Navigate, Route, Routes } from "react-router-dom";

// PAGES
import {
  InicioPage,
  AboutPage,
  HabilidadesPage,
  LinuxPage,
  ContactPage,
} from "./pages";

// MUI
import { Box, Button, Container } from "@mui/material";

// IMPORTACION DARK MODE
import IconButton from "@mui/material/IconButton";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useContext, useState } from "react";
import { DarkModeContext } from "./context/DarkContext";

export const App = () => {
  const theme = useTheme();
  const colorMode = useContext(DarkModeContext);
  
  
  return (
    <>
      <Navbar />
      <Container sx={{ mt: 3, minHeight: "100%" }}>
        {/* /BOX DARK MODE */}
        <Box
          sx={{
            display: "flex",
            position:{
              xs:'static',
              sm:'static',
              md:'fixed'

            },
            zIndex:100,
            alignItems:'center',
            justifyContent:'center',
            width: "auto",
            // outline:'1px solid blue',
            textTransform:'uppercase',
            bgcolor: "background.default",
            color: "text.primary",
            borderRadius: 1,
            p: 1,
            top:90,
            right:20
          }}
        >
          {theme.palette.mode} mode
          <IconButton
            sx={{ ml: 1 }}
            onClick={colorMode.toggleColorMode}
            color="inherit"
          >
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon 
              sx={{
                color:'white'
              }}
              />
            ) : (
              <Brightness4Icon
              sx={{
                color:'primary.main'
              }}
              />
            )}
          </IconButton>
        </Box>

        <Routes>
          <Route path="/" element={<InicioPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<HabilidadesPage />} />
          <Route path="/linux" element={<LinuxPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </Container>
    </>
  );
};
