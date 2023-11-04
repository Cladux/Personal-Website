import { useEffect, useState } from "react";
import styles from "./Nav.module.scss";

const Navbar = () => {
  const [active, setActive] = useState<string>("Home");

  return (
    <>
      <nav>
        <ul className={styles.navList}>
          <li
            onClick={() => setActive("Home")}
            className={active === "Home" ? styles.active : ""}
          >
            <a href="#Home">Home</a>
          </li>
          <li
            onClick={() => setActive("AboutMe")}
            className={active === "AboutMe" ? styles.active : ""}
          >
            <a href="#AboutMe">About Me</a>
          </li>
          <li
            onClick={() => setActive("Projects")}
            className={active === "Projects" ? styles.active : ""}
          >
            <a href="#Projects">Projects</a>
          </li>
          <li
            onClick={() => setActive("Contact")}
            className={active === "Contact" ? styles.active : ""}
          >
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
