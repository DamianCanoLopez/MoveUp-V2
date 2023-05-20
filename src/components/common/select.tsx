import { useContext } from "react";
import ThemeContext from "../../context/context-theme";

interface Props {
  className: string;
  children: JSX.Element;
  props?: any;
}

const SELECT = ({ className, children, ...props }: Props) => {
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
