import { useRef } from "react";
import Header from "../Layout/Header";
import Introduction from "../components/Introduction";
import Biography from "../components/Biography";
import Education from "../components/Education";
import Expertise from "../components/Expertise";
import Experience from "../components/Experience";
import Portfolio from "../components/Portfolio";
import Socials from "../components/Socials";
import Contact from "../components/Contact";
import Footer from "../Layout/Footer";

const Home = () => {
  const experienceRef = useRef();
  const portfolioRef = useRef();
  const expertiseRef = useRef();
  const educationRef = useRef();
  const contactRef = useRef();

  return (
    <>
      <Header
        portfolioRef={portfolioRef}
        experienceRef={experienceRef}
        contactRef={contactRef}
        educationRef={educationRef}
      />
      <Introduction />
      <Biography />
      <hr ref={portfolioRef} />
      <Portfolio />
      <hr ref={expertiseRef} />
      <Expertise />
      <hr ref={educationRef} />
      <Education />
      <hr ref={experienceRef} />
      <Experience />
      <hr ref={contactRef} />
      <Contact />
      <hr />
      <Socials />
      <Footer />
    </>
  );
};

export default Home;
