import Button from "./Button/Button.tsx";
import styles from "./Header.module.scss";

const Header = (): JSX.Element => {
  return (
    <>
      <header id="Home">
        <section className={styles.sectionLeft}>
          <div className="buttons">
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
        </section>
        <section className={styles.sectionRight}></section>
      </header>
    </>
  );
};

export default Header;
