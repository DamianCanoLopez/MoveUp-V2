import { createContext, useState } from "react";

const ThemeContext = createContext<boolean>(true);

interface Props {
  children: JSX.Element;
}

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState(false);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
