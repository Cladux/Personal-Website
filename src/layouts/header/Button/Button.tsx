import styles from "./Button.module.scss";
import Icons from "../../../icons";
type Props = {
  setIcon: keyof typeof Icons;
  title: string;
  bgTransparent: boolean;
};

const Button = ({ setIcon, title, bgTransparent }: Props): JSX.Element => {
  const Icon = Icons[setIcon](); //FIX ME!
  return (
    <>
      <button className={bgTransparent ? styles.buttonTr : styles.button}>
        <i>{Icon}</i>
        <p>{title}</p>
      </button>
    </>
  );
};

export default Button;
