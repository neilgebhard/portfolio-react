import { forwardRef } from "react";
import styles from "./Experience.module.css";

const Experience = forwardRef((props, ref) => {
  return (
    <section className={styles.section} ref={ref}>
      <h1 className="heading">Experience</h1>
      <div className={styles.grid}>
        <div>
          <p>Supportland (2014-2017)</p>
          <p className="text-secondary">Portland, OR</p>
          <p>Frontend Dev</p>
          <p className="text-secondary">JavaScript, HTML, CSS</p>
          <p className="text-secondary">Backbone, Bootstrap, Node</p>
        </div>
        <div>
          <p>WelVu (2015-2016)</p>
          <p className="text-secondary">Portland, OR</p>
          <p>Fullstack Dev</p>
          <p className="text-secondary">JavaScript, HTML, CSS</p>
          <p className="text-secondary">PHP, SQL</p>
        </div>
        <div>
          <p>Pacific Amusement (2017-2021)</p>
          <p className="text-secondary">Saipan, MP</p>
          <p>Fullstack Dev</p>
          <p className="text-secondary">JavaScript, HTML, CSS</p>
          <p className="text-secondary">Vue, MongoDB, Express, Node</p>
        </div>
      </div>
    </section>
  );
});

export default Experience;
