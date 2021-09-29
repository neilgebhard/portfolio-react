import GithubIcon from "../assets/GithubIcon";
import LinkedInIcon from "../assets/LinkedInIcon";
import MailIcon from "../assets/MailIcon";
import Pulse from "react-reveal/Pulse";
import styles from "./Header.module.css";

const Header = (props) => {
  const portfolioClickHandler = () => {
    props.portfolioRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const educationClickHandler = () => {
    props.educationRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const experienceClickHandler = () => {
    props.experienceRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const contactClickHandler = () => {
    props.contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Pulse>
      <nav className={styles.nav}>
        <ul className={styles.links}>
          <li className={styles.link} onClick={portfolioClickHandler}>
            <button className={styles.button}>PORTFOLIO</button>
          </li>
          <li className={styles.link} onClick={educationClickHandler}>
            <button className={styles.button}>EDUCATION</button>
          </li>
          <li className={styles.link} onClick={experienceClickHandler}>
            <button className={styles.button}>EXPERIENCE</button>
          </li>
          <li className={styles.link} onClick={contactClickHandler}>
            <button className={styles.button}>CONTACT</button>
          </li>
        </ul>
        <ul className={`${styles.links} ${styles["flex-end"]}`}>
          <li className={styles.link}>
            <a href="mailto:neilgebhard@gmail.com">
              <MailIcon height="32" />
            </a>
          </li>
          <li className={styles.link}>
            <a
              href="https://github.com/neilgebhard"
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon height="32" />
            </a>
          </li>
          <li className={styles.link}>
            <a
              href="https://www.linkedin.com/in/neilgebhard/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon height="32" />
            </a>
          </li>
        </ul>
      </nav>
    </Pulse>
  );
};
export default Header;
