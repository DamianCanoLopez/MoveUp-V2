import React, { useContext } from "react";
import ThemeContext from "../../context/context-theme";

interface Props {
  onChange: any;
  className?: string;
  value: string;
  children: JSX.Element | React.ReactNode;
  props?: any;
}

const SELECT = ({ onChange, className, value, children, ...props }: Props) => {
  const themeState = useContext(ThemeContext);

  return (
    <select
      className={`form-select ${
        themeState.theme ? "text-bg-dark dark-select" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </select>
  );
};

export default SELECT;
