import styles from "./IconBox.module.scss";
import Icons from "../../../icons";

type Props = {
  setIcon: keyof typeof Icons;
};

const IconBox = ({ setIcon }: Props): JSX.Element => {
  const Icon = Icons[setIcon]();
  return (
    <>
      <div className={styles.iconBox}>
        <i>{Icon}</i>
      </div>
    </>
  );
};

export default IconBox;
