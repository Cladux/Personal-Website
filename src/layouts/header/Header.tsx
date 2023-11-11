import Button from "./components/Button/Button.tsx";
import styles from "./Header.module.scss";
import SocialLink from "./components/SocialLink/SocialLink.tsx";

const Header = (): JSX.Element => {
  return (
    <>
      <header id="Home">
        <div className={styles.headerContainer}>
          <section className={styles.sectionLeft}>
            <div className={styles.container}>
              <h1>Soroush Sharifi</h1>
              <div className={styles.line}></div>
              <h2>Front-end Developer & UI designer</h2>
              <p>
                Front-end developer focused on creating Web and Mobile
                applications. I really like different projects that solve real
                problems.
              </p>
              <div className={styles.buttons}>
                <Button
                  setIcon="cloudDown"
                  title="Download CV"
                  bgTransparent={true}
                />
                <Button
                  setIcon="circleDown"
                  title="Download Profile"
                  bgTransparent={false}
                />
              </div>
              <div className={styles.socialBoxes}>
                <SocialLink
                  setIcon="instagram"
                  setLink="https://www.instagram.com/cladux_/"
                />
                <SocialLink
                  setIcon="github"
                  setLink="https://github.com/Cladux"
                />
                <SocialLink
                  setIcon="linkedIn"
                  setLink="https://www.linkedin.com/in/cladux/"
                />
              </div>
            </div>
          </section>
          <section className={styles.sectionRight}>
            <div className={styles.circle}></div>
          </section>
        </div>
      </header>
    </>
  );
};

export default Header;
