// FUENTE
import "@fontsource/raleway/300.css";
import "@fontsource/raleway/400.css";
import "@fontsource/raleway/500.css";
import "@fontsource/raleway/700.css";

// UI
import { Navbar } from "./UI/Navbar";

// Router
import { Navigate, Route, Routes } from "react-router-dom";

// PAGES
import { InicioPage,AboutPage,HabilidadesPage,LinuxPage,ContactPage} from "./pages";

// MUI
import { Container } from "@mui/material";

export const App = () => {
  return (
    <>
      <Navbar />
      <Container>
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
