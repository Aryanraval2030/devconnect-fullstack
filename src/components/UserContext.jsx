import { createContext, useState } from "react";

export const UserContext = createContext();

function themeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggle = () => {
    theme == "light" ? "dark" : "light";
  };
  return (
    <UserContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </UserContext.Provider>
  );
}

export default themeProvider;
