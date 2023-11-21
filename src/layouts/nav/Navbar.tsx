import { useState, useEffect, useMemo } from "react";
import styles from "./Nav.module.scss";

const Navbar = (): JSX.Element => {
  const [active, setActive] = useState<number>(0);
  const [bg, setBg] = useState<boolean>(false);

  // set active class when nav btn clicked
  const activeClassHandle = (index: number) => {
    return active === index ? styles.active : "";
  };

  // set bg to header nav when scrolled
  const activeBgHandle = () => {
    return bg ? styles.navBg : "";
  };

  //set more nav items here
  const menuItems: string[] = ["Home", "About Me", "Projects", "Contact"];

  //set page Y offset every layouts here
  const PAGE_POSITIONS: number[] = useMemo(() => [0, 900, 3500, 4500], []);

  // listening pageYoffset
  useEffect(() => {
    const handleScroll = () => {
      const position = Math.round(window.pageYOffset);
      if (position >= 5) {
        setBg(true);
      } else {
        setBg(false);
      }
      PAGE_POSITIONS.forEach((value, index) => {
        if (value <= position) {
          setActive(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [PAGE_POSITIONS, setActive]);

  return (
    <>
      <nav className={activeBgHandle()}>
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
