import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateScrollPosition } from "../../app/features/scrollPositionSlice";
import styles from "./Nav.module.scss";

const Navbar = (): JSX.Element => {
  const dispatch = useDispatch();
  const scrollPosition = useSelector((state) => state.scrollPosition);
  const [active, setActive] = useState<number>(0);

  const activeClassHandle = (index: number) => {
    return active === index ? styles.active : "";
  };

  // scroll positions for each section
  const sectionScrollPositions = [0, 800, 1600, 2400];

  useEffect(() => {
    const handleScroll = () => {
      // Dispatch the action with the current scroll position
      const position = Math.round(window.pageYOffset);
      dispatch(updateScrollPosition(position));

      // Determine the active section based on the current scroll position
      const activeSection = sectionScrollPositions.findIndex(
        (position, index) => {
          return (
            scrollPosition >= position &&
            (index === sectionScrollPositions.length - 1 ||
              scrollPosition < sectionScrollPositions[index + 1])
          );
        }
      );

      activeClassHandle(activeSection);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch, scrollPosition]); // Include dispatch and scrollPosition in the dependency array

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
