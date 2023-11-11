import styles from "./Service.module.scss";
import Icons from "../../../icons";

type Props = {
  setIcon: string;
  title: string;
};

const Servic = ({ setIcon, title }: Props): JSX.Element => {
  const Icon = Icons[setIcon];
  return (
    <>
      <div className={styles.serviceBox}>
        <Icon />
        <p>{title}</p>
      </div>
    </>
  );
};

export default Servic;
