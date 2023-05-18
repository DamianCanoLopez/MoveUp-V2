import styles from "./styles.module.scss";

interface Props {
  nameProp: string | undefined;
  lastNameProp: string | undefined;
}

export default function Avatar({ nameProp, lastNameProp }: Props | undefined) {
  return (
    <span
      className={`${styles.container} fs-3 d-flex justify-content-center align-items-cente`}
    >
      {nameProp.at(0).toUpperCase()}
      {lastNameProp.at(0).toUpperCase()}
    </span>
  );
}
