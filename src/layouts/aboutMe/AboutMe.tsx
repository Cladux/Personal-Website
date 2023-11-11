import styles from "./AboutMe.module.scss";
import Icons from "../../icons";

const AboutMe = (): JSX.Element => {
  const DotIcon = Icons["dots"];
  return (
    <>
      <div id="About Me" className={styles.aboutMe}>
        <section className={styles.sectionOne}>
          <div className={styles.bgIcons}>
            <div className={styles.bgText}>ABOUT</div>
            <div className={styles.bgIcon}>
              <DotIcon />
            </div>
          </div>
          <div className={styles.container}>
            <article>
              <h2>ABOUT ME</h2>
              <p>
                I'm <span>Soroush sharifi</span>, I'm <span>30</span> years old
                and I live in <span>Hamedan, Iran</span>.{" "}
                <span>Front-end developer</span>
                and <span>UI Designer</span> , I'm passionate about interfaces,
                from their creation to development. I like to learn more and
                more about the area, challenges that take me out of my comfort
                zone are the best.
              </p>
              <p>
                I have prototyped and developed <span>Landing Pages</span>,{" "}
                <span>Sites</span>, <span>E-commerces</span>,{" "}
                <span>E-mails Marketing</span>, <span>Apps</span> and{" "}
                <span>Programs</span> .
              </p>
            </article>
          </div>
        </section>
        <section className={styles.sectionTow}>
          <div className={styles.container}>
            <h2>My Services</h2>
          </div>
        </section>
        <section className={styles.sectionThree}></section>
      </div>
    </>
  );
};

export default AboutMe;
