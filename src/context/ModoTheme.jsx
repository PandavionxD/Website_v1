import { useTheme } from "@emotion/react";
import { createContext } from "react";

export const ModoTHeme = createContext();
const theme = useTheme();
const modoApp = theme.palette.mode;

export const ModoProvider = ({ children }) => {
  return (
    <ModoTHeme.Provider value={{ modoApp }}>{chidlren}</ModoTHeme.Provider>
  );
};
