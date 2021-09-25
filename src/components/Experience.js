import { forwardRef } from "react";
import styles from "./Experience.module.css";

const Experience = forwardRef((props, ref) => {
  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.heading}>Experience</div>
      <div className={styles.grid}>
        <div>
          <p className={styles.subheading}>Supportland (2014-2017)</p>
          <p className={styles["text-secondary"]}>Portland, OR</p>
          <p>Frontend Dev</p>
          <p className={styles["text-secondary"]}>JavaScript, HTML, CSS</p>
          <p className={styles["text-secondary"]}>Backbone, Bootstrap, Node</p>
        </div>
        <div>
          <p className={styles.subheading}>WelVu (2015-2016)</p>
          <p className={styles["text-secondary"]}>Portland, OR</p>
          <p>Fullstack Dev</p>
          <p className={styles["text-secondary"]}>JavaScript, HTML, CSS</p>
          <p className={styles["text-secondary"]}>PHP, SQL</p>
        </div>
        <div className={styles.subheading}>
          <p>Pacific Amusement (2017-2021)</p>
          <p className={styles["text-secondary"]}>Saipan, MP</p>
          <p>Fullstack Dev</p>
          <p className={styles["text-secondary"]}>JavaScript, HTML, CSS</p>
          <p className={styles["text-secondary"]}>
            Vue, MongoDB, Express, Node
          </p>
        </div>
      </div>
    </section>
  );
});

export default Experience;
