import { useState } from "react";
import styles from "./Nav.module.scss";

const Navbar = (): JSX.Element => {
  const [active, setActive] = useState<number>(0);

  const activeClassHandle = (index: number) => {
    return active === index ? styles.active : "";
  };

  // - if you want more page create, just set <section id="NAME"> for that layout
  // - add here "NAME" just like other names you see here
  const menuItems = ["Home", "About Me", "Projects", "Contact"];

  return (
    <>
      <nav>
        <ul className={styles.navList}>
          {menuItems.map((value: string, index: number) => (
            <li
              onClick={() => setActive(index)}
              className={activeClassHandle(index)}
              key={index}
            >
              <a href={"#" + value}>{value}</a>
            </li>
          ))}
        </ul>

        <ul className={styles.navCircles}>
          {menuItems.map((value: string, index: number) => (
            <li
              onClick={() => setActive(index)}
              className={activeClassHandle(index)}
              key={index}
            >
              <a href={"#" + value}></a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
