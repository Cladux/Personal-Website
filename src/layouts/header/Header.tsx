import Button from "./Button/Button.tsx";
import styles from "./Header.module.scss";
import IconBox from "./IconBox/IconBox.tsx";

const Header = (): JSX.Element => {
  return (
    <>
      <header id="Home">
        <section className={styles.sectionLeft}>
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
          {/* <div className={styles.iconBoxes}>
            <IconBox setIcon="instagram" />
            <IconBox setIcon="git" />
            <IconBox setIcon="linkedIn" />
          </div> */}
        </section>
        <section className={styles.sectionRight}></section>
      </header>
    </>
  );
};

export default Header;
