import Link from "next/link";

interface Props {
  text: string;
  className: string;
  to: string;
  otherProps?: any;
}

const ButtonLink = ({ text, className, to, ...otherProps }: Props) => {
  return (
    <Link href={to}>
      <button className={className} {...otherProps}>
        {text}
      </button>
    </Link>
  );
};

export default ButtonLink;
