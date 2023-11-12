import "./App.scss";
import Navbar from "./layouts/nav/Navbar";
import AboutMe from "./layouts/aboutMe/AboutMe";
import Header from "./layouts/header/Header";
import Projects from "./layouts/Projects/Projects";

const App = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <Projects />
    </>
  );
};

export default App;
