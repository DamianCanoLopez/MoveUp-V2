import React, { useContext } from "react";
import ThemeContext from "../../context/context-theme";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const P = ({ className, children }: Props) => {
  const themeState = useContext(ThemeContext);

  return (
    <p className={`${themeState.theme ? "text-white" : ""} ${className}`}>
      {children}
    </p>
  );
};

export default P;
