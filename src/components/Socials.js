import MailIcon from "../assets/MailIcon";
import GithubIcon from "../assets/GithubIcon";
import LinkedInIcon from "../assets/LinkedInIcon";
import styles from "./Socials.module.css";

const Socials = () => {
  return (
    <div>
      <div className={styles.heading}>Links</div>
      <ul className={styles.grid}>
        <li>
          <a href="mailto:neilgebhard@gmail.com"><MailIcon height={40} /> Email</a>
        </li>
        <li>
          <a href="https://github.com/neilgebhard"><GithubIcon height={40} /> Github</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/neilgebhard/"><LinkedInIcon height={40} /> LinkedIn</a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
