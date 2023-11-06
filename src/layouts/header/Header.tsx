import Button from "./Button/Button.tsx";
import styles from "./Header.module.scss";
import SocialLink from "./SocialLink/SocialLink.tsx";

const Header = (): JSX.Element => {
  return (
    <>
      <header id="Home">
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
              <a href="">
                <SocialLink setIcon="instagram" />
              </a>
              <a href="">
                <SocialLink setIcon="github" />
              </a>
              <a href="">
                <SocialLink setIcon="linkedIn" />
              </a>
            </div>
          </div>
        </section>
        <section className={styles.sectionRight}></section>
      </header>
    </>
  );
};

export default Header;
