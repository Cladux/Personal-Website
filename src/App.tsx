import "./App.scss";
import Nav from "./components/nav/Nav";
import AboutMe from "./layouts/aboutMe/AboutMe";
import Header from "./layouts/header/Header";

const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <AboutMe />
    </>
  );
};

export default App;
