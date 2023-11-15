import { useState, useEffect } from "react";
import styles from "./Projects.module.scss";
import Card from "./components/Card";

type Repos = {
  id: number;
  name: string;
  svn_url: string;
  owner: {
    avatar_url: string;
    type: string;
  };
};

const Projects = (): JSX.Element => {
  const [repos, setRepos] = useState<Repos[]>([]);

  //get github api on page loaded
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
                <Card
                  key={id}
                  imgUrl={repo.owner.avatar_url}
                  imgAlt={repo.owner.type}
                  title={repo.name}
                  link={repo.svn_url}
                  livePreview={repo.svn_url}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
