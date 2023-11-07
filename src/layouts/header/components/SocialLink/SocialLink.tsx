import styles from "./SocialLink.module.scss";
import Icons from "../../../../icons";

type Props = {
  setIcon: keyof typeof Icons;
  setLink: string;
};

const IconBox = ({ setIcon, setLink }: Props): JSX.Element => {
  const Icon = Icons[setIcon];
  return (
    <>
      <div className={styles.iconBox}>
        <a href={setLink} target="_blank">
          <Icon />
        </a>
      </div>
    </>
  );
};

export default IconBox;
