import styles from "./Card.module.scss";
import Icons from "../../../icons";
type Props = {
  imgUrl: string;
  imgAlt: string;
  title: string;
  link: string;
  livePreview: string;
};

const Card = ({
  imgUrl,
  imgAlt,
  title,
  link,
  livePreview,
}: Props): JSX.Element => {
  const IconUi = Icons["bxLayout"];
  const IconRight = Icons["arrowRight"];
  return (
    <>
      <div className={styles.card}>
        <img src={imgUrl} alt={imgAlt} />
        <h4>{title}</h4>
        <p>
          <i>
            <IconUi />
          </i>
          Front-end Development
        </p>
        <div className={styles.links}>
          <a className={styles.viewCode} href={link}>
            view code
            <IconRight />
          </a>
          <a className={styles.livePreview} href={livePreview}>
            Live Preview
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
