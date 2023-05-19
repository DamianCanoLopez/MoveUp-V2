import { useContext } from "react";
import ThemeContext from "../../context/context-theme";

interface Props {
  className: string;
  children: JSX.Element;
  props?: any;
}

const SPAN = ({ className, children, ...props }: Props) => {
  const themeState = useContext(ThemeContext);

  return (
    <span
      className={`${themeState.theme ? "text-white" : ""} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default SPAN;
