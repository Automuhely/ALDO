import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setDarkTheme] = useState(true);

  const darkTheme = {
    backgroundColor: isDarkTheme ? "black" : "white",
    color: isDarkTheme ? "white" : "black",
    height: "30vh",
    bg: isDarkTheme ? "bg-secondary" : "bg-light",
    tableTheme: isDarkTheme ? "table-dark" : "table-light",
    bgVariant: isDarkTheme ? "dark" : "light",
    dataBsTheme: isDarkTheme ? "dark" : "light",
    footerBg: isDarkTheme ? "bg-dark" : "text-bg-light",
    footerText: isDarkTheme ? "text-secondary" : "text-dark",
  };

  function toggleTheme() {
    console.log("Toggle theme");
    setDarkTheme((prevIsDarkTheme) => !prevIsDarkTheme);
  }

  return (
    <ThemeContext.Provider value={{ toggleTheme, darkTheme, isDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default function useThemeContext() {
  return useContext(ThemeContext);
}
