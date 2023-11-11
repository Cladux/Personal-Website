import styles from "./AboutMe.module.scss";
import Icons from "../../icons";
import Service from "./components/service/Service";

const AboutMe = (): JSX.Element => {
  const DotIconLeft = Icons["dotsLeft"];
  const DotIconTop = Icons["dotsTop"];
  return (
    <>
      <div id="About Me" className={styles.aboutMe}>
        <section className={styles.sectionOne}>
          <div className={styles.bgIcons}>
            <div className={styles.bgText}>ABOUT</div>
            <div className={styles.bgIcon}>
              <DotIconLeft />
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
            <h3>My Services</h3>
            <div className={styles.serviceSection}>
              <Service setIcon="bxCodeBlock" title="Web Development" />
              <Service setIcon="bxLayout" title="UI Design" />
              <Service setIcon="bxMobile" title="Mobile Development" />
              <Service setIcon="bxRocket" title="Social Media Design" />
            </div>
          </div>
        </section>
        <section className={styles.sectionThree}>
          <div className={styles.bgIcons}>
            <div className={styles.bgText}>UT ME</div>
            <div className={styles.bgIcon}>
              <DotIconTop />
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.leftSection}>
              <h4>Education</h4>
            </div>
            <div className={styles.rightSection}>
              <h4>Jobs</h4>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutMe;
