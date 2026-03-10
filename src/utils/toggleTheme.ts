import type { theme } from "../types/theme";

const toggleTheme = ({
  themeValue, // The value we want
  setTheme, // The set function from useTheme()
}: {
  themeValue: theme;
  setTheme: any;
}) => {
  setTheme(themeValue);
};

export default toggleTheme;
