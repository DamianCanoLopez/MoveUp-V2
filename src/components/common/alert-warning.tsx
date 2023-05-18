// import ThemeContext from "../../context/context-theme";
import ThemeContext from "@/context/context-theme";
import { useContext } from "react";

interface Props {
  className: string;
  otherProps: any;
  children: JSX.Element;
}

export default function AlertWarning({
  className,
  otherProps,
  children,
}: Props): JSX.Element {
  const themeState = useContext(ThemeContext);
  return (
    <div
      role="alert"
      className={`alert alert-warning ${
        themeState.theme ? "text-warning bg-transparent" : ""
      } ${className}`}
      {...otherProps}
    >
      {children}
    </div>
  );
}
