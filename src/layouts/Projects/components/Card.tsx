import styles from "./Card.module.scss";
import Icons from "../../../icons";
type Props = {
  username: string;
  repoName: string;
  imgAlt: string;
  title: string;
  livePreview: string;
};

const Card = ({
  username,
  repoName,
  imgAlt,
  title,
  livePreview,
}: Props): JSX.Element => {
  const IconUi = Icons["bxLayout"];
  return (
    <>
      <div className={styles.card}>
        <div className={styles.thumbnail}>
          <img
            src={`https://github-readme-stats.vercel.app/api/pin/?username=${username}&repo=${repoName}`}
            alt={imgAlt}
          />
        </div>
        <div className={styles.info}>
          <h4>{title}</h4>
          <p>
            <i>
              <IconUi />
            </i>
            Front-end Development
          </p>
          <div className={styles.links}>
            <a
              className={styles.livePreview}
              href={livePreview}
              target="_blank"
            >
              Live Preview
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
