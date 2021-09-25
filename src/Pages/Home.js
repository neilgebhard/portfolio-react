import { useRef } from "react";
import Header from "../Layout/Header";
import Introduction from "../components/Introduction";
import Biography from "../components/Biography";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Portfolio from "../components/Portfolio";
import Socials from "../components/Socials";
import Contact from "../components/Contact";
import Footer from "../Layout/Footer";

const Home = () => {
  const experienceRef = useRef();
  const portfolioRef = useRef();
  return (
    <>
      <Header portfolioRef={portfolioRef} experienceRef={experienceRef} />
      <Introduction />
      <Biography />
      <hr />
      <Education />
      <hr />
      <Experience ref={experienceRef} />
      <hr />
      <Portfolio ref={portfolioRef} />
      <hr />
      <Socials />
      <hr />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
