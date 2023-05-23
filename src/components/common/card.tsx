import { useContext } from "react";
import ThemeContext from "../../context/context-theme";

interface Props {
  className: string;
  role: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Card = ({ className, role, children, onClick }: Props) => {
  const themeState = useContext(ThemeContext);

  return (
    <div
      className={`card ${
        themeState.theme ? "border-secondary text-bg-dark" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
