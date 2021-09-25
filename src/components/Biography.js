import styles from "./Biography.module.css";
import Pulse from "react-reveal/Pulse";
import profilePic from "../assets/profile-pic-1mb.jpg";

const Biography = () => {
  return (
    <Pulse>
      <section className={styles.details}>
        <ul className={styles["column-left"]}>
          <li>
            <h6>BIOGRAPHY</h6>
            <p>I'm Neil, a web developer 🙂</p>
            <p>
              Passionate for coding! <span className={styles.emote}>❤️</span>
            </p>
            <p>
              Zeroed in on React <span className={styles.emote}>🎯</span>
            </p>
            <p>Frontend specialist</p>
            <p>Fullstack background</p>
          </li>
          <li>
            <h6>CONTACT</h6>
            <p>Saipan, MP</p>
            <p>neilgebhard@gmail.com</p>
          </li>
          <li>
            <h6>SERVICES</h6>
            <p>Web development</p>
            <p>React</p>
            <p>JavaScript</p>
            <p>HTML</p>
            <p>CSS</p>
          </li>
        </ul>
        <div className={styles["column-center"]}>
          <img src={profilePic} alt="Profile" />
        </div>
        <ul className={`${styles["column-right"]}`}>
          <li>
            <h6>YEARS OF EXPERIENCE</h6>
            <p className={styles["subtext-big"]}>5</p>
          </li>
          <li>
            <h6>TRAITS</h6>
            <p>ANALYTICAL</p>
            <p>ADAPTIVE</p>
            <p>INQUISITIVE</p>
            <p>TEAM PLAYER</p>
          </li>
          <li>
            <h6>EDUCATION</h6>
            <p>B.S. in Computer Science</p>
            <p>Portland State University</p>
            <p>Portland, OR</p>
          </li>
        </ul>
      </section>
    </Pulse>
  );
};

export default Biography;
