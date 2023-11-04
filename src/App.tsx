import "./App.scss";
import Navbar from "./components/nav/Navbar";
import AboutMe from "./layouts/aboutMe/AboutMe";
import Header from "./layouts/header/Header";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
    </>
  );
};

export default App;
