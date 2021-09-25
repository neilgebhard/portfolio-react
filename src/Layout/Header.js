import GithubIcon from "../assets/GithubIcon";
import LinkedInIcon from "../assets/LinkedInIcon";
import Pulse from "react-reveal/Pulse";
import styles from "./Header.module.css";

const Header = (props) => {
  const portfolioClickHandler = () => {
    props.portfolioRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const experienceClickHandler = () => {
    props.experienceRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Pulse>
      <nav className={styles.nav}>
        <ul className={styles.links}>
          <li className={styles.link} onClick={portfolioClickHandler}>
            <a>PORTFOLIO</a>
          </li>
          <li className={styles.link} onClick={experienceClickHandler}>
            <a>EXPERIENCE</a>
          </li>
        </ul>
        <div className={styles.name}>
          <div>
            <strong>NEIL</strong>
          </div>
          <div>
            <strong>GEBHARD</strong>
          </div>
        </div>
        <ul className={`${styles.links} ${styles["flex-end"]}`}>
          <li className={styles.link}>
            <a href="https://github.com/neilgebhard">
              <GithubIcon height="32" />
            </a>
          </li>
          <li className={styles.link}>
            <a href="https://www.linkedin.com/in/neilgebhard/">
              <LinkedInIcon height="32" />
            </a>
          </li>
        </ul>
      </nav>
    </Pulse>
  );
};
export default Header;
