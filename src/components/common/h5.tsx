import { useContext } from "react";
import ThemeContext from "../../context/context-theme";

const H5 = ({ className, children, ...props }) => {
  const themeState = useContext(ThemeContext);

  return (
    <h5
      className={`h5 ${themeState.theme ? "text-white" : ""} ${className}`}
      {...props}
    >
      {children}
    </h5>
  );
};

export default H5;
