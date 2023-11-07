import { useState, useEffect, useMemo } from "react";
import styles from "./Nav.module.scss";

const Navbar = (): JSX.Element => {
  const [active, setActive] = useState<number>(0);

  const activeClassHandle = (index: number) => {
    return active === index ? styles.active : "";
  };

  //set more nav items here
  const menuItems: string[] = ["Home", "About Me", "Projects", "Contact"];

  //set page Y offset every layouts here
  const pagePosition: number[] = useMemo(() => [0, 900, 2000], []);

  // useEffect for listen pageYoffset
  useEffect(() => {
    const handleScroll = () => {
      const position = Math.round(window.pageYOffset);
      console.log(position);
      pagePosition.forEach((value, index) => {
        if (value <= position) {
          setActive(index);
          console.log("index:", index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pagePosition, setActive]);

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
