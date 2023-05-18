import { useContext } from "react";
import ThemeContext from "../../context/context-theme";

const LABEL = ({ className, children, ...props }) => {
  const themeState = useContext(ThemeContext);

  return (
    <label
      className={`form-label ${
        themeState.theme ? "text-white" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </label>
  );
};

export default LABEL;
