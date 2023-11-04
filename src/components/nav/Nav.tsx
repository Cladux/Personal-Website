import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#"></a>About Me
          </li>
          <li>
            <a href="#"></a>Projects
          </li>
          <li>
            <a href="#"></a>Contact
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
