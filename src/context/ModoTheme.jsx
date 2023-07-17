import { useTheme } from "@emotion/react";
import { createContext } from "react";

export const ModoTHeme = createContext();

export const ModoProvider = ({ children }) => {
  const theme = useTheme();
  const modoApp = theme.palette.mode;
  return (
    <ModoTHeme.Provider value={{ modoApp }}>
      {children}
      </ModoTHeme.Provider>
  );
};
