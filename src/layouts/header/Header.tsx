import styles from "./Header.module.scss";

const Header = () => {
  return (
    <>
      <header id="Home">
        <section className={styles.sectionLeft}></section>
        <section className={styles.sectionRight}></section>
      </header>
    </>
  );
};

export default Header;
