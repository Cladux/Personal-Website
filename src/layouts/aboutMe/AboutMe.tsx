import styles from "./AboutMe.module.scss";

const AboutMe = (): JSX.Element => {
  return (
    <>
      <section
        id="About Me"
        className={styles.aboutMe}
        onClick={(e) => console.log(e)}
      >
        asdf
      </section>
    </>
  );
};

export default AboutMe;
