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
      <footer>© 2023 Seyed Soroush Sharifi All rights reserved</footer>
    </>
  );
};

export default App;
