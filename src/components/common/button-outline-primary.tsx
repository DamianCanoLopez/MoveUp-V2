import { useContext } from "react";
import ThemeContext from "@/context/context-theme";

interface Props {
  className: string;
  props: any;
  children: JSX.Element;
}

const Card = ({ className, children, ...props }: Props) => {
  const themeState = useContext(ThemeContext);

  return (
    <button
      className={`btn btn-outline-primary ${
        themeState.theme ? "btn-primary text-white" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Card;
