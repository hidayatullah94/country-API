import { createContext } from "react";

export const Theme = {
  dark: {
    background: "#1B262C",
    color: "#FBF8F1",
  },
  light: {
    background: "#FBF8F1",
    color: "rgb(37, 36, 36)",
  },
};

const ThemeContext = createContext(Theme.light);

export default ThemeContext;
