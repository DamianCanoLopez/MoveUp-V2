import { Dispatch, SetStateAction, createContext, useState } from "react";

interface ThemeContext {
  theme: boolean;
  setTheme: Dispatch<SetStateAction<boolean>>;
}

const ThemeContext = createContext<ThemeContext>({
  theme: false,
  setTheme: () => {},
});

interface Props {
  children: JSX.Element;
}

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<boolean>(false);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
