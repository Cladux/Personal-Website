import styles from "./SocialLink.module.scss";
import Icons from "../../../../icons";

type Props = {
  setIcon: keyof typeof Icons;
  setLink: string;
  setName: string;
};

const IconBox = ({ setIcon, setLink, setName }: Props): JSX.Element => {
  const Icon = Icons[setIcon];
  return (
    <>
      <div className={styles.iconBox}>
        <a href={setLink} target="_blank" className={setName}>
          <Icon />
        </a>
      </div>
    </>
  );
};

export default IconBox;
