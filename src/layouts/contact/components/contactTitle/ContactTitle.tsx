import styles from "./ContactTitle.module.scss";
import Icons from "../../../../icons";
type Props = {
  setIcon: keyof typeof Icons;
  setTitle: string;
};

const ContactTitle = ({ setIcon, setTitle }: Props) => {
  const Icon = Icons[setIcon];
  return (
    <>
      <div className={styles.titleBox}>
        <i>
          <Icon />
        </i>
        <p>{setTitle}</p>
      </div>
    </>
  );
};

export default ContactTitle;
