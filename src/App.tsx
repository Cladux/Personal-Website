import "./App.scss";
import Navbar from "./layouts/nav/Navbar";
import AboutMe from "./layouts/aboutMe/AboutMe";
import Header from "./layouts/header/Header";
import Projects from "./layouts/Projects/Projects";
import Contact from "./layouts/contact/Contact";

const App = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
