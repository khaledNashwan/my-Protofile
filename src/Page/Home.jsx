import Hero from '../components/Home/Hero';
import ButtonTop from "../components/Model/ButtonTop";
import Footer from "../components/Footer";

import About from "./About";
import Contact from "./Contact";
import Project from "./Project";
import Skills from "./Skills";

const Home = () => {

  return (
   <>
          <Hero  />
          <About />
          <Skills />
          <Project />
            <Contact />
            <Footer />
          <ButtonTop />
    </>
  );
}

export default Home