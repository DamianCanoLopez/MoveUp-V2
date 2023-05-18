import styles from "./styles.module.scss";

interface Props {
  nameProp: string;
  lastNameProp: string;
}

export default function Avatar(props) {
  return (
    console.log(props);
    
    <span
      className={`${styles.container} fs-3 d-flex justify-content-center align-items-cente`}
    >
      {props.nameProp.at(0).toUpperCase()}
      {props.lastNameProp.at(0).toUpperCase()}
    </span>
  );
}
