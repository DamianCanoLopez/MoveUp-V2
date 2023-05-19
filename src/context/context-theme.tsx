import { createContext, useState } from "react";

interface ThemeContextType {
  theme: boolean;
  setTheme?: any;
}

// type ThemeContextType = true | false;

const ThemeContext = createContext<any>(false);

interface Props {
  children: JSX.Element;
}

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<ThemeContextType>();

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
