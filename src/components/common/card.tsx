import { useContext } from "react";
import ThemeContext from "../../context/context-theme";

interface Props {
  className: string;
  children: React.ReactNode;
  props?: any;
}

const Card = ({ className, children, ...props }: Props) => {
  const themeState = useContext(ThemeContext);

  return (
    <div
      className={`card ${
        themeState.theme ? "border-secondary text-bg-dark" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
