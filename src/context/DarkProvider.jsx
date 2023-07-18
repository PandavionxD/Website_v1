import { useMemo, useState } from "react";
import { DarkModeContext } from "./DarkContext";
import { ThemeProvider, createTheme } from "@mui/material";
import { useSnackbar } from "notistack";
import { useTheme } from "@emotion/react";

export const DarkProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  
  const { enqueueSnackbar } = useSnackbar();
  
  const openSnack = () => {
    enqueueSnackbar(`Tema Cambiado `, {
      variant: "info",
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
    });
  };

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
        openSnack();
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            light: "#757ce8",
            main: "#3f50b5",
            dark: "#002884",
            contrastText: "#fff",
          },
          secondary: {
            light: "#ff7961",
            main: "#f44336",
            dark: "#ba000d",
            contrastText: "#000",
          },
        },
        typography: {
          fontFamily: "raleway",
        },
      }),
    [mode]
  );

  return (
    <DarkModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </DarkModeContext.Provider>
  );
};
