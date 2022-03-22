import { BrowserRouter } from "react-router-dom";
import "./App.css";

import AboutMe from "./components/AboutMe/AboutMe";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Intro";
import Projects from "./components/MyWork/projects";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import Progress from "./components/SkillBars/progress";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="homepage">
          <Navbar />
          <Home />
        </div>

        <AboutMe />
        <Services />
        <Progress />
        <Projects />
        <ContactMe />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
