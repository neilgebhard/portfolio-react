import MailIcon from "../assets/MailIcon";
import GithubIcon from "../assets/GithubIcon";
import LinkedInIcon from "../assets/LinkedInIcon";
import styles from "./Socials.module.css";

const Socials = () => {
  return (
    <div>
      <ul className={styles.flex}>
        <li>
          <a href="mailto:neilgebhard@gmail.com">
            <MailIcon height={30} /> Email
          </a>
        </li>
        <li>
          <a
            href="https://github.com/neilgebhard"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon height={30} /> Github
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/neilgebhard/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon height={30} /> LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
