import { useState, useEffect } from "react";
import styles from "./Projects.module.scss";
import Icons from "../../icons";
type Repos = {
  id: number;
  name: string;
  svn_url: string;
  owner: {
    avatar_url: string;
    type: string;
  };
};
// type Icons = keyof typeof Icons;

const Projects = (): JSX.Element => {
  const [repos, setRepos] = useState<Repos[]>([]);
  const IconUi = Icons["bxLayout"];
  const IconRight = Icons["arrowRight"];

  useEffect(() => {
    fetch("https://api.github.com/users/Cladux/repos")
      .then((res) => res.json())
      .then((data) => setRepos(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div id="Projects" className={styles.projects}>
        <div className={styles.container}>
          <h2>PROJECTS</h2>
          <div className={styles.sliderBox}>
            <div className={styles.slider}>
              {repos.map((repo, id) => (
                <div className={styles.card} key={id}>
                  <img src={repo.owner.avatar_url} alt={repo.owner.type} />
                  <h4>{repo.name}</h4>
                  <p>
                    <i>
                      <IconUi />
                    </i>
                    Front-end Development
                  </p>
                  <div className={styles.links}>
                    <a href={repo.svn_url}>
                      view code
                      <IconRight />
                    </a>
                    <a href="">Live Preview</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
