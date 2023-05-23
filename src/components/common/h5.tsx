import React, { useContext } from "react";
import ThemeContext from "../../context/context-theme";

interface Props {
  className: string;
  children: React.ReactNode;
}

const H5 = ({ className, children }: Props) => {
  const themeState = useContext(ThemeContext);

  return (
    <h5 className={`h5 ${themeState.theme ? "text-white" : ""} ${className}`}>
      {children}
    </h5>
  );
};

export default H5;
