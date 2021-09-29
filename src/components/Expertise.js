import { forwardRef } from "react";
import styles from "./Expertise.module.css";

const Expertise = forwardRef((props, ref) => {
  return (
    <section className={styles.section} ref={ref}>
      <h1 className="heading">Expertise</h1>
      <div className={styles.grid}>
        <div>
          <h3>Languages</h3>
          <p>Javascript, HTML, CSS</p>
        </div>
        <div>
          <h3>Technologies</h3>
          <p>React, Node, Git, Visual Studio Code</p>
        </div>
        <div>
          <h3>Familiar with</h3>
          <p>
            Mobile{" "}
            <span className="text-secondary">
              (iOS w/ Swift, Android w/ Java),
            </span>{" "}
            Java, C++, AWS/DO, SQL, NoSQL, UNIX, REST, UX/UI, HTTP
          </p>
        </div>
      </div>
    </section>
  );
});

export default Expertise;
