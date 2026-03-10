import { createContext } from "react";
import type { theme } from "../types/theme";

type themeContextType = {
  theme: theme;
  setTheme: (theme: theme) => void;
};
const themeContext = createContext<themeContextType>({
  theme: "light" as theme,
  setTheme: () => {},
});

export default themeContext;
