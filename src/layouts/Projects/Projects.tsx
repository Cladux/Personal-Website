import { useRef, useState, useEffect } from "react";
import styles from "./Projects.module.scss";
import Card from "./components/Card";

type Repos = {
  id: number;
  name: string;
  svn_url: string;
  owner: {
    login: string;
    type: string;
  };
};

const Projects = (): JSX.Element => {
  const [repos, setRepos] = useState<Repos[]>([]);
  const [width, setWidth] = useState<number>(0);
  const [sliderBtn, setSliderBtn] = useState<string[]>([""]);
  const [widthPosition, setWidthPosition] = useState<number>(0);
  const [active, setActive] = useState<number>(0);

  //get github api on page loaded
  useEffect(() => {
    fetch("https://api.github.com/users/Cladux/repos")
      .then((res) => res.json())
      .then((data) => setRepos(data))
      .catch((err) => console.log(err));
  }, []);

  //get slider Width when get api
  const sliderRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (sliderRef.current) {
      setWidth(sliderRef.current.scrollWidth);
    }
  }, [sliderRef, repos]);

  // set slider Buttons when set slider Width
  const UNIT: number = 1440;
  useEffect(() => {
    for (let i = UNIT; i < width; i += UNIT) {
      setSliderBtn((prevSliderBtn) => [...prevSliderBtn, ""]);
    }
  }, [width]);
  // slide the slider when btn clicked
  const sliderBtnHandler = (index: number) => {
    setWidthPosition(UNIT * index + 95 * index);
  };
  // set active class for slider btn
  const activeClassHandle = (index: number) => {
    return active === index ? styles.active : "";
  };

  return (
    <>
      <div id="Projects" className={styles.projects}>
        <div className={styles.container}>
          <h2>PROJECTS</h2>
          <div className={styles.sliderBox}>
            <div
              className={styles.slider}
              ref={sliderRef}
              style={{ transform: `translateX(-${widthPosition}px)` }}
            >
              {repos.map((repo, id) => (
                <Card
                  key={id}
                  username={repo.owner.login}
                  repoName={repo.name}
                  imgAlt={repo.owner.type}
                  title={repo.name}
                  link={repo.svn_url}
                  livePreview={repo.svn_url}
                />
              ))}
            </div>
          </div>
          <ul className={styles.sliderBtn}>
            {sliderBtn.map((value, index) => (
              <li
                key={index}
                onClick={() => {
                  sliderBtnHandler(index);
                  setActive(index);
                }}
                className={activeClassHandle(index)}
              >
                {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Projects;
